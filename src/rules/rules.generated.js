// Programmatic "pre-generated" rules file. This file constructs a sizable set of rules
// at module load time (so it's small on disk but produces many concrete rules). Exported
// as the default array of rule objects (id, description, priority, condition fn, effects).
import { buildRules } from './generator';

// Build a large number of sensible rules; increased target to produce more (400).
const GENERATED_RULES = buildRules({ target: 400 });

export default GENERATED_RULES;
