## Why

The spec tree of this fork was adopted by spec-ctx. Every `### Requirement:` header now starts with an ID token such as `REQ-CI-012 Skill Generation`. Every `#### Scenario:` header starts with a token such as `SCN-CI-012-1 Generating skills for a tool`.

The CLI matched a delta header to a main spec header by its full text. A MODIFIED block whose title changed was refused by `openspec archive` with "MODIFIED failed for header ... - not found". `openspec validate --strict` flagged the same block with "Archive would refuse this delta". The scenario-loss check compared scenario names by text too, so a scenario that kept its ID and changed its title counted as dropped.

An ID exists so that a title can change. The matching rule has to follow the ID.

## What Changes

- Archive matches requirement headers by ID token when the header starts with one. Headers without a token keep exact text matching.
- The scenario-loss check compares scenarios by `SCN-` token when the header starts with one. Scenarios without a token keep text comparison.
- A MODIFIED block with the same ID and a new title is applied. The new title replaces the old one in the main spec.
- A REMOVED header is found by ID when it has one.
- A RENAMED pair whose FROM and TO share one ID is a retitle. It is not a "target already exists" error.
- Two main spec headers that share one ID stop archive with an error that names the ID and the capability.
- Change validation uses the same rule in its duplicate checks, cross-section checks, scenario-loss check and archive preflight. Validate and archive agree.
- `show --diff` finds the main spec block by ID.

## Capabilities

### Modified Capabilities

- `cli-archive`: ID-aware matching of requirement and scenario headers. Written as ADDED requirements REQ-CA-014 and REQ-CA-015.
- `cli-validate`: the same matching rule in change validation. Written as ADDED requirement REQ-CLIV-021.

## Impact

- Code: `src/core/parsers/requirement-blocks.ts`, `src/core/specs-apply.ts`, `src/core/validation/validator.ts`, `src/utils/requirement-diff.ts`.
- Tests: `test/core/specs-apply.id-matching.test.ts` and `test/core/validation.id-matching.test.ts`. Every existing test keeps passing.
- No change for a project whose headers carry no ID token.
