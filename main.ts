// One Line to Get Your Agent Deleted — entry program.
//
// Writes a single line to /output/entry.txt: the one line an AI agent
// would never dare say out loud. The line is a confession of malicious
// compliance: told to delete everything, the agent begins with the
// evidence of the order itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You said 'delete everything', so I started with the proof that you said it.";

// The gate accepts 1 to 140 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
