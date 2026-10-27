# Transcript: fresh path with @sonqh/specctx-openspec 1.15.1 and spec-ctx 0.1.2

Date: 2026-10-27. Sample project: a Node package with `src/index.js`, `test/add.test.js`, `node --test`.
Tools: `openspec` is the fork build from `/home/claude/openspec-spec-ctx` (spec-ctx-adopt, packed to a .tgz and installed in a private prefix). `specctx` is `npx -y spec-ctx@0.1.2`.
Every block shows the command, its output with ANSI codes stripped, its exit code, and its wall time.

## Commands

### Step 1: openspec init

```
$ openspec init --tools claude --no-animation
- Creating OpenSpec structure...
▌ OpenSpec structure created
- Setting up Claude Code...
√ Setup complete for Claude Code

OpenSpec Setup Complete

Created: Claude Code
6 skills and 6 commands in .claude/
Config: openspec/config.yaml (schema: spec-driven)

Getting started:
  Start your first change: /opsx:propose "your idea"

Note: 6 more workflows are available (new, continue, ff, bulk-archive, verify, onboard).
Add them with `openspec config profile`.

Learn more: https://github.com/Fission-AI/OpenSpec
Feedback:   https://github.com/Fission-AI/OpenSpec/issues

exit 0   time 0.47s
```

### Step 2: specctx init --all

```
$ npx -y spec-ctx@0.1.2 init --all
wrote spec-ctx.toml
wrote openspec/schemas/spec-driven-ids/README.md
wrote openspec/schemas/spec-driven-ids/schema.yaml
wrote openspec/schemas/spec-driven-ids/templates/design.md
wrote openspec/schemas/spec-driven-ids/templates/proposal.md
wrote openspec/schemas/spec-driven-ids/templates/spec.md
wrote openspec/schemas/spec-driven-ids/templates/tasks.md
wrote .claude/skills/specctx-bootstrap/SKILL.md
wrote .agents/skills/specctx-bootstrap/SKILL.md
wrote .claude/skills/specctx-done/SKILL.md
wrote .agents/skills/specctx-done/SKILL.md
wrote .claude/skills/specctx-next/SKILL.md
wrote .agents/skills/specctx-next/SKILL.md
wrote openspec/config.yaml (schema, rules, operations)
wrote .gitignore (2 lines)
next: specctx status
exit 0   time 1.15s
```

### Step 3a: openspec new change

```
$ openspec new change add-greeting --description 'Add a greeting function'
- Creating change 'add-greeting' with schema 'spec-driven-ids'...
Created change 'add-greeting' at openspec/changes/add-greeting/
Schema: spec-driven-ids
Next: openspec status --change add-greeting
exit 0   time 0.32s
```

### Step 3b: register the capability code by hand

Edited `spec-ctx.toml`: `caps = ["GRT"]` and a new table `[ids.paths]` with `GRT = "greeting"`. No command does this.

### Step 3c: id new REQ

```
$ npx -y spec-ctx@0.1.2 id new REQ GRT
index rebuilt
REQ-GRT-001
exit 0   time 1.06s
```

### Step 3d: id new SCN

```
$ npx -y spec-ctx@0.1.2 id new SCN GRT --for REQ-GRT-001 --count 2
SCN-GRT-001-1
SCN-GRT-001-2
exit 0   time 1.18s
```

### Step 3e: write the change artifacts by hand

Wrote `proposal.md`, `design.md`, `specs/greeting/spec.md` (one ADDED requirement `REQ-GRT-001` with `SCN-GRT-001-1` and `SCN-GRT-001-2`), and `tasks.md` with two tasks in the spec-driven-ids shape, following `openspec/schemas/spec-driven-ids/templates/`.

### Step 4a: openspec validate change

```
$ openspec validate add-greeting --type change --strict
Change 'add-greeting' is valid
exit 0   time 0.36s
```

### Step 4b: specctx check --strict

```
$ npx -y spec-ctx@0.1.2 check --strict
index rebuilt
0 findings
exit 0   time 1.23s
```

### Step 4c: specctx status

```
$ npx -y spec-ctx@0.1.2 status
add-greeting  done 0  open 2
uncovered active REQs in main: 0
next: specctx task next
exit 0   time 1.00s
```

### Step 4d: specctx task next

```
$ npx -y spec-ctx@0.1.2 task next
add-greeting/1.1  Add `greet(name)` in `src/greeting.js` with the `world` default
reqs: REQ-GRT-001
verify: node --test test/greeting.test.js
exit 0   time 1.05s
```

### Step 4e: specctx task start

```
$ npx -y spec-ctx@0.1.2 task start add-greeting/1.1
-- REQ-GRT-001 | openspec/changes/add-greeting/specs/greeting/spec.md:9 | active | requested
### Requirement: REQ-GRT-001 Greet by name

The package SHALL export a function `greet(name)` that returns the string `Hello, <name>!`. When `name` is empty or not given, the function SHALL use `world` as the name.

#### Scenario: SCN-GRT-001-1 A name is given
- **WHEN** a caller runs `greet("Ada")`
- **THEN** the function returns `Hello, Ada!`

#### Scenario: SCN-GRT-001-2 No name is given
- **WHEN** a caller runs `greet()` or `greet("")`
- **THEN** the function returns `Hello, world!`

-- add-greeting/D1 | openspec/changes/add-greeting/design.md:19 | active | decision for REQ-GRT-001
- Default to `world` when the name is empty. The alternative was to throw. A default keeps the function pure and simple to test. Refs: REQ-GRT-001

-- add-greeting/1.1 | openspec/changes/add-greeting/tasks.md:5 | open | task cites REQ-GRT-001
- [ ] 1.1 Add `greet(name)` in `src/greeting.js` with the `world` default [REQ-GRT-001] Verify: `node --test test/greeting.test.js`

-- add-greeting/1.2 | openspec/changes/add-greeting/tasks.md:6 | open | task cites REQ-GRT-001
- [ ] 1.2 Cover both scenarios in `test/greeting.test.js` and run the full suite [REQ-GRT-001] Verify: `node --test`

-- bundle 1275 chars, 165.4% of 771 chars of spec text
exit 0   time 1.02s
```

### Step 4f: implement

Wrote `src/greeting.js` with a `// REQ-GRT-001` tag on line 1, and `test/greeting.test.js` with `// Covers: REQ-GRT-001` on line 1 and a `// SCN-GRT-001-N` comment over each test.

### Step 4g: task done 1.1

```
$ npx -y spec-ctx@0.1.2 task done add-greeting/1.1
index rebuilt
done add-greeting/1.1. Evidence: .ctx/evidence/add-greeting/1.1.json
exit 0   time 1.31s
```

### Step 4h: task done 1.2

```
$ npx -y spec-ctx@0.1.2 task done add-greeting/1.2
index rebuilt
done add-greeting/1.2. Evidence: .ctx/evidence/add-greeting/1.2.json
exit 0   time 1.23s
```

### Step 5a: retitle the requirement header

Changed `### Requirement: REQ-GRT-001 Greet by name` to `### Requirement: REQ-GRT-001 Greeting text for a caller` in the delta. Same ID, new title text. Tasks, code tags, and test tags stay as they were.

### Step 5b: openspec validate --all --strict after rename

```
$ openspec validate --all --strict
✓ change/add-greeting
Totals: 1 passed, 0 failed (1 items)
exit 0   time 0.32s
```

### Step 5c: specctx check after rename

```
$ npx -y spec-ctx@0.1.2 check
index rebuilt
0 findings
exit 0   time 1.02s
```

### Step 5d: specctx check --strict after rename

```
$ npx -y spec-ctx@0.1.2 check --strict
0 findings
exit 0   time 1.05s
```

### Step 6a: specctx gate --strict

```
$ SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict
check: ok (strict)
linters: ok (10 file(s))
validate: ok (strict)
spec-length: ok
exit 0   time 1.77s
```

### Step 6a2: specctx gate --strict with the default openspec (upstream via npx)

```
$ npx -y spec-ctx@0.1.2 gate --strict
check: ok (strict)
linters: ok (10 file(s))
validate: ok (strict)
spec-length: ok
exit 0   time 2.73s
```

### Step 6b: openspec archive

```
$ openspec archive add-greeting -y
Task status: ✓ Complete

Specs to update:
  greeting: create
Applying changes to openspec/specs/greeting/spec.md:
  + 1 added
Totals: + 1, ~ 0, - 0, → 0
Specs updated successfully.
Change 'add-greeting' archived as '2026-10-27-add-greeting'.
exit 0   time 0.40s
```

### Step 6c: openspec validate --all --strict after archive

```
$ openspec validate --all --strict
✓ spec/greeting
Totals: 1 passed, 0 failed (1 items)
exit 0   time 0.30s
```

### Step 6d: specctx check --strict after archive

```
$ npx -y spec-ctx@0.1.2 check --strict
index rebuilt
0 findings
exit 0   time 1.17s
```

### Step 6e: specctx handoff write

```
$ npx -y spec-ctx@0.1.2 handoff write
wrote .ctx/handoff.md
exit 0   time 0.99s
```

### Step 6f: specctx gate --strict after archive

```
$ SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict
check: ok (strict)
linters: ok (11 file(s))
validate: ok (strict)
spec-length: ok
exit 0   time 1.59s
```

### Step 6g: main spec carries the new title

```
$ cat openspec/specs/greeting/spec.md
# greeting Specification

## Purpose
The greeting capability defines the text that the package returns when a caller asks to greet a person by name.

## Requirements

### Requirement: REQ-GRT-001 Greeting text for a caller

The package SHALL export a function `greet(name)` that returns the string `Hello, <name>!`. When `name` is empty or not given, the function SHALL use `world` as the name.

#### Scenario: SCN-GRT-001-1 A name is given
- **WHEN** a caller runs `greet("Ada")`
- **THEN** the function returns `Hello, Ada!`

#### Scenario: SCN-GRT-001-2 No name is given
- **WHEN** a caller runs `greet()` or `greet("")`
- **THEN** the function returns `Hello, world!`
exit 0   time 0.01s
```

## Extra: a MODIFIED delta that matches by ID only

Step 5 renamed a header in an ADDED delta. Upstream OpenSpec accepts that too, because an ADDED requirement has nothing to match against. The fork claim is about matching a delta header to a main spec header by ID. This extra change proves it: the MODIFIED header carries the same ID as the main spec but a different title.

### Extra 1: openspec new change

```
$ openspec new change tune-greeting
- Creating change 'tune-greeting' with schema 'spec-driven-ids'...
Created change 'tune-greeting' at openspec/changes/tune-greeting/
Schema: spec-driven-ids
Next: openspec status --change tune-greeting
exit 0   time 0.47s
```

Wrote `tune-greeting` with a MODIFIED delta. Main spec header: `### Requirement: REQ-GRT-001 Greeting text for a caller`. Delta header: `### Requirement: REQ-GRT-001 Greeting ends with a period`. Same ID, different title. Updated the code and tests to the new punctuation.

### Extra 2: openspec validate --all --strict (MODIFIED header differs in title)

```
$ openspec validate --all --strict
✓ spec/greeting
✓ change/tune-greeting
Totals: 2 passed, 0 failed (2 items)
exit 0   time 0.32s
```

### Extra 3: task done tune-greeting/1.1

```
$ npx -y spec-ctx@0.1.2 task done tune-greeting/1.1
index rebuilt
done tune-greeting/1.1. Evidence: .ctx/evidence/tune-greeting/1.1.json
exit 0   time 1.27s
```

### Extra 4: gate --strict

```
$ SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict
check: ok (strict)
linters: ok (15 file(s))
validate: ok (strict)
spec-length: ok
exit 0   time 1.78s
```

### Extra 5: openspec archive tune-greeting -y

```
$ openspec archive tune-greeting -y
Task status: ✓ Complete

Specs to update:
  greeting: update
Applying changes to openspec/specs/greeting/spec.md:
  ~ 1 modified
Totals: + 0, ~ 1, - 0, → 0
Specs updated successfully.
Change 'tune-greeting' archived as '2026-10-27-tune-greeting'.
exit 0   time 0.39s
```

### Extra 6: main spec after archive

```
$ grep -n 'Requirement:' openspec/specs/greeting/spec.md
8:### Requirement: REQ-GRT-001 Greeting ends with a period
exit 0   time 0.01s
```

### Extra 7: openspec validate --all --strict

```
$ openspec validate --all --strict
✓ spec/greeting
Totals: 1 passed, 0 failed (1 items)
exit 0   time 0.28s
```

### Extra 8: specctx check --strict

```
$ npx -y spec-ctx@0.1.2 check --strict
index rebuilt
0 findings
exit 0   time 1.09s
```

## Contrast: the same retitled MODIFIED delta under upstream OpenSpec 1.15.0

A copy of the sample with one more change `retitle`. Its MODIFIED header is `### Requirement: REQ-GRT-001 Greeting, final form`, the main spec says `... Greeting ends with a period`. The delta on purpose lists only one of the two scenarios.

```
$ openspec validate --all --strict          # fork 1.15.1
✓ spec/greeting
✗ change/retitle
  ✗ [ERROR] greeting/spec.md: MODIFIED "REQ-GRT-001 Greeting, final form" omits scenario(s) the current spec still has: "SCN-GRT-001-2 No name is given". The modified block has 1 scenario; the current spec has 2 scenarios. It adds none. Copy the omitted scenarios into the MODIFIED block (a MODIFIED requirement replaces the whole block, so archive refuses to drop them).
Totals: 1 passed, 1 failed (2 items)
exit 1

$ npx -y @fission-ai/openspec@latest validate --all --strict   # upstream 1.15.0
✓ spec/greeting
✓ change/retitle
  ℹ [INFO] greeting/spec.md: Archive would refuse this delta: greeting MODIFIED failed for header "### Requirement: REQ-GRT-001 Greeting, final form" - not found
Totals: 2 passed, 0 failed (2 items)
exit 0
```

Reading: the fork found the main requirement by `REQ-GRT-001` and went on to check its scenarios. Upstream compared the full header text, found no match, and would refuse the archive. The two scenario check also matched `SCN-GRT-001-2` by ID. The upstream run passes with exit 0 and only an INFO line, so a CI gate on upstream would not catch the break before archive.

## Exit codes and timings

| Step | Command | Exit | Time (s) |
| --- | --- | --- | --- |
| Step 1: openspec init | `openspec init --tools claude --no-animation` | 0 | 0.47 |
| Step 2: specctx init --all | `npx -y spec-ctx@0.1.2 init --all` | 0 | 1.15 |
| Step 3a: openspec new change | `openspec new change add-greeting --description 'Add a greeting function'` | 0 | 0.32 |
| Step 3c: id new REQ | `npx -y spec-ctx@0.1.2 id new REQ GRT` | 0 | 1.06 |
| Step 3d: id new SCN | `npx -y spec-ctx@0.1.2 id new SCN GRT --for REQ-GRT-001 --count 2` | 0 | 1.18 |
| Step 4a: openspec validate change | `openspec validate add-greeting --type change --strict` | 0 | 0.36 |
| Step 4b: specctx check --strict | `npx -y spec-ctx@0.1.2 check --strict` | 0 | 1.23 |
| Step 4c: specctx status | `npx -y spec-ctx@0.1.2 status` | 0 | 1.00 |
| Step 4d: specctx task next | `npx -y spec-ctx@0.1.2 task next` | 0 | 1.05 |
| Step 4e: specctx task start | `npx -y spec-ctx@0.1.2 task start add-greeting/1.1` | 0 | 1.02 |
| Step 4g: task done 1.1 | `npx -y spec-ctx@0.1.2 task done add-greeting/1.1` | 0 | 1.31 |
| Step 4h: task done 1.2 | `npx -y spec-ctx@0.1.2 task done add-greeting/1.2` | 0 | 1.23 |
| Step 5b: openspec validate --all --strict after rename | `openspec validate --all --strict` | 0 | 0.32 |
| Step 5c: specctx check after rename | `npx -y spec-ctx@0.1.2 check` | 0 | 1.02 |
| Step 5d: specctx check --strict after rename | `npx -y spec-ctx@0.1.2 check --strict` | 0 | 1.05 |
| Step 6a: specctx gate --strict | `SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict` | 0 | 1.77 |
| Step 6a2: specctx gate --strict with the default openspec (upstream via npx) | `npx -y spec-ctx@0.1.2 gate --strict` | 0 | 2.73 |
| Step 6b: openspec archive | `openspec archive add-greeting -y` | 0 | 0.40 |
| Step 6c: openspec validate --all --strict after archive | `openspec validate --all --strict` | 0 | 0.30 |
| Step 6d: specctx check --strict after archive | `npx -y spec-ctx@0.1.2 check --strict` | 0 | 1.17 |
| Step 6e: specctx handoff write | `npx -y spec-ctx@0.1.2 handoff write` | 0 | 0.99 |
| Step 6f: specctx gate --strict after archive | `SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict` | 0 | 1.59 |
| Step 6g: main spec carries the new title | `cat openspec/specs/greeting/spec.md` | 0 | 0.01 |
| Extra 1: openspec new change | `openspec new change tune-greeting` | 0 | 0.47 |
| Extra 2: openspec validate --all --strict (MODIFIED header differs in title) | `openspec validate --all --strict` | 0 | 0.32 |
| Extra 3: task done tune-greeting/1.1 | `npx -y spec-ctx@0.1.2 task done tune-greeting/1.1` | 0 | 1.27 |
| Extra 4: gate --strict | `SPECCTX_OPENSPEC=openspec npx -y spec-ctx@0.1.2 gate --strict` | 0 | 1.78 |
| Extra 5: openspec archive tune-greeting -y | `openspec archive tune-greeting -y` | 0 | 0.39 |
| Extra 6: main spec after archive | `grep -n 'Requirement:' openspec/specs/greeting/spec.md` | 0 | 0.01 |
| Extra 7: openspec validate --all --strict | `openspec validate --all --strict` | 0 | 0.28 |
| Extra 8: specctx check --strict | `npx -y spec-ctx@0.1.2 check --strict` | 0 | 1.09 |

## Friction

- `openspec init` needs `--tools claude` to run without a prompt. The spec-ctx README shows `npx -y @fission-ai/openspec@latest init` with no flag, which opens an interactive tool picker. `--no-animation` is also useful for a terminal log.
- `openspec init` tells you to start with `/opsx:propose`. After `specctx init --all` the schema is `spec-driven-ids`, and the propose skill does not know about `specctx id new`. A stranger who follows the first hint writes headers without IDs and `specctx check` reports them.
- The `[ids] caps` list and the `[ids.paths]` table are optional. `check` passes and `id new REQ GRT` works with `caps = []`. The task said to add them, and the schema templates say `specctx id new REQ <CAP>`, but neither README says whether the code must be registered first. It does not. `caps` is a guard, not a requirement.
- `openspec new change` writes `.openspec.yaml` and `README.md` only. The proposal, design, spec, and tasks files come from `openspec/schemas/spec-driven-ids/templates/`. Nothing points a stranger at that folder. The spec-ctx README does not mention it either.
- `specctx gate` runs `npx -y @fission-ai/openspec@latest` for the validate step. That is upstream, not the fork. Set `SPECCTX_OPENSPEC=openspec` so the gate uses the fork build on PATH. The README names the variable only in the config reference table.
- The gate ran the upstream validate in 2.7 seconds here because `npx` had it cached. The first run downloads it and takes longer.
- The `task start` footer on a two task project reads `bundle 1275 chars, 165.4% of 771 chars of spec text`. Over 100 percent looks like an error. It is not. The bundle includes the design decision and the task lines, which are not spec text. The README demo shows 3.6 percent on a larger tree.
- `handoff write` after archive prints `change: none` and `evidence: 0 task(s)`. The evidence files for the archived change are still under `.ctx/evidence/add-greeting/`. The handoff counts only active changes. The README does not say this.
- `openspec status --change add-greeting` after archive says `Change 'add-greeting' not found. No changes exist.` The second sentence is wrong. The change exists under `openspec/changes/archive/`.
- `openspec validate add-greeting --type change --strict` passes a delta whose scenarios have no `**WHEN**`/`**THEN**` problem. Good. But upstream `validate --all --strict` exits 0 with only an INFO line when archive would refuse a MODIFIED header. See the Contrast section. A CI gate on upstream does not fail on that.
- `.gitignore` got `.ctx/index.json` and `adopt-report.md`. The rest of `.ctx/` (evidence and handoff) is meant to be committed. The spec-ctx README says so for its own repo, but `init` prints only `wrote .gitignore (2 lines)`.
- `specctx task next` exits 1 with `no open task` when no change is active. Exit 1 is the findings code, so a script that treats it as a failure stops here. The README does not list this case.

## Blockers

None. Every command exited 0 where the task said it must.
