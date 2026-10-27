## Context

A spec tree adopted by spec-ctx carries an ID token at the start of each requirement and scenario header. The OpenSpec CLI matched headers by normalized text in four places. They are the merge in `specs-apply.ts`, the delta checks and the scenario-loss check in `validator.ts`, and the `show --diff` lookup in `requirement-diff.ts`. All four need one rule, or validate and archive drift apart.

## Decisions

### One key function

`requirementMatchKey(name)` in `requirement-blocks.ts` normalizes the name, then returns `id:` plus the token when the name matches `^(REQ|SCN)-[A-Z]{2,6}-\d{3,}(-\d+)?` followed by whitespace or the end. Otherwise it returns the normalized name. The `id:` prefix keeps an ID key apart from a plain name that happens to be a bare token. The function is idempotent, so a key passed back in comes out unchanged.

`scenarioMatchKey(name)` applies the same rule to a scenario name after the `Scenario:` prefix is gone.

The pattern follows the ID scheme in spec-ctx (`decisions/ADR-002-id-scheme.md`). A one-letter capability code does not match. The scheme never issues one.

### Fold follows the key

`foldRequirementName` returns the ID key when the name has a token. The near-miss checks ("differs only in case or spacing", "fix the header to match it exactly") run on the fold. Two headers with one ID and two titles are the same requirement, so a retitle never fires a near-miss error.

### Scenario diff by key, names in messages

`diffScenarioNames` counts by `scenarioMatchKey` and reports the original names in `missing` and `added`. A message names what the author wrote.

### The MODIFIED header check compares keys

The merge checks that the first line of a MODIFIED block names the block it replaces. It compared names. It now compares keys, so a block with the same ID and a new title passes and its header text wins on rebuild.

### Same-ID RENAMED pair is a retitle

When FROM and TO fold to the same key, the pair retitles one requirement. The "target already exists" check and the "MODIFIED must reference the NEW header" check skip such a pair. A pair whose new title is already in the spec is a no-op, like other early-synced renames.

### Duplicate ID in the main spec is an error

The merge builds a key-to-block map of the main spec. Two blocks with one ID would collapse into one entry and the first would be lost without a word. The merge now throws `duplicate requirement ID REQ-X-001 in <cap>` before any operation runs.

### Validation reuses the same functions

The duplicate checks, cross-section checks, rename maps and the scenario-loss map in `validator.ts` call `requirementMatchKey`. The archive preflight calls the merge, so it agrees by construction. Messages show the ID token through `displayMatchKey`, never the `id:` prefix.

## Platform notes

No file paths change. Every test writes under a temp dir built with `path.join`.

## Rejected

- A config switch for ID matching. Headers without a token keep the old behavior, so the rule is safe to apply always.
- MODIFIED blocks for the existing archive and validate requirements. Those blocks would need every current scenario copied in. ADDED requirements state the new rule on their own.
