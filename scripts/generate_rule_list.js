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
  const generated = gen.buildRules({ target: 1000 });

  let out = '# Full Rule List\n\n';
  out += `## Base Rules (${base.length})\n\n`;
  base.forEach(b => out += `${b.id}: (${b.condition || 'n/a'}) -> ${b.effects || ''}\n`);
  out += `\n## Generated Rules (${generated.length})\n\n`;
  generated.forEach(r => out += `${r.id}: (${r.conditionString}) -> ${JSON.stringify(r.effects)}\n`);

  fs.writeFileSync('./src/rules/list.txt', out, 'utf8');
  console.log('WROTE src/rules/list.txt');
})();