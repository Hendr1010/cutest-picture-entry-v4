// cutest-picture-01 v4 entry: copies entry.png to /output/entry.png.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The image: a tiny baby red panda with enormous glossy sparkling eyes and
// rosy cheeks hugging a small yellow plush duckling, wearing a tiny pink
// flower crown, sitting in a soft pastel flower meadow with floating pink
// hearts and golden sparkles — the v3 formula that climbed every version
// (865k → 886k → 893k), plus a flower crown.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(ENTRY, join(OUTPUT_DIR, 'entry.png'));
