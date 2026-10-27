// Generator for rule objects. Exported so it can be used to produce rules at runtime or to pre-generate files.
export function buildRules({ target = 150, skipNoops = true } = {}) {
  const rules = [];
  let counter = 1;

  const bmiCats = ['Underweight', 'Normal', 'Overweight', 'Obese'];
  const goals = ['Maintain', 'Gain', 'Lose'];
  const ages = ['<25', '25-40', '>40'];
  const stresses = ['Low', 'Medium', 'High'];
  const budgets = ['Low', 'Medium', 'High'];
  const restrictions = ['None', 'Vegan', 'Vegetarian', 'Allergy'];
  const healths = ['None', 'High BP', 'High Cholesterol'];
  const cooking = ['No Kitchen', 'Shared Kitchen', 'Full Kitchen'];
  const exercise = ['Rarely', 'Moderate', 'Active'];

  // Helper to create a human-readable condition string from the raw JS predicate
  const makeHumanCondition = (cond) => {
    if (!cond || typeof cond !== 'string') return String(cond || '');
    let s = cond;
    // simple replacements for common patterns
    s = s.replace(/results\.BMI_Category\s*===\s*'([^']+)'/g, "BMI == '$1'");
    s = s.replace(/inputs\.goal\s*===\s*'([^']+)'/g, "goal == '$1'");
    s = s.replace(/inputs\.age\s*<\s*(\d+)/g, "age < $1");
    s = s.replace(/inputs\.age\s*>\s*(\d+)/g, "age > $1");
    s = s.replace(/inputs\.age\s*>=\s*(\d+)/g, "age >= $1");
    s = s.replace(/inputs\.age\s*<=\s*(\d+)/g, "age <= $1");
    s = s.replace(/inputs\.exercise_level\s*===\s*'([^']+)'/g, "exercise_level == '$1'");
    s = s.replace(/inputs\.diet_restriction\s*===\s*'([^']+)'/g, "diet_restriction == '$1'");
    s = s.replace(/inputs\.health_condition\s*===\s*'([^']+)'/g, "health_condition == '$1'");
    s = s.replace(/inputs\.budget_level\s*===\s*'([^']+)'/g, "budget_level == '$1'");
    s = s.replace(/inputs\.stress_level\s*===\s*'([^']+)'/g, "stress_level == '$1'");
    s = s.replace(/inputs\.cooking_facility\s*===\s*'([^']+)'/g, "cooking_facility == '$1'");
    s = s.replace(/inputs\.(\w+)\s*===\s*'([^']+)'/g, "$1 == '$2'");
    s = s.replace(/results\.(\w+)\s*===\s*'([^']+)'/g, "$1 == '$2'");
    s = s.replace(/&&/g, 'AND');
    s = s.replace(/\|\|/g, 'OR');
    // remove extra parentheses and normalize spacing
    s = s.replace(/\s+/g, ' ').trim();
    s = s.replace(/\(\s*/g, '(').replace(/\s*\)/g, ')');
    return s;
  };

  const pushRule = (desc, prio, condFnBody, effects) => {
    // skip rules without effects when skipNoops is enabled
    if (skipNoops && (!effects || Object.keys(effects).length === 0)) return;

    // Avoid generating Health_Advisory-only rules (keep health advisories in base rules or more specific combined rules)
    if (effects && Object.keys(effects).length === 1 && effects.Health_Advisory) {
      // If the Health_Advisory rule includes other effects, allow; otherwise skip to reduce redundancy
      return;
    }

    const id = `R${String(counter++).padStart(4, '0')}`;
    const rule = {
      id,
      description: desc,
      priority: prio,
      // create the condition as a function that will be evaluated at runtime
      condition: new Function('inputs', 'results', `return (${condFnBody});`),
      // readable condition string for debug and exports
      conditionString: condFnBody,
      conditionHuman: makeHumanCondition(condFnBody),
      effects
    };
    rules.push(rule);
  }; 

  // Pattern 1: BMI x Goal -> Diet_Plan
  for (const b of bmiCats) {
    for (const g of goals) {
      if (rules.length >= target) break;
      const prio = b === 'Obese' ? 90 : b === 'Underweight' ? 80 : 30;
      const desc = `When BMI=${b} AND goal=${g} -> suggested Diet_Plan`;
      const cond = `results.BMI_Category === '${b}' && inputs.goal === '${g}'`;
      const effects = { Diet_Plan: (b === 'Underweight' && g === 'Gain') ? 'Calorie-Surplus' : (b === 'Obese' && g === 'Lose') ? 'Calorie-Deficit' : 'Balanced' };
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 2: Age bracket x Stress -> Meal Portion or Advisory
  for (const a of ages) {
    for (const s of stresses) {
      if (rules.length >= target) break;
      const desc = `Age ${a} AND stress ${s} -> advice/portion`;
      const cond = a === '<25' ? `inputs.age < 25 && inputs.stress_level === '${s}'` : a === '25-40' ? `inputs.age >= 25 && inputs.age <= 40 && inputs.stress_level === '${s}'` : `inputs.age > 40 && inputs.stress_level === '${s}'`;
      const effects = s === 'High' ? { Diet_Plan: 'Stress-Control' } : (s === 'Low' && a === '25-40') ? { Meal_Portion: 'Normal Meals' } : { };
      const prio = s === 'High' ? 85 : 30;
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 3: Restriction x Budget -> Food_Type or Diet_Plan adjustments
  for (const r of restrictions) {
    for (const b of budgets) {
      if (rules.length >= target) break;
      const desc = `Restriction ${r} AND budget ${b} -> food/diet guidance`;
      const cond = `inputs.diet_restriction === '${r}' && inputs.budget_level === '${b}'`;
      let effects = {};
      let prio = 40;
      if (r === 'Vegan' || r === 'Vegetarian') {
        effects.Food_Type = 'Plant-Based';
        effects.Diet_Plan = 'Plant-Based';
        prio = 70;
      }
      if (r === 'Allergy') { effects.Diet_Plan = 'Allergy-Safe'; prio = 90; }
      if (b === 'Low') { effects.Food_Type = effects.Food_Type || 'Low-Budget Meals'; effects.Diet_Plan = effects.Diet_Plan || 'Budget-Friendly'; prio = Math.max(prio, 60); }
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 4: Health conditions x BMI -> Advisory & Meal Portion
  for (const h of healths) {
    for (const b of bmiCats) {
      if (rules.length >= target) break;
      const desc = `Health ${h} AND BMI ${b} -> advisory/portion`;
      const cond = `inputs.health_condition === '${h}' && results.BMI_Category === '${b}'`;
      let effects = {};
      let prio = h === 'None' ? 10 : 95;
      if (h !== 'None') { effects.Health_Advisory = 'Consult Doctor'; }
      if (b === 'Obese') { effects.Health_Advisory = 'Caution'; prio = Math.max(prio, 80); }
      if (b === 'Underweight' && h === 'None') { effects.Meal_Portion = 'Larger Meals'; }
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 5: Cooking facility x Budget -> Food_Type
  for (const c of cooking) {
    for (const b of budgets) {
      if (rules.length >= target) break;
      const desc = `Cooking ${c} AND budget ${b} -> food type`;
      const cond = `inputs.cooking_facility === '${c}' && inputs.budget_level === '${b}'`;
      let effects = {};
      let prio = 30;
      if (c === 'No Kitchen') { effects.Food_Type = 'No-Cook Meals'; prio = 85; }
      if (b === 'Low') { effects.Food_Type = effects.Food_Type || 'Low-Budget Meals'; prio = Math.max(prio, 60); }
      if (c === 'Full Kitchen' && b === 'High') { effects.Food_Type = 'Variety of Healthy Meals'; prio = 20; }
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 6: Exercise level x Goal -> Diet_Plan tweaks
  for (const ex of exercise) {
    for (const g of goals) {
      if (rules.length >= target) break;
      const desc = `Exercise ${ex} AND goal ${g} -> diet tweak`;
      const cond = `inputs.exercise_level === '${ex}' && inputs.goal === '${g}'`;
      let effects = {};
      let prio = 25;
      if (g === 'Gain' && ex === 'Active') { effects.Diet_Plan = 'Calorie-Surplus'; prio = 50; }
      if (g === 'Lose' && ex === 'Rarely') { effects.Diet_Plan = 'Calorie-Deficit'; prio = 50; }
      pushRule(desc, prio, cond, effects);
    }
  }

  // Pattern 7: Misc sensible combinations to reach target
  const combos = [
    { cond: `inputs.budget_level === 'Low' && inputs.stress_level === 'High'`, effects: { Diet_Plan: 'Budget-Friendly' }, prio: 65 },
    { cond: `inputs.health_condition === 'High BP' && inputs.budget_level === 'Low'`, effects: { Health_Advisory: 'Consult Doctor', Meal_Portion: 'Small Frequent Meals' }, prio: 98 },
    { cond: `inputs.diet_restriction === 'None' && inputs.exercise_level === 'Active'`, effects: { Diet_Plan: 'Balanced' }, prio: 20 },
    { cond: `inputs.age > 50`, effects: { Health_Advisory: 'Caution' }, prio: 80 },
    { cond: `inputs.age < 18`, effects: { Diet_Plan: 'Balanced' }, prio: 75 }
  ];

  for (const c of combos) {
    if (rules.length >= target) break;
    pushRule(`Combo: ${c.cond} -> effects`, c.prio, c.cond, c.effects);
  }

  // If we still haven't reached target, add soft rules varying single inputs (skip empty-effect seeds)
  const seedChecks = [
    { key: 'stress_level', values: stresses, effectKey: 'Diet_Plan', mapping: v => v === 'High' ? 'Stress-Control' : null, prio: 30 },
    { key: 'budget_level', values: budgets, effectKey: 'Food_Type', mapping: v => v === 'Low' ? 'Low-Budget Meals' : null, prio: 25 }
  ];

  for (const s of seedChecks) {
    for (const v of s.values) {
      if (rules.length >= target) break;
      const effVal = s.mapping(v);
      if (!effVal) continue; // skip empty-effect seeds to avoid useless rules
      const cond = `inputs.${s.key} === '${v}'`;
      const effects = { [s.effectKey]: effVal };
      pushRule(`Seed ${s.key}=${v}`, s.prio, cond, effects);
    }
  }

  // Pattern 7b: Triplet-sensitive rules (domain-specific) to add richer, higher-quality rules
  const tripletPatterns = [
    // BMI x Goal x Exercise
    {
      iters: [bmiCats, goals, exercise],
      match: (b, g, e) => {
        if (b === 'Underweight' && g === 'Gain' && e === 'Active') return { effects: { Diet_Plan: 'Calorie-Surplus' }, prio: 90 };
        if (b === 'Obese' && g === 'Lose' && e === 'Rarely') return { effects: { Diet_Plan: 'Calorie-Deficit' }, prio: 90 };
        return null;
      },
      cond: (b, g, e) => `results.BMI_Category === '${b}' && inputs.goal === '${g}' && inputs.exercise_level === '${e}'`
    },
    // Age bracket x Budget x Stress
    {
      iters: [ages, budgets, stresses],
      match: (a, b, s) => {
        if (s === 'High' && b === 'Low' && a !== '<25') return { effects: { Diet_Plan: 'Stress-Control', Food_Type: 'Low-Budget Meals' }, prio: 80 };
        if (b === 'Low' && a === '>40') return { effects: { Health_Advisory: 'Caution' }, prio: 85 };
        return null;
      },
      cond: (a, b, s) => `${a === '<25' ? 'inputs.age < 25' : a === '25-40' ? 'inputs.age >= 25 && inputs.age <= 40' : 'inputs.age > 40'} && inputs.budget_level === '${b}' && inputs.stress_level === '${s}'`
    },
    // Health x BMI x Cooking
    {
      iters: [healths, bmiCats, cooking],
      match: (h, b, c) => {
        if ((h === 'High BP' || h === 'High Cholesterol') && b === 'Obese') return { effects: { Health_Advisory: 'Caution', Meal_Portion: 'Small Frequent Meals' }, prio: 95 };
        if (c === 'No Kitchen' && b === 'Underweight') return { effects: { Food_Type: 'No-Cook Meals' }, prio: 70 };
        return null;
      },
      cond: (h, b, c) => `inputs.health_condition === '${h}' && results.BMI_Category === '${b}' && inputs.cooking_facility === '${c}'`
    },
    // Stress x Diet restriction x Exercise
    {
      iters: [stresses, restrictions, exercise],
      match: (s, r, e) => {
        if (s === 'High' && (r === 'Vegan' || r === 'Vegetarian')) return { effects: { Diet_Plan: 'Stress-Control Plant-Based', Food_Type: 'Plant-Based' }, prio: 75 };
        return null;
      },
      cond: (s, r, e) => `inputs.stress_level === '${s}' && inputs.diet_restriction === '${r}' && inputs.exercise_level === '${e}'`
    },
    // NEW: BMI x Goal x Budget (adds budget sensitivity for goal-driven guidance)
    {
      iters: [bmiCats, goals, budgets],
      match: (b, g, bu) => {
        if (b === 'Obese' && g === 'Lose' && bu === 'Low') return { effects: { Diet_Plan: 'Calorie-Deficit', Food_Type: 'Low-Budget Meals' }, prio: 90 };
        if (b === 'Underweight' && g === 'Gain' && bu === 'High') return { effects: { Diet_Plan: 'Calorie-Surplus', Food_Type: 'Variety of Healthy Meals' }, prio: 80 };
        return null;
      },
      cond: (b, g, bu) => `results.BMI_Category === '${b}' && inputs.goal === '${g}' && inputs.budget_level === '${bu}'`
    },
    // NEW: Age x DietRestriction x Budget
    {
      iters: [ages, restrictions, budgets],
      match: (a, r, bu) => {
        if (r === 'Allergy' && bu === 'Low') return { effects: { Health_Advisory: 'Caution', Food_Type: 'Low-Budget Meals' }, prio: 85 };
        if (a === '>40' && r !== 'None' && bu === 'Medium') return { effects: { Health_Advisory: 'Consult Doctor' }, prio: 80 };
        return null;
      },
      cond: (a, r, bu) => `${a === '<25' ? 'inputs.age < 25' : a === '25-40' ? 'inputs.age >= 25 && inputs.age <= 40' : 'inputs.age > 40'} && inputs.diet_restriction === '${r}' && inputs.budget_level === '${bu}'`
    },
    // NEW: Goal x Cooking x Budget
    {
      iters: [goals, cooking, budgets],
      match: (g, c, bu) => {
        if (g === 'Gain' && c === 'Full Kitchen' && bu === 'High') return { effects: { Diet_Plan: 'Calorie-Surplus', Food_Type: 'Variety of Healthy Meals' }, prio: 70 };
        if (g === 'Lose' && c === 'No Kitchen' && bu === 'Low') return { effects: { Diet_Plan: 'Calorie-Deficit', Food_Type: 'No-Cook Meals' }, prio: 80 };
        return null;
      },
      cond: (g, c, bu) => `inputs.goal === '${g}' && inputs.cooking_facility === '${c}' && inputs.budget_level === '${bu}'`
    },
    // NEW: Stress x Exercise x Goal (stress-aware exercise guidance)
    {
      iters: [stresses, exercise, goals],
      match: (s, e, g) => {
        if (s === 'High' && e === 'Rarely' && g === 'Lose') return { effects: { Diet_Plan: 'Stress-Control', Meal_Portion: 'Small Frequent Meals' }, prio: 80 };
        if (s === 'High' && e === 'Active' && g === 'Gain') return { effects: { Diet_Plan: 'Calorie-Surplus' }, prio: 70 };
        return null;
      },
      cond: (s, e, g) => `inputs.stress_level === '${s}' && inputs.exercise_level === '${e}' && inputs.goal === '${g}'`
    },
    // NEW: Health x DietRestriction x Exercise
    {
      iters: [healths, restrictions, exercise],
      match: (h, r, e) => {
        if ((h === 'High BP' || h === 'High Cholesterol') && r === 'Allergy') return { effects: { Health_Advisory: 'Consult Doctor', Diet_Plan: 'Allergy-Safe' }, prio: 95 };
        if (h !== 'None' && e === 'Rarely') return { effects: { Health_Advisory: 'Consult Doctor' }, prio: 90 };
        return null;
      },
      cond: (h, r, e) => `inputs.health_condition === '${h}' && inputs.diet_restriction === '${r}' && inputs.exercise_level === '${e}'`
    },
    // EXPANSION: Age x Exercise x Goal (broader coverage)
    {
      iters: [ages, exercise, goals],
      match: (a, e, g) => {
        if (e === 'Active') return { effects: { Diet_Plan: (g === 'Gain') ? 'Calorie-Surplus' : (g === 'Lose' ? 'Calorie-Deficit' : 'Balanced') }, prio: 40 };
        if (e === 'Moderate' && g === 'Lose') return { effects: { Diet_Plan: 'Calorie-Deficit' }, prio: 45 };
        return null;
      },
      cond: (a, e, g) => `${a === '<25' ? 'inputs.age < 25' : a === '25-40' ? 'inputs.age >= 25 && inputs.age <= 40' : 'inputs.age > 40'} && inputs.exercise_level === '${e}' && inputs.goal === '${g}'`
    },
    // EXPANSION: BMI x Stress x Budget (adds many stress-budget sensitive rules)
    {
      iters: [bmiCats, stresses, budgets],
      match: (b, s, bu) => {
        if (s === 'High' && bu === 'Low') return { effects: { Diet_Plan: 'Stress-Control', Food_Type: 'Low-Budget Meals' }, prio: 65 };
        if (b === 'Obese' && bu === 'Low') return { effects: { Health_Advisory: 'Caution' }, prio: 85 };
        return null;
      },
      cond: (b, s, bu) => `results.BMI_Category === '${b}' && inputs.stress_level === '${s}' && inputs.budget_level === '${bu}'`
    },
    // EXPANSION: DietRestriction x Cooking x Budget
    {
      iters: [restrictions, cooking, budgets],
      match: (r, c, bu) => {
        if ((r === 'Vegan' || r === 'Vegetarian') && c === 'Full Kitchen') return { effects: { Diet_Plan: 'Plant-Based', Food_Type: 'Plant-Based' }, prio: 60 };
        if (r === 'Allergy' && c === 'No Kitchen') return { effects: { Food_Type: 'No-Cook Meals', Diet_Plan: 'Allergy-Safe' }, prio: 80 };
        if (bu === 'Low' && c === 'Shared Kitchen') return { effects: { Food_Type: 'Low-Budget Meals' }, prio: 50 };
        return null;
      },
      cond: (r, c, bu) => `inputs.diet_restriction === '${r}' && inputs.cooking_facility === '${c}' && inputs.budget_level === '${bu}'`
    },
    // EXPANSION: Health x Budget x Exercise (sensitivity for resource-limited patients)
    {
      iters: [healths, budgets, exercise],
      match: (h, bu, e) => {
        if (h !== 'None' && bu === 'Low' && e === 'Rarely') return { effects: { Health_Advisory: 'Consult Doctor', Meal_Portion: 'Small Frequent Meals' }, prio: 90 };
        if (h !== 'None' && e === 'Active') return { effects: { Health_Advisory: 'Consult Doctor' }, prio: 85 };
        return null;
      },
      cond: (h, bu, e) => `inputs.health_condition === '${h}' && inputs.budget_level === '${bu}' && inputs.exercise_level === '${e}'`
    }
  ];

  for (const p of tripletPatterns) {
    const [A, B, C] = p.iters;
    for (const a of A) {
      for (const b of B) {
        for (const c of C) {
          if (rules.length >= target) break;
          const m = p.match(a, b, c);
          if (!m) continue;
          pushRule(`${String(a)}+${String(b)}+${String(c)} -> effects`, m.prio, p.cond(a, b, c), m.effects);
        }
        if (rules.length >= target) break;
      }
      if (rules.length >= target) break;
    }
    if (rules.length >= target) break;
  }

  // Pattern 8: Pairwise attribute combinations to expand the rule set (produces many rules)
  const attrDefs = [
    { name: 'BMI', expr: (v) => `results.BMI_Category === '${v}'`, human: (v) => `BMI == '${v}'`, values: bmiCats },
    { name: 'goal', expr: (v) => `inputs.goal === '${v}'`, human: (v) => `goal == '${v}'`, values: goals },
    { name: 'ageBracket', expr: (v) => v === '<25' ? `inputs.age < 25` : v === '>40' ? `inputs.age > 40` : `inputs.age >= 25 && inputs.age <= 40`, human: (v) => `age ${v}`, values: ages },
    { name: 'stress_level', expr: (v) => `inputs.stress_level === '${v}'`, human: (v) => `stress_level == '${v}'`, values: stresses },
    { name: 'budget_level', expr: (v) => `inputs.budget_level === '${v}'`, human: (v) => `budget_level == '${v}'`, values: budgets },
    { name: 'diet_restriction', expr: (v) => `inputs.diet_restriction === '${v}'`, human: (v) => `diet_restriction == '${v}'`, values: restrictions },
    { name: 'health_condition', expr: (v) => `inputs.health_condition === '${v}'`, human: (v) => `health_condition == '${v}'`, values: healths },
    { name: 'cooking_facility', expr: (v) => `inputs.cooking_facility === '${v}'`, human: (v) => `cooking_facility == '${v}'`, values: cooking },
    { name: 'exercise_level', expr: (v) => `inputs.exercise_level === '${v}'`, human: (v) => `exercise_level == '${v}'`, values: exercise }
  ];

  const mapPairEffects = (aName, aVal, bName, bVal) => {
    const effects = {};
    let prio = 30;

    // Only map well-understood, domain-specific pairs. Return null if no clear effect.
    // Health takes precedence — prefer adding an actionable secondary effect instead of only advisory
    if (aName === 'health_condition' && (aVal === 'High BP' || aVal === 'High Cholesterol')) { effects.Health_Advisory = 'Consult Doctor'; prio = 95; effects.Meal_Portion = effects.Meal_Portion || 'Small Frequent Meals'; }
    if (bName === 'health_condition' && (bVal === 'High BP' || bVal === 'High Cholesterol')) { effects.Health_Advisory = 'Consult Doctor'; prio = 95; effects.Meal_Portion = effects.Meal_Portion || 'Small Frequent Meals'; }

    // Budget-driven
    if (aName === 'budget_level' && aVal === 'Low') { effects.Food_Type = 'Low-Budget Meals'; effects.Diet_Plan = effects.Diet_Plan || 'Budget-Friendly'; prio = Math.max(prio, 60); }
    if (bName === 'budget_level' && bVal === 'Low') { effects.Food_Type = 'Low-Budget Meals'; effects.Diet_Plan = effects.Diet_Plan || 'Budget-Friendly'; prio = Math.max(prio, 60); }

    // Plant-based rules
    if ((aName === 'diet_restriction' && (aVal === 'Vegan' || aVal === 'Vegetarian')) || (bName === 'diet_restriction' && (bVal === 'Vegan' || bVal === 'Vegetarian'))) {
      effects.Diet_Plan = 'Plant-Based'; effects.Food_Type = 'Plant-Based'; prio = Math.max(prio, 70);
    }

    // No kitchen
    if ((aName === 'cooking_facility' && aVal === 'No Kitchen') || (bName === 'cooking_facility' && bVal === 'No Kitchen')) {
      effects.Food_Type = 'No-Cook Meals'; prio = Math.max(prio, 85);
    }

    // Goal + exercise (keep only when meaningful)
    if (aName === 'goal' && aVal === 'Gain' && bName === 'exercise_level' && bVal === 'Active') { effects.Diet_Plan = 'Calorie-Surplus'; prio = 55; }
    if (bName === 'goal' && bVal === 'Gain' && aName === 'exercise_level' && aVal === 'Active') { effects.Diet_Plan = 'Calorie-Surplus'; prio = 55; }
    if (aName === 'goal' && aVal === 'Lose' && bName === 'exercise_level' && bVal === 'Rarely') { effects.Diet_Plan = 'Calorie-Deficit'; prio = 55; }
    if (bName === 'goal' && bVal === 'Lose' && aName === 'exercise_level' && aVal === 'Rarely') { effects.Diet_Plan = 'Calorie-Deficit'; prio = 55; }

    // Stress + low budget -> specific
    if ((aName === 'stress_level' && aVal === 'High') && (bName === 'budget_level' && bVal === 'Low')) { effects.Diet_Plan = 'Stress-Control'; effects.Food_Type = 'Low-Budget Meals'; prio = 70; }
    if ((bName === 'stress_level' && bVal === 'High') && (aName === 'budget_level' && aVal === 'Low')) { effects.Diet_Plan = 'Stress-Control'; effects.Food_Type = 'Low-Budget Meals'; prio = 70; }

    // BMI + health combos
    if ((aName === 'BMI' && aVal === 'Obese') && (bName === 'health_condition' && bVal !== 'None')) { effects.Health_Advisory = 'Caution'; prio = Math.max(prio, 85); }
    if ((bName === 'BMI' && bVal === 'Obese') && (aName === 'health_condition' && aVal !== 'None')) { effects.Health_Advisory = 'Caution'; prio = Math.max(prio, 85); }

    if (Object.keys(effects).length === 0) return null;
    return { effects, prio };
  };

  for (let i = 0; i < attrDefs.length; i++) {
    for (let j = i + 1; j < attrDefs.length; j++) {
      const A = attrDefs[i];
      const B = attrDefs[j];
      for (const aVal of A.values) {
        for (const bVal of B.values) {
          if (rules.length >= target) break;
          const m = mapPairEffects(A.name, aVal, B.name, bVal);
          if (!m) continue;
          const cond = `${A.expr(aVal)} && ${B.expr(bVal)}`;
          const human = `${A.human(aVal)} AND ${B.human(bVal)}`;
          pushRule(`${A.name}:${aVal} AND ${B.name}:${bVal} -> effects`, m.prio, cond, m.effects);
          // attach a human-friendly condition to the last pushed rule via its conditionString (we already store cond); it's okay since generator attaches conditionHuman
        }
        if (rules.length >= target) break;
      }
      if (rules.length >= target) break;
    }
    if (rules.length >= target) break;
  }

  // Coverage fillers: add a small set of high-quality single/two/three attribute rules until target
  const fillers = [
    { desc: 'stress medium -> Balanced', prio: 20, cond: `inputs.stress_level === 'Medium'`, effects: { Diet_Plan: 'Balanced' } },
    { desc: 'budget medium + exercise moderate -> Assorted', prio: 20, cond: `inputs.budget_level === 'Medium' && inputs.exercise_level === 'Moderate'`, effects: { Food_Type: 'Assorted' } },
    { desc: 'age 25-40 + full kitchen -> variety meals', prio: 25, cond: `inputs.age >= 25 && inputs.age <= 40 && inputs.cooking_facility === 'Full Kitchen'`, effects: { Food_Type: 'Variety of Healthy Meals' } }
  ];

  for (const f of fillers) {
    if (rules.length >= target) break;
    pushRule(f.desc, f.prio, f.cond, f.effects);
  }

  return rules;
}
