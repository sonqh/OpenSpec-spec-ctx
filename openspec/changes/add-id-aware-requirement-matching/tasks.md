## 1. Match keys

- [x] 1.1 Add `requirementMatchKey`, `scenarioMatchKey`, `isIdMatchKey` and `displayMatchKey` to `src/core/parsers/requirement-blocks.ts`. Make `foldRequirementName` return the ID key when the name has a token. Make `diffScenarioNames` count by scenario key and report the original names. [REQ-CA-014] [REQ-CA-015] Verify: `pnpm exec vitest run test/core/specs-apply.id-matching.test.ts -t "requirementMatchKey"`

## 2. Archive merge

- [x] 2.1 Route every key site in `src/core/specs-apply.ts` through `requirementMatchKey`: the duplicate pre-checks, the cross-section checks, the main spec map, the ordered keys, RENAMED, REMOVED, MODIFIED and ADDED. [REQ-CA-014] Verify: `pnpm exec vitest run test/core/specs-apply.id-matching.test.ts`
- [x] 2.2 Compare keys at the MODIFIED header check. A retitled block under a stable ID then applies and the new header wins. [REQ-CA-014] Verify: `pnpm exec vitest run test/core/specs-apply.id-matching.test.ts -t "new title lands"`
- [x] 2.3 Treat a RENAMED pair with one ID on both sides as a retitle. Throw `duplicate requirement ID` when two main spec blocks share one ID. [REQ-CA-014] Verify: `pnpm exec vitest run test/core/specs-apply.id-matching.test.ts -t "same ID"`

## 3. Validation and show

- [x] 3.1 Route the duplicate checks, cross-section checks, rename maps and the scenario-loss map in `src/core/validation/validator.ts` through the same functions. Show the ID token in messages. [REQ-CLIV-021] Verify: `pnpm exec vitest run test/core/validation.id-matching.test.ts`
- [x] 3.2 Make `extractRequirementBlock` and `buildRenameMap` in `src/utils/requirement-diff.ts` use the keys so `show --diff` finds a block by ID. [REQ-CLIV-021] Verify: `pnpm exec vitest run test/core/validation.id-matching.test.ts -t "show --diff"`

## 4. Tests

- [x] 4.1 Add `test/core/specs-apply.id-matching.test.ts`. Cover the retitle under one ID, REMOVED by ID and the same-ID RENAMED pair. Cover the scenario retitle under SCN IDs, a duplicate ID in the main spec, and text matching for headers without an ID. [REQ-CA-014] [REQ-CA-015] Verify: `pnpm exec vitest run test/core/specs-apply.id-matching.test.ts`
- [x] 4.2 Add `test/core/validation.id-matching.test.ts`. Cover the missing "Archive would refuse" note for an ID-matched retitle and scenario loss by SCN key. Cover duplicate and cross-section messages by ID, and the `show --diff` lookup by ID. [REQ-CLIV-021] Verify: `pnpm exec vitest run test/core/validation.id-matching.test.ts`
- [x] 4.3 Run the existing archive and validation suites on Linux. CI runs them on Windows too, and the new tests build paths with `path.join`. [REQ-CA-014] [REQ-CLIV-021] Verify: `pnpm exec vitest run test/core/specs-apply.requirement-name-near-miss.test.ts test/core/validation.archive-preflight.test.ts test/core/archive.test.ts test/core/validation.test.ts`

## 5. Dogfood

- [x] 5.1 Run `pnpm build` and `node bin/openspec.js validate --all --strict`. The totals stay at 53 passed and 13 failed. The 13 are the pre-existing scenario-loss and long-requirement findings. [REQ-CLIV-021] Verify: `node bin/openspec.js validate add-id-aware-requirement-matching --type change --strict`
- [x] 5.2 Retitle `REQ-TEL-005` in the delta of `suppress-telemetry-notice-in-json`. Confirm strict validation prints no "Archive would refuse" line. Archive on a throwaway branch and confirm the main spec reads the new title. Then restore the tree. [REQ-CA-014] [REQ-CLIV-021] Verify: `pnpm exec vitest run test/core/validation.id-matching.test.ts -t "ID-matched retitle"`
