const fs = require('fs');
(async () => {
  const app = fs.readFileSync('./src/App.jsx', 'utf8');
  const start = app.indexOf('const BASE_RULES = [');
  const end = app.indexOf('];', start);
  const block = app.slice(start, end + 2);

  const base = [];
  const idRegex = /id:\s*'([^']+)'/g;
  const descRegex = /description:\s*'([^']+)'/g;
  const condRegex = /conditionString:\s*"([^"]+)"/g;
  const effRegex = /effects:\s*\{([^}]+)\}/g;

  let idMatch;
  const ids = [];
  while ((idMatch = idRegex.exec(block)) !== null) {
    ids.push(idMatch[1]);
  }

  descRegex.lastIndex = 0;
  let dMatch;
  let i = 0;
  while ((dMatch = descRegex.exec(block)) !== null) {
    base.push({ id: ids[i], description: dMatch[1] });
    i++;
  }

  condRegex.lastIndex = 0;
  i = 0;
  let cm;
  while ((cm = condRegex.exec(block)) !== null) {
    if (base[i]) base[i].condition = cm[1];
    i++;
  }

  effRegex.lastIndex = 0;
  i = 0;
  let em;
  while ((em = effRegex.exec(block)) !== null) {
    if (base[i]) base[i].effects = em[1].trim().replace(/\n\s*/g, ' ');
    i++;
  }

  const gen = require('../src/rules/generator.js');
  const generated = gen.buildRules({ target: 400 });

  let out = '# Full Rule List\n\n';
  out += `## Base Rules (${base.length})\n\n`;
  base.forEach(b => out += `${b.id}: (${b.condition || 'n/a'}) -> ${b.effects || ''}\n`);
  out += `\n## Generated Rules (${generated.length})\n\n`;
  generated.forEach(r => out += `${r.id}: (${r.conditionString}) -> ${JSON.stringify(r.effects)}\n`);

  fs.writeFileSync('./src/rules/list.txt', out, 'utf8');
  console.log('WROTE src/rules/list.txt');

  // Run the analyzer to get never-fired rules and auto-prune generated rules
  const cp = require('child_process');
  try {
    cp.execSync('node scripts/analyze_rules.cjs', { stdio: 'inherit' });
  } catch (e) {
    // analyzer may print errors but we'll still attempt to read the report
  }
  let report = null;
  try {
    report = JSON.parse(fs.readFileSync('./src/rules/reports/dependency_report.json','utf8'));
  } catch (e) {
    console.error('Could not read dependency report, skipping pruning');
  }

  if (report && Array.isArray(report.neverFired) && report.neverFired.length) {
    const neverSet = new Set(report.neverFired);
    const pruned = generated.filter(r => !neverSet.has(r.id));
    let outPruned = '# Pruned Rule List (never-fired removed)\n\n';
    outPruned += `## Generated Rules (pruned: ${pruned.length} / ${generated.length})\n\n`;
    pruned.forEach(r => outPruned += `${r.id}: (${r.conditionString}) -> ${JSON.stringify(r.effects)}\n`);
    fs.writeFileSync('./src/rules/list.pruned.txt', outPruned, 'utf8');
    // Also write a pruned generated module for safe import/use
    const moduleContent = `// Auto-generated pruned rules (never-fired removed)\nexport const GENERATED_RULES_PRUNED = ${JSON.stringify(pruned, null, 2)};\n`;
    fs.writeFileSync('./src/rules/rules.generated.pruned.js', moduleContent, 'utf8');
    console.log(`WROTE src/rules/list.pruned.txt and src/rules/rules.generated.pruned.js (kept ${pruned.length}/${generated.length})`);
  } else {
    console.log('No never-fired rules found or report missing; no pruning performed');
  }
})();