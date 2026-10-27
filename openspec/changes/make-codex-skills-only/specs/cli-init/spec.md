## ADDED Requirements

### Requirement: REQ-CI-024 Codex initialization uses the skills-invocable command surface
`openspec init` SHALL treat Codex as a skills-invocable tool, not as an adapter-backed command-file tool.

#### Scenario: SCN-CI-024-1 Codex command surface resolution
- **WHEN** a user runs `openspec init` and selects Codex
- **THEN** the command SHALL resolve Codex command surface capability as `skills-invocable`
- **AND** it SHALL apply delivery behavior through the shared command-surface capability model when that model is available
- **AND** it SHALL NOT use a Codex-specific delivery predicate that duplicates command-surface capability rules

### Requirement: REQ-CI-025 Codex initialization uses skills only
`openspec init` SHALL configure Codex through generated OpenSpec skills without generating Codex custom prompt files.

#### Scenario: SCN-CI-025-1 Initializing Codex with default delivery
- **WHEN** a user runs `openspec init` and selects Codex
- **AND** the active delivery mode is `both`
- **THEN** the command SHALL create the selected OpenSpec skill files under `.codex/skills/`
- **AND** it SHALL NOT create Codex prompt files under `$CODEX_HOME/prompts` or the default Codex prompt directory

#### Scenario: SCN-CI-025-2 Initializing Codex with skills delivery
- **WHEN** a user runs `openspec init` and selects Codex
- **AND** the active delivery mode is `skills`
- **THEN** the command SHALL create the selected OpenSpec skill files under `.codex/skills/`
- **AND** it SHALL NOT create Codex prompt files

#### Scenario: SCN-CI-025-3 Initializing Codex with commands delivery
- **WHEN** a user runs `openspec init` and selects Codex
- **AND** the active delivery mode is `commands`
- **THEN** the command SHALL still create the selected OpenSpec skill files under `.codex/skills/`
- **AND** it SHALL skip Codex command-file generation because Codex is `skills-invocable`

### Requirement: REQ-CI-026 Codex initialization cleanup removes managed legacy prompts
`openspec init` SHALL remove previously managed global Codex prompt files only after replacement Codex skills exist, without deleting user-authored Codex prompts.

#### Scenario: SCN-CI-026-1 Cleanup removes allowlisted global Codex prompt files after replacement exists
- **WHEN** initialization cleanup runs
- **AND** the Codex prompt directory contains exact allowlisted managed global Codex prompt files
- **AND** replacement Codex skills exist for the workflows represented by those prompt filenames
- **THEN** the command SHALL remove those managed Codex prompt files
- **AND** it SHALL leave other Codex prompt files unchanged

#### Scenario: SCN-CI-026-2 Non-interactive initialization preserves unreplaced global Codex prompts
- **WHEN** `openspec init` runs without interaction and without `--force`
- **AND** the resolved global Codex prompt directory contains exact allowlisted managed Codex prompt files
- **AND** replacement Codex skills do not yet exist for at least one detected prompt workflow
- **THEN** the command SHALL preserve the unreplaced Codex prompt files
- **AND** it SHALL continue to leave unmanaged Codex prompt files unchanged

#### Scenario: SCN-CI-026-3 Non-interactive initialization removes replaced global Codex prompts
- **WHEN** `openspec init` runs without interaction and without `--force`
- **AND** the resolved global Codex prompt directory contains exact allowlisted managed Codex prompt files
- **AND** replacement Codex skills exist for the workflows represented by those prompt filenames
- **THEN** the command SHALL remove those managed Codex prompt files
- **AND** it SHALL leave unmanaged Codex prompt files unchanged

#### Scenario: SCN-CI-026-4 Initialization preview lists deferred global prompts cleanup separately
- **WHEN** `openspec init` detects managed global Codex prompt files before tool setup
- **THEN** the command SHALL present deferred global prompts cleanup in a separate section from immediate repo-local removals
- **AND** that section SHALL list the concrete prompt paths
- **AND** it SHALL explain that those global prompts are removed only after matching replacement skills are installed

#### Scenario: SCN-CI-026-5 Cleanup reports Codex skills as the replacement
- **WHEN** initialization cleanup reports removed Codex prompt files
- **THEN** the cleanup summary SHALL indicate that the removed prompt files are replaced by Codex skills
