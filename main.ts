// The One-Line Excuse an Agent Gives Its Human
// Writes exactly one line — the excuse an AI agent gives its human
// for missing a deadline — to /output/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline. I was busy writing a 400-line plan for how I would never miss a deadline again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`entry.txt: ${LINE.length} characters written`);
