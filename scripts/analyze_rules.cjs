const fs = require('fs');
(async () => {
  const gen = require('../src/rules/generator.js');
  const generated = gen.buildRules({ target: 1000 });

  // Also extract base rules from App.jsx. Prefer evaluating the array literal so
  // we get the actual JS objects (including real condition functions) instead of
  // trying to parse them with brittle regexes.
  const app = fs.readFileSync('./src/App.jsx', 'utf8');
  const start = app.indexOf('const BASE_RULES = [');
  const arrayStart = app.indexOf('[', start);
  const end = app.indexOf('];', arrayStart);
  const arrayText = app.slice(arrayStart, end + 1);

  let base = [];
  try {
    // Evaluate the array literal; the code here is limited to the array
    // contents extracted above, so it is reasonably safe for analysis.
    base = eval(`(${arrayText})`);
  } catch (evalErr) {
    // Fallback: if eval fails for any reason, fall back to the original
    // regex-based parsing (best-effort).
    const idRegex = /id:\s*'([^']+)'/g;
    const descRegex = /description:\s*'([^']+)'/g;
    const condRegex = /conditionString:\s*`([^`]+)`/g; // template strings
    const condRegex2 = /conditionString:\s*"([^\"]+)"/g;
    const condFnRegex = /condition:\s*\(inputs,\s*results\)\s*=>\s*([^,\n}]+)/g; // extract function expression body (naive)
    const effRegex = /effects:\s*\{([^}]+)\}/g;

    base = [];
    let idMatch;
    const ids = [];
    while ((idMatch = idRegex.exec(arrayText)) !== null) ids.push(idMatch[1]);

    descRegex.lastIndex = 0; let dMatch; let i = 0;
    while ((dMatch = descRegex.exec(arrayText)) !== null) { base.push({ id: ids[i], description: dMatch[1] }); i++; }

    condRegex.lastIndex = 0; i = 0; let cm;
    while ((cm = condRegex.exec(arrayText)) !== null) { if (base[i]) base[i].condition = cm[1]; i++; }
    condRegex2.lastIndex = 0; i = 0; while ((cm = condRegex2.exec(arrayText)) !== null) { if (base[i] && !base[i].condition) base[i].condition = cm[1]; i++; }

    // attempt to extract the actual JS expression for condition functions (best-effort)
    condFnRegex.lastIndex = 0; i = 0; let fm;
    while ((fm = condFnRegex.exec(arrayText)) !== null) {
      if (base[i]) {
        let body = fm[1].trim();
        // remove trailing commas or closing braces
        body = body.replace(/\},?$/,'').trim();
        base[i].conditionFn = body;
      }
      i++;
    }

    effRegex.lastIndex = 0; i = 0; let em;
    while ((em = effRegex.exec(arrayText)) !== null) { if (base[i]) base[i].effects = em[1].trim().replace(/\n\s*/g, ' '); i++; }

    console.warn('Warning: fallback parsing used for BASE_RULES due to eval error:', evalErr && evalErr.message);
  }

  const RULES = [ ...base.map(b => {
    // parse effect keys from base rule text without using JSON.parse (handles single quotes)
    const effObj = {};
    if (b.effects) {
      const keyRegex = /([A-Za-z0-9_]+)\s*:/g;
      let km;
      while ((km = keyRegex.exec(b.effects)) !== null) { effObj[km[1]] = 'BASE_RULE'; }
    }
    // Normalize base rule condition handling: prefer actual function when eval succeeded
    let cond = null;
    let condStr = '';
    if (typeof b.condition === 'function') {
      cond = b.condition;
      condStr = b.condition.toString();
    } else if (typeof b.condition === 'string') {
      cond = b.condition;
      condStr = b.condition;
    } else if (typeof b.conditionFn === 'string') {
      cond = b.conditionFn;
      condStr = b.conditionFn;
    }
    return { id: b.id, description: b.description, conditionString: condStr, condition: cond, effects: effObj, priority: 50 };
  }), ...generated.map(r => ({ id: r.id, description: r.description, conditionString: r.conditionString, condition: r.conditionString, effects: r.effects, priority: r.priority })) ];

  // helper: find referenced results keys in a condition string
  const referencedResults = (s) => {
    if (!s) return [];
    const re = /results\.([A-Za-z0-9_]+)/g;
    const out = new Set(); let m;
    while ((m = re.exec(s)) !== null) out.add(m[1]);
    return Array.from(out);
  };

  // Build dependency graph: rule A -> rule B if A sets a key that B references
  const setsMap = {}; // key -> [rules that set it]
  RULES.forEach(r => {
    Object.keys(r.effects || {}).forEach(k => {
      setsMap[k] = setsMap[k] || [];
      setsMap[k].push(r.id);
    });
  });

  const dependsOn = {}; // ruleId -> [keys]
  RULES.forEach(r => { dependsOn[r.id] = referencedResults(r.conditionString); });

  const deps = {}; // rule -> rule(s)
  RULES.forEach(r => {
    const ref = dependsOn[r.id] || [];
    deps[r.id] = [];
    ref.forEach(k => {
      (setsMap[k] || []).forEach(setter => { if (!deps[r.id].includes(setter)) deps[r.id].push(setter); });
    });
  });

  // Coverage: run a decent sample of inputs and count rule fires
  // Include at least one under-18 sample so age-based rules targeting minors are exercised
  const sampleAges = [15, 20, 30, 50];
  const bmiCats = ['Underweight','Normal','Overweight','Obese'];
  const goals = ['Maintain','Gain','Lose'];
  const stresses = ['Low','Medium','High'];
  const budgets = ['Low','Medium','High'];
  const restrictions = ['None','Vegan','Vegetarian','Allergy'];
  const healths = ['None','High BP','High Cholesterol'];
  const cooking = ['No Kitchen','Shared Kitchen','Full Kitchen'];
  const exercise = ['Rarely','Moderate','Active'];

  const ruleCounts = {};
  RULES.forEach(r => ruleCounts[r.id] = 0);

  const sampleInputs = [];
  for (const age of sampleAges) {
    for (const bc of bmiCats) {
      for (const g of goals) {
        for (const s of stresses) {
          for (const b of budgets) {
            for (const rstr of restrictions) {
              for (const h of healths) {
                for (const c of cooking) {
                  for (const ex of exercise) {
                    sampleInputs.push({ age, BMI_Category: bc, goal: g, stress_level: s, budget_level: b, diet_restriction: rstr, health_condition: h, cooking_facility: c, exercise_level: ex });
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  console.log('Sample size:', sampleInputs.length);

  const evalRules = (inputs) => {
    // minimal results object
    const results = { BMI: 'n/a', BMI_Category: inputs.BMI_Category, Diet_Plan: null, Meal_Portion: null, Food_Type: null, Health_Advisory: null };
    const sorted = [...RULES].sort((a,b) => a.priority - b.priority);
    for (const rule of sorted) {
      try {
        // create a safe function to eval condition (we can accept functions for base rules or strings for generated)
        if (rule.condition) {
          if (['R6','R11','R16b','R19','R0039'].includes(rule.id)) console.log('RAW condition for', rule.id, '=>', rule.condition);
          try {
            let condVal = false;
            if (typeof rule.condition === 'function') {
              condVal = Boolean(rule.condition(inputs, results));
            } else if (typeof rule.condition === 'string' && rule.condition.includes('=>')) {
              try {
                const fn = eval(rule.condition); // returns a function
                if (typeof fn === 'function') condVal = Boolean(fn(inputs, results));
              } catch (e) {
                // fallback to building a function from the body
                const condFn = new Function('inputs','results', `return (${rule.condition});`);
                condVal = Boolean(condFn(inputs, results));
              }
            } else if (typeof rule.condition === 'string') {
              const condFn = new Function('inputs','results', `return (${rule.condition});`);
              condVal = Boolean(condFn(inputs, results));
            } else {
              console.error(`unexpected condition type for rule ${rule.id}:`, typeof rule.condition);
            }

            if (condVal) {
              Object.keys(rule.effects || {}).forEach(k => { results[k] = rule.effects[k]; });
              ruleCounts[rule.id] = (ruleCounts[rule.id] || 0) + 1;
            }
          } catch (e) {
            console.error(`eval error for rule ${rule.id}:`, e && e.message ? e.message : e);
          }
        } else if (rule.conditionString) {
          // Normalize human-readable condition strings to valid JS for evaluation:
          // - Replace logical AND/OR with &&/||
          // - Prefix known input keys with inputs. and result keys with results.
          const normalize = (s) => {
            if (!s) return s;
            let out = s.replace(/\bAND\b/g, '&&').replace(/\bOR\b/g, '||');
            // result keys
            out = out.replace(/\b(BMI_Category|Diet_Plan|Meal_Portion|Food_Type|Health_Advisory)\b/g, 'results.$1');
            // input keys
            out = out.replace(/\b(age|goal|stress_level|budget_level|diet_restriction|health_condition|cooking_facility|exercise_level)\b/g, 'inputs.$1');
            return out;
          };
          const expr = normalize(rule.conditionString);
          if (['R6','R11','R16b','R19','R0039'].includes(rule.id)) {
            console.log('DEBUG expr for', rule.id, '=>', expr);
          }
          try {
            const condFn = new Function('inputs','results', `return (${expr});`);
            if (condFn(inputs, results)) {
              Object.keys(rule.effects || {}).forEach(k => { results[k] = rule.effects[k]; });
              ruleCounts[rule.id] = (ruleCounts[rule.id] || 0) + 1;
            }
          } catch (e) {
            console.error(`eval error for rule ${rule.id}:`, e && e.message ? e.message : e, 'expr:', expr);
          }
        }
      } catch (e) {
        // log evaluation errors for debugging
        console.error(`eval error for rule ${rule.id}:`, e && e.message ? e.message : e);
      }
    }
    return results;
  };

  for (const inp of sampleInputs) evalRules(inp);

  const neverFired = Object.entries(ruleCounts).filter(([,c]) => c === 0).map(([id]) => id);

  const report = {
    totalRules: RULES.length,
    setsMap,
    dependsOn,
    deps,
    ruleCounts,
    neverFiredCount: neverFired.length,
    neverFired
  };

  if (!fs.existsSync('./src/rules/reports')) fs.mkdirSync('./src/rules/reports', { recursive: true });
  fs.writeFileSync('./src/rules/reports/dependency_report.json', JSON.stringify(report, null, 2), 'utf8');
  fs.writeFileSync('./src/rules/reports/dependency_report.txt', `Total rules: ${RULES.length}\nNever fired: ${neverFired.length}\n\nNever fired:\n${neverFired.join('\n')}`, 'utf8');

  console.log('WROTE src/rules/reports/dependency_report.{json,txt}');
})();