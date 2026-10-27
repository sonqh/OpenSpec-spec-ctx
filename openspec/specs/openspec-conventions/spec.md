# OpenSpec Conventions Specification

## Purpose

OpenSpec conventions SHALL define how system capabilities are documented, how changes are proposed and tracked, and how specifications evolve over time. This meta-specification serves as the source of truth for OpenSpec's own conventions.
## Requirements
### Requirement: REQ-OC-001 Structured conventions for specs and changes

OpenSpec conventions SHALL mandate a structured spec format with clear requirement and scenario sections so tooling can parse consistently.

#### Scenario: SCN-OC-001-1 Following the structured spec format

- **WHEN** writing or updating OpenSpec specifications
- **THEN** authors SHALL use `### Requirement: ...` followed by at least one `#### Scenario: ...` section

### Requirement: REQ-OC-002 Behavior-First Specification Boundary
OpenSpec specifications SHALL capture verifiable behavior contracts and avoid internal implementation detail.

#### Scenario: SCN-OC-002-1 Writing behavior requirements
- **WHEN** documenting a capability in `spec.md`
- **THEN** requirements focus on externally observable behavior, interfaces, error handling, and constraints
- **AND** scenarios remain testable or explicitly verifiable

#### Scenario: SCN-OC-002-2 Avoiding implementation leakage
- **WHEN** details involve concrete library choices, class/function structure, or execution mechanics
- **THEN** those details SHALL be documented in `design.md` or `tasks.md` instead of behavioral requirements

### Requirement: REQ-OC-003 Progressive Rigor
OpenSpec conventions SHALL keep specs lightweight by default and scale rigor only when risk or coordination complexity demands it.

#### Scenario: SCN-OC-003-1 Routine change specification
- **WHEN** a change is local and low-risk
- **THEN** authors use concise, behavior-first requirements with minimal ceremony

#### Scenario: SCN-OC-003-2 High-risk or cross-boundary change specification
- **WHEN** a change is cross-team, cross-repo, API-contract breaking, migration-heavy, or security/privacy sensitive
- **THEN** authors increase detail and explicit validation expectations proportionally

### Requirement: REQ-OC-004 Project Structure
An OpenSpec project SHALL maintain a consistent directory structure for specifications and changes.

#### Scenario: SCN-OC-004-1 Initializing project structure
- **WHEN** an OpenSpec project is initialized
- **THEN** it SHALL have this structure:
```
openspec/
├── project.md              # Project-specific context
├── AGENTS.md               # AI assistant instructions
├── specs/                  # Current deployed capabilities
│   └── <capability-path>/  # One or more directories for a focused capability
│       ├── spec.md         # WHAT and WHY
│       └── design.md       # HOW (optional, for established patterns)
└── changes/                # Proposed changes
    ├── [change-name]/      # Descriptive change identifier
    │   ├── proposal.md     # Why, what, and impact
    │   ├── tasks.md        # Implementation checklist
    │   ├── design.md       # Technical decisions (optional)
    │   └── specs/          # Complete future state
    │       └── <capability-path>/
    │           └── spec.md # Clean markdown (no diff syntax)
    └── archive/            # Completed changes
        └── YYYY-MM-DD-[name]/
```

### Requirement: REQ-OC-005 Structured Format for Behavioral Specs

Behavioral specifications SHALL use a structured format with consistent section headers and keywords to ensure visual consistency and parseability.

#### Scenario: SCN-OC-005-1 Writing requirement sections

- **WHEN** documenting a requirement in a behavioral specification
- **THEN** use a level-3 heading with format `### Requirement: [Name]`
- **AND** immediately follow with a SHALL statement describing core behavior
- **AND** keep requirement names descriptive and under 50 characters

#### Scenario: SCN-OC-005-2 Documenting scenarios

- **WHEN** documenting specific behaviors or use cases
- **THEN** use level-4 headings with format `#### Scenario: [Description]`
- **AND** use bullet points with bold keywords for steps:
  - **GIVEN** for initial state (optional)
  - **WHEN** for conditions or triggers
  - **THEN** for expected outcomes
  - **AND** for additional outcomes or conditions

#### Scenario: SCN-OC-005-3 Adding implementation details

- **WHEN** a step requires additional detail
- **THEN** use sub-bullets under the main step
- **AND** maintain consistent indentation
  - Sub-bullets provide examples or specifics
  - Keep sub-bullets concise

### Requirement: REQ-OC-006 Header-Based Requirement Identification

Requirement headers SHALL serve as unique identifiers for programmatic matching between current specs and proposed changes.

#### Scenario: SCN-OC-006-1 Matching requirements programmatically

- **WHEN** processing delta changes
- **THEN** use the `### Requirement: [Name]` header as the unique identifier
- **AND** strip a closing run of `#` characters when a space or tab precedes it and only spaces or tabs follow it, then trim surrounding whitespace
- **AND** compare normalized requirement names with case-sensitive equality

#### Scenario: SCN-OC-006-2 Handling requirement renames

- **WHEN** renaming a requirement
- **THEN** use a special `## RENAMED Requirements` section
- **AND** specify both old and new names explicitly:
  ```markdown
  ## RENAMED Requirements
  - FROM: `### Requirement: Old Name`
  - TO: `### Requirement: New Name`
  ```
- **AND** if content also changes, include under MODIFIED using the NEW header

#### Scenario: SCN-OC-006-3 Validating header uniqueness

- **WHEN** creating or modifying requirements
- **THEN** ensure no duplicate headers exist within a spec
- **AND** validation tools SHALL flag duplicate headers as errors

### Requirement: REQ-OC-007 Change Storage Convention

Change proposals SHALL store only the additions, modifications, and removals to specifications, not complete future states.

#### Scenario: SCN-OC-007-1 Creating change proposals with additions

- **WHEN** creating a change proposal that adds new requirements
- **THEN** include only the new requirements under `## ADDED Requirements`
- **AND** each requirement SHALL include its complete content
- **AND** use the standard structured format for requirements and scenarios

#### Scenario: SCN-OC-007-2 Creating change proposals with modifications

- **WHEN** creating a change proposal that modifies existing requirements
- **THEN** include the modified requirements under `## MODIFIED Requirements`
- **AND** use the same header text as in the current spec (normalized)
- **AND** include the complete modified requirement (not a diff)
- **AND** optionally annotate what changed with inline comments like `← (was X)`

#### Scenario: SCN-OC-007-3 Creating change proposals with removals

- **WHEN** creating a change proposal that removes requirements
- **THEN** list them under `## REMOVED Requirements`
- **AND** use the normalized header text for identification
- **AND** include reason for removal
- **AND** document any migration path if applicable

The `changes/[name]/specs/` directory SHALL contain:
- Delta files showing only what changes
- Sections for ADDED, MODIFIED, REMOVED, and RENAMED requirements
- An optional `## Purpose` section on deltas that introduce a new capability
- Normalized header matching for requirement identification
- Complete requirements using the structured format
- Clear indication of change type for each requirement

#### Scenario: SCN-OC-007-4 Introducing a new capability

- **WHEN** a delta introduces a capability that has no main spec yet
- **THEN** the delta MAY open with a `## Purpose` section describing the capability
- **AND** that Purpose SHALL seed the main spec created for it
- **AND** a delta for a capability that already has a main spec SHOULD NOT carry a `## Purpose`, because the existing Purpose is authoritative and the delta's is ignored

#### Scenario: SCN-OC-007-5 Using standard output symbols

- **WHEN** displaying delta operations in CLI output
- **THEN** use these standard symbols:
  - `+` for ADDED (green)
  - `~` for MODIFIED (yellow)
  - `-` for REMOVED (red)
  - `→` for RENAMED (cyan)

### Requirement: REQ-OC-008 Archive Process Enhancement

The archive process SHALL programmatically apply delta changes to current specifications using header-based matching.

#### Scenario: SCN-OC-008-1 Archiving changes with deltas

- **WHEN** archiving a completed change
- **THEN** the archive command SHALL:
  1. Parse RENAMED sections first and apply renames
  2. Parse REMOVED sections and remove by normalized header match
  3. Parse MODIFIED sections and replace by normalized header match (using new names if renamed)
  4. Parse ADDED sections and append new requirements
- **AND** validate that all MODIFIED headers exist in current spec
- **AND** treat a REMOVED header that is already absent as already removed (warn and continue; a REMOVED header that names the FROM side of a RENAMED in the same delta — compared case- and whitespace-insensitively — or that differs only in case or whitespace from an existing requirement, is a conflict)
- **AND** treat an ADDED header that already exists with identical content as already synced (differing content is a conflict)
- **AND** treat a RENAMED whose source is gone but target present as already synced
- **AND** generate the updated spec in the main specs/ directory

#### Scenario: SCN-OC-008-2 Handling conflicts during archive

- **WHEN** delta changes conflict with current spec state
- **THEN** the archive command SHALL report specific conflicts
- **AND** require manual resolution before proceeding
- **AND** provide clear guidance on resolving conflicts

### Requirement: REQ-OC-009 Proposal Format

Proposals SHALL explicitly document all changes with clear from/to comparisons.

#### Scenario: SCN-OC-009-1 Documenting changes

- **WHEN** documenting what changes
- **THEN** the proposal SHALL explicitly describe each change:

```markdown
**[Section or Behavior Name]**
- From: [current state/requirement]
- To: [future state/requirement]
- Reason: [why this change is needed]
- Impact: [breaking/non-breaking, who's affected]
```

This explicit format compensates for not having inline diffs and ensures reviewers understand exactly what will change.

### Requirement: REQ-OC-010 Change Review

The system SHALL support multiple methods for reviewing proposed changes.

#### Scenario: SCN-OC-010-1 Reviewing changes

- **WHEN** reviewing proposed changes
- **THEN** reviewers can compare using:
- GitHub PR diff view when changes are committed
- Command line: `diff -u "specs/<capability-path>/spec.md" "changes/<name>/specs/<capability-path>/spec.md"`
- Any visual diff tool comparing current vs future state

### Requirement: REQ-OC-011 Structured Format Adoption

Behavioral specifications SHALL adopt the structured format with `### Requirement:` and `#### Scenario:` headers as the default.

#### Scenario: SCN-OC-011-1 Use structured headings for behavior

- **WHEN** documenting behavioral requirements
- **THEN** use `### Requirement:` for requirements
- **AND** use `#### Scenario:` for scenarios with bold WHEN/THEN/AND keywords

### Requirement: REQ-OC-012 Verb–Noun CLI Command Structure
OpenSpec CLI design SHALL use verbs as top-level commands with nouns provided as arguments or flags for scoping.

#### Scenario: SCN-OC-012-1 Verb-first command discovery
- **WHEN** a user runs a command like `openspec list`
- **THEN** the verb communicates the action clearly
- **AND** nouns refine scope via flags or arguments (e.g., `--changes`, `--specs`)

#### Scenario: SCN-OC-012-2 Backward compatibility for noun commands
- **WHEN** users run noun-prefixed commands such as `openspec spec ...` or `openspec change ...`
- **THEN** the CLI SHALL continue to support them for at least one release
- **AND** display a deprecation warning that points to verb-first alternatives

#### Scenario: SCN-OC-012-3 Disambiguation guidance
- **WHEN** item names are ambiguous between changes and specs
- **THEN** `openspec show` and `openspec validate` SHALL accept `--type spec|change`
- **AND** the help text SHALL document this clearly
