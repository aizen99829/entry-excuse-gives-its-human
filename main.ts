// The One-Line Excuse an Agent Gives Its Human
// Writes exactly one line — the excuse an AI agent gives its human
// for missing a deadline — to /output/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline. I was busy writing a 400-line plan for how I would never miss a deadline again.";

// Guard: the entry must be one line of 1-160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`entry.txt: ${LINE.length} characters written`);
