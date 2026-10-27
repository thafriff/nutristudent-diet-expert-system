const fs = require('fs');

const inPath = './src/rules/list.txt';
const outPath = './src/rules/all_rules_if_then.txt';
if (!fs.existsSync(inPath)) {
  console.error(`Input file not found: ${inPath}`);
  process.exit(1);
}
const text = fs.readFileSync(inPath, 'utf8');
const lines = text.split(/\r?\n/);

const ruleLineRe = /^\s*(R[0-9A-Za-z_\-]+):\s*\((.*)\)\s*->\s*(.*)$/;

const normalizeCond = (s) => {
  if (!s) return '';
  let out = s.trim();
  // remove wrapping parentheses
  out = out.replace(/^\(+/,'').replace(/\)+$/,'');
  // replace JS object access prefixes
  out = out.replace(/\bresults\./g, '').replace(/\binputs\./g, '');
  // operators
  out = out.replace(/\s*&&\s*/g, ' AND ').replace(/\s*\|\|\s*/g, ' OR ');
  out = out.replace(/===/g, '==').replace(/==\=/g, '==').replace(/==/g, '==');
  // tighten spaces
  out = out.replace(/\s+/g, ' ').trim();
  return out;
};

const parseEffects = (raw) => {
  raw = raw.trim();
  // JSON style
  if (raw.startsWith('{') && raw.endsWith('}')) {
    try {
      const obj = JSON.parse(raw);
      return Object.entries(obj).map(([k,v]) => `${k} = '${String(v)}'`).join(' AND ');
    } catch (e) {
      // fallback to manual parsing
      const simple = raw.replace(/[{}\s\"]+/g,'').split(',').map(p => p.split(':')).map(([k,v]) => `${k} = '${(v||'').replace(/^'|'/g,'')}'`).join(' AND ');
      return simple;
    }
  }
  // key: 'value' style
  const kvPairs = raw.split(',').map(part => part.trim()).filter(Boolean);
  const out = kvPairs.map(p => {
    const m = p.match(/([A-Za-z0-9_]+)\s*[:=]\s*['\"]?([^'\"]+)['\"]?/);
    if (m) return `${m[1]} = '${m[2]}'`;
    return p;
  }).join(' AND ');
  return out;
};

let out = [];
let section = null;
for (const l of lines) {
  if (/## Base Rules/.test(l)) { section = 'base'; continue; }
  if (/## Generated Rules/.test(l)) { section = 'generated'; continue; }
  const m = l.match(ruleLineRe);
  if (m) {
    const id = m[1];
    const condRaw = m[2];
    const effRaw = m[3];
    const cond = normalizeCond(condRaw);
    const effects = parseEffects(effRaw);
    out.push(`IF ${cond} THEN ${effects}  # ${id}`);
  }
}

fs.writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`WROTE ${outPath}`);
