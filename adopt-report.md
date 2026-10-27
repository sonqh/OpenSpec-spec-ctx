# Adopt report

`specctx adopt` gave these headers an ID. Review the diff in the pull request, then delete this file.

## Capability codes

Rename a code in `spec-ctx.toml` before the IDs spread.

| Code | Path | Source |
| --- | --- | --- |
| ATP | ai-tool-paths | derived |
| AG | artifact-graph | derived |
| CHC | change-creation | derived |
| CSW | change-stacking-workflow | derived |
| CNV | ci-nix-validation | derived |
| CA | cli-archive | derived |
| CAI | cli-archive-instructions | derived |
| CAW | cli-artifact-workflow | derived |
| CC | cli-change | derived |
| CLIC | cli-completion | derived |
| CLC | cli-config | derived |
| CF | cli-feedback | derived |
| CI | cli-init | derived |
| CL | cli-list | derived |
| CS | cli-show | derived |
| CLS | cli-spec | derived |
| CU | cli-update | derived |
| CLIV | cli-validate | derived |
| CLV | cli-version | derived |
| CV | cli-view | derived |
| CG | command-generation | derived |
| COL | config-loading | derived |
| COI | context-injection | derived |
| DQW | developer-qa-workflow | derived |
| DAI | docs-agent-instructions | derived |
| GC | global-config | derived |
| GSE | graceful-status-empty | derived |
| IS | installation-scope | derived |
| IL | instruction-loader | derived |
| LC | legacy-cleanup | derived |
| OMPT | oh-my-pi-tool | derived |
| OC | openspec-conventions | derived |
| OG | operation-guidance | derived |
| OAS | opsx-apply-skill | derived |
| OPAS | opsx-archive-skill | derived |
| OBAS | opsx-bulk-archive-skill | derived |
| OOS | opsx-onboard-skill | derived |
| OUS | opsx-update-skill | derived |
| OVS | opsx-verify-skill | derived |
| PRO | profiles | derived |
| PW | propose-workflow | derived |
| RI | rules-injection | derived |
| SFC | schema-fork-command | derived |
| SIC | schema-init-command | derived |
| SR | schema-resolution | derived |
| SVC | schema-validate-command | derived |
| SWC | schema-which-command | derived |
| SSS | specs-sync-skill | derived |
| TEL | telemetry | derived |
| TAP | template-artifact-pipeline | derived |

## Headers

| File | Line | Old header | New header |
| --- | --- | --- | --- |
| openspec/changes/add-amp-support/specs/ai-tool-paths/spec.md | 3 | `### Requirement: Amp skills integration` | `### Requirement: REQ-ATP-004 Amp skills integration` |
| openspec/changes/add-amp-support/specs/ai-tool-paths/spec.md | 7 | `#### Scenario: Selecting Amp` | `#### Scenario: SCN-ATP-004-1 Selecting Amp` |
| openspec/changes/add-amp-support/specs/ai-tool-paths/spec.md | 14 | `#### Scenario: Detecting an Amp project` | `#### Scenario: SCN-ATP-004-2 Detecting an Amp project` |
| openspec/changes/add-amp-support/specs/ai-tool-paths/spec.md | 19 | `#### Scenario: Updating an Amp-owned skill tree` | `#### Scenario: SCN-ATP-004-3 Updating an Amp-owned skill tree` |
| openspec/changes/add-amp-support/specs/ai-tool-paths/spec.md | 25 | `#### Scenario: Sharing the Agent Skills directory` | `#### Scenario: SCN-ATP-004-4 Sharing the Agent Skills directory` |
| openspec/changes/add-change-stacking-awareness/specs/change-creation/spec.md | 3 | `### Requirement: Stack Metadata Scaffolding` | `### Requirement: REQ-CHC-003 Stack Metadata Scaffolding` |
| openspec/changes/add-change-stacking-awareness/specs/change-creation/spec.md | 6 | `#### Scenario: Create change with stack metadata` | `#### Scenario: SCN-CHC-003-1 Create change with stack metadata` |
| openspec/changes/add-change-stacking-awareness/specs/change-creation/spec.md | 11 | `#### Scenario: Split-generated child metadata` | `#### Scenario: SCN-CHC-003-2 Split-generated child metadata` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 3 | `### Requirement: Stack Metadata Model` | `### Requirement: REQ-CSW-001 Stack Metadata Model` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 6 | `#### Scenario: Optional stack metadata is present` | `#### Scenario: SCN-CSW-001-1 Optional stack metadata is present` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 11 | `#### Scenario: Backward compatibility without stack metadata` | `#### Scenario: SCN-CSW-001-2 Backward compatibility without stack metadata` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 16 | `### Requirement: Change Dependency Graph` | `### Requirement: REQ-CSW-002 Change Dependency Graph` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 19 | `#### Scenario: Build dependency order` | `#### Scenario: SCN-CSW-002-1 Build dependency order` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 24 | `#### Scenario: Tie-breaking within the same dependency depth` | `#### Scenario: SCN-CSW-002-2 Tie-breaking within the same dependency depth` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 29 | `#### Scenario: Dependency cycle detection` | `#### Scenario: SCN-CSW-002-3 Dependency cycle detection` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 34 | `### Requirement: Capability marker and overlap semantics` | `### Requirement: REQ-CSW-003 Capability marker and overlap semantics` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 37 | `#### Scenario: Required capability provided by an active change` | `#### Scenario: SCN-CSW-003-1 Required capability provided by an active change` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 43 | `#### Scenario: Requires marker without active provider` | `#### Scenario: SCN-CSW-003-2 Requires marker without active provider` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 49 | `#### Scenario: Requires marker satisfied by archived history` | `#### Scenario: SCN-CSW-003-3 Requires marker satisfied by archived history` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 56 | `#### Scenario: Requires marker missing in full history` | `#### Scenario: SCN-CSW-003-4 Requires marker missing in full history` |
| openspec/changes/add-change-stacking-awareness/specs/change-stacking-workflow/spec.md | 62 | `#### Scenario: Overlap warning for shared touches` | `#### Scenario: SCN-CSW-003-5 Overlap warning for shared touches` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 3 | `### Requirement: Stack Planning Commands` | `### Requirement: REQ-CC-005 Stack Planning Commands` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 6 | `#### Scenario: Show dependency graph` | `#### Scenario: SCN-CC-005-1 Show dependency graph` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 11 | `#### Scenario: Show next unblocked changes` | `#### Scenario: SCN-CC-005-2 Show next unblocked changes` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 16 | `### Requirement: Split Large Change Scaffolding` | `### Requirement: REQ-CC-006 Split Large Change Scaffolding` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 19 | `#### Scenario: Split command scaffolds child changes` | `#### Scenario: SCN-CC-006-1 Split command scaffolds child changes` |
| openspec/changes/add-change-stacking-awareness/specs/cli-change/spec.md | 24 | `#### Scenario: Re-running split on an already-split change` | `#### Scenario: SCN-CC-006-2 Re-running split on an already-split change` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 3 | `### Requirement: Stack-Aware Change Planning Conventions` | `### Requirement: REQ-OC-013 Stack-Aware Change Planning Conventions` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 6 | `#### Scenario: Declaring change dependencies` | `#### Scenario: SCN-OC-013-1 Declaring change dependencies` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 11 | `#### Scenario: Dependency source of truth during migration` | `#### Scenario: SCN-OC-013-2 Dependency source of truth during migration` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 16 | `#### Scenario: Explicit ordering remains required for capability markers` | `#### Scenario: SCN-OC-013-3 Explicit ordering remains required for capability markers` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 21 | `#### Scenario: Declaring advisory overlap via touches` | `#### Scenario: SCN-OC-013-4 Declaring advisory overlap via touches` |
| openspec/changes/add-change-stacking-awareness/specs/openspec-conventions/spec.md | 26 | `#### Scenario: Declaring parent-child split structure` | `#### Scenario: SCN-OC-013-5 Declaring parent-child split structure` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 5 | `### Requirement: Migrating OpenSpec content out of a renamed tool's former directory` | `### Requirement: REQ-ATP-005 Migrating OpenSpec content out of a renamed tool's former directory` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 17 | `#### Scenario: Moving a former directory that needs no consent` | `#### Scenario: SCN-ATP-005-1 Moving a former directory that needs no consent` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 23 | `#### Scenario: Offering a move that needs consent` | `#### Scenario: SCN-ATP-005-2 Offering a move that needs consent` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 31 | `#### Scenario: Unattended runs take the move` | `#### Scenario: SCN-ATP-005-3 Unattended runs take the move` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 36 | `#### Scenario: Selecting a renamed tool is consent` | `#### Scenario: SCN-ATP-005-4 Selecting a renamed tool is consent` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 41 | `#### Scenario: Both directories already hold OpenSpec content` | `#### Scenario: SCN-ATP-005-5 Both directories already hold OpenSpec content` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 51 | `#### Scenario: Every former file differs, so nothing is movable` | `#### Scenario: SCN-ATP-005-6 Every former file differs, so nothing is movable` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 59 | `#### Scenario: One root is a symbolic link to the other` | `#### Scenario: SCN-ATP-005-7 One root is a symbolic link to the other` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 65 | `#### Scenario: User files survive the move` | `#### Scenario: SCN-ATP-005-8 User files survive the move` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 72 | `#### Scenario: A user file beside a generated skill is not carried into a directory OpenSpec prunes` | `#### Scenario: SCN-ATP-005-9 A user file beside a generated skill is not carried into a directory OpenSpec prunes` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 80 | `#### Scenario: The move is idempotent` | `#### Scenario: SCN-ATP-005-10 The move is idempotent` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 87 | `### Requirement: Path configuration for supported tools` | `### Requirement: REQ-ATP-002 Path configuration for supported tools` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 91 | `#### Scenario: Claude Code paths defined` | `#### Scenario: SCN-ATP-002-1 Claude Code paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 96 | `#### Scenario: Cursor paths defined` | `#### Scenario: SCN-ATP-002-2 Cursor paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 101 | `#### Scenario: Windsurf paths defined` | `#### Scenario: SCN-ATP-002-12 Windsurf paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 108 | `#### Scenario: Kimi Code paths defined` | `#### Scenario: SCN-ATP-002-5 Kimi Code paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 114 | `#### Scenario: Hermes Agent paths defined` | `#### Scenario: SCN-ATP-002-6 Hermes Agent paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 121 | `#### Scenario: Devin Desktop paths defined` | `#### Scenario: SCN-ATP-002-3 Devin Desktop paths defined` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 128 | `#### Scenario: Retired tool ids resolve on the command line` | `#### Scenario: SCN-ATP-002-13 Retired tool ids resolve on the command line` |
| openspec/changes/add-devin-desktop-support/specs/ai-tool-paths/spec.md | 134 | `#### Scenario: Tools without skillsDir` | `#### Scenario: SCN-ATP-002-11 Tools without skillsDir` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 5 | `### Requirement: Skill Generation` | `### Requirement: REQ-CI-012 Skill Generation` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 9 | `#### Scenario: Generating skills for a tool` | `#### Scenario: SCN-CI-012-1 Generating skills for a tool` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 25 | `#### Scenario: Devin skills reference skills rather than workflows` | `#### Scenario: SCN-CI-012-2 Devin skills reference skills rather than workflows` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 33 | `### Requirement: Slash Command Generation` | `### Requirement: REQ-CI-013 Slash Command Generation` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 37 | `#### Scenario: Generating slash commands for a tool with a registered adapter` | `#### Scenario: SCN-CI-013-1 Generating slash commands for a tool with a registered adapter` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 53 | `#### Scenario: Selected tool has no command adapter` | `#### Scenario: SCN-CI-013-2 Selected tool has no command adapter` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 61 | `#### Scenario: Kimi Code skips command-file generation` | `#### Scenario: SCN-CI-013-3 Kimi Code skips command-file generation` |
| openspec/changes/add-devin-desktop-support/specs/cli-init/spec.md | 67 | `#### Scenario: Generating workflows for Devin Desktop` | `#### Scenario: SCN-CI-013-5 Generating workflows for Devin Desktop` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 5 | `### Requirement: Slash Command Updates` | `### Requirement: REQ-CU-006 Slash Command Updates` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 9 | `#### Scenario: Updating slash commands for Antigravity` | `#### Scenario: SCN-CU-006-1 Updating slash commands for Antigravity` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 14 | `#### Scenario: Updating slash commands for Claude Code` | `#### Scenario: SCN-CU-006-2 Updating slash commands for Claude Code` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 19 | `#### Scenario: Updating slash commands for CodeBuddy Code` | `#### Scenario: SCN-CU-006-3 Updating slash commands for CodeBuddy Code` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 25 | `#### Scenario: Updating slash commands for Cline` | `#### Scenario: SCN-CU-006-4 Updating slash commands for Cline` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 31 | `#### Scenario: Updating slash commands for Continue` | `#### Scenario: SCN-CU-006-5 Updating slash commands for Continue` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 36 | `#### Scenario: Updating slash commands for Crush` | `#### Scenario: SCN-CU-006-6 Updating slash commands for Crush` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 42 | `#### Scenario: Updating slash commands for Cursor` | `#### Scenario: SCN-CU-006-7 Updating slash commands for Cursor` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 47 | `#### Scenario: Updating slash commands for Factory Droid` | `#### Scenario: SCN-CU-006-8 Updating slash commands for Factory Droid` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 54 | `#### Scenario: Updating slash commands for OpenCode` | `#### Scenario: SCN-CU-006-9 Updating slash commands for OpenCode` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 61 | `#### Scenario: Legacy OpenCode command path cleanup` | `#### Scenario: SCN-CU-006-10 Legacy OpenCode command path cleanup` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 66 | `#### Scenario: Updating slash commands for Windsurf` | `#### Scenario: SCN-CU-006-11 Updating slash commands for Windsurf` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 72 | `#### Scenario: Updating workflows for Devin Desktop` | `#### Scenario: SCN-CU-006-18 Updating workflows for Devin Desktop` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 79 | `#### Scenario: Updating slash commands for Kilo Code` | `#### Scenario: SCN-CU-006-12 Updating slash commands for Kilo Code` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 85 | `#### Scenario: Updating slash commands for Codex` | `#### Scenario: SCN-CU-006-13 Updating slash commands for Codex` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 92 | `#### Scenario: Updating slash commands for GitHub Copilot` | `#### Scenario: SCN-CU-006-14 Updating slash commands for GitHub Copilot` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 98 | `#### Scenario: Updating slash commands for Gemini CLI` | `#### Scenario: SCN-CU-006-15 Updating slash commands for Gemini CLI` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 104 | `#### Scenario: Updating slash commands for iFlow CLI` | `#### Scenario: SCN-CU-006-16 Updating slash commands for iFlow CLI` |
| openspec/changes/add-devin-desktop-support/specs/cli-update/spec.md | 111 | `#### Scenario: Missing slash command file` | `#### Scenario: SCN-CU-006-17 Missing slash command file` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 5 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 9 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 17 | `#### Scenario: Claude adapter formatting` | `#### Scenario: SCN-CG-002-2 Claude adapter formatting` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 23 | `#### Scenario: Cursor adapter formatting` | `#### Scenario: SCN-CG-002-3 Cursor adapter formatting` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 29 | `#### Scenario: Windsurf adapter formatting` | `#### Scenario: SCN-CG-002-4 Windsurf adapter formatting` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 35 | `#### Scenario: Devin Desktop adapter formatting` | `#### Scenario: SCN-CG-002-6 Devin Desktop adapter formatting` |
| openspec/changes/add-devin-desktop-support/specs/command-generation/spec.md | 41 | `#### Scenario: Trae adapter formatting` | `#### Scenario: SCN-CG-002-5 Trae adapter formatting` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 3 | `### Requirement: AIToolOption skillsDir field` | `### Requirement: REQ-ATP-001 AIToolOption skillsDir field` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 6 | `#### Scenario: Scope support metadata present` | `#### Scenario: SCN-ATP-001-3 Scope support metadata present` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 11 | `#### Scenario: Scope support metadata absent` | `#### Scenario: SCN-ATP-001-4 Scope support metadata absent` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 16 | `### Requirement: Path configuration for supported tools` | `### Requirement: REQ-ATP-002 Path configuration for supported tools` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 19 | `#### Scenario: Project scope path` | `#### Scenario: SCN-ATP-002-14 Project scope path` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 25 | `#### Scenario: Global scope path` | `#### Scenario: SCN-ATP-002-15 Global scope path` |
| openspec/changes/add-global-install-scope/specs/ai-tool-paths/spec.md | 30 | `#### Scenario: Windows global path resolution for Codex commands` | `#### Scenario: SCN-ATP-002-16 Windows global path resolution for Codex commands` |
| openspec/changes/add-global-install-scope/specs/cli-config/spec.md | 3 | `### Requirement: Install scope configuration via profile flow` | `### Requirement: REQ-CLC-013 Install scope configuration via profile flow` |
| openspec/changes/add-global-install-scope/specs/cli-config/spec.md | 6 | `#### Scenario: Interactive profile includes install scope` | `#### Scenario: SCN-CLC-013-1 Interactive profile includes install scope` |
| openspec/changes/add-global-install-scope/specs/cli-config/spec.md | 11 | `#### Scenario: Save install scope` | `#### Scenario: SCN-CLC-013-2 Save install scope` |
| openspec/changes/add-global-install-scope/specs/cli-config/spec.md | 15 | `### Requirement: Install scope visibility in config output` | `### Requirement: REQ-CLC-014 Install scope visibility in config output` |
| openspec/changes/add-global-install-scope/specs/cli-config/spec.md | 18 | `#### Scenario: Config list shows install scope` | `#### Scenario: SCN-CLC-014-1 Config list shows install scope` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 3 | `### Requirement: Init install scope selection` | `### Requirement: REQ-CI-017 Init install scope selection` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 6 | `#### Scenario: Scope defaults to global` | `#### Scenario: SCN-CI-017-1 Scope defaults to global` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 11 | `#### Scenario: Scope override via flag` | `#### Scenario: SCN-CI-017-2 Scope override via flag` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 16 | `### Requirement: Init uses effective scope resolution` | `### Requirement: REQ-CI-018 Init uses effective scope resolution` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 19 | `#### Scenario: Effective scope with fallback` | `#### Scenario: SCN-CI-018-1 Effective scope with fallback` |
| openspec/changes/add-global-install-scope/specs/cli-init/spec.md | 25 | `#### Scenario: Unsupported scope selection` | `#### Scenario: SCN-CI-018-2 Unsupported scope selection` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 3 | `### Requirement: Update install scope selection` | `### Requirement: REQ-CU-008 Update install scope selection` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 6 | `#### Scenario: Scope defaults to global config value` | `#### Scenario: SCN-CU-008-1 Scope defaults to global config value` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 11 | `#### Scenario: Scope override via flag` | `#### Scenario: SCN-CU-008-2 Scope override via flag` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 15 | `### Requirement: Scope-aware sync and drift detection` | `### Requirement: REQ-CU-009 Scope-aware sync and drift detection` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 18 | `#### Scenario: Scoped drift detection` | `#### Scenario: SCN-CU-009-1 Scoped drift detection` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 24 | `#### Scenario: Scope fallback during update` | `#### Scenario: SCN-CU-009-2 Scope fallback during update` |
| openspec/changes/add-global-install-scope/specs/cli-update/spec.md | 30 | `#### Scenario: Unsupported scope during update` | `#### Scenario: SCN-CU-009-3 Unsupported scope during update` |
| openspec/changes/add-global-install-scope/specs/command-generation/spec.md | 3 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/changes/add-global-install-scope/specs/command-generation/spec.md | 6 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/changes/add-global-install-scope/specs/command-generation/spec.md | 11 | `#### Scenario: Codex global path remains supported` | `#### Scenario: SCN-CG-002-7 Codex global path remains supported` |
| openspec/changes/add-global-install-scope/specs/command-generation/spec.md | 16 | `### Requirement: Command generator function` | `### Requirement: REQ-CG-003 Command generator function` |
| openspec/changes/add-global-install-scope/specs/command-generation/spec.md | 19 | `#### Scenario: Scoped command generation` | `#### Scenario: SCN-CG-003-5 Scoped command generation` |
| openspec/changes/add-global-install-scope/specs/global-config/spec.md | 3 | `### Requirement: Install scope field in global config` | `### Requirement: REQ-GC-007 Install scope field in global config` |
| openspec/changes/add-global-install-scope/specs/global-config/spec.md | 6 | `#### Scenario: Config shape supports install scope` | `#### Scenario: SCN-GC-007-1 Config shape supports install scope` |
| openspec/changes/add-global-install-scope/specs/global-config/spec.md | 10 | `#### Scenario: Schema evolution default` | `#### Scenario: SCN-GC-007-2 Schema evolution default` |
| openspec/changes/add-global-install-scope/specs/global-config/spec.md | 16 | `#### Scenario: New config default` | `#### Scenario: SCN-GC-007-3 New config default` |
| openspec/changes/add-global-install-scope/specs/global-config/spec.md | 21 | `#### Scenario: Invalid install scope value` | `#### Scenario: SCN-GC-007-4 Invalid install scope value` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 7 | `### Requirement: Install scope preference model` | `### Requirement: REQ-IS-001 Install scope preference model` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 10 | `#### Scenario: Default install scope` | `#### Scenario: SCN-IS-001-1 Default install scope` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 16 | `#### Scenario: Explicit install scope` | `#### Scenario: SCN-IS-001-2 Explicit install scope` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 20 | `### Requirement: Effective scope resolution by tool surface` | `### Requirement: REQ-IS-002 Effective scope resolution by tool surface` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 23 | `#### Scenario: Preferred scope is supported` | `#### Scenario: SCN-IS-002-1 Preferred scope is supported` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 27 | `#### Scenario: Preferred scope is unsupported but alternate is supported` | `#### Scenario: SCN-IS-002-2 Preferred scope is unsupported but alternate is supported` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 33 | `#### Scenario: No supported scope` | `#### Scenario: SCN-IS-002-3 No supported scope` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 38 | `### Requirement: Effective scope reporting` | `### Requirement: REQ-IS-003 Effective scope reporting` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 41 | `#### Scenario: Fallback reporting` | `#### Scenario: SCN-IS-003-1 Fallback reporting` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 45 | `### Requirement: Cross-platform path behavior` | `### Requirement: REQ-IS-004 Cross-platform path behavior` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 48 | `#### Scenario: Global scope path on Windows` | `#### Scenario: SCN-IS-004-1 Global scope path on Windows` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 54 | `### Requirement: Cleanup safety for scope transitions` | `### Requirement: REQ-IS-005 Cleanup safety for scope transitions` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 57 | `#### Scenario: Automatic cleanup for managed files on scope change` | `#### Scenario: SCN-IS-005-1 Automatic cleanup for managed files on scope change` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 62 | `#### Scenario: Cleanup scope boundaries` | `#### Scenario: SCN-IS-005-2 Cleanup scope boundaries` |
| openspec/changes/add-global-install-scope/specs/installation-scope/spec.md | 67 | `#### Scenario: Cleanup failure after successful writes` | `#### Scenario: SCN-IS-005-3 Cleanup failure after successful writes` |
| openspec/changes/add-init-agents-target/specs/ai-tool-paths/spec.md | 5 | `### Requirement: Shared .agents skills target` | `### Requirement: REQ-ATP-006 Shared .agents skills target` |
| openspec/changes/add-init-agents-target/specs/ai-tool-paths/spec.md | 9 | `#### Scenario: Shared agents target paths defined` | `#### Scenario: SCN-ATP-006-1 Shared agents target paths defined` |
| openspec/changes/add-init-agents-target/specs/ai-tool-paths/spec.md | 14 | `#### Scenario: Detection keys off the shared skills subtree` | `#### Scenario: SCN-ATP-006-2 Detection keys off the shared skills subtree` |
| openspec/changes/add-init-agents-target/specs/ai-tool-paths/spec.md | 19 | `#### Scenario: A bare shared root does not select the target` | `#### Scenario: SCN-ATP-006-3 A bare shared root does not select the target` |
| openspec/changes/add-init-agents-target/specs/cli-init/spec.md | 5 | `### Requirement: Shared .agents target initialization` | `### Requirement: REQ-CI-019 Shared .agents target initialization` |
| openspec/changes/add-init-agents-target/specs/cli-init/spec.md | 9 | `#### Scenario: Non-interactive selection of the shared target` | `#### Scenario: SCN-CI-019-1 Non-interactive selection of the shared target` |
| openspec/changes/add-init-agents-target/specs/cli-init/spec.md | 15 | `#### Scenario: Shared agents target skips command-file generation` | `#### Scenario: SCN-CI-019-2 Shared agents target skips command-file generation` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 3 | `### Requirement: Makefile QA Entry Point` | `### Requirement: REQ-DQW-001 Makefile QA Entry Point` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 7 | `#### Scenario: Default QA target runs smoke suite` | `#### Scenario: SCN-DQW-001-1 Default QA target runs smoke suite` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 13 | `#### Scenario: Smoke suite target is directly invokable` | `#### Scenario: SCN-DQW-001-2 Smoke suite target is directly invokable` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 19 | `#### Scenario: Interactive checklist target exists` | `#### Scenario: SCN-DQW-001-3 Interactive checklist target exists` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 25 | `### Requirement: Sandboxed Smoke Scenario Runner` | `### Requirement: REQ-DQW-002 Sandboxed Smoke Scenario Runner` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 29 | `#### Scenario: Scenario execution is environment-isolated` | `#### Scenario: SCN-DQW-002-1 Scenario execution is environment-isolated` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 35 | `#### Scenario: Scenario artifacts are captured for review` | `#### Scenario: SCN-DQW-002-2 Scenario artifacts are captured for review` |
| openspec/changes/add-qa-smoke-harness/specs/developer-qa-workflow/spec.md | 41 | `#### Scenario: High-risk workflow coverage exists` | `#### Scenario: SCN-DQW-002-3 High-risk workflow coverage exists` |
| openspec/changes/add-skill-cli-auto-approval/specs/cli-init/spec.md | 3 | `### Requirement: Skill Generation` | `### Requirement: REQ-CI-012 Skill Generation` |
| openspec/changes/add-skill-cli-auto-approval/specs/cli-init/spec.md | 7 | `#### Scenario: Generating skills for a tool` | `#### Scenario: SCN-CI-012-1 Generating skills for a tool` |
| openspec/changes/add-skill-cli-auto-approval/specs/cli-init/spec.md | 23 | `#### Scenario: Pre-approving the OpenSpec CLI in skill frontmatter` | `#### Scenario: SCN-CI-012-3 Pre-approving the OpenSpec CLI in skill frontmatter` |
| openspec/changes/add-skill-cli-auto-approval/specs/command-generation/spec.md | 3 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/changes/add-skill-cli-auto-approval/specs/command-generation/spec.md | 7 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/changes/add-skill-cli-auto-approval/specs/command-generation/spec.md | 15 | `#### Scenario: Claude adapter formatting` | `#### Scenario: SCN-CG-002-2 Claude adapter formatting` |
| openspec/changes/add-skill-cli-auto-approval/specs/command-generation/spec.md | 22 | `#### Scenario: Cursor adapter formatting` | `#### Scenario: SCN-CG-002-3 Cursor adapter formatting` |
| openspec/changes/add-skill-cli-auto-approval/specs/command-generation/spec.md | 28 | `#### Scenario: Windsurf adapter formatting` | `#### Scenario: SCN-CG-002-4 Windsurf adapter formatting` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 3 | `### Requirement: Next Artifact Discovery` | `### Requirement: REQ-CAW-002 Next Artifact Discovery` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 7 | `#### Scenario: Discover next artifacts from status output` | `#### Scenario: SCN-CAW-002-1 Discover next artifacts from status output` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 14 | `#### Scenario: Status names the command that moves the change forward` | `#### Scenario: SCN-CAW-002-2 Status names the command that moves the change forward` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 23 | `#### Scenario: The named command carries the store selection` | `#### Scenario: SCN-CAW-002-3 The named command carries the store selection` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 28 | `#### Scenario: Both surfaces name the same command` | `#### Scenario: SCN-CAW-002-4 Both surfaces name the same command` |
| openspec/changes/add-status-next-step/specs/cli-artifact-workflow/spec.md | 34 | `#### Scenario: No next step resolves` | `#### Scenario: SCN-CAW-002-5 No next step resolves` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 3 | `### Requirement: Command surface capability resolution` | `### Requirement: REQ-CI-020 Command surface capability resolution` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 6 | `#### Scenario: Explicit command surface override` | `#### Scenario: SCN-CI-020-1 Explicit command surface override` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 11 | `#### Scenario: Inferred command surface from adapter presence` | `#### Scenario: SCN-CI-020-2 Inferred command surface from adapter presence` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 16 | `#### Scenario: Inferred command surface for skills-only tool` | `#### Scenario: SCN-CI-020-3 Inferred command surface for skills-only tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 22 | `#### Scenario: Inferred command surface without adapter or skills` | `#### Scenario: SCN-CI-020-4 Inferred command surface without adapter or skills` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 28 | `### Requirement: Delivery compatibility by tool command surface` | `### Requirement: REQ-CI-021 Delivery compatibility by tool command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 31 | `#### Scenario: Both delivery for adapter-backed tool` | `#### Scenario: SCN-CI-021-1 Both delivery for adapter-backed tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 37 | `#### Scenario: Both delivery for skills-invocable tool` | `#### Scenario: SCN-CI-021-2 Both delivery for skills-invocable tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 43 | `#### Scenario: Both delivery for none command surface` | `#### Scenario: SCN-CI-021-3 Both delivery for none command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 49 | `#### Scenario: Skills delivery for adapter-backed tool` | `#### Scenario: SCN-CI-021-4 Skills delivery for adapter-backed tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 55 | `#### Scenario: Skills delivery for skills-invocable tool` | `#### Scenario: SCN-CI-021-5 Skills delivery for skills-invocable tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 61 | `#### Scenario: Skills delivery for none command surface` | `#### Scenario: SCN-CI-021-6 Skills delivery for none command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 67 | `#### Scenario: Commands delivery for adapter-backed tool` | `#### Scenario: SCN-CI-021-7 Commands delivery for adapter-backed tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 73 | `#### Scenario: Commands delivery for skills-invocable tool` | `#### Scenario: SCN-CI-021-8 Commands delivery for skills-invocable tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 80 | `#### Scenario: Commands delivery for mixed tool selection` | `#### Scenario: SCN-CI-021-9 Commands delivery for mixed tool selection` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 87 | `#### Scenario: Commands delivery for unsupported command surface` | `#### Scenario: SCN-CI-021-10 Commands delivery for unsupported command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 93 | `#### Scenario: Interactive handling for unsupported command surface` | `#### Scenario: SCN-CI-021-11 Interactive handling for unsupported command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 100 | `### Requirement: Init compatibility signaling` | `### Requirement: REQ-CI-022 Init compatibility signaling` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 103 | `#### Scenario: Interactive compatibility note` | `#### Scenario: SCN-CI-022-1 Interactive compatibility note` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 109 | `#### Scenario: Non-interactive compatibility summary for skills-invocable tools` | `#### Scenario: SCN-CI-022-2 Non-interactive compatibility summary for skills-invocable tools` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-init/spec.md | 116 | `#### Scenario: Non-interactive compatibility failure` | `#### Scenario: SCN-CI-022-3 Non-interactive compatibility failure` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 3 | `### Requirement: Delivery sync by command surface capability` | `### Requirement: REQ-CU-010 Delivery sync by command surface capability` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 6 | `#### Scenario: Commands delivery for adapter-backed configured tool` | `#### Scenario: SCN-CU-010-1 Commands delivery for adapter-backed configured tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 13 | `#### Scenario: Commands delivery for skills-invocable configured tool` | `#### Scenario: SCN-CU-010-2 Commands delivery for skills-invocable configured tool` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 21 | `#### Scenario: Commands delivery with unsupported command surface` | `#### Scenario: SCN-CU-010-3 Commands delivery with unsupported command surface` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 28 | `### Requirement: Configured-tool detection for skills-invocable command surfaces` | `### Requirement: REQ-CU-011 Configured-tool detection for skills-invocable command surfaces` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 31 | `#### Scenario: Skills-invocable tool under commands delivery` | `#### Scenario: SCN-CU-011-1 Skills-invocable tool under commands delivery` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 39 | `### Requirement: Update summary reflects effective per-tool delivery` | `### Requirement: REQ-CU-012 Update summary reflects effective per-tool delivery` |
| openspec/changes/add-tool-command-surface-capabilities/specs/cli-update/spec.md | 42 | `#### Scenario: Summary for skills-invocable tools in commands delivery` | `#### Scenario: SCN-CU-012-1 Summary for skills-invocable tools in commands delivery` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 3 | `### Requirement: Update Workflow Command` | `### Requirement: REQ-OUS-001 Update Workflow Command` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 7 | `#### Scenario: Select the change to update` | `#### Scenario: SCN-OUS-001-1 Select the change to update` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 14 | `#### Scenario: Revise without advancing the frontier` | `#### Scenario: SCN-OUS-001-2 Revise without advancing the frontier` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 20 | `#### Scenario: Missing artifacts are deferred to continue` | `#### Scenario: SCN-OUS-001-3 Missing artifacts are deferred to continue` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 26 | `#### Scenario: Update stays within the plan` | `#### Scenario: SCN-OUS-001-4 Update stays within the plan` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 32 | `### Requirement: Schema-Driven Artifact Resolution` | `### Requirement: REQ-OUS-002 Schema-Driven Artifact Resolution` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 36 | `#### Scenario: Reads the artifact set from status` | `#### Scenario: SCN-OUS-002-1 Reads the artifact set from status` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 42 | `#### Scenario: Does not branch on hardcoded artifact names` | `#### Scenario: SCN-OUS-002-2 Does not branch on hardcoded artifact names` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 48 | `#### Scenario: Works for a custom schema` | `#### Scenario: SCN-OUS-002-3 Works for a custom schema` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 54 | `#### Scenario: Resolve artifact paths cross-platform` | `#### Scenario: SCN-OUS-002-4 Resolve artifact paths cross-platform` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 60 | `#### Scenario: Edit the concrete files of a glob artifact` | `#### Scenario: SCN-OUS-002-5 Edit the concrete files of a glob artifact` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 66 | `#### Scenario: A missing companion file under a populated glob artifact` | `#### Scenario: SCN-OUS-002-6 A missing companion file under a populated glob artifact` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 75 | `#### Scenario: Required inputs are no longer available` | `#### Scenario: SCN-OUS-002-7 Required inputs are no longer available` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 80 | `#### Scenario: Schema delegates companion creation` | `#### Scenario: SCN-OUS-002-8 Schema delegates companion creation` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 86 | `#### Scenario: Intentionally skipped artifact` | `#### Scenario: SCN-OUS-002-9 Intentionally skipped artifact` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 91 | `### Requirement: Bidirectional Coherence Review` | `### Requirement: REQ-OUS-003 Bidirectional Coherence Review` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 95 | `#### Scenario: Reconcile related artifacts after an edit` | `#### Scenario: SCN-OUS-003-1 Reconcile related artifacts after an edit` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 101 | `#### Scenario: Upstream artifact may be revised` | `#### Scenario: SCN-OUS-003-2 Upstream artifact may be revised` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 107 | `#### Scenario: Coherence review with no specific edit` | `#### Scenario: SCN-OUS-003-3 Coherence review with no specific edit` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 113 | `#### Scenario: Coherent change yields no changes` | `#### Scenario: SCN-OUS-003-4 Coherent change yields no changes` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 118 | `### Requirement: Next-Step Guidance` | `### Requirement: REQ-OUS-004 Next-Step Guidance` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 122 | `#### Scenario: Updating an already-implemented change` | `#### Scenario: SCN-OUS-004-1 Updating an already-implemented change` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 129 | `#### Scenario: Next step when artifacts are incomplete` | `#### Scenario: SCN-OUS-004-2 Next step when artifacts are incomplete` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 134 | `#### Scenario: Next step when the change is fully done` | `#### Scenario: SCN-OUS-004-3 Next step when the change is fully done` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 139 | `### Requirement: User-Confirmed Incremental Application` | `### Requirement: REQ-OUS-005 User-Confirmed Incremental Application` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 143 | `#### Scenario: Confirm before writing` | `#### Scenario: SCN-OUS-005-1 Confirm before writing` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 149 | `#### Scenario: Rejected revision is not written` | `#### Scenario: SCN-OUS-005-2 Rejected revision is not written` |
| openspec/changes/add-update-workflow/specs/opsx-update-skill/spec.md | 155 | `#### Scenario: Intent change is redirected to a new change` | `#### Scenario: SCN-OUS-005-3 Intent change is redirected to a new change` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 3 | `### Requirement: Bulk validation SHALL provide an opt-in item-findings report` | `### Requirement: REQ-CLIV-013 Bulk validation SHALL provide an opt-in item-findings report` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 7 | `#### Scenario: Default and explicit bulk full output remain compatible` | `#### Scenario: SCN-CLIV-013-1 Default and explicit bulk full output remain compatible` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 14 | `#### Scenario: Explicit report values select a bulk report` | `#### Scenario: SCN-CLIV-013-2 Explicit report values select a bulk report` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 19 | `#### Scenario: Explicit report values do not alias targeted or interactive flows` | `#### Scenario: SCN-CLIV-013-3 Explicit report values do not alias targeted or interactive flows` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 24 | `#### Scenario: A changes-only report retains changes scope` | `#### Scenario: SCN-CLIV-013-4 A changes-only report retains changes scope` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 29 | `#### Scenario: A specs-only report retains specs scope` | `#### Scenario: SCN-CLIV-013-5 A specs-only report retains specs scope` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 34 | `#### Scenario: Combined active scopes normalize to all` | `#### Scenario: SCN-CLIV-013-6 Combined active scopes normalize to all` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 39 | `#### Scenario: Archived and active scopes cannot be combined for a report` | `#### Scenario: SCN-CLIV-013-7 Archived and active scopes cannot be combined for a report` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 45 | `#### Scenario: Invalid human report requests fail before work` | `#### Scenario: SCN-CLIV-013-8 Invalid human report requests fail before work` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 52 | `#### Scenario: Invalid JSON report requests return one stable diagnostic` | `#### Scenario: SCN-CLIV-013-9 Invalid JSON report requests return one stable diagnostic` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 61 | `#### Scenario: Missing report arguments retain parser errors` | `#### Scenario: SCN-CLIV-013-10 Missing report arguments retain parser errors` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 68 | `#### Scenario: Root and scope-discovery failures remain diagnostics` | `#### Scenario: SCN-CLIV-013-11 Root and scope-discovery failures remain diagnostics` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 76 | `#### Scenario: Findings JSON uses an exact distinct contract` | `#### Scenario: SCN-CLIV-013-12 Findings JSON uses an exact distinct contract` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 86 | `#### Scenario: Findings JSON is not the documented full-v1 document` | `#### Scenario: SCN-CLIV-013-13 Findings JSON is not the documented full-v1 document` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 94 | `#### Scenario: Item findings project whole issue-bearing records` | `#### Scenario: SCN-CLIV-013-14 Item findings project whole issue-bearing records` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 103 | `#### Scenario: Every item issue severity counts as an item finding` | `#### Scenario: SCN-CLIV-013-15 Every item issue severity counts as an item finding` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 111 | `#### Scenario: Item counts exclude top-level advisories` | `#### Scenario: SCN-CLIV-013-16 Item counts exclude top-level advisories` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 118 | `#### Scenario: Zero item findings in a non-empty scope remain auditable` | `#### Scenario: SCN-CLIV-013-17 Zero item findings in a non-empty scope remain auditable` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 126 | `#### Scenario: Empty JSON scope is explicit and successful` | `#### Scenario: SCN-CLIV-013-18 Empty JSON scope is explicit and successful` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 133 | `#### Scenario: Human findings use independently ordered streams` | `#### Scenario: SCN-CLIV-013-19 Human findings use independently ordered streams` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 145 | `#### Scenario: Human output distinguishes no item findings from advisories` | `#### Scenario: SCN-CLIV-013-20 Human output distinguishes no item findings from advisories` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 154 | `#### Scenario: Human empty scope is explicit and successful` | `#### Scenario: SCN-CLIV-013-21 Human empty scope is explicit and successful` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 161 | `#### Scenario: Full and findings verdicts remain equal` | `#### Scenario: SCN-CLIV-013-22 Full and findings verdicts remain equal` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 169 | `#### Scenario: Completion support follows existing shell capabilities` | `#### Scenario: SCN-CLIV-013-23 Completion support follows existing shell capabilities` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 177 | `#### Scenario: Findings output is cross-platform` | `#### Scenario: SCN-CLIV-013-24 Findings output is cross-platform` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 185 | `### Requirement: Bulk and filtered validation` | `### Requirement: REQ-CLIV-008 Bulk and filtered validation` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 189 | `#### Scenario: Validate everything` | `#### Scenario: SCN-CLIV-008-1 Validate everything` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 197 | `#### Scenario: Scope of bulk validation` | `#### Scenario: SCN-CLIV-008-2 Scope of bulk validation` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 206 | `#### Scenario: Validate all changes` | `#### Scenario: SCN-CLIV-008-3 Validate all changes` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 213 | `#### Scenario: Validate all specs` | `#### Scenario: SCN-CLIV-008-4 Validate all specs` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 220 | `### Requirement: Validation options and progress indication` | `### Requirement: REQ-CLIV-009 Validation options and progress indication` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 224 | `#### Scenario: Strict validation` | `#### Scenario: SCN-CLIV-009-1 Strict validation` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 231 | `#### Scenario: JSON output` | `#### Scenario: SCN-CLIV-009-2 JSON output` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 238 | `#### Scenario: JSON output schema for bulk validation` | `#### Scenario: SCN-CLIV-009-3 JSON output schema for bulk validation` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 249 | `#### Scenario: Show validation progress` | `#### Scenario: SCN-CLIV-009-4 Show validation progress` |
| openspec/changes/add-validation-findings-report/specs/cli-validate/spec.md | 256 | `#### Scenario: Concurrency limits for performance` | `#### Scenario: SCN-CLIV-009-5 Concurrency limits for performance` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 3 | `### Requirement: Report the installed version` | `### Requirement: REQ-CLV-001 Report the installed version` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 7 | `#### Scenario: Human-readable version report` | `#### Scenario: SCN-CLV-001-1 Human-readable version report` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 14 | `#### Scenario: Machine-readable version report` | `#### Scenario: SCN-CLV-001-2 Machine-readable version report` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 23 | `#### Scenario: Source checkout` | `#### Scenario: SCN-CLV-001-3 Source checkout` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 29 | `#### Scenario: Existing version flag remains compatible` | `#### Scenario: SCN-CLV-001-4 Existing version flag remains compatible` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 35 | `### Requirement: Check for an available update on request` | `### Requirement: REQ-CLV-002 Check for an available update on request` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 39 | `#### Scenario: Update is available` | `#### Scenario: SCN-CLV-002-1 Update is available` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 49 | `#### Scenario: Installed version is current` | `#### Scenario: SCN-CLV-002-2 Installed version is current` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 56 | `#### Scenario: Update check is disabled` | `#### Scenario: SCN-CLV-002-3 Update check is disabled` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 65 | `#### Scenario: Registry is unavailable` | `#### Scenario: SCN-CLV-002-4 Registry is unavailable` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 73 | `#### Scenario: Machine-readable update result` | `#### Scenario: SCN-CLV-002-5 Machine-readable update result` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 82 | `### Requirement: Preserve update-check safeguards` | `### Requirement: REQ-CLV-003 Preserve update-check safeguards` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 86 | `#### Scenario: Explicit privacy opt-out` | `#### Scenario: SCN-CLV-003-1 Explicit privacy opt-out` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 93 | `#### Scenario: Unsafe configured registry` | `#### Scenario: SCN-CLV-003-2 Unsafe configured registry` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 100 | `#### Scenario: Untrusted version response` | `#### Scenario: SCN-CLV-003-3 Untrusted version response` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 106 | `### Requirement: Version reporting is read-only` | `### Requirement: REQ-CLV-004 Version reporting is read-only` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 110 | `#### Scenario: Update is available` | `#### Scenario: SCN-CLV-004-1 Update is available` |
| openspec/changes/add-version-command/specs/cli-version/spec.md | 116 | `#### Scenario: Upgrade option is rejected` | `#### Scenario: SCN-CLV-004-2 Upgrade option is rejected` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 3 | `### Requirement: Provide current archive operation inputs` | `### Requirement: REQ-CAI-001 Provide current archive operation inputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 7 | `#### Scenario: Archive JSON contains context and guidance` | `#### Scenario: SCN-CAI-001-1 Archive JSON contains context and guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 14 | `#### Scenario: Archive text contains context and guidance` | `#### Scenario: SCN-CAI-001-2 Archive text contains context and guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 20 | `#### Scenario: Archive inputs are absent` | `#### Scenario: SCN-CAI-001-3 Archive inputs are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 26 | `#### Scenario: Archive reads current config` | `#### Scenario: SCN-CAI-001-4 Archive reads current config` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 31 | `### Requirement: Scope archive inputs to a valid selected root` | `### Requirement: REQ-CAI-002 Scope archive inputs to a valid selected root` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 35 | `#### Scenario: Change is missing` | `#### Scenario: SCN-CAI-002-1 Change is missing` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 40 | `#### Scenario: Change does not exist in the selected root` | `#### Scenario: SCN-CAI-002-2 Change does not exist in the selected root` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 45 | `#### Scenario: Store is selected` | `#### Scenario: SCN-CAI-002-3 Store is selected` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 50 | `### Requirement: Keep archive instructions read-only` | `### Requirement: REQ-CAI-003 Keep archive instructions read-only` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-archive-instructions/spec.md | 54 | `#### Scenario: Archive instructions are requested` | `#### Scenario: SCN-CAI-003-1 Archive instructions are requested` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 3 | `### Requirement: Apply instructions include current operation inputs` | `### Requirement: REQ-CAW-016 Apply instructions include current operation inputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 7 | `#### Scenario: Apply JSON contains context and guidance` | `#### Scenario: SCN-CAW-016-1 Apply JSON contains context and guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 14 | `#### Scenario: Apply text contains context and guidance` | `#### Scenario: SCN-CAW-016-2 Apply text contains context and guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 21 | `#### Scenario: Apply has artifact rules only` | `#### Scenario: SCN-CAW-016-3 Apply has artifact rules only` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 26 | `#### Scenario: Apply reads current config` | `#### Scenario: SCN-CAW-016-4 Apply reads current config` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/cli-artifact-workflow/spec.md | 31 | `#### Scenario: Apply operation inputs are absent` | `#### Scenario: SCN-CAW-016-5 Apply operation inputs are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 3 | `### Requirement: Load operation guidance independently` | `### Requirement: REQ-COL-007 Load operation guidance independently` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 7 | `#### Scenario: Valid operation guidance` | `#### Scenario: SCN-COL-007-1 Valid operation guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 12 | `#### Scenario: One operation is malformed` | `#### Scenario: SCN-COL-007-2 One operation is malformed` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 18 | `#### Scenario: Operations field is not an object` | `#### Scenario: SCN-COL-007-3 Operations field is not an object` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 24 | `#### Scenario: Unknown operation ID` | `#### Scenario: SCN-COL-007-4 Unknown operation ID` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 30 | `#### Scenario: Unknown fields in an operation` | `#### Scenario: SCN-COL-007-5 Unknown fields in an operation` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/config-loading/spec.md | 36 | `#### Scenario: Empty and formatted guidance` | `#### Scenario: SCN-COL-007-6 Empty and formatted guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 3 | `### Requirement: Expose current context to operation instruction surfaces` | `### Requirement: REQ-COI-004 Expose current context to operation instruction surfaces` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 7 | `#### Scenario: Apply requests current context` | `#### Scenario: SCN-COI-004-1 Apply requests current context` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 12 | `#### Scenario: Archive requests current context` | `#### Scenario: SCN-COI-004-2 Archive requests current context` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 17 | `#### Scenario: Selected store supplies context` | `#### Scenario: SCN-COI-004-3 Selected store supplies context` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 22 | `#### Scenario: Context changes between operations` | `#### Scenario: SCN-COI-004-4 Context changes between operations` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 27 | `#### Scenario: Context is absent` | `#### Scenario: SCN-COI-004-5 Context is absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 32 | `### Requirement: Consume operation context as required agent instruction` | `### Requirement: REQ-COI-005 Consume operation context as required agent instruction` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 36 | `#### Scenario: Skill applies project context` | `#### Scenario: SCN-COI-005-1 Skill applies project context` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/context-injection/spec.md | 43 | `#### Scenario: Context conflicts with controlling workflow input` | `#### Scenario: SCN-COI-005-2 Context conflicts with controlling workflow input` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 3 | `### Requirement: Configure operation guidance` | `### Requirement: REQ-OG-001 Configure operation guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 7 | `#### Scenario: Configure apply and archive guidance` | `#### Scenario: SCN-OG-001-1 Configure apply and archive guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 13 | `#### Scenario: Operation has no guidance` | `#### Scenario: SCN-OG-001-2 Operation has no guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 18 | `### Requirement: Consume operation guidance as optional additive advice` | `### Requirement: REQ-OG-002 Consume operation guidance as optional additive advice` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 22 | `#### Scenario: Guidance complements built-in flow` | `#### Scenario: SCN-OG-002-1 Guidance complements built-in flow` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 28 | `#### Scenario: Guidance conflicts with built-in behavior` | `#### Scenario: SCN-OG-002-2 Guidance conflicts with built-in behavior` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 37 | `### Requirement: Load operation guidance at execution time` | `### Requirement: REQ-OG-003 Load operation guidance at execution time` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 41 | `#### Scenario: Guidance changes after skill generation` | `#### Scenario: SCN-OG-003-1 Guidance changes after skill generation` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 46 | `#### Scenario: Selected store supplies guidance` | `#### Scenario: SCN-OG-003-2 Selected store supplies guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 51 | `### Requirement: Preserve guidance content` | `### Requirement: REQ-OG-004 Preserve guidance content` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/operation-guidance/spec.md | 55 | `#### Scenario: Multi-line Markdown guidance` | `#### Scenario: SCN-OG-004-1 Multi-line Markdown guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 3 | `### Requirement: Consume current apply operation inputs` | `### Requirement: REQ-OAS-001 Consume current apply operation inputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 7 | `#### Scenario: Apply context and guidance are configured` | `#### Scenario: SCN-OAS-001-1 Apply context and guidance are configured` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 15 | `#### Scenario: Apply operation inputs are absent` | `#### Scenario: SCN-OAS-001-2 Apply operation inputs are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 20 | `#### Scenario: Runtime instructions conflict with apply state` | `#### Scenario: SCN-OAS-001-3 Runtime instructions conflict with apply state` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 30 | `#### Scenario: Apply consumes runtime instructions without copying them` | `#### Scenario: SCN-OAS-001-4 Apply consumes runtime instructions without copying them` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 35 | `### Requirement: Preserve apply workflow behavior` | `### Requirement: REQ-OAS-002 Preserve apply workflow behavior` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-apply-skill/spec.md | 39 | `#### Scenario: Runtime inputs are consumed` | `#### Scenario: SCN-OAS-002-1 Runtime inputs are consumed` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 3 | `### Requirement: Load current archive operation inputs` | `### Requirement: REQ-OPAS-007 Load current archive operation inputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 7 | `#### Scenario: Archive context and guidance are configured` | `#### Scenario: SCN-OPAS-007-1 Archive context and guidance are configured` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 17 | `#### Scenario: Archive operation inputs are absent` | `#### Scenario: SCN-OPAS-007-2 Archive operation inputs are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 22 | `#### Scenario: Archive instruction lookup fails` | `#### Scenario: SCN-OPAS-007-3 Archive instruction lookup fails` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 29 | `#### Scenario: Archive context or guidance conflicts with the workflow` | `#### Scenario: SCN-OPAS-007-4 Archive context or guidance conflicts with the workflow` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 39 | `#### Scenario: Archive consumes runtime instructions without copying them` | `#### Scenario: SCN-OPAS-007-5 Archive consumes runtime instructions without copying them` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 44 | `### Requirement: Preserve archive execution behavior` | `### Requirement: REQ-OPAS-008 Preserve archive execution behavior` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 48 | `#### Scenario: Runtime inputs are loaded` | `#### Scenario: SCN-OPAS-008-1 Runtime inputs are loaded` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 53 | `### Requirement: Carry artifact rules into archive-driven spec sync` | `### Requirement: REQ-OPAS-009 Carry artifact rules into archive-driven spec sync` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 57 | `#### Scenario: Archive discovers delta specs from the specs artifact` | `#### Scenario: SCN-OPAS-009-1 Archive discovers delta specs from the specs artifact` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 63 | `#### Scenario: Schema or change has no specs outputs` | `#### Scenario: SCN-OPAS-009-2 Schema or change has no specs outputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 69 | `#### Scenario: Archive sync writes main specs` | `#### Scenario: SCN-OPAS-009-3 Archive sync writes main specs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 78 | `#### Scenario: Specs instruction lookup fails` | `#### Scenario: SCN-OPAS-009-4 Specs instruction lookup fails` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 86 | `#### Scenario: User archives without syncing` | `#### Scenario: SCN-OPAS-009-5 User archives without syncing` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 92 | `#### Scenario: Artifact rules are absent` | `#### Scenario: SCN-OPAS-009-6 Artifact rules are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 97 | `#### Scenario: Artifact rules contain operation-like advice` | `#### Scenario: SCN-OPAS-009-7 Artifact rules contain operation-like advice` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-archive-skill/spec.md | 103 | `#### Scenario: Artifact rule text is consumed` | `#### Scenario: SCN-OPAS-009-8 Artifact rule text is consumed` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 3 | `### Requirement: Load current archive inputs for a batch` | `### Requirement: REQ-OBAS-001 Load current archive inputs for a batch` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 7 | `#### Scenario: Batch context and guidance are configured` | `#### Scenario: SCN-OBAS-001-1 Batch context and guidance are configured` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 14 | `#### Scenario: Batch operation inputs are absent` | `#### Scenario: SCN-OBAS-001-2 Batch operation inputs are absent` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 19 | `#### Scenario: Batch archive instruction lookup fails` | `#### Scenario: SCN-OBAS-001-3 Batch archive instruction lookup fails` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 26 | `#### Scenario: Context or guidance conflicts with batch behavior` | `#### Scenario: SCN-OBAS-001-4 Context or guidance conflicts with batch behavior` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 36 | `### Requirement: Carry artifact rules into each batch spec sync` | `### Requirement: REQ-OBAS-002 Carry artifact rules into each batch spec sync` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 40 | `#### Scenario: Discover specs inputs per change` | `#### Scenario: SCN-OBAS-002-1 Discover specs inputs per change` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 46 | `#### Scenario: Selected changes use different schemas` | `#### Scenario: SCN-OBAS-002-2 Selected changes use different schemas` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 55 | `#### Scenario: A batch specs instruction lookup fails` | `#### Scenario: SCN-OBAS-002-3 A batch specs instruction lookup fails` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 62 | `#### Scenario: A batch change has no specs outputs` | `#### Scenario: SCN-OBAS-002-4 A batch change has no specs outputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 68 | `#### Scenario: Batch artifact rules remain separate from archive guidance` | `#### Scenario: SCN-OBAS-002-5 Batch artifact rules remain separate from archive guidance` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/opsx-bulk-archive-skill/spec.md | 75 | `#### Scenario: Batch has no artifact rules` | `#### Scenario: SCN-OBAS-002-6 Batch has no artifact rules` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 3 | `### Requirement: Carry artifact rules into standalone spec sync` | `### Requirement: REQ-SSS-004 Carry artifact rules into standalone spec sync` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 7 | `#### Scenario: Discover delta specs from status` | `#### Scenario: SCN-SSS-004-1 Discover delta specs from status` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 13 | `#### Scenario: Standalone sync fetches current artifact rules` | `#### Scenario: SCN-SSS-004-2 Standalone sync fetches current artifact rules` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 20 | `#### Scenario: Specs instruction lookup fails` | `#### Scenario: SCN-SSS-004-3 Specs instruction lookup fails` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 27 | `#### Scenario: Schema or change has no specs outputs` | `#### Scenario: SCN-SSS-004-4 Schema or change has no specs outputs` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 33 | `#### Scenario: Archive supplies an artifact-rule snapshot` | `#### Scenario: SCN-SSS-004-5 Archive supplies an artifact-rule snapshot` |
| openspec/changes/extend-config-injection-to-apply-archive/specs/specs-sync-skill/spec.md | 39 | `#### Scenario: Artifact rules are absent` | `#### Scenario: SCN-SSS-004-6 Artifact rules are absent` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-init/spec.md | 3 | `### Requirement: Oh My Pi tool supported in init` | `### Requirement: REQ-CI-023 Oh My Pi tool supported in init` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-init/spec.md | 6 | `#### Scenario: Selecting Oh My Pi during init` | `#### Scenario: SCN-CI-023-1 Selecting Oh My Pi during init` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-init/spec.md | 13 | `#### Scenario: Oh My Pi listed when .omp directory is detected` | `#### Scenario: SCN-CI-023-2 Oh My Pi listed when .omp directory is detected` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-update/spec.md | 3 | `### Requirement: Oh My Pi tool supported in update` | `### Requirement: REQ-CU-013 Oh My Pi tool supported in update` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-update/spec.md | 6 | `#### Scenario: Updating Oh My Pi skill files` | `#### Scenario: SCN-CU-013-1 Updating Oh My Pi skill files` |
| openspec/changes/feat-add-omp-tool-support/specs/cli-update/spec.md | 11 | `#### Scenario: Updating Oh My Pi command files` | `#### Scenario: SCN-CU-013-2 Updating Oh My Pi command files` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 3 | `### Requirement: Oh My Pi command file generation` | `### Requirement: REQ-OMPT-001 Oh My Pi command file generation` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 8 | `#### Scenario: Command file path follows OMP convention` | `#### Scenario: SCN-OMPT-001-1 Command file path follows OMP convention` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 12 | `#### Scenario: Command file format includes description frontmatter` | `#### Scenario: SCN-OMPT-001-2 Command file format includes description frontmatter` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 17 | `#### Scenario: Command body uses hyphen-based references` | `#### Scenario: SCN-OMPT-001-3 Command body uses hyphen-based references` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 21 | `#### Scenario: Command body exposes user arguments via $@` | `#### Scenario: SCN-OMPT-001-4 Command body exposes user arguments via $@` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 26 | `### Requirement: Oh My Pi skill file generation` | `### Requirement: REQ-OMPT-002 Oh My Pi skill file generation` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 31 | `#### Scenario: Skill file path follows OMP convention` | `#### Scenario: SCN-OMPT-002-1 Skill file path follows OMP convention` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 35 | `#### Scenario: Skill body uses hyphen-based references` | `#### Scenario: SCN-OMPT-002-2 Skill body uses hyphen-based references` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 39 | `### Requirement: Oh My Pi tool detection` | `### Requirement: REQ-OMPT-003 Oh My Pi tool detection` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 42 | `#### Scenario: Auto-detection when .omp directory exists` | `#### Scenario: SCN-OMPT-003-1 Auto-detection when .omp directory exists` |
| openspec/changes/feat-add-omp-tool-support/specs/oh-my-pi-tool/spec.md | 46 | `#### Scenario: Oh My Pi appears in the tool selection list` | `#### Scenario: SCN-OMPT-003-2 Oh My Pi appears in the tool selection list` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 3 | `### Requirement: Capability Retirement` | `### Requirement: REQ-CA-005 Capability Retirement` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 7 | `#### Scenario: Deciding that a rebuilt spec cannot be written` | `#### Scenario: SCN-CA-005-1 Deciding that a rebuilt spec cannot be written` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 14 | `#### Scenario: Validation was skipped` | `#### Scenario: SCN-CA-005-2 Validation was skipped` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 20 | `#### Scenario: Retirement is not declared` | `#### Scenario: SCN-CA-005-3 Retirement is not declared` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 27 | `#### Scenario: Delta removes the capability's last requirement` | `#### Scenario: SCN-CA-005-4 Delta removes the capability's last requirement` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 38 | `#### Scenario: Retirement is deferred until every spec is written` | `#### Scenario: SCN-CA-005-5 Retirement is deferred until every spec is written` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 45 | `#### Scenario: Capability directory holds other files` | `#### Scenario: SCN-CA-005-6 Capability directory holds other files` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 50 | `#### Scenario: Removal was already synced` | `#### Scenario: SCN-CA-005-7 Removal was already synced` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 56 | `#### Scenario: Content the merge cannot account for` | `#### Scenario: SCN-CA-005-8 Content the merge cannot account for` |
| openspec/changes/fix-archive-retirement-guidance/specs/cli-archive/spec.md | 64 | `#### Scenario: Main spec is already gone` | `#### Scenario: SCN-CA-005-9 Main spec is already gone` |
| openspec/changes/fix-cli-local-date-semantics/specs/change-creation/spec.md | 3 | `### Requirement: Local Creation Date Metadata` | `### Requirement: REQ-CHC-004 Local Creation Date Metadata` |
| openspec/changes/fix-cli-local-date-semantics/specs/change-creation/spec.md | 7 | `#### Scenario: Create change across a UTC date boundary` | `#### Scenario: SCN-CHC-004-1 Create change across a UTC date boundary` |
| openspec/changes/fix-cli-local-date-semantics/specs/cli-archive/spec.md | 3 | `### Requirement: Local Archive Date` | `### Requirement: REQ-CA-012 Local Archive Date` |
| openspec/changes/fix-cli-local-date-semantics/specs/cli-archive/spec.md | 7 | `#### Scenario: Archive crosses a UTC date boundary` | `#### Scenario: SCN-CA-012-1 Archive crosses a UTC date boundary` |
| openspec/changes/fix-cli-local-date-semantics/specs/cli-archive/spec.md | 14 | `#### Scenario: Non-interactive archive uses the local date` | `#### Scenario: SCN-CA-012-2 Non-interactive archive uses the local date` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 3 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 7 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 15 | `#### Scenario: Claude adapter formatting` | `#### Scenario: SCN-CG-002-2 Claude adapter formatting` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 21 | `#### Scenario: Cursor adapter formatting` | `#### Scenario: SCN-CG-002-3 Cursor adapter formatting` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 27 | `#### Scenario: Windsurf adapter formatting` | `#### Scenario: SCN-CG-002-4 Windsurf adapter formatting` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 33 | `#### Scenario: OpenCode adapter formatting` | `#### Scenario: SCN-CG-002-8 OpenCode adapter formatting` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 42 | `### Requirement: Legacy cleanup for renamed OpenCode command directory` | `### Requirement: REQ-CG-006 Legacy cleanup for renamed OpenCode command directory` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 46 | `#### Scenario: Detect old singular-path OpenCode command files` | `#### Scenario: SCN-CG-006-1 Detect old singular-path OpenCode command files` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 52 | `#### Scenario: Clean up old OpenCode command files on init` | `#### Scenario: SCN-CG-006-2 Clean up old OpenCode command files on init` |
| openspec/changes/fix-opencode-commands-directory/specs/command-generation/spec.md | 58 | `#### Scenario: Auto-cleanup legacy artifacts in non-interactive mode` | `#### Scenario: SCN-CG-006-3 Auto-cleanup legacy artifacts in non-interactive mode` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 3 | `### Requirement: Schemas command SHALL honor authoritative root selection` | `### Requirement: REQ-SR-011 Schemas command SHALL honor authoritative root selection` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 7 | `#### Scenario: Nearest project root supplies schemas` | `#### Scenario: SCN-SR-011-1 Nearest project root supplies schemas` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 13 | `#### Scenario: Explicit store overrides the current project` | `#### Scenario: SCN-SR-011-2 Explicit store overrides the current project` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 20 | `#### Scenario: Local store pointer supplies schemas` | `#### Scenario: SCN-SR-011-3 Local store pointer supplies schemas` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 26 | `#### Scenario: Global default store supplies schemas` | `#### Scenario: SCN-SR-011-4 Global default store supplies schemas` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 33 | `#### Scenario: Explicit store preserves root-selection precedence` | `#### Scenario: SCN-SR-011-5 Explicit store preserves root-selection precedence` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 39 | `#### Scenario: Nearest root precedes the global default` | `#### Scenario: SCN-SR-011-6 Nearest root precedes the global default` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 45 | `#### Scenario: Rootless listing remains available without registered stores` | `#### Scenario: SCN-SR-011-7 Rootless listing remains available without registered stores` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 51 | `#### Scenario: Registered stores require an authoritative selection` | `#### Scenario: SCN-SR-011-8 Registered stores require an authoritative selection` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 59 | `#### Scenario: Invalid or unavailable store fails closed` | `#### Scenario: SCN-SR-011-9 Invalid or unavailable store fails closed` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 65 | `#### Scenario: Removed store-path option is rejected deliberately` | `#### Scenario: SCN-SR-011-10 Removed store-path option is rejected deliberately` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 70 | `#### Scenario: Success output remains compatible` | `#### Scenario: SCN-SR-011-11 Success output remains compatible` |
| openspec/changes/fix-schemas-root-selection/specs/schema-resolution/spec.md | 76 | `#### Scenario: Store path works across supported platforms` | `#### Scenario: SCN-SR-011-12 Store path works across supported platforms` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 3 | `### Requirement: Requirement bodies SHALL be parsed in full for normative keywords` | `### Requirement: REQ-CLIV-014 Requirement bodies SHALL be parsed in full for normative keywords` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 6 | `#### Scenario: Normative keyword on the second wrapped line (change and spec)` | `#### Scenario: SCN-CLIV-014-1 Normative keyword on the second wrapped line (change and spec)` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 11 | `#### Scenario: Metadata fields precede the description` | `#### Scenario: SCN-CLIV-014-2 Metadata fields precede the description` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 16 | `#### Scenario: Requirement written entirely as a metadata line` | `#### Scenario: SCN-CLIV-014-3 Requirement written entirely as a metadata line` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 21 | `#### Scenario: Stray divider bounds the requirement body` | `#### Scenario: SCN-CLIV-014-4 Stray divider bounds the requirement body` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 26 | `#### Scenario: Single-line requirement is unaffected` | `#### Scenario: SCN-CLIV-014-5 Single-line requirement is unaffected` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 31 | `### Requirement: Fenced code blocks SHALL NOT corrupt extraction or scenario counting` | `### Requirement: REQ-CLIV-015 Fenced code blocks SHALL NOT corrupt extraction or scenario counting` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 34 | `#### Scenario: Fenced block before the prose line` | `#### Scenario: SCN-CLIV-015-1 Fenced block before the prose line` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 39 | `#### Scenario: Fenced scenario is not a real scenario` | `#### Scenario: SCN-CLIV-015-2 Fenced scenario is not a real scenario` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 44 | `### Requirement: A single normative-keyword predicate SHALL be used across readers` | `### Requirement: REQ-CLIV-016 A single normative-keyword predicate SHALL be used across readers` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 47 | `#### Scenario: Keyword detection agrees across readers` | `#### Scenario: SCN-CLIV-016-1 Keyword detection agrees across readers` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 52 | `### Requirement: Non-canonical headers in delta sections SHALL be surfaced without changing recognition` | `### Requirement: REQ-CLIV-017 Non-canonical headers in delta sections SHALL be surfaced without changing recognition` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 55 | `#### Scenario: Stray divider header is reported, not silently skipped` | `#### Scenario: SCN-CLIV-017-1 Stray divider header is reported, not silently skipped` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 61 | `#### Scenario: Nameless requirement header gets a dedicated hint` | `#### Scenario: SCN-CLIV-017-2 Nameless requirement header gets a dedicated hint` |
| openspec/changes/fix-spec-parser-fidelity/specs/cli-validate/spec.md | 66 | `#### Scenario: Bare requirement headers in main specs remain supported` | `#### Scenario: SCN-CLIV-017-3 Bare requirement headers in main specs remain supported` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-archive/spec.md | 3 | `### Requirement: Archive incomplete-task gate SHALL use the tracked-tasks artifact glob` | `### Requirement: REQ-CA-013 Archive incomplete-task gate SHALL use the tracked-tasks artifact glob` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-archive/spec.md | 7 | `#### Scenario: Glob-tasks change with unfinished work cannot archive` | `#### Scenario: SCN-CA-013-1 Glob-tasks change with unfinished work cannot archive` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-archive/spec.md | 15 | `#### Scenario: Archive gate resolves the same tracked files as view` | `#### Scenario: SCN-CA-013-2 Archive gate resolves the same tracked files as view` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-archive/spec.md | 21 | `#### Scenario: Unresolvable schema falls back without error` | `#### Scenario: SCN-CA-013-3 Unresolvable schema falls back without error` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-archive/spec.md | 28 | `#### Scenario: Single top-level tasks file archiving is unchanged` | `#### Scenario: SCN-CA-013-4 Single top-level tasks file archiving is unchanged` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 3 | `### Requirement: Validate SHALL resolve changes by directory existence, matching status` | `### Requirement: REQ-CLIV-018 Validate SHALL resolve changes by directory existence, matching status` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 7 | `#### Scenario: Scaffolded change without proposal.md` | `#### Scenario: SCN-CLIV-018-1 Scaffolded change without proposal.md` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 14 | `#### Scenario: Targeted-resolution parity with status` | `#### Scenario: SCN-CLIV-018-2 Targeted-resolution parity with status` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 20 | `#### Scenario: Bulk validation includes a sole proposal-less change` | `#### Scenario: SCN-CLIV-018-3 Bulk validation includes a sole proposal-less change` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 27 | `#### Scenario: Interactive selector lists proposal-less changes` | `#### Scenario: SCN-CLIV-018-4 Interactive selector lists proposal-less changes` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 33 | `#### Scenario: Resolved-but-invalid change exits non-zero` | `#### Scenario: SCN-CLIV-018-5 Resolved-but-invalid change exits non-zero` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 40 | `#### Scenario: Nested multi-area delta discovery` | `#### Scenario: SCN-CLIV-018-6 Nested multi-area delta discovery` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 47 | `#### Scenario: Change/spec ambiguity is preserved` | `#### Scenario: SCN-CLIV-018-7 Change/spec ambiguity is preserved` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 53 | `#### Scenario: Changes with proposal.md are unaffected` | `#### Scenario: SCN-CLIV-018-8 Changes with proposal.md are unaffected` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 59 | `### Requirement: SHALL/MUST body-keyword hint SHALL apply to main specs` | `### Requirement: REQ-CLIV-019 SHALL/MUST body-keyword hint SHALL apply to main specs` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 63 | `#### Scenario: Main spec with the keyword in the header only` | `#### Scenario: SCN-CLIV-019-1 Main spec with the keyword in the header only` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 70 | `#### Scenario: Actionable-sentence parity with change deltas` | `#### Scenario: SCN-CLIV-019-2 Actionable-sentence parity with change deltas` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 76 | `#### Scenario: Exactly one issue is emitted` | `#### Scenario: SCN-CLIV-019-3 Exactly one issue is emitted` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 83 | `#### Scenario: Requirement missing the keyword entirely still errors` | `#### Scenario: SCN-CLIV-019-4 Requirement missing the keyword entirely still errors` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 89 | `#### Scenario: Keyword present in the body is not flagged` | `#### Scenario: SCN-CLIV-019-5 Keyword present in the body is not flagged` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 95 | `#### Scenario: Lowercase keyword does not satisfy the body requirement` | `#### Scenario: SCN-CLIV-019-6 Lowercase keyword does not satisfy the body requirement` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 101 | `#### Scenario: Header keyword with no body line emits the hint` | `#### Scenario: SCN-CLIV-019-7 Header keyword with no body line emits the hint` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-validate/spec.md | 108 | `#### Scenario: Renamed requirements are not subject to the body-keyword hint` | `#### Scenario: SCN-CLIV-019-8 Renamed requirements are not subject to the body-keyword hint` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 3 | `### Requirement: Task progress SHALL be resolved through the tracked-tasks artifact glob` | `### Requirement: REQ-CV-010 Task progress SHALL be resolved through the tracked-tasks artifact glob` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 9 | `#### Scenario: Nested tasks files under a glob schema` | `#### Scenario: SCN-CV-010-1 Nested tasks files under a glob schema` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 17 | `#### Scenario: Tracked-tasks files resolve the same as status` | `#### Scenario: SCN-CV-010-2 Tracked-tasks files resolve the same as status` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 23 | `#### Scenario: Files exist but tasks unchecked are not Completed` | `#### Scenario: SCN-CV-010-3 Files exist but tasks unchecked are not Completed` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 29 | `#### Scenario: Tracked-tasks artifact identified by apply.tracks, not a fixed id` | `#### Scenario: SCN-CV-010-4 Tracked-tasks artifact identified by apply.tracks, not a fixed id` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 35 | `#### Scenario: Resolution stays scoped to the change directory` | `#### Scenario: SCN-CV-010-5 Resolution stays scoped to the change directory` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 41 | `#### Scenario: Unresolvable schema falls back without error` | `#### Scenario: SCN-CV-010-6 Unresolvable schema falls back without error` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 48 | `#### Scenario: Single top-level tasks file is unchanged` | `#### Scenario: SCN-CV-010-7 Single top-level tasks file is unchanged` |
| openspec/changes/fix-validate-view-resolution-parity/specs/cli-view/spec.md | 54 | `#### Scenario: A change with no tasks anywhere stays Draft` | `#### Scenario: SCN-CV-010-8 A change with no tasks anywhere stays Draft` |
| openspec/changes/fix-windows-archive-claim-release/specs/cli-archive/spec.md | 3 | `### Requirement: Archive Process` | `### Requirement: REQ-CA-003 Archive Process` |
| openspec/changes/fix-windows-archive-claim-release/specs/cli-archive/spec.md | 7 | `#### Scenario: Performing archive` | `#### Scenario: SCN-CA-003-1 Performing archive` |
| openspec/changes/fix-windows-archive-claim-release/specs/cli-archive/spec.md | 20 | `#### Scenario: Archive already exists` | `#### Scenario: SCN-CA-003-2 Archive already exists` |
| openspec/changes/fix-windows-archive-claim-release/specs/cli-archive/spec.md | 26 | `#### Scenario: Successful archive` | `#### Scenario: SCN-CA-003-3 Successful archive` |
| openspec/changes/fix-windows-archive-claim-release/specs/cli-archive/spec.md | 31 | `#### Scenario: Successful archive releases its own claim` | `#### Scenario: SCN-CA-003-4 Successful archive releases its own claim` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 3 | `### Requirement: Status command exits gracefully when no changes exist` | `### Requirement: REQ-GSE-001 Status command exits gracefully when no changes exist` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 6 | `#### Scenario: No changes exist, text mode` | `#### Scenario: SCN-GSE-001-1 No changes exist, text mode` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 10 | `#### Scenario: No changes exist, JSON mode` | `#### Scenario: SCN-GSE-001-2 No changes exist, JSON mode` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 14 | `### Requirement: Existing status validation behavior is preserved` | `### Requirement: REQ-GSE-002 Existing status validation behavior is preserved` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 17 | `#### Scenario: Changes exist but --change not specified` | `#### Scenario: SCN-GSE-002-1 Changes exist but --change not specified` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 21 | `#### Scenario: Specified change does not exist` | `#### Scenario: SCN-GSE-002-2 Specified change does not exist` |
| openspec/changes/graceful-status-no-changes/specs/graceful-status-empty/spec.md | 25 | `#### Scenario: Other commands unaffected` | `#### Scenario: SCN-GSE-002-3 Other commands unaffected` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 3 | `### Requirement: Codex skills path is the supported Codex integration path` | `### Requirement: REQ-ATP-007 Codex skills path is the supported Codex integration path` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 6 | `#### Scenario: Codex skills path defined` | `#### Scenario: SCN-ATP-007-1 Codex skills path defined` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 11 | `#### Scenario: Codex command path is not advertised as supported` | `#### Scenario: SCN-ATP-007-2 Codex command path is not advertised as supported` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 16 | `### Requirement: Codex global prompt cleanup path resolution` | `### Requirement: REQ-ATP-008 Codex global prompt cleanup path resolution` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 19 | `#### Scenario: CODEX_HOME is set` | `#### Scenario: SCN-ATP-008-1 CODEX_HOME is set` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 24 | `#### Scenario: CODEX_HOME is unset` | `#### Scenario: SCN-ATP-008-2 CODEX_HOME is unset` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 29 | `#### Scenario: Cross-platform Codex prompt paths` | `#### Scenario: SCN-ATP-008-3 Cross-platform Codex prompt paths` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 34 | `### Requirement: Codex-managed legacy prompt cleanup patterns reflect the final managed surfaces` | `### Requirement: REQ-ATP-009 Codex-managed legacy prompt cleanup patterns reflect the final managed surfaces` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 37 | `#### Scenario: Global legacy Codex prompts use an exact directory and filename allowlist` | `#### Scenario: SCN-ATP-009-1 Global legacy Codex prompts use an exact directory and filename allowlist` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 43 | `#### Scenario: Repo-local openspec compatibility prompt names` | `#### Scenario: SCN-ATP-009-2 Repo-local openspec compatibility prompt names` |
| openspec/changes/make-codex-skills-only/specs/ai-tool-paths/spec.md | 47 | `#### Scenario: Other Codex prompts are unmanaged` | `#### Scenario: SCN-ATP-009-3 Other Codex prompts are unmanaged` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 3 | `### Requirement: Codex initialization uses the skills-invocable command surface` | `### Requirement: REQ-CI-024 Codex initialization uses the skills-invocable command surface` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 6 | `#### Scenario: Codex command surface resolution` | `#### Scenario: SCN-CI-024-1 Codex command surface resolution` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 12 | `### Requirement: Codex initialization uses skills only` | `### Requirement: REQ-CI-025 Codex initialization uses skills only` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 15 | `#### Scenario: Initializing Codex with default delivery` | `#### Scenario: SCN-CI-025-1 Initializing Codex with default delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 21 | `#### Scenario: Initializing Codex with skills delivery` | `#### Scenario: SCN-CI-025-2 Initializing Codex with skills delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 27 | `#### Scenario: Initializing Codex with commands delivery` | `#### Scenario: SCN-CI-025-3 Initializing Codex with commands delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 33 | `### Requirement: Codex initialization cleanup removes managed legacy prompts` | `### Requirement: REQ-CI-026 Codex initialization cleanup removes managed legacy prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 36 | `#### Scenario: Cleanup removes allowlisted global Codex prompt files after replacement exists` | `#### Scenario: SCN-CI-026-1 Cleanup removes allowlisted global Codex prompt files after replacement exists` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 43 | `#### Scenario: Non-interactive initialization preserves unreplaced global Codex prompts` | `#### Scenario: SCN-CI-026-2 Non-interactive initialization preserves unreplaced global Codex prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 50 | `#### Scenario: Non-interactive initialization removes replaced global Codex prompts` | `#### Scenario: SCN-CI-026-3 Non-interactive initialization removes replaced global Codex prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 57 | `#### Scenario: Initialization preview lists deferred global prompts cleanup separately` | `#### Scenario: SCN-CI-026-4 Initialization preview lists deferred global prompts cleanup separately` |
| openspec/changes/make-codex-skills-only/specs/cli-init/spec.md | 63 | `#### Scenario: Cleanup reports Codex skills as the replacement` | `#### Scenario: SCN-CI-026-5 Cleanup reports Codex skills as the replacement` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 3 | `### Requirement: Slash Command Updates` | `### Requirement: REQ-CU-006 Slash Command Updates` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 7 | `#### Scenario: Updating slash commands for Antigravity` | `#### Scenario: SCN-CU-006-1 Updating slash commands for Antigravity` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 12 | `#### Scenario: Updating slash commands for Claude Code` | `#### Scenario: SCN-CU-006-2 Updating slash commands for Claude Code` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 17 | `#### Scenario: Updating slash commands for CodeBuddy Code` | `#### Scenario: SCN-CU-006-3 Updating slash commands for CodeBuddy Code` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 23 | `#### Scenario: Updating slash commands for Cline` | `#### Scenario: SCN-CU-006-4 Updating slash commands for Cline` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 29 | `#### Scenario: Updating slash commands for Continue` | `#### Scenario: SCN-CU-006-5 Updating slash commands for Continue` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 34 | `#### Scenario: Updating slash commands for Crush` | `#### Scenario: SCN-CU-006-6 Updating slash commands for Crush` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 40 | `#### Scenario: Updating slash commands for Cursor` | `#### Scenario: SCN-CU-006-7 Updating slash commands for Cursor` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 45 | `#### Scenario: Updating slash commands for Factory Droid` | `#### Scenario: SCN-CU-006-8 Updating slash commands for Factory Droid` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 52 | `#### Scenario: Updating slash commands for OpenCode` | `#### Scenario: SCN-CU-006-9 Updating slash commands for OpenCode` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 58 | `#### Scenario: Updating slash commands for Windsurf` | `#### Scenario: SCN-CU-006-11 Updating slash commands for Windsurf` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 64 | `#### Scenario: Updating slash commands for Kilo Code` | `#### Scenario: SCN-CU-006-12 Updating slash commands for Kilo Code` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 70 | `#### Scenario: Codex prompt files are not refreshed` | `#### Scenario: SCN-CU-006-19 Codex prompt files are not refreshed` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 77 | `#### Scenario: Updating slash commands for GitHub Copilot` | `#### Scenario: SCN-CU-006-14 Updating slash commands for GitHub Copilot` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 83 | `#### Scenario: Updating slash commands for Gemini CLI` | `#### Scenario: SCN-CU-006-15 Updating slash commands for Gemini CLI` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 89 | `#### Scenario: Updating slash commands for iFlow CLI` | `#### Scenario: SCN-CU-006-16 Updating slash commands for iFlow CLI` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 96 | `#### Scenario: Missing slash command file` | `#### Scenario: SCN-CU-006-17 Missing slash command file` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 102 | `### Requirement: Codex update uses the skills-invocable command surface` | `### Requirement: REQ-CU-014 Codex update uses the skills-invocable command surface` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 105 | `#### Scenario: Codex command surface resolution` | `#### Scenario: SCN-CU-014-1 Codex command surface resolution` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 111 | `### Requirement: Codex update uses skills only` | `### Requirement: REQ-CU-015 Codex update uses skills only` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 114 | `#### Scenario: Legacy Codex prompt migration infers workflows from the legacy filenames` | `#### Scenario: SCN-CU-015-1 Legacy Codex prompt migration infers workflows from the legacy filenames` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 119 | `#### Scenario: Updating Codex with default delivery` | `#### Scenario: SCN-CU-015-2 Updating Codex with default delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 125 | `#### Scenario: Updating Codex with commands delivery` | `#### Scenario: SCN-CU-015-3 Updating Codex with commands delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 132 | `#### Scenario: Updating Codex with skills delivery` | `#### Scenario: SCN-CU-015-4 Updating Codex with skills delivery` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 139 | `### Requirement: Codex update cleanup removes managed legacy prompts` | `### Requirement: REQ-CU-016 Codex update cleanup removes managed legacy prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 142 | `#### Scenario: Forced update cleanup removes Codex prompts` | `#### Scenario: SCN-CU-016-1 Forced update cleanup removes Codex prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 149 | `#### Scenario: Configured Codex cleanup completes after skills refresh` | `#### Scenario: SCN-CU-016-2 Configured Codex cleanup completes after skills refresh` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 155 | `#### Scenario: Interactive update cleanup includes Codex prompts` | `#### Scenario: SCN-CU-016-3 Interactive update cleanup includes Codex prompts` |
| openspec/changes/make-codex-skills-only/specs/cli-update/spec.md | 163 | `#### Scenario: Non-interactive update without force does not delete prompts` | `#### Scenario: SCN-CU-016-4 Non-interactive update without force does not delete prompts` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 3 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 7 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 15 | `#### Scenario: Claude adapter formatting` | `#### Scenario: SCN-CG-002-2 Claude adapter formatting` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 21 | `#### Scenario: Cursor adapter formatting` | `#### Scenario: SCN-CG-002-3 Cursor adapter formatting` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 27 | `#### Scenario: Windsurf adapter formatting` | `#### Scenario: SCN-CG-002-4 Windsurf adapter formatting` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 35 | `### Requirement: Codex is not a command generation target` | `### Requirement: REQ-CG-007 Codex is not a command generation target` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 38 | `#### Scenario: Codex adapter lookup` | `#### Scenario: SCN-CG-007-1 Codex adapter lookup` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 43 | `#### Scenario: Generating commands for all registered adapters` | `#### Scenario: SCN-CG-007-2 Generating commands for all registered adapters` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 48 | `#### Scenario: Codex command adapter module is not exported` | `#### Scenario: SCN-CG-007-3 Codex command adapter module is not exported` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 52 | `### Requirement: Skills-only command skip behavior remains valid for Codex` | `### Requirement: REQ-CG-008 Skills-only command skip behavior remains valid for Codex` |
| openspec/changes/make-codex-skills-only/specs/command-generation/spec.md | 55 | `#### Scenario: Command generation requested for selected Codex tool` | `#### Scenario: SCN-CG-008-1 Command generation requested for selected Codex tool` |
| openspec/changes/rename-bob-to-ibm-bob/specs/ai-tool-paths/spec.md | 3 | `### Requirement: IBM Bob tool identity` | `### Requirement: REQ-ATP-010 IBM Bob tool identity` |
| openspec/changes/rename-bob-to-ibm-bob/specs/ai-tool-paths/spec.md | 7 | `#### Scenario: IBM Bob paths and display name` | `#### Scenario: SCN-ATP-010-1 IBM Bob paths and display name` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 7 | `### Requirement: Profile definitions` | `### Requirement: REQ-PRO-001 Profile definitions` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 10 | `#### Scenario: Core profile contents` | `#### Scenario: SCN-PRO-001-1 Core profile contents` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 14 | `#### Scenario: Custom profile contents` | `#### Scenario: SCN-PRO-001-2 Custom profile contents` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 18 | `### Requirement: Delivery is independent of profile` | `### Requirement: REQ-PRO-002 Delivery is independent of profile` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 21 | `#### Scenario: Delivery options` | `#### Scenario: SCN-PRO-002-1 Delivery options` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 25 | `#### Scenario: Both delivery` | `#### Scenario: SCN-PRO-002-2 Both delivery` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 29 | `#### Scenario: Skills-only delivery` | `#### Scenario: SCN-PRO-002-3 Skills-only delivery` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 34 | `#### Scenario: Commands-only delivery` | `#### Scenario: SCN-PRO-002-4 Commands-only delivery` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 39 | `#### Scenario: Core profile with custom delivery` | `#### Scenario: SCN-PRO-002-5 Core profile with custom delivery` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 44 | `#### Scenario: Delivery defaults` | `#### Scenario: SCN-PRO-002-6 Delivery defaults` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 48 | `### Requirement: Profile configuration via interactive picker` | `### Requirement: REQ-PRO-003 Profile configuration via interactive picker` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 51 | `#### Scenario: Interactive profile configuration` | `#### Scenario: SCN-PRO-003-1 Interactive profile configuration` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 63 | `#### Scenario: Core preset shortcut` | `#### Scenario: SCN-PRO-003-2 Core preset shortcut` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 72 | `#### Scenario: Config profile run inside a project` | `#### Scenario: SCN-PRO-003-3 Config profile run inside a project` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 79 | `#### Scenario: Config profile - user declines apply` | `#### Scenario: SCN-PRO-003-4 Config profile - user declines apply` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 85 | `#### Scenario: Config profile non-interactive` | `#### Scenario: SCN-PRO-003-5 Config profile non-interactive` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 90 | `### Requirement: Profile settings stored in global config` | `### Requirement: REQ-PRO-004 Profile settings stored in global config` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 93 | `#### Scenario: Config schema` | `#### Scenario: SCN-PRO-004-1 Config schema` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 97 | `#### Scenario: Schema evolution` | `#### Scenario: SCN-PRO-004-2 Schema evolution` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 102 | `#### Scenario: Config list displays profile settings` | `#### Scenario: SCN-PRO-004-3 Config list displays profile settings` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 107 | `### Requirement: Config is global, projects are explicit` | `### Requirement: REQ-PRO-005 Config is global, projects are explicit` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 110 | `#### Scenario: Config update does not modify projects` | `#### Scenario: SCN-PRO-005-1 Config update does not modify projects` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 116 | `### Requirement: Config changes applied via update command` | `### Requirement: REQ-PRO-006 Config changes applied via update command` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 119 | `#### Scenario: Config changes require explicit project sync` | `#### Scenario: SCN-PRO-006-1 Config changes require explicit project sync` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 124 | `### Requirement: Profile defaults` | `### Requirement: REQ-PRO-007 Profile defaults` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 127 | `#### Scenario: No global config exists (new user)` | `#### Scenario: SCN-PRO-007-1 No global config exists (new user)` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 132 | `#### Scenario: Global config exists but profile field absent (new user)` | `#### Scenario: SCN-PRO-007-2 Global config exists but profile field absent (new user)` |
| openspec/changes/simplify-skill-installation/specs/profiles/spec.md | 137 | `#### Scenario: Profile field absent with existing workflows (existing user migration)` | `#### Scenario: SCN-PRO-007-3 Profile field absent with existing workflows (existing user migration)` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 7 | `### Requirement: Propose workflow creation` | `### Requirement: REQ-PW-001 Propose workflow creation` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 10 | `#### Scenario: Basic propose invocation` | `#### Scenario: SCN-PW-001-1 Basic propose invocation` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 16 | `#### Scenario: Propose with existing change name` | `#### Scenario: SCN-PW-001-2 Propose with existing change name` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 23 | `### Requirement: Propose workflow onboarding UX` | `### Requirement: REQ-PW-002 Propose workflow onboarding UX` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 26 | `#### Scenario: First-time user guidance` | `#### Scenario: SCN-PW-002-1 First-time user guidance` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 31 | `#### Scenario: Artifact creation progress` | `#### Scenario: SCN-PW-002-2 Artifact creation progress` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 35 | `### Requirement: Propose workflow combines new and ff` | `### Requirement: REQ-PW-003 Propose workflow combines new and ff` |
| openspec/changes/simplify-skill-installation/specs/propose-workflow/spec.md | 38 | `#### Scenario: Equivalent to new + ff` | `#### Scenario: SCN-PW-003-1 Equivalent to new + ff` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 3 | `### Requirement: Output format options` | `### Requirement: REQ-CS-002 Output format options` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 7 | `#### Scenario: JSON output` | `#### Scenario: SCN-CS-002-1 JSON output` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 14 | `#### Scenario: Flag scoping and delegation` | `#### Scenario: SCN-CS-002-2 Flag scoping and delegation` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 23 | `#### Scenario: Text mode change display is unchanged without --diff` | `#### Scenario: SCN-CS-002-3 Text mode change display is unchanged without --diff` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 28 | `#### Scenario: Diff output in text mode` | `#### Scenario: SCN-CS-002-4 Diff output in text mode` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 44 | `#### Scenario: Diff output in JSON mode` | `#### Scenario: SCN-CS-002-5 Diff output in JSON mode` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 55 | `#### Scenario: Diff input cannot be read` | `#### Scenario: SCN-CS-002-6 Diff input cannot be read` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 61 | `#### Scenario: Diff with no delta specs` | `#### Scenario: SCN-CS-002-7 Diff with no delta specs` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 67 | `#### Scenario: Diff flag on non-change item` | `#### Scenario: SCN-CS-002-8 Diff flag on non-change item` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 74 | `### Requirement: Requirement block extraction for diffing` | `### Requirement: REQ-CS-004 Requirement block extraction for diffing` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 78 | `#### Scenario: Extract requirement block by name` | `#### Scenario: SCN-CS-004-1 Extract requirement block by name` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 83 | `#### Scenario: Requirement name matching` | `#### Scenario: SCN-CS-004-2 Requirement name matching` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 90 | `#### Scenario: Requirement name not found in the main spec` | `#### Scenario: SCN-CS-004-3 Requirement name not found in the main spec` |
| openspec/changes/spec-diffs/specs/cli-show/spec.md | 96 | `#### Scenario: Main spec paths resolve against the selected root` | `#### Scenario: SCN-CS-004-4 Main spec paths resolve against the selected root` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 3 | `### Requirement: First-run telemetry notice` | `### Requirement: REQ-TEL-005 First-run telemetry notice` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 6 | `#### Scenario: First command execution` | `#### Scenario: SCN-TEL-005-1 First command execution` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 11 | `#### Scenario: Subsequent command execution` | `#### Scenario: SCN-TEL-005-2 Subsequent command execution` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 15 | `#### Scenario: Notice before telemetry` | `#### Scenario: SCN-TEL-005-3 Notice before telemetry` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 19 | `#### Scenario: First command execution in JSON mode` | `#### Scenario: SCN-TEL-005-4 First command execution in JSON mode` |
| openspec/changes/suppress-telemetry-notice-in-json/specs/telemetry/spec.md | 25 | `#### Scenario: Disclosure deferred, not skipped` | `#### Scenario: SCN-TEL-005-5 Disclosure deferred, not skipped` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 9 | `### Requirement: Canonical Workflow Manifest` | `### Requirement: REQ-TAP-001 Canonical Workflow Manifest` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 13 | `#### Scenario: Register workflow once` | `#### Scenario: SCN-TAP-001-1 Register workflow once` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 20 | `#### Scenario: Required skill metadata` | `#### Scenario: SCN-TAP-001-2 Required skill metadata` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 26 | `### Requirement: Tool Profile Registry` | `### Requirement: REQ-TAP-002 Tool Profile Registry` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 30 | `#### Scenario: Resolve tool capabilities` | `#### Scenario: SCN-TAP-002-1 Resolve tool capabilities` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 36 | `#### Scenario: Capability consistency validation` | `#### Scenario: SCN-TAP-002-2 Capability consistency validation` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 42 | `### Requirement: Ordered Transform Pipeline` | `### Requirement: REQ-TAP-003 Ordered Transform Pipeline` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 46 | `#### Scenario: Execute pre-adapter and post-adapter transforms` | `#### Scenario: SCN-TAP-003-1 Execute pre-adapter and post-adapter transforms` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 53 | `#### Scenario: Apply tool-specific rewrites declaratively` | `#### Scenario: SCN-TAP-003-2 Apply tool-specific rewrites declaratively` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 59 | `### Requirement: Shared Artifact Sync Engine` | `### Requirement: REQ-TAP-004 Shared Artifact Sync Engine` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 63 | `#### Scenario: Init and update use same engine` | `#### Scenario: SCN-TAP-004-1 Init and update use same engine` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 69 | `#### Scenario: Legacy upgrade path reuses engine` | `#### Scenario: SCN-TAP-004-2 Legacy upgrade path reuses engine` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 75 | `### Requirement: Fidelity Guardrails` | `### Requirement: REQ-TAP-005 Fidelity Guardrails` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 79 | `#### Scenario: Projection parity checks` | `#### Scenario: SCN-TAP-005-1 Projection parity checks` |
| openspec/changes/unify-template-generation-pipeline/specs/template-artifact-pipeline/spec.md | 85 | `#### Scenario: Output parity checks` | `#### Scenario: SCN-TAP-005-2 Output parity checks` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 3 | `### Requirement: Spec validation SHALL report a Purpose left as the archive placeholder` | `### Requirement: REQ-CLIV-020 Spec validation SHALL report a Purpose left as the archive placeholder` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 47 | `#### Scenario: The placeholder passes by default and fails under strict` | `#### Scenario: SCN-CLIV-020-1 The placeholder passes by default and fails under strict` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 55 | `#### Scenario: Strict validation fails on the placeholder` | `#### Scenario: SCN-CLIV-020-2 Strict validation fails on the placeholder` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 61 | `#### Scenario: An authored Purpose raising an open question is not reported` | `#### Scenario: SCN-CLIV-020-3 An authored Purpose raising an open question is not reported` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 68 | `#### Scenario: A Purpose left as a TODO is reported like a TBD` | `#### Scenario: SCN-CLIV-020-4 A Purpose left as a TODO is reported like a TBD` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 74 | `#### Scenario: A Purpose quoting the placeholder inside a fence is not reported` | `#### Scenario: SCN-CLIV-020-5 A Purpose quoting the placeholder inside a fence is not reported` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 82 | `#### Scenario: A word beginning with the marker is not reported` | `#### Scenario: SCN-CLIV-020-6 A word beginning with the marker is not reported` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 88 | `#### Scenario: A bare TBD is reported once` | `#### Scenario: SCN-CLIV-020-7 A bare TBD is reported once` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 95 | `#### Scenario: A terse but authored Purpose still reports as too brief` | `#### Scenario: SCN-CLIV-020-8 A terse but authored Purpose still reports as too brief` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 101 | `#### Scenario: Archive still writes the spec it would have written` | `#### Scenario: SCN-CLIV-020-9 Archive still writes the spec it would have written` |
| openspec/changes/warn-on-purpose-placeholder/specs/cli-validate/spec.md | 107 | `#### Scenario: Line endings do not change what is reported` | `#### Scenario: SCN-CLIV-020-10 Line endings do not change what is reported` |
| openspec/specs/ai-tool-paths/spec.md | 6 | `### Requirement: AIToolOption skillsDir field` | `### Requirement: REQ-ATP-001 AIToolOption skillsDir field` |
| openspec/specs/ai-tool-paths/spec.md | 10 | `#### Scenario: Interface includes skillsDir field` | `#### Scenario: SCN-ATP-001-1 Interface includes skillsDir field` |
| openspec/specs/ai-tool-paths/spec.md | 15 | `#### Scenario: Skills path follows Agent Skills spec` | `#### Scenario: SCN-ATP-001-2 Skills path follows Agent Skills spec` |
| openspec/specs/ai-tool-paths/spec.md | 21 | `### Requirement: Path configuration for supported tools` | `### Requirement: REQ-ATP-002 Path configuration for supported tools` |
| openspec/specs/ai-tool-paths/spec.md | 25 | `#### Scenario: Claude Code paths defined` | `#### Scenario: SCN-ATP-002-1 Claude Code paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 30 | `#### Scenario: Cursor paths defined` | `#### Scenario: SCN-ATP-002-2 Cursor paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 35 | `#### Scenario: Devin Desktop paths defined` | `#### Scenario: SCN-ATP-002-3 Devin Desktop paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 40 | `#### Scenario: Legacy Windsurf tool ID` | `#### Scenario: SCN-ATP-002-4 Legacy Windsurf tool ID` |
| openspec/specs/ai-tool-paths/spec.md | 46 | `#### Scenario: Kimi Code paths defined` | `#### Scenario: SCN-ATP-002-5 Kimi Code paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 52 | `#### Scenario: Hermes Agent paths defined` | `#### Scenario: SCN-ATP-002-6 Hermes Agent paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 59 | `#### Scenario: DeepSeek Harness paths defined` | `#### Scenario: SCN-ATP-002-7 DeepSeek Harness paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 66 | `#### Scenario: Grok Build paths defined` | `#### Scenario: SCN-ATP-002-8 Grok Build paths defined` |
| openspec/specs/ai-tool-paths/spec.md | 71 | `#### Scenario: Warp paths and detection defined` | `#### Scenario: SCN-ATP-002-9 Warp paths and detection defined` |
| openspec/specs/ai-tool-paths/spec.md | 77 | `#### Scenario: Warp invokes skills without command files` | `#### Scenario: SCN-ATP-002-10 Warp invokes skills without command files` |
| openspec/specs/ai-tool-paths/spec.md | 84 | `#### Scenario: Tools without skillsDir` | `#### Scenario: SCN-ATP-002-11 Tools without skillsDir` |
| openspec/specs/ai-tool-paths/spec.md | 89 | `### Requirement: Cross-platform path handling` | `### Requirement: REQ-ATP-003 Cross-platform path handling` |
| openspec/specs/ai-tool-paths/spec.md | 93 | `#### Scenario: Path construction on Windows` | `#### Scenario: SCN-ATP-003-1 Path construction on Windows` |
| openspec/specs/ai-tool-paths/spec.md | 99 | `#### Scenario: Path construction on Unix` | `#### Scenario: SCN-ATP-003-2 Path construction on Unix` |
| openspec/specs/artifact-graph/spec.md | 6 | `### Requirement: Schema Loading` | `### Requirement: REQ-AG-001 Schema Loading` |
| openspec/specs/artifact-graph/spec.md | 9 | `#### Scenario: Valid schema loaded` | `#### Scenario: SCN-AG-001-1 Valid schema loaded` |
| openspec/specs/artifact-graph/spec.md | 13 | `#### Scenario: Invalid schema rejected` | `#### Scenario: SCN-AG-001-2 Invalid schema rejected` |
| openspec/specs/artifact-graph/spec.md | 17 | `#### Scenario: Cyclic dependencies detected` | `#### Scenario: SCN-AG-001-3 Cyclic dependencies detected` |
| openspec/specs/artifact-graph/spec.md | 21 | `#### Scenario: Invalid dependency reference` | `#### Scenario: SCN-AG-001-4 Invalid dependency reference` |
| openspec/specs/artifact-graph/spec.md | 25 | `#### Scenario: Duplicate artifact IDs rejected` | `#### Scenario: SCN-AG-001-5 Duplicate artifact IDs rejected` |
| openspec/specs/artifact-graph/spec.md | 29 | `#### Scenario: Schema directory not found` | `#### Scenario: SCN-AG-001-6 Schema directory not found` |
| openspec/specs/artifact-graph/spec.md | 33 | `### Requirement: Build Order Calculation` | `### Requirement: REQ-AG-002 Build Order Calculation` |
| openspec/specs/artifact-graph/spec.md | 36 | `#### Scenario: Linear dependency chain` | `#### Scenario: SCN-AG-002-1 Linear dependency chain` |
| openspec/specs/artifact-graph/spec.md | 40 | `#### Scenario: Diamond dependency` | `#### Scenario: SCN-AG-002-2 Diamond dependency` |
| openspec/specs/artifact-graph/spec.md | 44 | `#### Scenario: Independent artifacts` | `#### Scenario: SCN-AG-002-3 Independent artifacts` |
| openspec/specs/artifact-graph/spec.md | 48 | `#### Scenario: Simultaneously ready artifacts ordered by declaration` | `#### Scenario: SCN-AG-002-4 Simultaneously ready artifacts ordered by declaration` |
| openspec/specs/artifact-graph/spec.md | 53 | `### Requirement: State Detection` | `### Requirement: REQ-AG-003 State Detection` |
| openspec/specs/artifact-graph/spec.md | 60 | `#### Scenario: Simple file exists` | `#### Scenario: SCN-AG-003-1 Simple file exists` |
| openspec/specs/artifact-graph/spec.md | 64 | `#### Scenario: Simple file missing` | `#### Scenario: SCN-AG-003-2 Simple file missing` |
| openspec/specs/artifact-graph/spec.md | 68 | `#### Scenario: Glob pattern with files` | `#### Scenario: SCN-AG-003-3 Glob pattern with files` |
| openspec/specs/artifact-graph/spec.md | 72 | `#### Scenario: Glob pattern empty` | `#### Scenario: SCN-AG-003-4 Glob pattern empty` |
| openspec/specs/artifact-graph/spec.md | 76 | `#### Scenario: Missing change directory` | `#### Scenario: SCN-AG-003-5 Missing change directory` |
| openspec/specs/artifact-graph/spec.md | 80 | `#### Scenario: Brace alternatives with matching files` | `#### Scenario: SCN-AG-003-6 Brace alternatives with matching files` |
| openspec/specs/artifact-graph/spec.md | 84 | `#### Scenario: Brace range after a literal brace group` | `#### Scenario: SCN-AG-003-7 Brace range after a literal brace group` |
| openspec/specs/artifact-graph/spec.md | 90 | `#### Scenario: Later and nested brace alternatives` | `#### Scenario: SCN-AG-003-8 Later and nested brace alternatives` |
| openspec/specs/artifact-graph/spec.md | 94 | `#### Scenario: Extglob alternatives with matching files` | `#### Scenario: SCN-AG-003-9 Extglob alternatives with matching files` |
| openspec/specs/artifact-graph/spec.md | 98 | `#### Scenario: Negative extglob excludes its alternatives` | `#### Scenario: SCN-AG-003-10 Negative extglob excludes its alternatives` |
| openspec/specs/artifact-graph/spec.md | 104 | `#### Scenario: Brace or extglob pattern without matching files` | `#### Scenario: SCN-AG-003-11 Brace or extglob pattern without matching files` |
| openspec/specs/artifact-graph/spec.md | 108 | `#### Scenario: Literal output names remain literal` | `#### Scenario: SCN-AG-003-12 Literal output names remain literal` |
| openspec/specs/artifact-graph/spec.md | 112 | `#### Scenario: Brace expansion escapes the change directory` | `#### Scenario: SCN-AG-003-13 Brace expansion escapes the change directory` |
| openspec/specs/artifact-graph/spec.md | 117 | `#### Scenario: Expanded directory pattern reaches an outbound symbolic link` | `#### Scenario: SCN-AG-003-14 Expanded directory pattern reaches an outbound symbolic link` |
| openspec/specs/artifact-graph/spec.md | 122 | `### Requirement: Glob Nesting Limit` | `### Requirement: REQ-AG-004 Glob Nesting Limit` |
| openspec/specs/artifact-graph/spec.md | 125 | `#### Scenario: Brace nesting beyond the limit` | `#### Scenario: SCN-AG-004-1 Brace nesting beyond the limit` |
| openspec/specs/artifact-graph/spec.md | 130 | `### Requirement: Ready Artifact Query` | `### Requirement: REQ-AG-005 Ready Artifact Query` |
| openspec/specs/artifact-graph/spec.md | 133 | `#### Scenario: Root artifacts ready initially` | `#### Scenario: SCN-AG-005-1 Root artifacts ready initially` |
| openspec/specs/artifact-graph/spec.md | 137 | `#### Scenario: Dependent artifact becomes ready` | `#### Scenario: SCN-AG-005-2 Dependent artifact becomes ready` |
| openspec/specs/artifact-graph/spec.md | 141 | `#### Scenario: Blocked artifacts excluded` | `#### Scenario: SCN-AG-005-3 Blocked artifacts excluded` |
| openspec/specs/artifact-graph/spec.md | 145 | `#### Scenario: Ready artifacts ordered by declaration` | `#### Scenario: SCN-AG-005-4 Ready artifacts ordered by declaration` |
| openspec/specs/artifact-graph/spec.md | 149 | `### Requirement: Completion Check` | `### Requirement: REQ-AG-006 Completion Check` |
| openspec/specs/artifact-graph/spec.md | 152 | `#### Scenario: All complete` | `#### Scenario: SCN-AG-006-1 All complete` |
| openspec/specs/artifact-graph/spec.md | 156 | `#### Scenario: Partially complete` | `#### Scenario: SCN-AG-006-2 Partially complete` |
| openspec/specs/artifact-graph/spec.md | 160 | `### Requirement: Blocked Query` | `### Requirement: REQ-AG-007 Blocked Query` |
| openspec/specs/artifact-graph/spec.md | 163 | `#### Scenario: Artifact blocked by single dependency` | `#### Scenario: SCN-AG-007-1 Artifact blocked by single dependency` |
| openspec/specs/artifact-graph/spec.md | 167 | `#### Scenario: Artifact blocked by multiple dependencies` | `#### Scenario: SCN-AG-007-2 Artifact blocked by multiple dependencies` |
| openspec/specs/artifact-graph/spec.md | 171 | `#### Scenario: Artifact blocked by all dependencies` | `#### Scenario: SCN-AG-007-3 Artifact blocked by all dependencies` |
| openspec/specs/artifact-graph/spec.md | 176 | `### Requirement: Schema Directory Structure` | `### Requirement: REQ-AG-008 Schema Directory Structure` |
| openspec/specs/artifact-graph/spec.md | 179 | `#### Scenario: Schema with templates` | `#### Scenario: SCN-AG-008-1 Schema with templates` |
| openspec/specs/artifact-graph/spec.md | 183 | `#### Scenario: User schema override` | `#### Scenario: SCN-AG-008-2 User schema override` |
| openspec/specs/artifact-graph/spec.md | 187 | `#### Scenario: Built-in schema fallback` | `#### Scenario: SCN-AG-008-3 Built-in schema fallback` |
| openspec/specs/artifact-graph/spec.md | 191 | `#### Scenario: List available schemas` | `#### Scenario: SCN-AG-008-4 List available schemas` |
| openspec/specs/change-creation/spec.md | 6 | `### Requirement: Change Creation` | `### Requirement: REQ-CHC-001 Change Creation` |
| openspec/specs/change-creation/spec.md | 9 | `#### Scenario: Create change` | `#### Scenario: SCN-CHC-001-1 Create change` |
| openspec/specs/change-creation/spec.md | 13 | `#### Scenario: Duplicate change rejected` | `#### Scenario: SCN-CHC-001-2 Duplicate change rejected` |
| openspec/specs/change-creation/spec.md | 17 | `#### Scenario: Creates parent directories if needed` | `#### Scenario: SCN-CHC-001-3 Creates parent directories if needed` |
| openspec/specs/change-creation/spec.md | 21 | `#### Scenario: Invalid change name rejected` | `#### Scenario: SCN-CHC-001-4 Invalid change name rejected` |
| openspec/specs/change-creation/spec.md | 25 | `### Requirement: Change Name Validation` | `### Requirement: REQ-CHC-002 Change Name Validation` |
| openspec/specs/change-creation/spec.md | 28 | `#### Scenario: Valid kebab-case name accepted` | `#### Scenario: SCN-CHC-002-1 Valid kebab-case name accepted` |
| openspec/specs/change-creation/spec.md | 32 | `#### Scenario: Numeric suffixes accepted` | `#### Scenario: SCN-CHC-002-2 Numeric suffixes accepted` |
| openspec/specs/change-creation/spec.md | 36 | `#### Scenario: Single word accepted` | `#### Scenario: SCN-CHC-002-3 Single word accepted` |
| openspec/specs/change-creation/spec.md | 40 | `#### Scenario: Uppercase characters rejected` | `#### Scenario: SCN-CHC-002-4 Uppercase characters rejected` |
| openspec/specs/change-creation/spec.md | 44 | `#### Scenario: Spaces rejected` | `#### Scenario: SCN-CHC-002-5 Spaces rejected` |
| openspec/specs/change-creation/spec.md | 48 | `#### Scenario: Underscores rejected` | `#### Scenario: SCN-CHC-002-6 Underscores rejected` |
| openspec/specs/change-creation/spec.md | 52 | `#### Scenario: Special characters rejected` | `#### Scenario: SCN-CHC-002-7 Special characters rejected` |
| openspec/specs/change-creation/spec.md | 56 | `#### Scenario: Leading hyphen rejected` | `#### Scenario: SCN-CHC-002-8 Leading hyphen rejected` |
| openspec/specs/change-creation/spec.md | 60 | `#### Scenario: Trailing hyphen rejected` | `#### Scenario: SCN-CHC-002-9 Trailing hyphen rejected` |
| openspec/specs/change-creation/spec.md | 64 | `#### Scenario: Consecutive hyphens rejected` | `#### Scenario: SCN-CHC-002-10 Consecutive hyphens rejected` |
| openspec/specs/ci-nix-validation/spec.md | 7 | `### Requirement: Nix Flake Build Validation` | `### Requirement: REQ-CNV-001 Nix Flake Build Validation` |
| openspec/specs/ci-nix-validation/spec.md | 11 | `#### Scenario: Successful flake build` | `#### Scenario: SCN-CNV-001-1 Successful flake build` |
| openspec/specs/ci-nix-validation/spec.md | 17 | `#### Scenario: Flake build failure` | `#### Scenario: SCN-CNV-001-2 Flake build failure` |
| openspec/specs/ci-nix-validation/spec.md | 23 | `#### Scenario: Multi-platform support check` | `#### Scenario: SCN-CNV-001-3 Multi-platform support check` |
| openspec/specs/ci-nix-validation/spec.md | 28 | `### Requirement: Update Script Validation` | `### Requirement: REQ-CNV-002 Update Script Validation` |
| openspec/specs/ci-nix-validation/spec.md | 32 | `#### Scenario: Update script execution` | `#### Scenario: SCN-CNV-002-1 Update script execution` |
| openspec/specs/ci-nix-validation/spec.md | 39 | `#### Scenario: Update script with mock hash` | `#### Scenario: SCN-CNV-002-2 Update script with mock hash` |
| openspec/specs/ci-nix-validation/spec.md | 45 | `### Requirement: CI Job Integration` | `### Requirement: REQ-CNV-003 CI Job Integration` |
| openspec/specs/ci-nix-validation/spec.md | 49 | `#### Scenario: PR merge requirements` | `#### Scenario: SCN-CNV-003-1 PR merge requirements` |
| openspec/specs/ci-nix-validation/spec.md | 55 | `#### Scenario: Job execution triggers` | `#### Scenario: SCN-CNV-003-2 Job execution triggers` |
| openspec/specs/ci-nix-validation/spec.md | 60 | `### Requirement: Local Testing Support` | `### Requirement: REQ-CNV-004 Local Testing Support` |
| openspec/specs/ci-nix-validation/spec.md | 64 | `#### Scenario: Local CI execution with act` | `#### Scenario: SCN-CNV-004-1 Local CI execution with act` |
| openspec/specs/ci-nix-validation/spec.md | 70 | `#### Scenario: Act configuration compatibility` | `#### Scenario: SCN-CNV-004-2 Act configuration compatibility` |
| openspec/specs/ci-nix-validation/spec.md | 76 | `### Requirement: Nix Installation in CI` | `### Requirement: REQ-CNV-005 Nix Installation in CI` |
| openspec/specs/ci-nix-validation/spec.md | 80 | `#### Scenario: Nix installation step` | `#### Scenario: SCN-CNV-005-1 Nix installation step` |
| openspec/specs/ci-nix-validation/spec.md | 86 | `#### Scenario: Nix configuration for CI` | `#### Scenario: SCN-CNV-005-2 Nix configuration for CI` |
| openspec/specs/ci-nix-validation/spec.md | 92 | `### Requirement: CI Performance Optimization` | `### Requirement: REQ-CNV-006 CI Performance Optimization` |
| openspec/specs/ci-nix-validation/spec.md | 96 | `#### Scenario: Acceptable runtime` | `#### Scenario: SCN-CNV-006-1 Acceptable runtime` |
| openspec/specs/ci-nix-validation/spec.md | 102 | `#### Scenario: Parallel execution` | `#### Scenario: SCN-CNV-006-2 Parallel execution` |
| openspec/specs/cli-archive/spec.md | 14 | `### Requirement: Change Selection` | `### Requirement: REQ-CA-001 Change Selection` |
| openspec/specs/cli-archive/spec.md | 18 | `#### Scenario: Interactive selection` | `#### Scenario: SCN-CA-001-1 Interactive selection` |
| openspec/specs/cli-archive/spec.md | 24 | `#### Scenario: Direct selection` | `#### Scenario: SCN-CA-001-2 Direct selection` |
| openspec/specs/cli-archive/spec.md | 30 | `#### Scenario: No change name and no answer available` | `#### Scenario: SCN-CA-001-3 No change name and no answer available` |
| openspec/specs/cli-archive/spec.md | 38 | `### Requirement: Task Completion Check` | `### Requirement: REQ-CA-002 Task Completion Check` |
| openspec/specs/cli-archive/spec.md | 42 | `#### Scenario: Incomplete tasks found` | `#### Scenario: SCN-CA-002-1 Incomplete tasks found` |
| openspec/specs/cli-archive/spec.md | 49 | `#### Scenario: All tasks complete` | `#### Scenario: SCN-CA-002-2 All tasks complete` |
| openspec/specs/cli-archive/spec.md | 54 | `### Requirement: Archive Process` | `### Requirement: REQ-CA-003 Archive Process` |
| openspec/specs/cli-archive/spec.md | 58 | `#### Scenario: Performing archive` | `#### Scenario: SCN-CA-003-1 Performing archive` |
| openspec/specs/cli-archive/spec.md | 71 | `#### Scenario: Archive already exists` | `#### Scenario: SCN-CA-003-2 Archive already exists` |
| openspec/specs/cli-archive/spec.md | 77 | `#### Scenario: Successful archive` | `#### Scenario: SCN-CA-003-3 Successful archive` |
| openspec/specs/cli-archive/spec.md | 82 | `### Requirement: Spec Update Process` | `### Requirement: REQ-CA-004 Spec Update Process` |
| openspec/specs/cli-archive/spec.md | 86 | `#### Scenario: Applying delta changes` | `#### Scenario: SCN-CA-004-1 Applying delta changes` |
| openspec/specs/cli-archive/spec.md | 92 | `#### Scenario: Validating delta changes` | `#### Scenario: SCN-CA-004-2 Validating delta changes` |
| openspec/specs/cli-archive/spec.md | 98 | `#### Scenario: Conflict detection` | `#### Scenario: SCN-CA-004-3 Conflict detection` |
| openspec/specs/cli-archive/spec.md | 104 | `#### Scenario: Duplicate requirement already exists in the main spec` | `#### Scenario: SCN-CA-004-4 Duplicate requirement already exists in the main spec` |
| openspec/specs/cli-archive/spec.md | 110 | `#### Scenario: New main spec inherits the delta's Purpose` | `#### Scenario: SCN-CA-004-5 New main spec inherits the delta's Purpose` |
| openspec/specs/cli-archive/spec.md | 118 | `#### Scenario: New main spec without an authored Purpose` | `#### Scenario: SCN-CA-004-6 New main spec without an authored Purpose` |
| openspec/specs/cli-archive/spec.md | 124 | `#### Scenario: Delta Purpose that would leave the new main spec unreadable` | `#### Scenario: SCN-CA-004-7 Delta Purpose that would leave the new main spec unreadable` |
| openspec/specs/cli-archive/spec.md | 131 | `#### Scenario: Carried Purpose shorter than the strict-mode minimum` | `#### Scenario: SCN-CA-004-8 Carried Purpose shorter than the strict-mode minimum` |
| openspec/specs/cli-archive/spec.md | 136 | `#### Scenario: Delta Purpose for a capability that already has a main spec` | `#### Scenario: SCN-CA-004-9 Delta Purpose for a capability that already has a main spec` |
| openspec/specs/cli-archive/spec.md | 142 | `### Requirement: Capability Retirement` | `### Requirement: REQ-CA-005 Capability Retirement` |
| openspec/specs/cli-archive/spec.md | 146 | `#### Scenario: Deciding that a rebuilt spec cannot be written` | `#### Scenario: SCN-CA-005-1 Deciding that a rebuilt spec cannot be written` |
| openspec/specs/cli-archive/spec.md | 153 | `#### Scenario: Validation was skipped` | `#### Scenario: SCN-CA-005-2 Validation was skipped` |
| openspec/specs/cli-archive/spec.md | 159 | `#### Scenario: Retirement is not declared` | `#### Scenario: SCN-CA-005-3 Retirement is not declared` |
| openspec/specs/cli-archive/spec.md | 166 | `#### Scenario: Delta removes the capability's last requirement` | `#### Scenario: SCN-CA-005-4 Delta removes the capability's last requirement` |
| openspec/specs/cli-archive/spec.md | 177 | `#### Scenario: Retirement is deferred until every spec is written` | `#### Scenario: SCN-CA-005-5 Retirement is deferred until every spec is written` |
| openspec/specs/cli-archive/spec.md | 184 | `#### Scenario: Capability directory holds other files` | `#### Scenario: SCN-CA-005-6 Capability directory holds other files` |
| openspec/specs/cli-archive/spec.md | 189 | `#### Scenario: Removal was already synced` | `#### Scenario: SCN-CA-005-7 Removal was already synced` |
| openspec/specs/cli-archive/spec.md | 195 | `#### Scenario: Content the merge cannot account for` | `#### Scenario: SCN-CA-005-8 Content the merge cannot account for` |
| openspec/specs/cli-archive/spec.md | 201 | `#### Scenario: Main spec is already gone` | `#### Scenario: SCN-CA-005-9 Main spec is already gone` |
| openspec/specs/cli-archive/spec.md | 206 | `### Requirement: Confirmation Behavior` | `### Requirement: REQ-CA-006 Confirmation Behavior` |
| openspec/specs/cli-archive/spec.md | 210 | `#### Scenario: Displaying confirmation` | `#### Scenario: SCN-CA-006-1 Displaying confirmation` |
| openspec/specs/cli-archive/spec.md | 229 | `#### Scenario: Handling confirmation response` | `#### Scenario: SCN-CA-006-2 Handling confirmation response` |
| openspec/specs/cli-archive/spec.md | 235 | `#### Scenario: User declines confirmation` | `#### Scenario: SCN-CA-006-3 User declines confirmation` |
| openspec/specs/cli-archive/spec.md | 242 | `### Requirement: Error Conditions` | `### Requirement: REQ-CA-007 Error Conditions` |
| openspec/specs/cli-archive/spec.md | 246 | `#### Scenario: Handling errors` | `#### Scenario: SCN-CA-007-1 Handling errors` |
| openspec/specs/cli-archive/spec.md | 256 | `#### Scenario: Confirmation cannot be answered` | `#### Scenario: SCN-CA-007-2 Confirmation cannot be answered` |
| openspec/specs/cli-archive/spec.md | 264 | `#### Scenario: Cancellation is not treated as a missing answer` | `#### Scenario: SCN-CA-007-3 Cancellation is not treated as a missing answer` |
| openspec/specs/cli-archive/spec.md | 270 | `### Requirement: Skip Specs Option` | `### Requirement: REQ-CA-008 Skip Specs Option` |
| openspec/specs/cli-archive/spec.md | 274 | `#### Scenario: Skipping spec updates with flag` | `#### Scenario: SCN-CA-008-1 Skipping spec updates with flag` |
| openspec/specs/cli-archive/spec.md | 281 | `### Requirement: Non-blocking confirmation` | `### Requirement: REQ-CA-009 Non-blocking confirmation` |
| openspec/specs/cli-archive/spec.md | 285 | `#### Scenario: User declines spec update confirmation` | `#### Scenario: SCN-CA-009-1 User declines spec update confirmation` |
| openspec/specs/cli-archive/spec.md | 292 | `### Requirement: Display Output` | `### Requirement: REQ-CA-010 Display Output` |
| openspec/specs/cli-archive/spec.md | 296 | `#### Scenario: Showing delta application` | `#### Scenario: SCN-CA-010-1 Showing delta application` |
| openspec/specs/cli-archive/spec.md | 313 | `### Requirement: Archive Validation` | `### Requirement: REQ-CA-011 Archive Validation` |
| openspec/specs/cli-archive/spec.md | 317 | `#### Scenario: Pre-archive validation` | `#### Scenario: SCN-CA-011-1 Pre-archive validation` |
| openspec/specs/cli-archive/spec.md | 324 | `#### Scenario: Proposal warnings stay proposal-level` | `#### Scenario: SCN-CA-011-2 Proposal warnings stay proposal-level` |
| openspec/specs/cli-archive/spec.md | 333 | `#### Scenario: Force archive without validation` | `#### Scenario: SCN-CA-011-3 Force archive without validation` |
| openspec/specs/cli-artifact-workflow/spec.md | 6 | `### Requirement: Status Command` | `### Requirement: REQ-CAW-001 Status Command` |
| openspec/specs/cli-artifact-workflow/spec.md | 12 | `#### Scenario: Show status with all states` | `#### Scenario: SCN-CAW-001-1 Show status with all states` |
| openspec/specs/cli-artifact-workflow/spec.md | 20 | `#### Scenario: Status shows completion summary` | `#### Scenario: SCN-CAW-001-2 Status shows completion summary` |
| openspec/specs/cli-artifact-workflow/spec.md | 25 | `#### Scenario: Status JSON output` | `#### Scenario: SCN-CAW-001-3 Status JSON output` |
| openspec/specs/cli-artifact-workflow/spec.md | 33 | `#### Scenario: Status JSON includes apply requirements` | `#### Scenario: SCN-CAW-001-4 Status JSON includes apply requirements` |
| openspec/specs/cli-artifact-workflow/spec.md | 40 | `#### Scenario: Status JSON exposes each artifact's dependency edges` | `#### Scenario: SCN-CAW-001-5 Status JSON exposes each artifact's dependency edges` |
| openspec/specs/cli-artifact-workflow/spec.md | 46 | `#### Scenario: Status lists artifacts in dependency order, declaration order breaking ties` | `#### Scenario: SCN-CAW-001-6 Status lists artifacts in dependency order, declaration order breaking ties` |
| openspec/specs/cli-artifact-workflow/spec.md | 54 | `#### Scenario: Status on scaffolded change` | `#### Scenario: SCN-CAW-001-7 Status on scaffolded change` |
| openspec/specs/cli-artifact-workflow/spec.md | 61 | `#### Scenario: Missing change parameter` | `#### Scenario: SCN-CAW-001-8 Missing change parameter` |
| openspec/specs/cli-artifact-workflow/spec.md | 67 | `#### Scenario: Unknown change` | `#### Scenario: SCN-CAW-001-9 Unknown change` |
| openspec/specs/cli-artifact-workflow/spec.md | 73 | `### Requirement: Next Artifact Discovery` | `### Requirement: REQ-CAW-002 Next Artifact Discovery` |
| openspec/specs/cli-artifact-workflow/spec.md | 77 | `#### Scenario: Discover next artifacts from status output` | `#### Scenario: SCN-CAW-002-1 Discover next artifacts from status output` |
| openspec/specs/cli-artifact-workflow/spec.md | 84 | `### Requirement: Instructions Command` | `### Requirement: REQ-CAW-003 Instructions Command` |
| openspec/specs/cli-artifact-workflow/spec.md | 88 | `#### Scenario: Show enriched instructions` | `#### Scenario: SCN-CAW-003-1 Show enriched instructions` |
| openspec/specs/cli-artifact-workflow/spec.md | 97 | `#### Scenario: Instructions JSON output` | `#### Scenario: SCN-CAW-003-2 Instructions JSON output` |
| openspec/specs/cli-artifact-workflow/spec.md | 102 | `#### Scenario: Unknown artifact` | `#### Scenario: SCN-CAW-003-3 Unknown artifact` |
| openspec/specs/cli-artifact-workflow/spec.md | 107 | `#### Scenario: Artifact with unmet dependencies` | `#### Scenario: SCN-CAW-003-4 Artifact with unmet dependencies` |
| openspec/specs/cli-artifact-workflow/spec.md | 112 | `#### Scenario: Instructions on scaffolded change` | `#### Scenario: SCN-CAW-003-5 Instructions on scaffolded change` |
| openspec/specs/cli-artifact-workflow/spec.md | 118 | `### Requirement: Templates Command` | `### Requirement: REQ-CAW-004 Templates Command` |
| openspec/specs/cli-artifact-workflow/spec.md | 121 | `#### Scenario: List template paths with default schema` | `#### Scenario: SCN-CAW-004-1 List template paths with default schema` |
| openspec/specs/cli-artifact-workflow/spec.md | 125 | `#### Scenario: List template paths with custom schema` | `#### Scenario: SCN-CAW-004-2 List template paths with custom schema` |
| openspec/specs/cli-artifact-workflow/spec.md | 129 | `#### Scenario: Templates JSON output` | `#### Scenario: SCN-CAW-004-3 Templates JSON output` |
| openspec/specs/cli-artifact-workflow/spec.md | 133 | `#### Scenario: Template resolution source` | `#### Scenario: SCN-CAW-004-4 Template resolution source` |
| openspec/specs/cli-artifact-workflow/spec.md | 137 | `### Requirement: New Change Command` | `### Requirement: REQ-CAW-005 New Change Command` |
| openspec/specs/cli-artifact-workflow/spec.md | 140 | `#### Scenario: Create valid change` | `#### Scenario: SCN-CAW-005-1 Create valid change` |
| openspec/specs/cli-artifact-workflow/spec.md | 144 | `#### Scenario: Invalid change name` | `#### Scenario: SCN-CAW-005-2 Invalid change name` |
| openspec/specs/cli-artifact-workflow/spec.md | 148 | `#### Scenario: Duplicate change name` | `#### Scenario: SCN-CAW-005-3 Duplicate change name` |
| openspec/specs/cli-artifact-workflow/spec.md | 152 | `#### Scenario: Create with description` | `#### Scenario: SCN-CAW-005-4 Create with description` |
| openspec/specs/cli-artifact-workflow/spec.md | 156 | `### Requirement: Schema Selection` | `### Requirement: REQ-CAW-006 Schema Selection` |
| openspec/specs/cli-artifact-workflow/spec.md | 159 | `#### Scenario: Default schema` | `#### Scenario: SCN-CAW-006-1 Default schema` |
| openspec/specs/cli-artifact-workflow/spec.md | 163 | `#### Scenario: Custom schema` | `#### Scenario: SCN-CAW-006-2 Custom schema` |
| openspec/specs/cli-artifact-workflow/spec.md | 167 | `#### Scenario: Unknown schema` | `#### Scenario: SCN-CAW-006-3 Unknown schema` |
| openspec/specs/cli-artifact-workflow/spec.md | 171 | `### Requirement: Output Formatting` | `### Requirement: REQ-CAW-007 Output Formatting` |
| openspec/specs/cli-artifact-workflow/spec.md | 174 | `#### Scenario: Color output` | `#### Scenario: SCN-CAW-007-1 Color output` |
| openspec/specs/cli-artifact-workflow/spec.md | 178 | `#### Scenario: No color output` | `#### Scenario: SCN-CAW-007-2 No color output` |
| openspec/specs/cli-artifact-workflow/spec.md | 182 | `#### Scenario: Progress indication` | `#### Scenario: SCN-CAW-007-3 Progress indication` |
| openspec/specs/cli-artifact-workflow/spec.md | 186 | `### Requirement: Schema Apply Block` | `### Requirement: REQ-CAW-008 Schema Apply Block` |
| openspec/specs/cli-artifact-workflow/spec.md | 190 | `#### Scenario: Schema with apply block` | `#### Scenario: SCN-CAW-008-1 Schema with apply block` |
| openspec/specs/cli-artifact-workflow/spec.md | 197 | `#### Scenario: Schema without apply block` | `#### Scenario: SCN-CAW-008-2 Schema without apply block` |
| openspec/specs/cli-artifact-workflow/spec.md | 203 | `### Requirement: Apply Instructions Command` | `### Requirement: REQ-CAW-009 Apply Instructions Command` |
| openspec/specs/cli-artifact-workflow/spec.md | 207 | `#### Scenario: Generate apply instructions` | `#### Scenario: SCN-CAW-009-1 Generate apply instructions` |
| openspec/specs/cli-artifact-workflow/spec.md | 216 | `#### Scenario: Apply blocked by missing artifacts` | `#### Scenario: SCN-CAW-009-2 Apply blocked by missing artifacts` |
| openspec/specs/cli-artifact-workflow/spec.md | 223 | `#### Scenario: Apply instructions JSON output` | `#### Scenario: SCN-CAW-009-3 Apply instructions JSON output` |
| openspec/specs/cli-artifact-workflow/spec.md | 232 | `### Requirement: Tool selection flag` | `### Requirement: REQ-CAW-010 Tool selection flag` |
| openspec/specs/cli-artifact-workflow/spec.md | 236 | `#### Scenario: Specify tool via flag` | `#### Scenario: SCN-CAW-010-1 Specify tool via flag` |
| openspec/specs/cli-artifact-workflow/spec.md | 242 | `#### Scenario: Missing tool flag` | `#### Scenario: SCN-CAW-010-2 Missing tool flag` |
| openspec/specs/cli-artifact-workflow/spec.md | 248 | `#### Scenario: Unknown tool ID` | `#### Scenario: SCN-CAW-010-3 Unknown tool ID` |
| openspec/specs/cli-artifact-workflow/spec.md | 254 | `#### Scenario: Tool without skillsDir` | `#### Scenario: SCN-CAW-010-4 Tool without skillsDir` |
| openspec/specs/cli-artifact-workflow/spec.md | 259 | `#### Scenario: Tool without command adapter` | `#### Scenario: SCN-CAW-010-5 Tool without command adapter` |
| openspec/specs/cli-artifact-workflow/spec.md | 265 | `### Requirement: Output messaging` | `### Requirement: REQ-CAW-011 Output messaging` |
| openspec/specs/cli-artifact-workflow/spec.md | 269 | `#### Scenario: Show target tool in output` | `#### Scenario: SCN-CAW-011-1 Show target tool in output` |
| openspec/specs/cli-artifact-workflow/spec.md | 274 | `#### Scenario: Show generated paths` | `#### Scenario: SCN-CAW-011-2 Show generated paths` |
| openspec/specs/cli-artifact-workflow/spec.md | 280 | `#### Scenario: Show skipped commands message` | `#### Scenario: SCN-CAW-011-3 Show skipped commands message` |
| openspec/specs/cli-artifact-workflow/spec.md | 286 | `### Requirement: Status JSON provides planning context` | `### Requirement: REQ-CAW-012 Status JSON provides planning context` |
| openspec/specs/cli-artifact-workflow/spec.md | 289 | `#### Scenario: Reporting next steps` | `#### Scenario: SCN-CAW-012-1 Reporting next steps` |
| openspec/specs/cli-artifact-workflow/spec.md | 294 | `### Requirement: Status JSON action context` | `### Requirement: REQ-CAW-013 Status JSON action context` |
| openspec/specs/cli-artifact-workflow/spec.md | 297 | `#### Scenario: Repo-local action context` | `#### Scenario: SCN-CAW-013-1 Repo-local action context` |
| openspec/specs/cli-artifact-workflow/spec.md | 303 | `### Requirement: Instructions use resolved planning paths` | `### Requirement: REQ-CAW-014 Instructions use resolved planning paths` |
| openspec/specs/cli-artifact-workflow/spec.md | 306 | `#### Scenario: Repo-local artifact instructions` | `#### Scenario: SCN-CAW-014-1 Repo-local artifact instructions` |
| openspec/specs/cli-artifact-workflow/spec.md | 311 | `### Requirement: Workflow skills use CLI artifact context` | `### Requirement: REQ-CAW-015 Workflow skills use CLI artifact context` |
| openspec/specs/cli-artifact-workflow/spec.md | 314 | `#### Scenario: Skills inspect status before artifact work` | `#### Scenario: SCN-CAW-015-1 Skills inspect status before artifact work` |
| openspec/specs/cli-artifact-workflow/spec.md | 319 | `#### Scenario: Skills use instructions before writing artifacts` | `#### Scenario: SCN-CAW-015-2 Skills use instructions before writing artifacts` |
| openspec/specs/cli-change/spec.md | 7 | `### Requirement: Change Command` | `### Requirement: REQ-CC-001 Change Command` |
| openspec/specs/cli-change/spec.md | 11 | `#### Scenario: Show change as JSON` | `#### Scenario: SCN-CC-001-1 Show change as JSON` |
| openspec/specs/cli-change/spec.md | 18 | `#### Scenario: List all changes` | `#### Scenario: SCN-CC-001-2 List all changes` |
| openspec/specs/cli-change/spec.md | 25 | `#### Scenario: Show only requirement changes` | `#### Scenario: SCN-CC-001-3 Show only requirement changes` |
| openspec/specs/cli-change/spec.md | 31 | `#### Scenario: Validate change structure` | `#### Scenario: SCN-CC-001-4 Validate change structure` |
| openspec/specs/cli-change/spec.md | 38 | `### Requirement: Legacy Compatibility` | `### Requirement: REQ-CC-002 Legacy Compatibility` |
| openspec/specs/cli-change/spec.md | 42 | `#### Scenario: Legacy list command` | `#### Scenario: SCN-CC-002-1 Legacy list command` |
| openspec/specs/cli-change/spec.md | 48 | `#### Scenario: Legacy list with JSON output` | `#### Scenario: SCN-CC-002-2 Legacy list with JSON output` |
| openspec/specs/cli-change/spec.md | 54 | `#### Scenario: Unsupported legacy list flag` | `#### Scenario: SCN-CC-002-3 Unsupported legacy list flag` |
| openspec/specs/cli-change/spec.md | 59 | `#### Scenario: Preferred list command` | `#### Scenario: SCN-CC-002-4 Preferred list command` |
| openspec/specs/cli-change/spec.md | 64 | `### Requirement: Interactive show selection` | `### Requirement: REQ-CC-003 Interactive show selection` |
| openspec/specs/cli-change/spec.md | 68 | `#### Scenario: Interactive change selection for show` | `#### Scenario: SCN-CC-003-1 Interactive change selection for show` |
| openspec/specs/cli-change/spec.md | 76 | `#### Scenario: Non-interactive fallback keeps current behavior` | `#### Scenario: SCN-CC-003-2 Non-interactive fallback keeps current behavior` |
| openspec/specs/cli-change/spec.md | 84 | `### Requirement: Interactive validation selection` | `### Requirement: REQ-CC-004 Interactive validation selection` |
| openspec/specs/cli-change/spec.md | 88 | `#### Scenario: Interactive change selection for validation` | `#### Scenario: SCN-CC-004-1 Interactive change selection for validation` |
| openspec/specs/cli-change/spec.md | 95 | `#### Scenario: Non-interactive fallback keeps current behavior` | `#### Scenario: SCN-CC-004-2 Non-interactive fallback keeps current behavior` |
| openspec/specs/cli-completion/spec.md | 6 | `### Requirement: Native Shell Behavior Integration` | `### Requirement: REQ-CLIC-001 Native Shell Behavior Integration` |
| openspec/specs/cli-completion/spec.md | 10 | `#### Scenario: Zsh native completion` | `#### Scenario: SCN-CLIC-001-1 Zsh native completion` |
| openspec/specs/cli-completion/spec.md | 18 | `#### Scenario: Bash native completion` | `#### Scenario: SCN-CLIC-001-2 Bash native completion` |
| openspec/specs/cli-completion/spec.md | 26 | `#### Scenario: Fish native completion` | `#### Scenario: SCN-CLIC-001-3 Fish native completion` |
| openspec/specs/cli-completion/spec.md | 34 | `#### Scenario: PowerShell native completion` | `#### Scenario: SCN-CLIC-001-4 PowerShell native completion` |
| openspec/specs/cli-completion/spec.md | 42 | `#### Scenario: No custom UX patterns` | `#### Scenario: SCN-CLIC-001-5 No custom UX patterns` |
| openspec/specs/cli-completion/spec.md | 49 | `### Requirement: Command Structure` | `### Requirement: REQ-CLIC-002 Command Structure` |
| openspec/specs/cli-completion/spec.md | 53 | `#### Scenario: Available subcommands` | `#### Scenario: SCN-CLIC-002-1 Available subcommands` |
| openspec/specs/cli-completion/spec.md | 61 | `### Requirement: Shell Detection` | `### Requirement: REQ-CLIC-003 Shell Detection` |
| openspec/specs/cli-completion/spec.md | 65 | `#### Scenario: Detecting Zsh from environment` | `#### Scenario: SCN-CLIC-003-1 Detecting Zsh from environment` |
| openspec/specs/cli-completion/spec.md | 73 | `#### Scenario: Detecting Bash from environment` | `#### Scenario: SCN-CLIC-003-2 Detecting Bash from environment` |
| openspec/specs/cli-completion/spec.md | 79 | `#### Scenario: Detecting Fish from environment` | `#### Scenario: SCN-CLIC-003-3 Detecting Fish from environment` |
| openspec/specs/cli-completion/spec.md | 85 | `#### Scenario: Detecting PowerShell from environment` | `#### Scenario: SCN-CLIC-003-4 Detecting PowerShell from environment` |
| openspec/specs/cli-completion/spec.md | 91 | `#### Scenario: Unsupported shell detection` | `#### Scenario: SCN-CLIC-003-5 Unsupported shell detection` |
| openspec/specs/cli-completion/spec.md | 96 | `### Requirement: Completion Generation` | `### Requirement: REQ-CLIC-004 Completion Generation` |
| openspec/specs/cli-completion/spec.md | 100 | `#### Scenario: Generating Zsh completion` | `#### Scenario: SCN-CLIC-004-1 Generating Zsh completion` |
| openspec/specs/cli-completion/spec.md | 109 | `#### Scenario: Generating Bash completion` | `#### Scenario: SCN-CLIC-004-2 Generating Bash completion` |
| openspec/specs/cli-completion/spec.md | 118 | `#### Scenario: Generating Fish completion` | `#### Scenario: SCN-CLIC-004-3 Generating Fish completion` |
| openspec/specs/cli-completion/spec.md | 127 | `#### Scenario: Generating PowerShell completion` | `#### Scenario: SCN-CLIC-004-4 Generating PowerShell completion` |
| openspec/specs/cli-completion/spec.md | 136 | `### Requirement: Dynamic Completions` | `### Requirement: REQ-CLIC-005 Dynamic Completions` |
| openspec/specs/cli-completion/spec.md | 140 | `#### Scenario: Completing change IDs` | `#### Scenario: SCN-CLIC-005-1 Completing change IDs` |
| openspec/specs/cli-completion/spec.md | 148 | `#### Scenario: Completing spec IDs` | `#### Scenario: SCN-CLIC-005-2 Completing spec IDs` |
| openspec/specs/cli-completion/spec.md | 155 | `#### Scenario: Completion caching` | `#### Scenario: SCN-CLIC-005-3 Completion caching` |
| openspec/specs/cli-completion/spec.md | 162 | `#### Scenario: Project detection` | `#### Scenario: SCN-CLIC-005-4 Project detection` |
| openspec/specs/cli-completion/spec.md | 168 | `### Requirement: Installation Automation` | `### Requirement: REQ-CLIC-006 Installation Automation` |
| openspec/specs/cli-completion/spec.md | 172 | `#### Scenario: Installing for Oh My Zsh` | `#### Scenario: SCN-CLIC-006-1 Installing for Oh My Zsh` |
| openspec/specs/cli-completion/spec.md | 181 | `#### Scenario: Installing for standard Zsh` | `#### Scenario: SCN-CLIC-006-2 Installing for standard Zsh` |
| openspec/specs/cli-completion/spec.md | 190 | `#### Scenario: Installing for Bash with bash-completion` | `#### Scenario: SCN-CLIC-006-3 Installing for Bash with bash-completion` |
| openspec/specs/cli-completion/spec.md | 199 | `#### Scenario: Installing for Fish` | `#### Scenario: SCN-CLIC-006-4 Installing for Fish` |
| openspec/specs/cli-completion/spec.md | 207 | `#### Scenario: Installing for PowerShell` | `#### Scenario: SCN-CLIC-006-5 Installing for PowerShell` |
| openspec/specs/cli-completion/spec.md | 216 | `#### Scenario: Auto-detecting shell for installation` | `#### Scenario: SCN-CLIC-006-6 Auto-detecting shell for installation` |
| openspec/specs/cli-completion/spec.md | 223 | `#### Scenario: Already installed` | `#### Scenario: SCN-CLIC-006-7 Already installed` |
| openspec/specs/cli-completion/spec.md | 230 | `### Requirement: Uninstallation` | `### Requirement: REQ-CLIC-007 Uninstallation` |
| openspec/specs/cli-completion/spec.md | 234 | `#### Scenario: Uninstalling Zsh completion` | `#### Scenario: SCN-CLIC-007-1 Uninstalling Zsh completion` |
| openspec/specs/cli-completion/spec.md | 244 | `#### Scenario: Uninstalling Bash completion` | `#### Scenario: SCN-CLIC-007-2 Uninstalling Bash completion` |
| openspec/specs/cli-completion/spec.md | 252 | `#### Scenario: Uninstalling Fish completion` | `#### Scenario: SCN-CLIC-007-3 Uninstalling Fish completion` |
| openspec/specs/cli-completion/spec.md | 259 | `#### Scenario: Uninstalling PowerShell completion` | `#### Scenario: SCN-CLIC-007-4 Uninstalling PowerShell completion` |
| openspec/specs/cli-completion/spec.md | 267 | `#### Scenario: Auto-detecting shell for uninstallation` | `#### Scenario: SCN-CLIC-007-5 Auto-detecting shell for uninstallation` |
| openspec/specs/cli-completion/spec.md | 272 | `#### Scenario: Not installed` | `#### Scenario: SCN-CLIC-007-6 Not installed` |
| openspec/specs/cli-completion/spec.md | 278 | `### Requirement: Architecture Patterns` | `### Requirement: REQ-CLIC-008 Architecture Patterns` |
| openspec/specs/cli-completion/spec.md | 282 | `#### Scenario: Shell-specific generators` | `#### Scenario: SCN-CLIC-008-1 Shell-specific generators` |
| openspec/specs/cli-completion/spec.md | 291 | `#### Scenario: Shell-specific installers` | `#### Scenario: SCN-CLIC-008-2 Shell-specific installers` |
| openspec/specs/cli-completion/spec.md | 300 | `#### Scenario: Factory pattern for shell selection` | `#### Scenario: SCN-CLIC-008-3 Factory pattern for shell selection` |
| openspec/specs/cli-completion/spec.md | 309 | `#### Scenario: Dynamic completion providers` | `#### Scenario: SCN-CLIC-008-4 Dynamic completion providers` |
| openspec/specs/cli-completion/spec.md | 319 | `#### Scenario: Command registry` | `#### Scenario: SCN-CLIC-008-5 Command registry` |
| openspec/specs/cli-completion/spec.md | 332 | `#### Scenario: Type-safe shell detection` | `#### Scenario: SCN-CLIC-008-6 Type-safe shell detection` |
| openspec/specs/cli-completion/spec.md | 339 | `### Requirement: Error Handling` | `### Requirement: REQ-CLIC-009 Error Handling` |
| openspec/specs/cli-completion/spec.md | 343 | `#### Scenario: Unsupported shell` | `#### Scenario: SCN-CLIC-009-1 Unsupported shell` |
| openspec/specs/cli-completion/spec.md | 349 | `#### Scenario: Permission errors during installation` | `#### Scenario: SCN-CLIC-009-2 Permission errors during installation` |
| openspec/specs/cli-completion/spec.md | 356 | `#### Scenario: Missing shell configuration directory` | `#### Scenario: SCN-CLIC-009-3 Missing shell configuration directory` |
| openspec/specs/cli-completion/spec.md | 362 | `#### Scenario: Shell not detected` | `#### Scenario: SCN-CLIC-009-4 Shell not detected` |
| openspec/specs/cli-completion/spec.md | 369 | `### Requirement: Output Format` | `### Requirement: REQ-CLIC-010 Output Format` |
| openspec/specs/cli-completion/spec.md | 373 | `#### Scenario: Script generation output` | `#### Scenario: SCN-CLIC-010-1 Script generation output` |
| openspec/specs/cli-completion/spec.md | 379 | `#### Scenario: Installation success output` | `#### Scenario: SCN-CLIC-010-2 Installation success output` |
| openspec/specs/cli-completion/spec.md | 388 | `#### Scenario: Verbose installation output` | `#### Scenario: SCN-CLIC-010-3 Verbose installation output` |
| openspec/specs/cli-completion/spec.md | 397 | `### Requirement: Testing Support` | `### Requirement: REQ-CLIC-011 Testing Support` |
| openspec/specs/cli-completion/spec.md | 401 | `#### Scenario: Mock shell environment` | `#### Scenario: SCN-CLIC-011-1 Mock shell environment` |
| openspec/specs/cli-completion/spec.md | 408 | `#### Scenario: Generator output verification` | `#### Scenario: SCN-CLIC-011-2 Generator output verification` |
| openspec/specs/cli-completion/spec.md | 417 | `#### Scenario: Installer simulation` | `#### Scenario: SCN-CLIC-011-3 Installer simulation` |
| openspec/specs/cli-completion/spec.md | 426 | `#### Scenario: Cross-shell consistency` | `#### Scenario: SCN-CLIC-011-4 Cross-shell consistency` |
| openspec/specs/cli-config/spec.md | 6 | `### Requirement: Command Structure` | `### Requirement: REQ-CLC-001 Command Structure` |
| openspec/specs/cli-config/spec.md | 10 | `#### Scenario: Available subcommands` | `#### Scenario: SCN-CLC-001-1 Available subcommands` |
| openspec/specs/cli-config/spec.md | 22 | `### Requirement: Config Path` | `### Requirement: REQ-CLC-002 Config Path` |
| openspec/specs/cli-config/spec.md | 26 | `#### Scenario: Show config path` | `#### Scenario: SCN-CLC-002-1 Show config path` |
| openspec/specs/cli-config/spec.md | 32 | `### Requirement: Config List` | `### Requirement: REQ-CLC-003 Config List` |
| openspec/specs/cli-config/spec.md | 36 | `#### Scenario: List config in human-readable format` | `#### Scenario: SCN-CLC-003-1 List config in human-readable format` |
| openspec/specs/cli-config/spec.md | 42 | `#### Scenario: List config as JSON` | `#### Scenario: SCN-CLC-003-2 List config as JSON` |
| openspec/specs/cli-config/spec.md | 48 | `### Requirement: Config Get` | `### Requirement: REQ-CLC-004 Config Get` |
| openspec/specs/cli-config/spec.md | 52 | `#### Scenario: Get top-level key` | `#### Scenario: SCN-CLC-004-1 Get top-level key` |
| openspec/specs/cli-config/spec.md | 58 | `#### Scenario: Get nested key with dot notation` | `#### Scenario: SCN-CLC-004-2 Get nested key with dot notation` |
| openspec/specs/cli-config/spec.md | 64 | `#### Scenario: Get non-existent key` | `#### Scenario: SCN-CLC-004-3 Get non-existent key` |
| openspec/specs/cli-config/spec.md | 70 | `#### Scenario: Get object value` | `#### Scenario: SCN-CLC-004-4 Get object value` |
| openspec/specs/cli-config/spec.md | 75 | `### Requirement: Config Set` | `### Requirement: REQ-CLC-005 Config Set` |
| openspec/specs/cli-config/spec.md | 79 | `#### Scenario: Set string value` | `#### Scenario: SCN-CLC-005-1 Set string value` |
| openspec/specs/cli-config/spec.md | 86 | `#### Scenario: Set boolean value` | `#### Scenario: SCN-CLC-005-2 Set boolean value` |
| openspec/specs/cli-config/spec.md | 92 | `#### Scenario: Set numeric value` | `#### Scenario: SCN-CLC-005-3 Set numeric value` |
| openspec/specs/cli-config/spec.md | 98 | `#### Scenario: Force string with --string flag` | `#### Scenario: SCN-CLC-005-4 Force string with --string flag` |
| openspec/specs/cli-config/spec.md | 104 | `#### Scenario: Set nested key` | `#### Scenario: SCN-CLC-005-5 Set nested key` |
| openspec/specs/cli-config/spec.md | 110 | `### Requirement: Config Unset` | `### Requirement: REQ-CLC-006 Config Unset` |
| openspec/specs/cli-config/spec.md | 114 | `#### Scenario: Unset existing key` | `#### Scenario: SCN-CLC-006-1 Unset existing key` |
| openspec/specs/cli-config/spec.md | 122 | `#### Scenario: Unset non-existent key` | `#### Scenario: SCN-CLC-006-2 Unset non-existent key` |
| openspec/specs/cli-config/spec.md | 129 | `### Requirement: Config Reset` | `### Requirement: REQ-CLC-007 Config Reset` |
| openspec/specs/cli-config/spec.md | 133 | `#### Scenario: Reset all with confirmation` | `#### Scenario: SCN-CLC-007-1 Reset all with confirmation` |
| openspec/specs/cli-config/spec.md | 140 | `#### Scenario: Reset all with -y flag` | `#### Scenario: SCN-CLC-007-2 Reset all with -y flag` |
| openspec/specs/cli-config/spec.md | 145 | `#### Scenario: Reset without --all flag` | `#### Scenario: SCN-CLC-007-3 Reset without --all flag` |
| openspec/specs/cli-config/spec.md | 151 | `### Requirement: Config Edit` | `### Requirement: REQ-CLC-008 Config Edit` |
| openspec/specs/cli-config/spec.md | 155 | `#### Scenario: Open editor successfully` | `#### Scenario: SCN-CLC-008-1 Open editor successfully` |
| openspec/specs/cli-config/spec.md | 163 | `#### Scenario: No editor configured` | `#### Scenario: SCN-CLC-008-2 No editor configured` |
| openspec/specs/cli-config/spec.md | 170 | `### Requirement: Profile Configuration Flow` | `### Requirement: REQ-CLC-009 Profile Configuration Flow` |
| openspec/specs/cli-config/spec.md | 174 | `#### Scenario: Current profile summary appears first` | `#### Scenario: SCN-CLC-009-1 Current profile summary appears first` |
| openspec/specs/cli-config/spec.md | 181 | `#### Scenario: Action-first menu offers skippable paths` | `#### Scenario: SCN-CLC-009-2 Action-first menu offers skippable paths` |
| openspec/specs/cli-config/spec.md | 190 | `#### Scenario: Delivery prompt marks current selection` | `#### Scenario: SCN-CLC-009-3 Delivery prompt marks current selection` |
| openspec/specs/cli-config/spec.md | 196 | `#### Scenario: No-op exits without saving or apply prompt` | `#### Scenario: SCN-CLC-009-4 No-op exits without saving or apply prompt` |
| openspec/specs/cli-config/spec.md | 203 | `#### Scenario: No-op warns when current project is out of sync` | `#### Scenario: SCN-CLC-009-5 No-op warns when current project is out of sync` |
| openspec/specs/cli-config/spec.md | 210 | `#### Scenario: Apply prompt is gated on actual changes` | `#### Scenario: SCN-CLC-009-6 Apply prompt is gated on actual changes` |
| openspec/specs/cli-config/spec.md | 217 | `### Requirement: Key Naming Convention` | `### Requirement: REQ-CLC-010 Key Naming Convention` |
| openspec/specs/cli-config/spec.md | 221 | `#### Scenario: Keys match JSON structure` | `#### Scenario: SCN-CLC-010-1 Keys match JSON structure` |
| openspec/specs/cli-config/spec.md | 227 | `### Requirement: Schema Validation` | `### Requirement: REQ-CLC-011 Schema Validation` |
| openspec/specs/cli-config/spec.md | 231 | `#### Scenario: Unknown key rejected by default` | `#### Scenario: SCN-CLC-011-1 Unknown key rejected by default` |
| openspec/specs/cli-config/spec.md | 238 | `#### Scenario: Unknown key accepted with override` | `#### Scenario: SCN-CLC-011-2 Unknown key accepted with override` |
| openspec/specs/cli-config/spec.md | 244 | `#### Scenario: Invalid feature flag value rejected` | `#### Scenario: SCN-CLC-011-3 Invalid feature flag value rejected` |
| openspec/specs/cli-config/spec.md | 251 | `### Requirement: Reserved Scope Flag` | `### Requirement: REQ-CLC-012 Reserved Scope Flag` |
| openspec/specs/cli-config/spec.md | 255 | `#### Scenario: Scope flag defaults to global` | `#### Scenario: SCN-CLC-012-1 Scope flag defaults to global` |
| openspec/specs/cli-config/spec.md | 260 | `#### Scenario: Project scope not yet implemented` | `#### Scenario: SCN-CLC-012-2 Project scope not yet implemented` |
| openspec/specs/cli-feedback/spec.md | 7 | `### Requirement: Feedback command` | `### Requirement: REQ-CF-001 Feedback command` |
| openspec/specs/cli-feedback/spec.md | 11 | `#### Scenario: Simple feedback submission` | `#### Scenario: SCN-CF-001-1 Simple feedback submission` |
| openspec/specs/cli-feedback/spec.md | 20 | `#### Scenario: Repository does not define the feedback label` | `#### Scenario: SCN-CF-001-2 Repository does not define the feedback label` |
| openspec/specs/cli-feedback/spec.md | 29 | `#### Scenario: Safe command execution` | `#### Scenario: SCN-CF-001-3 Safe command execution` |
| openspec/specs/cli-feedback/spec.md | 36 | `#### Scenario: Feedback with body` | `#### Scenario: SCN-CF-001-4 Feedback with body` |
| openspec/specs/cli-feedback/spec.md | 44 | `#### Scenario: Long or multiline feedback message` | `#### Scenario: SCN-CF-001-5 Long or multiline feedback message` |
| openspec/specs/cli-feedback/spec.md | 51 | `### Requirement: GitHub CLI dependency` | `### Requirement: REQ-CF-002 GitHub CLI dependency` |
| openspec/specs/cli-feedback/spec.md | 55 | `#### Scenario: Missing gh CLI with fallback` | `#### Scenario: SCN-CF-002-1 Missing gh CLI with fallback` |
| openspec/specs/cli-feedback/spec.md | 69 | `#### Scenario: Cross-platform gh CLI detection on Unix` | `#### Scenario: SCN-CF-002-2 Cross-platform gh CLI detection on Unix` |
| openspec/specs/cli-feedback/spec.md | 75 | `#### Scenario: Cross-platform gh CLI detection on Windows` | `#### Scenario: SCN-CF-002-3 Cross-platform gh CLI detection on Windows` |
| openspec/specs/cli-feedback/spec.md | 81 | `#### Scenario: Unauthenticated gh CLI with fallback` | `#### Scenario: SCN-CF-002-4 Unauthenticated gh CLI with fallback` |
| openspec/specs/cli-feedback/spec.md | 91 | `#### Scenario: Authenticated gh CLI` | `#### Scenario: SCN-CF-002-5 Authenticated gh CLI` |
| openspec/specs/cli-feedback/spec.md | 97 | `### Requirement: Issue metadata` | `### Requirement: REQ-CF-003 Issue metadata` |
| openspec/specs/cli-feedback/spec.md | 101 | `#### Scenario: Standard metadata` | `#### Scenario: SCN-CF-003-1 Standard metadata` |
| openspec/specs/cli-feedback/spec.md | 110 | `#### Scenario: Windows platform metadata` | `#### Scenario: SCN-CF-003-2 Windows platform metadata` |
| openspec/specs/cli-feedback/spec.md | 116 | `#### Scenario: No sensitive metadata` | `#### Scenario: SCN-CF-003-3 No sensitive metadata` |
| openspec/specs/cli-feedback/spec.md | 125 | `### Requirement: Feedback always works` | `### Requirement: REQ-CF-004 Feedback always works` |
| openspec/specs/cli-feedback/spec.md | 129 | `#### Scenario: Feedback with telemetry disabled` | `#### Scenario: SCN-CF-004-1 Feedback with telemetry disabled` |
| openspec/specs/cli-feedback/spec.md | 136 | `#### Scenario: Feedback in CI environment` | `#### Scenario: SCN-CF-004-2 Feedback in CI environment` |
| openspec/specs/cli-feedback/spec.md | 142 | `### Requirement: Error handling` | `### Requirement: REQ-CF-005 Error handling` |
| openspec/specs/cli-feedback/spec.md | 146 | `#### Scenario: gh CLI execution failure` | `#### Scenario: SCN-CF-005-1 gh CLI execution failure` |
| openspec/specs/cli-feedback/spec.md | 153 | `#### Scenario: Network failure` | `#### Scenario: SCN-CF-005-2 Network failure` |
| openspec/specs/cli-feedback/spec.md | 160 | `### Requirement: Feedback skill for agents` | `### Requirement: REQ-CF-006 Feedback skill for agents` |
| openspec/specs/cli-feedback/spec.md | 164 | `#### Scenario: Agent-initiated feedback` | `#### Scenario: SCN-CF-006-1 Agent-initiated feedback` |
| openspec/specs/cli-feedback/spec.md | 173 | `#### Scenario: Context enrichment` | `#### Scenario: SCN-CF-006-2 Context enrichment` |
| openspec/specs/cli-feedback/spec.md | 181 | `#### Scenario: Anonymization` | `#### Scenario: SCN-CF-006-3 Anonymization` |
| openspec/specs/cli-feedback/spec.md | 191 | `#### Scenario: User confirmation required` | `#### Scenario: SCN-CF-006-4 User confirmation required` |
| openspec/specs/cli-feedback/spec.md | 199 | `### Requirement: Shell completions` | `### Requirement: REQ-CF-007 Shell completions` |
| openspec/specs/cli-feedback/spec.md | 203 | `#### Scenario: Command completion` | `#### Scenario: SCN-CF-007-1 Command completion` |
| openspec/specs/cli-feedback/spec.md | 208 | `#### Scenario: Flag completion` | `#### Scenario: SCN-CF-007-2 Flag completion` |
| openspec/specs/cli-init/spec.md | 7 | `### Requirement: Progress Indicators` | `### Requirement: REQ-CI-001 Progress Indicators` |
| openspec/specs/cli-init/spec.md | 11 | `#### Scenario: Displaying initialization progress` | `#### Scenario: SCN-CI-001-1 Displaying initialization progress` |
| openspec/specs/cli-init/spec.md | 21 | `### Requirement: Directory Creation` | `### Requirement: REQ-CI-002 Directory Creation` |
| openspec/specs/cli-init/spec.md | 25 | `#### Scenario: Creating OpenSpec structure` | `#### Scenario: SCN-CI-002-1 Creating OpenSpec structure` |
| openspec/specs/cli-init/spec.md | 37 | `### Requirement: AI Tool Configuration` | `### Requirement: REQ-CI-003 AI Tool Configuration` |
| openspec/specs/cli-init/spec.md | 41 | `#### Scenario: Prompting for AI tool selection` | `#### Scenario: SCN-CI-003-1 Prompting for AI tool selection` |
| openspec/specs/cli-init/spec.md | 51 | `#### Scenario: Selecting tools to configure` | `#### Scenario: SCN-CI-003-2 Selecting tools to configure` |
| openspec/specs/cli-init/spec.md | 58 | `### Requirement: Interactive Mode` | `### Requirement: REQ-CI-004 Interactive Mode` |
| openspec/specs/cli-init/spec.md | 60 | `#### Scenario: Displaying interactive menu` | `#### Scenario: SCN-CI-004-1 Displaying interactive menu` |
| openspec/specs/cli-init/spec.md | 68 | `### Requirement: Safety Checks` | `### Requirement: REQ-CI-005 Safety Checks` |
| openspec/specs/cli-init/spec.md | 71 | `#### Scenario: Detecting existing initialization` | `#### Scenario: SCN-CI-005-1 Detecting existing initialization` |
| openspec/specs/cli-init/spec.md | 77 | `### Requirement: Success Output` | `### Requirement: REQ-CI-006 Success Output` |
| openspec/specs/cli-init/spec.md | 81 | `#### Scenario: Displaying success message` | `#### Scenario: SCN-CI-006-1 Displaying success message` |
| openspec/specs/cli-init/spec.md | 93 | `#### Scenario: Displaying restart instruction` | `#### Scenario: SCN-CI-006-2 Displaying restart instruction` |
| openspec/specs/cli-init/spec.md | 98 | `### Requirement: Exit Codes` | `### Requirement: REQ-CI-007 Exit Codes` |
| openspec/specs/cli-init/spec.md | 102 | `#### Scenario: Returning exit codes` | `#### Scenario: SCN-CI-007-1 Returning exit codes` |
| openspec/specs/cli-init/spec.md | 111 | `### Requirement: Additional AI Tool Initialization` | `### Requirement: REQ-CI-008 Additional AI Tool Initialization` |
| openspec/specs/cli-init/spec.md | 114 | `#### Scenario: Configuring an extra tool after initial setup` | `#### Scenario: SCN-CI-008-1 Configuring an extra tool after initial setup` |
| openspec/specs/cli-init/spec.md | 121 | `### Requirement: Success Output Enhancements` | `### Requirement: REQ-CI-009 Success Output Enhancements` |
| openspec/specs/cli-init/spec.md | 124 | `#### Scenario: Showing tool summary` | `#### Scenario: SCN-CI-009-1 Showing tool summary` |
| openspec/specs/cli-init/spec.md | 129 | `### Requirement: Exit Code Adjustments` | `### Requirement: REQ-CI-010 Exit Code Adjustments` |
| openspec/specs/cli-init/spec.md | 132 | `#### Scenario: Allowing empty extend runs` | `#### Scenario: SCN-CI-010-1 Allowing empty extend runs` |
| openspec/specs/cli-init/spec.md | 138 | `### Requirement: Non-Interactive Mode` | `### Requirement: REQ-CI-011 Non-Interactive Mode` |
| openspec/specs/cli-init/spec.md | 142 | `#### Scenario: Select all tools non-interactively` | `#### Scenario: SCN-CI-011-1 Select all tools non-interactively` |
| openspec/specs/cli-init/spec.md | 148 | `#### Scenario: Select specific tools non-interactively` | `#### Scenario: SCN-CI-011-2 Select specific tools non-interactively` |
| openspec/specs/cli-init/spec.md | 154 | `#### Scenario: Skip tool configuration non-interactively` | `#### Scenario: SCN-CI-011-3 Skip tool configuration non-interactively` |
| openspec/specs/cli-init/spec.md | 161 | `#### Scenario: Invalid tool specification` | `#### Scenario: SCN-CI-011-4 Invalid tool specification` |
| openspec/specs/cli-init/spec.md | 167 | `#### Scenario: Reserved value combined with tool IDs` | `#### Scenario: SCN-CI-011-5 Reserved value combined with tool IDs` |
| openspec/specs/cli-init/spec.md | 173 | `#### Scenario: Missing --tools in non-interactive mode` | `#### Scenario: SCN-CI-011-6 Missing --tools in non-interactive mode` |
| openspec/specs/cli-init/spec.md | 180 | `### Requirement: Skill Generation` | `### Requirement: REQ-CI-012 Skill Generation` |
| openspec/specs/cli-init/spec.md | 184 | `#### Scenario: Generating skills for a tool` | `#### Scenario: SCN-CI-012-1 Generating skills for a tool` |
| openspec/specs/cli-init/spec.md | 200 | `### Requirement: Slash Command Generation` | `### Requirement: REQ-CI-013 Slash Command Generation` |
| openspec/specs/cli-init/spec.md | 204 | `#### Scenario: Generating slash commands for a tool with a registered adapter` | `#### Scenario: SCN-CI-013-1 Generating slash commands for a tool with a registered adapter` |
| openspec/specs/cli-init/spec.md | 220 | `#### Scenario: Selected tool has no command adapter` | `#### Scenario: SCN-CI-013-2 Selected tool has no command adapter` |
| openspec/specs/cli-init/spec.md | 228 | `#### Scenario: Kimi Code skips command-file generation` | `#### Scenario: SCN-CI-013-3 Kimi Code skips command-file generation` |
| openspec/specs/cli-init/spec.md | 234 | `#### Scenario: Grok Build skips command-file generation` | `#### Scenario: SCN-CI-013-4 Grok Build skips command-file generation` |
| openspec/specs/cli-init/spec.md | 240 | `### Requirement: Config File Generation` | `### Requirement: REQ-CI-014 Config File Generation` |
| openspec/specs/cli-init/spec.md | 244 | `#### Scenario: Creating config.yaml` | `#### Scenario: SCN-CI-014-1 Creating config.yaml` |
| openspec/specs/cli-init/spec.md | 251 | `#### Scenario: Preserving existing config.yaml` | `#### Scenario: SCN-CI-014-2 Preserving existing config.yaml` |
| openspec/specs/cli-init/spec.md | 258 | `### Requirement: Artifact Language Configuration` | `### Requirement: REQ-CI-015 Artifact Language Configuration` |
| openspec/specs/cli-init/spec.md | 262 | `#### Scenario: Configuring language for a new project` | `#### Scenario: SCN-CI-015-1 Configuring language for a new project` |
| openspec/specs/cli-init/spec.md | 269 | `#### Scenario: Protecting existing project context` | `#### Scenario: SCN-CI-015-2 Protecting existing project context` |
| openspec/specs/cli-init/spec.md | 275 | `#### Scenario: Rejecting an unsafe language value` | `#### Scenario: SCN-CI-015-3 Rejecting an unsafe language value` |
| openspec/specs/cli-init/spec.md | 281 | `#### Scenario: Language config cannot be written` | `#### Scenario: SCN-CI-015-4 Language config cannot be written` |
| openspec/specs/cli-init/spec.md | 287 | `### Requirement: Experimental Command Alias` | `### Requirement: REQ-CI-016 Experimental Command Alias` |
| openspec/specs/cli-init/spec.md | 291 | `#### Scenario: Running openspec experimental` | `#### Scenario: SCN-CI-016-1 Running openspec experimental` |
| openspec/specs/cli-list/spec.md | 7 | `### Requirement: Command Execution` | `### Requirement: REQ-CL-001 Command Execution` |
| openspec/specs/cli-list/spec.md | 10 | `#### Scenario: Scanning for changes (default)` | `#### Scenario: SCN-CL-001-1 Scanning for changes (default)` |
| openspec/specs/cli-list/spec.md | 16 | `#### Scenario: Scanning for specs` | `#### Scenario: SCN-CL-001-2 Scanning for specs` |
| openspec/specs/cli-list/spec.md | 22 | `### Requirement: Task Counting` | `### Requirement: REQ-CL-002 Task Counting` |
| openspec/specs/cli-list/spec.md | 26 | `#### Scenario: Counting tasks in tasks.md` | `#### Scenario: SCN-CL-002-1 Counting tasks in tasks.md` |
| openspec/specs/cli-list/spec.md | 34 | `### Requirement: Output Format` | `### Requirement: REQ-CL-003 Output Format` |
| openspec/specs/cli-list/spec.md | 37 | `#### Scenario: Displaying change list (default)` | `#### Scenario: SCN-CL-003-1 Displaying change list (default)` |
| openspec/specs/cli-list/spec.md | 43 | `#### Scenario: Displaying spec list` | `#### Scenario: SCN-CL-003-2 Displaying spec list` |
| openspec/specs/cli-list/spec.md | 49 | `### Requirement: Flags` | `### Requirement: REQ-CL-004 Flags` |
| openspec/specs/cli-list/spec.md | 52 | `#### Scenario: Selecting specs` | `#### Scenario: SCN-CL-004-1 Selecting specs` |
| openspec/specs/cli-list/spec.md | 56 | `#### Scenario: Selecting changes` | `#### Scenario: SCN-CL-004-2 Selecting changes` |
| openspec/specs/cli-list/spec.md | 60 | `### Requirement: Empty State` | `### Requirement: REQ-CL-005 Empty State` |
| openspec/specs/cli-list/spec.md | 63 | `#### Scenario: Handling empty state (changes)` | `#### Scenario: SCN-CL-005-1 Handling empty state (changes)` |
| openspec/specs/cli-list/spec.md | 67 | `#### Scenario: Handling empty state (specs)` | `#### Scenario: SCN-CL-005-2 Handling empty state (specs)` |
| openspec/specs/cli-list/spec.md | 71 | `### Requirement: Error Handling` | `### Requirement: REQ-CL-006 Error Handling` |
| openspec/specs/cli-list/spec.md | 75 | `#### Scenario: Missing tasks.md file` | `#### Scenario: SCN-CL-006-1 Missing tasks.md file` |
| openspec/specs/cli-list/spec.md | 80 | `#### Scenario: Missing changes directory` | `#### Scenario: SCN-CL-006-2 Missing changes directory` |
| openspec/specs/cli-list/spec.md | 86 | `### Requirement: Sorting` | `### Requirement: REQ-CL-007 Sorting` |
| openspec/specs/cli-list/spec.md | 90 | `#### Scenario: Ordering changes` | `#### Scenario: SCN-CL-007-1 Ordering changes` |
| openspec/specs/cli-show/spec.md | 7 | `### Requirement: Top-level show command` | `### Requirement: REQ-CS-001 Top-level show command` |
| openspec/specs/cli-show/spec.md | 11 | `#### Scenario: Interactive show selection` | `#### Scenario: SCN-CS-001-1 Interactive show selection` |
| openspec/specs/cli-show/spec.md | 18 | `#### Scenario: Non-interactive environments do not prompt` | `#### Scenario: SCN-CS-001-2 Non-interactive environments do not prompt` |
| openspec/specs/cli-show/spec.md | 26 | `#### Scenario: Direct item display` | `#### Scenario: SCN-CS-001-3 Direct item display` |
| openspec/specs/cli-show/spec.md | 33 | `#### Scenario: Type detection and ambiguity handling` | `#### Scenario: SCN-CS-001-4 Type detection and ambiguity handling` |
| openspec/specs/cli-show/spec.md | 40 | `#### Scenario: Explicit type override` | `#### Scenario: SCN-CS-001-5 Explicit type override` |
| openspec/specs/cli-show/spec.md | 48 | `### Requirement: Output format options` | `### Requirement: REQ-CS-002 Output format options` |
| openspec/specs/cli-show/spec.md | 52 | `#### Scenario: JSON output` | `#### Scenario: SCN-CS-002-1 JSON output` |
| openspec/specs/cli-show/spec.md | 59 | `#### Scenario: Flag scoping and delegation` | `#### Scenario: SCN-CS-002-2 Flag scoping and delegation` |
| openspec/specs/cli-show/spec.md | 68 | `### Requirement: Interactivity controls` | `### Requirement: REQ-CS-003 Interactivity controls` |
| openspec/specs/cli-show/spec.md | 74 | `#### Scenario: Change-specific options` | `#### Scenario: SCN-CS-003-1 Change-specific options` |
| openspec/specs/cli-show/spec.md | 80 | `#### Scenario: Spec-specific options  ` | `#### Scenario: SCN-CS-003-2 Spec-specific options` |
| openspec/specs/cli-spec/spec.md | 7 | `### Requirement: Interactive spec show` | `### Requirement: REQ-CLS-001 Interactive spec show` |
| openspec/specs/cli-spec/spec.md | 11 | `#### Scenario: Interactive spec selection for show` | `#### Scenario: SCN-CLS-001-1 Interactive spec selection for show` |
| openspec/specs/cli-spec/spec.md | 19 | `#### Scenario: Non-interactive fallback keeps current behavior` | `#### Scenario: SCN-CLS-001-2 Non-interactive fallback keeps current behavior` |
| openspec/specs/cli-spec/spec.md | 27 | `### Requirement: Spec Command` | `### Requirement: REQ-CLS-002 Spec Command` |
| openspec/specs/cli-spec/spec.md | 31 | `#### Scenario: Show spec as JSON` | `#### Scenario: SCN-CLS-002-1 Show spec as JSON` |
| openspec/specs/cli-spec/spec.md | 38 | `#### Scenario: List all specs` | `#### Scenario: SCN-CLS-002-2 List all specs` |
| openspec/specs/cli-spec/spec.md | 45 | `#### Scenario: Filter spec content` | `#### Scenario: SCN-CLS-002-3 Filter spec content` |
| openspec/specs/cli-spec/spec.md | 51 | `#### Scenario: Validate spec structure` | `#### Scenario: SCN-CLS-002-4 Validate spec structure` |
| openspec/specs/cli-spec/spec.md | 58 | `### Requirement: JSON Schema Definition` | `### Requirement: REQ-CLS-003 JSON Schema Definition` |
| openspec/specs/cli-spec/spec.md | 62 | `#### Scenario: Schema validation` | `#### Scenario: SCN-CLS-003-1 Schema validation` |
| openspec/specs/cli-spec/spec.md | 69 | `### Requirement: Interactive spec validation` | `### Requirement: REQ-CLS-004 Interactive spec validation` |
| openspec/specs/cli-spec/spec.md | 73 | `#### Scenario: Interactive spec selection for validation` | `#### Scenario: SCN-CLS-004-1 Interactive spec selection for validation` |
| openspec/specs/cli-spec/spec.md | 81 | `#### Scenario: Non-interactive fallback keeps current behavior` | `#### Scenario: SCN-CLS-004-2 Non-interactive fallback keeps current behavior` |
| openspec/specs/cli-update/spec.md | 7 | `### Requirement: Update Behavior` | `### Requirement: REQ-CU-001 Update Behavior` |
| openspec/specs/cli-update/spec.md | 10 | `#### Scenario: Running update command` | `#### Scenario: SCN-CU-001-1 Running update command` |
| openspec/specs/cli-update/spec.md | 15 | `### Requirement: Prerequisites` | `### Requirement: REQ-CU-002 Prerequisites` |
| openspec/specs/cli-update/spec.md | 19 | `#### Scenario: Checking prerequisites` | `#### Scenario: SCN-CU-002-1 Checking prerequisites` |
| openspec/specs/cli-update/spec.md | 26 | `### Requirement: File Handling` | `### Requirement: REQ-CU-003 File Handling` |
| openspec/specs/cli-update/spec.md | 29 | `#### Scenario: Updating files` | `#### Scenario: SCN-CU-003-1 Updating files` |
| openspec/specs/cli-update/spec.md | 34 | `### Requirement: Tool-Agnostic Updates` | `### Requirement: REQ-CU-004 Tool-Agnostic Updates` |
| openspec/specs/cli-update/spec.md | 37 | `#### Scenario: Updating files` | `#### Scenario: SCN-CU-004-1 Updating files` |
| openspec/specs/cli-update/spec.md | 44 | `### Requirement: Core Files Always Updated` | `### Requirement: REQ-CU-005 Core Files Always Updated` |
| openspec/specs/cli-update/spec.md | 47 | `#### Scenario: Successful update` | `#### Scenario: SCN-CU-005-1 Successful update` |
| openspec/specs/cli-update/spec.md | 52 | `### Requirement: Slash Command Updates` | `### Requirement: REQ-CU-006 Slash Command Updates` |
| openspec/specs/cli-update/spec.md | 56 | `#### Scenario: Updating slash commands for Antigravity` | `#### Scenario: SCN-CU-006-1 Updating slash commands for Antigravity` |
| openspec/specs/cli-update/spec.md | 61 | `#### Scenario: Updating slash commands for Claude Code` | `#### Scenario: SCN-CU-006-2 Updating slash commands for Claude Code` |
| openspec/specs/cli-update/spec.md | 66 | `#### Scenario: Updating slash commands for CodeBuddy Code` | `#### Scenario: SCN-CU-006-3 Updating slash commands for CodeBuddy Code` |
| openspec/specs/cli-update/spec.md | 72 | `#### Scenario: Updating slash commands for Cline` | `#### Scenario: SCN-CU-006-4 Updating slash commands for Cline` |
| openspec/specs/cli-update/spec.md | 78 | `#### Scenario: Updating slash commands for Continue` | `#### Scenario: SCN-CU-006-5 Updating slash commands for Continue` |
| openspec/specs/cli-update/spec.md | 83 | `#### Scenario: Updating slash commands for Crush` | `#### Scenario: SCN-CU-006-6 Updating slash commands for Crush` |
| openspec/specs/cli-update/spec.md | 89 | `#### Scenario: Updating slash commands for Cursor` | `#### Scenario: SCN-CU-006-7 Updating slash commands for Cursor` |
| openspec/specs/cli-update/spec.md | 94 | `#### Scenario: Updating slash commands for Factory Droid` | `#### Scenario: SCN-CU-006-8 Updating slash commands for Factory Droid` |
| openspec/specs/cli-update/spec.md | 101 | `#### Scenario: Updating slash commands for OpenCode` | `#### Scenario: SCN-CU-006-9 Updating slash commands for OpenCode` |
| openspec/specs/cli-update/spec.md | 108 | `#### Scenario: Legacy OpenCode command path cleanup` | `#### Scenario: SCN-CU-006-10 Legacy OpenCode command path cleanup` |
| openspec/specs/cli-update/spec.md | 113 | `#### Scenario: Updating slash commands for Windsurf` | `#### Scenario: SCN-CU-006-11 Updating slash commands for Windsurf` |
| openspec/specs/cli-update/spec.md | 119 | `#### Scenario: Updating slash commands for Kilo Code` | `#### Scenario: SCN-CU-006-12 Updating slash commands for Kilo Code` |
| openspec/specs/cli-update/spec.md | 125 | `#### Scenario: Updating slash commands for Codex` | `#### Scenario: SCN-CU-006-13 Updating slash commands for Codex` |
| openspec/specs/cli-update/spec.md | 132 | `#### Scenario: Updating slash commands for GitHub Copilot` | `#### Scenario: SCN-CU-006-14 Updating slash commands for GitHub Copilot` |
| openspec/specs/cli-update/spec.md | 138 | `#### Scenario: Updating slash commands for Gemini CLI` | `#### Scenario: SCN-CU-006-15 Updating slash commands for Gemini CLI` |
| openspec/specs/cli-update/spec.md | 144 | `#### Scenario: Updating slash commands for iFlow CLI` | `#### Scenario: SCN-CU-006-16 Updating slash commands for iFlow CLI` |
| openspec/specs/cli-update/spec.md | 151 | `#### Scenario: Missing slash command file` | `#### Scenario: SCN-CU-006-17 Missing slash command file` |
| openspec/specs/cli-update/spec.md | 155 | `### Requirement: Archive Command Argument Support` | `### Requirement: REQ-CU-007 Archive Command Argument Support` |
| openspec/specs/cli-update/spec.md | 158 | `#### Scenario: Archive command with change ID argument` | `#### Scenario: SCN-CU-007-1 Archive command with change ID argument` |
| openspec/specs/cli-update/spec.md | 164 | `#### Scenario: Archive command without argument (backward compatibility)` | `#### Scenario: SCN-CU-007-2 Archive command without argument (backward compatibility)` |
| openspec/specs/cli-update/spec.md | 169 | `#### Scenario: OpenCode archive template generation` | `#### Scenario: SCN-CU-007-3 OpenCode archive template generation` |
| openspec/specs/cli-validate/spec.md | 7 | `### Requirement: Validation SHALL provide actionable remediation steps` | `### Requirement: REQ-CLIV-001 Validation SHALL provide actionable remediation steps` |
| openspec/specs/cli-validate/spec.md | 10 | `#### Scenario: No deltas found in change` | `#### Scenario: SCN-CLIV-001-1 No deltas found in change` |
| openspec/specs/cli-validate/spec.md | 18 | `#### Scenario: Missing required sections` | `#### Scenario: SCN-CLIV-001-2 Missing required sections` |
| openspec/specs/cli-validate/spec.md | 26 | `#### Scenario: Missing requirement descriptive text` | `#### Scenario: SCN-CLIV-001-3 Missing requirement descriptive text` |
| openspec/specs/cli-validate/spec.md | 33 | `### Requirement: Validator SHALL detect likely misformatted scenarios and warn with a fix` | `### Requirement: REQ-CLIV-002 Validator SHALL detect likely misformatted scenarios and warn with a fix` |
| openspec/specs/cli-validate/spec.md | 36 | `#### Scenario: Bulleted WHEN/THEN under a Requirement` | `#### Scenario: SCN-CLIV-002-1 Bulleted WHEN/THEN under a Requirement` |
| openspec/specs/cli-validate/spec.md | 46 | `### Requirement: Normative keyword guidance SHALL not require English` | `### Requirement: REQ-CLIV-003 Normative keyword guidance SHALL not require English` |
| openspec/specs/cli-validate/spec.md | 52 | `#### Scenario: Non-English main spec` | `#### Scenario: SCN-CLIV-003-1 Non-English main spec` |
| openspec/specs/cli-validate/spec.md | 58 | `#### Scenario: Non-English change delta` | `#### Scenario: SCN-CLIV-003-2 Non-English change delta` |
| openspec/specs/cli-validate/spec.md | 64 | `#### Scenario: Strict validation preserves keyword enforcement` | `#### Scenario: SCN-CLIV-003-3 Strict validation preserves keyword enforcement` |
| openspec/specs/cli-validate/spec.md | 69 | `#### Scenario: Requirement body is missing` | `#### Scenario: SCN-CLIV-003-4 Requirement body is missing` |
| openspec/specs/cli-validate/spec.md | 74 | `### Requirement: All issues SHALL include file paths and structured locations` | `### Requirement: REQ-CLIV-004 All issues SHALL include file paths and structured locations` |
| openspec/specs/cli-validate/spec.md | 79 | `#### Scenario: Zod validation error` | `#### Scenario: SCN-CLIV-004-1 Zod validation error` |
| openspec/specs/cli-validate/spec.md | 83 | `### Requirement: Invalid results SHALL include a Next steps footer in human-readable output` | `### Requirement: REQ-CLIV-005 Invalid results SHALL include a Next steps footer in human-readable output` |
| openspec/specs/cli-validate/spec.md | 89 | `#### Scenario: Change invalid summary` | `#### Scenario: SCN-CLIV-005-1 Change invalid summary` |
| openspec/specs/cli-validate/spec.md | 93 | `### Requirement: Change validation SHALL report scenarios a MODIFIED block would drop` | `### Requirement: REQ-CLIV-006 Change validation SHALL report scenarios a MODIFIED block would drop` |
| openspec/specs/cli-validate/spec.md | 103 | `#### Scenario: MODIFIED omits an existing scenario` | `#### Scenario: SCN-CLIV-006-1 MODIFIED omits an existing scenario` |
| openspec/specs/cli-validate/spec.md | 110 | `#### Scenario: MODIFIED names the new header of a rename` | `#### Scenario: SCN-CLIV-006-2 MODIFIED names the new header of a rename` |
| openspec/specs/cli-validate/spec.md | 116 | `#### Scenario: MODIFIED header is not in the main spec` | `#### Scenario: SCN-CLIV-006-3 MODIFIED header is not in the main spec` |
| openspec/specs/cli-validate/spec.md | 122 | `### Requirement: Top-level validate command` | `### Requirement: REQ-CLIV-007 Top-level validate command` |
| openspec/specs/cli-validate/spec.md | 126 | `#### Scenario: Interactive validation selection` | `#### Scenario: SCN-CLIV-007-1 Interactive validation selection` |
| openspec/specs/cli-validate/spec.md | 133 | `#### Scenario: Non-interactive environments do not prompt` | `#### Scenario: SCN-CLIV-007-2 Non-interactive environments do not prompt` |
| openspec/specs/cli-validate/spec.md | 140 | `#### Scenario: Direct item validation` | `#### Scenario: SCN-CLIV-007-3 Direct item validation` |
| openspec/specs/cli-validate/spec.md | 147 | `### Requirement: Bulk and filtered validation` | `### Requirement: REQ-CLIV-008 Bulk and filtered validation` |
| openspec/specs/cli-validate/spec.md | 151 | `#### Scenario: Validate everything` | `#### Scenario: SCN-CLIV-008-1 Validate everything` |
| openspec/specs/cli-validate/spec.md | 159 | `#### Scenario: Scope of bulk validation` | `#### Scenario: SCN-CLIV-008-2 Scope of bulk validation` |
| openspec/specs/cli-validate/spec.md | 168 | `#### Scenario: Validate all changes` | `#### Scenario: SCN-CLIV-008-3 Validate all changes` |
| openspec/specs/cli-validate/spec.md | 175 | `#### Scenario: Validate all specs` | `#### Scenario: SCN-CLIV-008-4 Validate all specs` |
| openspec/specs/cli-validate/spec.md | 182 | `### Requirement: Validation options and progress indication` | `### Requirement: REQ-CLIV-009 Validation options and progress indication` |
| openspec/specs/cli-validate/spec.md | 186 | `#### Scenario: Strict validation` | `#### Scenario: SCN-CLIV-009-1 Strict validation` |
| openspec/specs/cli-validate/spec.md | 193 | `#### Scenario: JSON output` | `#### Scenario: SCN-CLIV-009-2 JSON output` |
| openspec/specs/cli-validate/spec.md | 200 | `#### Scenario: JSON output schema for bulk validation` | `#### Scenario: SCN-CLIV-009-3 JSON output schema for bulk validation` |
| openspec/specs/cli-validate/spec.md | 211 | `#### Scenario: Show validation progress` | `#### Scenario: SCN-CLIV-009-4 Show validation progress` |
| openspec/specs/cli-validate/spec.md | 218 | `#### Scenario: Concurrency limits for performance` | `#### Scenario: SCN-CLIV-009-5 Concurrency limits for performance` |
| openspec/specs/cli-validate/spec.md | 224 | `### Requirement: Item type detection and ambiguity handling` | `### Requirement: REQ-CLIV-010 Item type detection and ambiguity handling` |
| openspec/specs/cli-validate/spec.md | 228 | `#### Scenario: Direct item validation with automatic type detection` | `#### Scenario: SCN-CLIV-010-1 Direct item validation with automatic type detection` |
| openspec/specs/cli-validate/spec.md | 233 | `#### Scenario: Ambiguity between change and spec names` | `#### Scenario: SCN-CLIV-010-2 Ambiguity between change and spec names` |
| openspec/specs/cli-validate/spec.md | 241 | `#### Scenario: Unknown item name` | `#### Scenario: SCN-CLIV-010-3 Unknown item name` |
| openspec/specs/cli-validate/spec.md | 248 | `#### Scenario: Explicit type override` | `#### Scenario: SCN-CLIV-010-4 Explicit type override` |
| openspec/specs/cli-validate/spec.md | 256 | `### Requirement: Interactivity controls` | `### Requirement: REQ-CLIV-011 Interactivity controls` |
| openspec/specs/cli-validate/spec.md | 262 | `#### Scenario: Disabling prompts via flags or environment` | `#### Scenario: SCN-CLIV-011-1 Disabling prompts via flags or environment` |
| openspec/specs/cli-validate/spec.md | 268 | `### Requirement: Parser SHALL handle cross-platform line endings` | `### Requirement: REQ-CLIV-012 Parser SHALL handle cross-platform line endings` |
| openspec/specs/cli-validate/spec.md | 271 | `#### Scenario: Required sections parsed with CRLF line endings` | `#### Scenario: SCN-CLIV-012-1 Required sections parsed with CRLF line endings` |
| openspec/specs/cli-view/spec.md | 7 | `### Requirement: Dashboard Display` | `### Requirement: REQ-CV-001 Dashboard Display` |
| openspec/specs/cli-view/spec.md | 11 | `#### Scenario: Basic dashboard display` | `#### Scenario: SCN-CV-001-1 Basic dashboard display` |
| openspec/specs/cli-view/spec.md | 16 | `#### Scenario: No OpenSpec directory` | `#### Scenario: SCN-CV-001-2 No OpenSpec directory` |
| openspec/specs/cli-view/spec.md | 21 | `### Requirement: Summary Section` | `### Requirement: REQ-CV-002 Summary Section` |
| openspec/specs/cli-view/spec.md | 25 | `#### Scenario: Complete summary display` | `#### Scenario: SCN-CV-002-1 Complete summary display` |
| openspec/specs/cli-view/spec.md | 34 | `#### Scenario: Empty project summary` | `#### Scenario: SCN-CV-002-2 Empty project summary` |
| openspec/specs/cli-view/spec.md | 39 | `### Requirement: Active Changes Display` | `### Requirement: REQ-CV-003 Active Changes Display` |
| openspec/specs/cli-view/spec.md | 42 | `#### Scenario: Active changes ordered by completion percentage` | `#### Scenario: SCN-CV-003-1 Active changes ordered by completion percentage` |
| openspec/specs/cli-view/spec.md | 48 | `### Requirement: Active Change Workflow Status` | `### Requirement: REQ-CV-004 Active Change Workflow Status` |
| openspec/specs/cli-view/spec.md | 52 | `#### Scenario: Workflow states` | `#### Scenario: SCN-CV-004-1 Workflow states` |
| openspec/specs/cli-view/spec.md | 59 | `#### Scenario: Store-local workflow` | `#### Scenario: SCN-CV-004-2 Store-local workflow` |
| openspec/specs/cli-view/spec.md | 65 | `#### Scenario: Invalid workflow` | `#### Scenario: SCN-CV-004-3 Invalid workflow` |
| openspec/specs/cli-view/spec.md | 71 | `#### Scenario: Terminal controls in workflow text` | `#### Scenario: SCN-CV-004-4 Terminal controls in workflow text` |
| openspec/specs/cli-view/spec.md | 77 | `### Requirement: Completed Changes Display` | `### Requirement: REQ-CV-005 Completed Changes Display` |
| openspec/specs/cli-view/spec.md | 83 | `#### Scenario: Completed changes listing` | `#### Scenario: SCN-CV-005-1 Completed changes listing` |
| openspec/specs/cli-view/spec.md | 88 | `#### Scenario: Mixed completion states` | `#### Scenario: SCN-CV-005-2 Mixed completion states` |
| openspec/specs/cli-view/spec.md | 93 | `#### Scenario: Empty changes not completed` | `#### Scenario: SCN-CV-005-3 Empty changes not completed` |
| openspec/specs/cli-view/spec.md | 99 | `### Requirement: Specifications Display` | `### Requirement: REQ-CV-006 Specifications Display` |
| openspec/specs/cli-view/spec.md | 103 | `#### Scenario: Specs listing with counts` | `#### Scenario: SCN-CV-006-1 Specs listing with counts` |
| openspec/specs/cli-view/spec.md | 108 | `#### Scenario: Specs with parsing errors` | `#### Scenario: SCN-CV-006-2 Specs with parsing errors` |
| openspec/specs/cli-view/spec.md | 113 | `### Requirement: Visual Formatting` | `### Requirement: REQ-CV-007 Visual Formatting` |
| openspec/specs/cli-view/spec.md | 117 | `#### Scenario: Color coding` | `#### Scenario: SCN-CV-007-1 Color coding` |
| openspec/specs/cli-view/spec.md | 125 | `#### Scenario: Progress bar rendering` | `#### Scenario: SCN-CV-007-2 Progress bar rendering` |
| openspec/specs/cli-view/spec.md | 130 | `### Requirement: Error Handling` | `### Requirement: REQ-CV-008 Error Handling` |
| openspec/specs/cli-view/spec.md | 134 | `#### Scenario: File system errors` | `#### Scenario: SCN-CV-008-1 File system errors` |
| openspec/specs/cli-view/spec.md | 139 | `#### Scenario: Invalid data structures` | `#### Scenario: SCN-CV-008-2 Invalid data structures` |
| openspec/specs/cli-view/spec.md | 144 | `### Requirement: Draft Changes Display` | `### Requirement: REQ-CV-009 Draft Changes Display` |
| openspec/specs/cli-view/spec.md | 148 | `#### Scenario: Draft changes listing` | `#### Scenario: SCN-CV-009-1 Draft changes listing` |
| openspec/specs/cli-view/spec.md | 154 | `#### Scenario: Draft section ordering` | `#### Scenario: SCN-CV-009-2 Draft section ordering` |
| openspec/specs/command-generation/spec.md | 7 | `### Requirement: CommandContent interface` | `### Requirement: REQ-CG-001 CommandContent interface` |
| openspec/specs/command-generation/spec.md | 11 | `#### Scenario: CommandContent structure` | `#### Scenario: SCN-CG-001-1 CommandContent structure` |
| openspec/specs/command-generation/spec.md | 22 | `### Requirement: ToolCommandAdapter interface` | `### Requirement: REQ-CG-002 ToolCommandAdapter interface` |
| openspec/specs/command-generation/spec.md | 26 | `#### Scenario: Adapter interface structure` | `#### Scenario: SCN-CG-002-1 Adapter interface structure` |
| openspec/specs/command-generation/spec.md | 34 | `#### Scenario: Claude adapter formatting` | `#### Scenario: SCN-CG-002-2 Claude adapter formatting` |
| openspec/specs/command-generation/spec.md | 40 | `#### Scenario: Cursor adapter formatting` | `#### Scenario: SCN-CG-002-3 Cursor adapter formatting` |
| openspec/specs/command-generation/spec.md | 46 | `#### Scenario: Windsurf adapter formatting` | `#### Scenario: SCN-CG-002-4 Windsurf adapter formatting` |
| openspec/specs/command-generation/spec.md | 52 | `#### Scenario: Trae adapter formatting` | `#### Scenario: SCN-CG-002-5 Trae adapter formatting` |
| openspec/specs/command-generation/spec.md | 58 | `### Requirement: Command generator function` | `### Requirement: REQ-CG-003 Command generator function` |
| openspec/specs/command-generation/spec.md | 62 | `#### Scenario: Generate command file` | `#### Scenario: SCN-CG-003-1 Generate command file` |
| openspec/specs/command-generation/spec.md | 69 | `#### Scenario: Command references match the name the tool registers` | `#### Scenario: SCN-CG-003-2 Command references match the name the tool registers` |
| openspec/specs/command-generation/spec.md | 76 | `#### Scenario: Command references use the tool's own invocation prefix` | `#### Scenario: SCN-CG-003-3 Command references use the tool's own invocation prefix` |
| openspec/specs/command-generation/spec.md | 84 | `#### Scenario: Generate multiple commands` | `#### Scenario: SCN-CG-003-4 Generate multiple commands` |
| openspec/specs/command-generation/spec.md | 89 | `### Requirement: CommandAdapterRegistry` | `### Requirement: REQ-CG-004 CommandAdapterRegistry` |
| openspec/specs/command-generation/spec.md | 93 | `#### Scenario: Get adapter by tool ID` | `#### Scenario: SCN-CG-004-1 Get adapter by tool ID` |
| openspec/specs/command-generation/spec.md | 98 | `#### Scenario: Get all adapters` | `#### Scenario: SCN-CG-004-2 Get all adapters` |
| openspec/specs/command-generation/spec.md | 103 | `#### Scenario: Adapter not found` | `#### Scenario: SCN-CG-004-3 Adapter not found` |
| openspec/specs/command-generation/spec.md | 109 | `### Requirement: Shared command body content` | `### Requirement: REQ-CG-005 Shared command body content` |
| openspec/specs/command-generation/spec.md | 113 | `#### Scenario: Same instructions across tools` | `#### Scenario: SCN-CG-005-1 Same instructions across tools` |
| openspec/specs/config-loading/spec.md | 7 | `### Requirement: Load project config from openspec/config.yaml` | `### Requirement: REQ-COL-001 Load project config from openspec/config.yaml` |
| openspec/specs/config-loading/spec.md | 11 | `#### Scenario: Valid config file exists` | `#### Scenario: SCN-COL-001-1 Valid config file exists` |
| openspec/specs/config-loading/spec.md | 15 | `#### Scenario: Config file does not exist` | `#### Scenario: SCN-COL-001-2 Config file does not exist` |
| openspec/specs/config-loading/spec.md | 19 | `#### Scenario: Config file has invalid YAML syntax` | `#### Scenario: SCN-COL-001-3 Config file has invalid YAML syntax` |
| openspec/specs/config-loading/spec.md | 23 | `#### Scenario: Config file has valid YAML but invalid schema` | `#### Scenario: SCN-COL-001-4 Config file has valid YAML but invalid schema` |
| openspec/specs/config-loading/spec.md | 27 | `### Requirement: Support .yml file extension alias` | `### Requirement: REQ-COL-002 Support .yml file extension alias` |
| openspec/specs/config-loading/spec.md | 31 | `#### Scenario: Config file uses .yml extension` | `#### Scenario: SCN-COL-002-1 Config file uses .yml extension` |
| openspec/specs/config-loading/spec.md | 35 | `#### Scenario: Both .yaml and .yml exist` | `#### Scenario: SCN-COL-002-2 Both .yaml and .yml exist` |
| openspec/specs/config-loading/spec.md | 39 | `### Requirement: Use resilient field-by-field parsing` | `### Requirement: REQ-COL-003 Use resilient field-by-field parsing` |
| openspec/specs/config-loading/spec.md | 43 | `#### Scenario: Schema field is valid` | `#### Scenario: SCN-COL-003-1 Schema field is valid` |
| openspec/specs/config-loading/spec.md | 47 | `#### Scenario: Schema field is missing` | `#### Scenario: SCN-COL-003-2 Schema field is missing` |
| openspec/specs/config-loading/spec.md | 51 | `#### Scenario: Schema field is empty string` | `#### Scenario: SCN-COL-003-3 Schema field is empty string` |
| openspec/specs/config-loading/spec.md | 55 | `#### Scenario: Schema field is invalid type` | `#### Scenario: SCN-COL-003-4 Schema field is invalid type` |
| openspec/specs/config-loading/spec.md | 59 | `#### Scenario: Context field is valid` | `#### Scenario: SCN-COL-003-5 Context field is valid` |
| openspec/specs/config-loading/spec.md | 63 | `#### Scenario: Context field is invalid type` | `#### Scenario: SCN-COL-003-6 Context field is invalid type` |
| openspec/specs/config-loading/spec.md | 67 | `#### Scenario: Rules field has valid structure` | `#### Scenario: SCN-COL-003-7 Rules field has valid structure` |
| openspec/specs/config-loading/spec.md | 71 | `#### Scenario: Rules field has non-array value for artifact` | `#### Scenario: SCN-COL-003-8 Rules field has non-array value for artifact` |
| openspec/specs/config-loading/spec.md | 75 | `#### Scenario: Rules array contains non-string elements` | `#### Scenario: SCN-COL-003-9 Rules array contains non-string elements` |
| openspec/specs/config-loading/spec.md | 79 | `#### Scenario: Mix of valid and invalid fields` | `#### Scenario: SCN-COL-003-10 Mix of valid and invalid fields` |
| openspec/specs/config-loading/spec.md | 83 | `### Requirement: Enforce context size limit` | `### Requirement: REQ-COL-004 Enforce context size limit` |
| openspec/specs/config-loading/spec.md | 87 | `#### Scenario: Context within size limit` | `#### Scenario: SCN-COL-004-1 Context within size limit` |
| openspec/specs/config-loading/spec.md | 91 | `#### Scenario: Context at size limit` | `#### Scenario: SCN-COL-004-2 Context at size limit` |
| openspec/specs/config-loading/spec.md | 95 | `#### Scenario: Context exceeds size limit` | `#### Scenario: SCN-COL-004-3 Context exceeds size limit` |
| openspec/specs/config-loading/spec.md | 99 | `### Requirement: Defer artifact ID validation to instruction loading` | `### Requirement: REQ-COL-005 Defer artifact ID validation to instruction loading` |
| openspec/specs/config-loading/spec.md | 103 | `#### Scenario: Config with rules is loaded` | `#### Scenario: SCN-COL-005-1 Config with rules is loaded` |
| openspec/specs/config-loading/spec.md | 107 | `#### Scenario: Validation happens at instruction load time` | `#### Scenario: SCN-COL-005-2 Validation happens at instruction load time` |
| openspec/specs/config-loading/spec.md | 111 | `### Requirement: Gracefully handle config errors without halting` | `### Requirement: REQ-COL-006 Gracefully handle config errors without halting` |
| openspec/specs/config-loading/spec.md | 115 | `#### Scenario: Config parse failure during command execution` | `#### Scenario: SCN-COL-006-1 Config parse failure during command execution` |
| openspec/specs/config-loading/spec.md | 119 | `#### Scenario: Warning is visible to user` | `#### Scenario: SCN-COL-006-2 Warning is visible to user` |
| openspec/specs/context-injection/spec.md | 7 | `### Requirement: Inject context into all artifact instructions` | `### Requirement: REQ-COI-001 Inject context into all artifact instructions` |
| openspec/specs/context-injection/spec.md | 11 | `#### Scenario: Config has context field` | `#### Scenario: SCN-COI-001-1 Config has context field` |
| openspec/specs/context-injection/spec.md | 15 | `#### Scenario: Config has no context field` | `#### Scenario: SCN-COI-001-2 Config has no context field` |
| openspec/specs/context-injection/spec.md | 19 | `#### Scenario: Context is multi-line string` | `#### Scenario: SCN-COI-001-3 Context is multi-line string` |
| openspec/specs/context-injection/spec.md | 23 | `#### Scenario: Context applied to all artifacts` | `#### Scenario: SCN-COI-001-4 Context applied to all artifacts` |
| openspec/specs/context-injection/spec.md | 27 | `### Requirement: Format context with XML-style tags` | `### Requirement: REQ-COI-002 Format context with XML-style tags` |
| openspec/specs/context-injection/spec.md | 31 | `#### Scenario: Context tag structure` | `#### Scenario: SCN-COI-002-1 Context tag structure` |
| openspec/specs/context-injection/spec.md | 35 | `#### Scenario: Context appears before template` | `#### Scenario: SCN-COI-002-2 Context appears before template` |
| openspec/specs/context-injection/spec.md | 39 | `### Requirement: Preserve context content exactly as provided` | `### Requirement: REQ-COI-003 Preserve context content exactly as provided` |
| openspec/specs/context-injection/spec.md | 43 | `#### Scenario: Context contains special characters` | `#### Scenario: SCN-COI-003-1 Context contains special characters` |
| openspec/specs/context-injection/spec.md | 47 | `#### Scenario: Context contains URLs` | `#### Scenario: SCN-COI-003-2 Context contains URLs` |
| openspec/specs/context-injection/spec.md | 51 | `#### Scenario: Context contains Markdown` | `#### Scenario: SCN-COI-003-3 Context contains Markdown` |
| openspec/specs/docs-agent-instructions/spec.md | 7 | `### Requirement: Quick Reference Placement` | `### Requirement: REQ-DAI-001 Quick Reference Placement` |
| openspec/specs/docs-agent-instructions/spec.md | 10 | `#### Scenario: Loading templates at the top` | `#### Scenario: SCN-DAI-001-1 Loading templates at the top` |
| openspec/specs/docs-agent-instructions/spec.md | 15 | `### Requirement: Embedded Templates and Examples` | `### Requirement: REQ-DAI-002 Embedded Templates and Examples` |
| openspec/specs/docs-agent-instructions/spec.md | 18 | `#### Scenario: Providing file templates` | `#### Scenario: SCN-DAI-002-1 Providing file templates` |
| openspec/specs/docs-agent-instructions/spec.md | 23 | `### Requirement: Pre-validation Checklist` | `### Requirement: REQ-DAI-003 Pre-validation Checklist` |
| openspec/specs/docs-agent-instructions/spec.md | 26 | `#### Scenario: Highlighting common validation failures` | `#### Scenario: SCN-DAI-003-1 Highlighting common validation failures` |
| openspec/specs/docs-agent-instructions/spec.md | 31 | `### Requirement: Progressive Disclosure of Workflow Guidance` | `### Requirement: REQ-DAI-004 Progressive Disclosure of Workflow Guidance` |
| openspec/specs/docs-agent-instructions/spec.md | 34 | `#### Scenario: Organizing beginner and advanced sections` | `#### Scenario: SCN-DAI-004-1 Organizing beginner and advanced sections` |
| openspec/specs/docs-agent-instructions/spec.md | 40 | `### Requirement: Behavior-First Spec Authoring Guidance` | `### Requirement: REQ-DAI-005 Behavior-First Spec Authoring Guidance` |
| openspec/specs/docs-agent-instructions/spec.md | 43 | `#### Scenario: Distinguishing spec vs implementation content` | `#### Scenario: SCN-DAI-005-1 Distinguishing spec vs implementation content` |
| openspec/specs/docs-agent-instructions/spec.md | 48 | `#### Scenario: Routing detail to the right artifact` | `#### Scenario: SCN-DAI-005-2 Routing detail to the right artifact` |
| openspec/specs/docs-agent-instructions/spec.md | 52 | `### Requirement: Lightweight-by-Default Guidance` | `### Requirement: REQ-DAI-006 Lightweight-by-Default Guidance` |
| openspec/specs/docs-agent-instructions/spec.md | 55 | `#### Scenario: Applying progressive rigor` | `#### Scenario: SCN-DAI-006-1 Applying progressive rigor` |
| openspec/specs/docs-agent-instructions/spec.md | 60 | `#### Scenario: Time-to-clarity optimization` | `#### Scenario: SCN-DAI-006-2 Time-to-clarity optimization` |
| openspec/specs/global-config/spec.md | 7 | `### Requirement: Global configuration storage` | `### Requirement: REQ-GC-001 Global configuration storage` |
| openspec/specs/global-config/spec.md | 10 | `#### Scenario: Initial config creation` | `#### Scenario: SCN-GC-001-1 Initial config creation` |
| openspec/specs/global-config/spec.md | 15 | `#### Scenario: Telemetry config structure` | `#### Scenario: SCN-GC-001-2 Telemetry config structure` |
| openspec/specs/global-config/spec.md | 19 | `#### Scenario: Config file format` | `#### Scenario: SCN-GC-001-3 Config file format` |
| openspec/specs/global-config/spec.md | 23 | `#### Scenario: Existing config preservation` | `#### Scenario: SCN-GC-001-4 Existing config preservation` |
| openspec/specs/global-config/spec.md | 27 | `### Requirement: Global Config Directory Path` | `### Requirement: REQ-GC-002 Global Config Directory Path` |
| openspec/specs/global-config/spec.md | 31 | `#### Scenario: Unix/macOS with XDG_CONFIG_HOME set` | `#### Scenario: SCN-GC-002-1 Unix/macOS with XDG_CONFIG_HOME set` |
| openspec/specs/global-config/spec.md | 35 | `#### Scenario: Unix/macOS without XDG_CONFIG_HOME` | `#### Scenario: SCN-GC-002-2 Unix/macOS without XDG_CONFIG_HOME` |
| openspec/specs/global-config/spec.md | 40 | `#### Scenario: Windows platform` | `#### Scenario: SCN-GC-002-3 Windows platform` |
| openspec/specs/global-config/spec.md | 45 | `### Requirement: Global Config Loading` | `### Requirement: REQ-GC-003 Global Config Loading` |
| openspec/specs/global-config/spec.md | 49 | `#### Scenario: Config file exists and is valid` | `#### Scenario: SCN-GC-003-1 Config file exists and is valid` |
| openspec/specs/global-config/spec.md | 54 | `#### Scenario: Config file does not exist` | `#### Scenario: SCN-GC-003-2 Config file does not exist` |
| openspec/specs/global-config/spec.md | 59 | `#### Scenario: Config file is invalid JSON` | `#### Scenario: SCN-GC-003-3 Config file is invalid JSON` |
| openspec/specs/global-config/spec.md | 64 | `### Requirement: Global Config Saving` | `### Requirement: REQ-GC-004 Global Config Saving` |
| openspec/specs/global-config/spec.md | 68 | `#### Scenario: Save config to new directory` | `#### Scenario: SCN-GC-004-1 Save config to new directory` |
| openspec/specs/global-config/spec.md | 74 | `#### Scenario: Save config to existing directory` | `#### Scenario: SCN-GC-004-2 Save config to existing directory` |
| openspec/specs/global-config/spec.md | 79 | `### Requirement: Default Configuration` | `### Requirement: REQ-GC-005 Default Configuration` |
| openspec/specs/global-config/spec.md | 83 | `#### Scenario: Default config structure` | `#### Scenario: SCN-GC-005-1 Default config structure` |
| openspec/specs/global-config/spec.md | 87 | `### Requirement: Config Schema Evolution` | `### Requirement: REQ-GC-006 Config Schema Evolution` |
| openspec/specs/global-config/spec.md | 91 | `#### Scenario: Config file missing new fields` | `#### Scenario: SCN-GC-006-1 Config file missing new fields` |
| openspec/specs/global-config/spec.md | 97 | `#### Scenario: Config file has extra unknown fields` | `#### Scenario: SCN-GC-006-2 Config file has extra unknown fields` |
| openspec/specs/instruction-loader/spec.md | 7 | `### Requirement: Template Loading` | `### Requirement: REQ-IL-001 Template Loading` |
| openspec/specs/instruction-loader/spec.md | 10 | `#### Scenario: Load template from schema directory` | `#### Scenario: SCN-IL-001-1 Load template from schema directory` |
| openspec/specs/instruction-loader/spec.md | 14 | `#### Scenario: Template file not found` | `#### Scenario: SCN-IL-001-2 Template file not found` |
| openspec/specs/instruction-loader/spec.md | 18 | `### Requirement: Change Context Loading` | `### Requirement: REQ-IL-002 Change Context Loading` |
| openspec/specs/instruction-loader/spec.md | 21 | `#### Scenario: Load context for existing change` | `#### Scenario: SCN-IL-002-1 Load context for existing change` |
| openspec/specs/instruction-loader/spec.md | 25 | `#### Scenario: Load context with custom schema` | `#### Scenario: SCN-IL-002-2 Load context with custom schema` |
| openspec/specs/instruction-loader/spec.md | 29 | `#### Scenario: Load context for non-existent change directory` | `#### Scenario: SCN-IL-002-3 Load context for non-existent change directory` |
| openspec/specs/instruction-loader/spec.md | 33 | `### Requirement: Template Enrichment` | `### Requirement: REQ-IL-003 Template Enrichment` |
| openspec/specs/instruction-loader/spec.md | 36 | `#### Scenario: Include artifact metadata` | `#### Scenario: SCN-IL-003-1 Include artifact metadata` |
| openspec/specs/instruction-loader/spec.md | 40 | `#### Scenario: Include dependency status` | `#### Scenario: SCN-IL-003-2 Include dependency status` |
| openspec/specs/instruction-loader/spec.md | 44 | `#### Scenario: Include unlocked artifacts` | `#### Scenario: SCN-IL-003-3 Include unlocked artifacts` |
| openspec/specs/instruction-loader/spec.md | 49 | `#### Scenario: Root artifact indicator` | `#### Scenario: SCN-IL-003-4 Root artifact indicator` |
| openspec/specs/instruction-loader/spec.md | 53 | `### Requirement: Status Formatting` | `### Requirement: REQ-IL-004 Status Formatting` |
| openspec/specs/instruction-loader/spec.md | 56 | `#### Scenario: All artifacts completed` | `#### Scenario: SCN-IL-004-1 All artifacts completed` |
| openspec/specs/instruction-loader/spec.md | 60 | `#### Scenario: Mixed completion status` | `#### Scenario: SCN-IL-004-2 Mixed completion status` |
| openspec/specs/instruction-loader/spec.md | 64 | `#### Scenario: Blocked artifact details` | `#### Scenario: SCN-IL-004-3 Blocked artifact details` |
| openspec/specs/instruction-loader/spec.md | 68 | `#### Scenario: Include output paths` | `#### Scenario: SCN-IL-004-4 Include output paths` |
| openspec/specs/legacy-cleanup/spec.md | 7 | `### Requirement: Legacy artifact detection` | `### Requirement: REQ-LC-001 Legacy artifact detection` |
| openspec/specs/legacy-cleanup/spec.md | 11 | `#### Scenario: Detecting legacy config files` | `#### Scenario: SCN-LC-001-1 Detecting legacy config files` |
| openspec/specs/legacy-cleanup/spec.md | 26 | `#### Scenario: Detecting legacy slash command directories` | `#### Scenario: SCN-LC-001-2 Detecting legacy slash command directories` |
| openspec/specs/legacy-cleanup/spec.md | 35 | `#### Scenario: Detecting legacy Kilo Code workflows` | `#### Scenario: SCN-LC-001-3 Detecting legacy Kilo Code workflows` |
| openspec/specs/legacy-cleanup/spec.md | 42 | `#### Scenario: Detecting legacy OpenSpec structure files` | `#### Scenario: SCN-LC-001-4 Detecting legacy OpenSpec structure files` |
| openspec/specs/legacy-cleanup/spec.md | 50 | `### Requirement: Legacy cleanup confirmation` | `### Requirement: REQ-LC-002 Legacy cleanup confirmation` |
| openspec/specs/legacy-cleanup/spec.md | 54 | `#### Scenario: Prompting for cleanup when legacy detected` | `#### Scenario: SCN-LC-002-1 Prompting for cleanup when legacy detected` |
| openspec/specs/legacy-cleanup/spec.md | 61 | `#### Scenario: User confirms cleanup` | `#### Scenario: SCN-LC-002-2 User confirms cleanup` |
| openspec/specs/legacy-cleanup/spec.md | 67 | `#### Scenario: User declines cleanup` | `#### Scenario: SCN-LC-002-3 User declines cleanup` |
| openspec/specs/legacy-cleanup/spec.md | 73 | `#### Scenario: Non-interactive mode` | `#### Scenario: SCN-LC-002-4 Non-interactive mode` |
| openspec/specs/legacy-cleanup/spec.md | 81 | `### Requirement: Surgical removal of config file content` | `### Requirement: REQ-LC-003 Surgical removal of config file content` |
| openspec/specs/legacy-cleanup/spec.md | 85 | `#### Scenario: Config file with only OpenSpec content` | `#### Scenario: SCN-LC-003-1 Config file with only OpenSpec content` |
| openspec/specs/legacy-cleanup/spec.md | 92 | `#### Scenario: Config file with mixed content` | `#### Scenario: SCN-LC-003-2 Config file with mixed content` |
| openspec/specs/legacy-cleanup/spec.md | 99 | `#### Scenario: Root AGENTS.md with mixed content` | `#### Scenario: SCN-LC-003-3 Root AGENTS.md with mixed content` |
| openspec/specs/legacy-cleanup/spec.md | 105 | `### Requirement: Legacy directory removal` | `### Requirement: REQ-LC-004 Legacy directory removal` |
| openspec/specs/legacy-cleanup/spec.md | 109 | `#### Scenario: Removing old slash command directory` | `#### Scenario: SCN-LC-004-1 Removing old slash command directory` |
| openspec/specs/legacy-cleanup/spec.md | 115 | `#### Scenario: Removing legacy AGENTS.md` | `#### Scenario: SCN-LC-004-2 Removing legacy AGENTS.md` |
| openspec/specs/legacy-cleanup/spec.md | 121 | `### Requirement: project.md migration hint` | `### Requirement: REQ-LC-005 project.md migration hint` |
| openspec/specs/legacy-cleanup/spec.md | 125 | `#### Scenario: project.md exists during upgrade` | `#### Scenario: SCN-LC-005-1 project.md exists during upgrade` |
| openspec/specs/legacy-cleanup/spec.md | 136 | `#### Scenario: project.md migration rationale` | `#### Scenario: SCN-LC-005-2 project.md migration rationale` |
| openspec/specs/legacy-cleanup/spec.md | 143 | `### Requirement: Cleanup reporting` | `### Requirement: REQ-LC-006 Cleanup reporting` |
| openspec/specs/legacy-cleanup/spec.md | 147 | `#### Scenario: Displaying cleanup summary` | `#### Scenario: SCN-LC-006-1 Displaying cleanup summary` |
| openspec/specs/legacy-cleanup/spec.md | 165 | `#### Scenario: No legacy detected` | `#### Scenario: SCN-LC-006-2 No legacy detected` |
| openspec/specs/openspec-conventions/spec.md | 7 | `### Requirement: Structured conventions for specs and changes` | `### Requirement: REQ-OC-001 Structured conventions for specs and changes` |
| openspec/specs/openspec-conventions/spec.md | 11 | `#### Scenario: Following the structured spec format` | `#### Scenario: SCN-OC-001-1 Following the structured spec format` |
| openspec/specs/openspec-conventions/spec.md | 16 | `### Requirement: Behavior-First Specification Boundary` | `### Requirement: REQ-OC-002 Behavior-First Specification Boundary` |
| openspec/specs/openspec-conventions/spec.md | 19 | `#### Scenario: Writing behavior requirements` | `#### Scenario: SCN-OC-002-1 Writing behavior requirements` |
| openspec/specs/openspec-conventions/spec.md | 24 | `#### Scenario: Avoiding implementation leakage` | `#### Scenario: SCN-OC-002-2 Avoiding implementation leakage` |
| openspec/specs/openspec-conventions/spec.md | 28 | `### Requirement: Progressive Rigor` | `### Requirement: REQ-OC-003 Progressive Rigor` |
| openspec/specs/openspec-conventions/spec.md | 31 | `#### Scenario: Routine change specification` | `#### Scenario: SCN-OC-003-1 Routine change specification` |
| openspec/specs/openspec-conventions/spec.md | 35 | `#### Scenario: High-risk or cross-boundary change specification` | `#### Scenario: SCN-OC-003-2 High-risk or cross-boundary change specification` |
| openspec/specs/openspec-conventions/spec.md | 39 | `### Requirement: Project Structure` | `### Requirement: REQ-OC-004 Project Structure` |
| openspec/specs/openspec-conventions/spec.md | 42 | `#### Scenario: Initializing project structure` | `#### Scenario: SCN-OC-004-1 Initializing project structure` |
| openspec/specs/openspec-conventions/spec.md | 65 | `### Requirement: Structured Format for Behavioral Specs` | `### Requirement: REQ-OC-005 Structured Format for Behavioral Specs` |
| openspec/specs/openspec-conventions/spec.md | 69 | `#### Scenario: Writing requirement sections` | `#### Scenario: SCN-OC-005-1 Writing requirement sections` |
| openspec/specs/openspec-conventions/spec.md | 76 | `#### Scenario: Documenting scenarios` | `#### Scenario: SCN-OC-005-2 Documenting scenarios` |
| openspec/specs/openspec-conventions/spec.md | 86 | `#### Scenario: Adding implementation details` | `#### Scenario: SCN-OC-005-3 Adding implementation details` |
| openspec/specs/openspec-conventions/spec.md | 94 | `### Requirement: Header-Based Requirement Identification` | `### Requirement: REQ-OC-006 Header-Based Requirement Identification` |
| openspec/specs/openspec-conventions/spec.md | 98 | `#### Scenario: Matching requirements programmatically` | `#### Scenario: SCN-OC-006-1 Matching requirements programmatically` |
| openspec/specs/openspec-conventions/spec.md | 105 | `#### Scenario: Handling requirement renames` | `#### Scenario: SCN-OC-006-2 Handling requirement renames` |
| openspec/specs/openspec-conventions/spec.md | 117 | `#### Scenario: Validating header uniqueness` | `#### Scenario: SCN-OC-006-3 Validating header uniqueness` |
| openspec/specs/openspec-conventions/spec.md | 123 | `### Requirement: Change Storage Convention` | `### Requirement: REQ-OC-007 Change Storage Convention` |
| openspec/specs/openspec-conventions/spec.md | 127 | `#### Scenario: Creating change proposals with additions` | `#### Scenario: SCN-OC-007-1 Creating change proposals with additions` |
| openspec/specs/openspec-conventions/spec.md | 134 | `#### Scenario: Creating change proposals with modifications  ` | `#### Scenario: SCN-OC-007-2 Creating change proposals with modifications` |
| openspec/specs/openspec-conventions/spec.md | 142 | `#### Scenario: Creating change proposals with removals` | `#### Scenario: SCN-OC-007-3 Creating change proposals with removals` |
| openspec/specs/openspec-conventions/spec.md | 158 | `#### Scenario: Introducing a new capability` | `#### Scenario: SCN-OC-007-4 Introducing a new capability` |
| openspec/specs/openspec-conventions/spec.md | 165 | `#### Scenario: Using standard output symbols` | `#### Scenario: SCN-OC-007-5 Using standard output symbols` |
| openspec/specs/openspec-conventions/spec.md | 174 | `### Requirement: Archive Process Enhancement` | `### Requirement: REQ-OC-008 Archive Process Enhancement` |
| openspec/specs/openspec-conventions/spec.md | 178 | `#### Scenario: Archiving changes with deltas` | `#### Scenario: SCN-OC-008-1 Archiving changes with deltas` |
| openspec/specs/openspec-conventions/spec.md | 192 | `#### Scenario: Handling conflicts during archive` | `#### Scenario: SCN-OC-008-2 Handling conflicts during archive` |
| openspec/specs/openspec-conventions/spec.md | 199 | `### Requirement: Proposal Format` | `### Requirement: REQ-OC-009 Proposal Format` |
| openspec/specs/openspec-conventions/spec.md | 203 | `#### Scenario: Documenting changes` | `#### Scenario: SCN-OC-009-1 Documenting changes` |
| openspec/specs/openspec-conventions/spec.md | 218 | `### Requirement: Change Review` | `### Requirement: REQ-OC-010 Change Review` |
| openspec/specs/openspec-conventions/spec.md | 222 | `#### Scenario: Reviewing changes` | `#### Scenario: SCN-OC-010-1 Reviewing changes` |
| openspec/specs/openspec-conventions/spec.md | 230 | `### Requirement: Structured Format Adoption` | `### Requirement: REQ-OC-011 Structured Format Adoption` |
| openspec/specs/openspec-conventions/spec.md | 234 | `#### Scenario: Use structured headings for behavior` | `#### Scenario: SCN-OC-011-1 Use structured headings for behavior` |
| openspec/specs/openspec-conventions/spec.md | 240 | `### Requirement: Verb–Noun CLI Command Structure` | `### Requirement: REQ-OC-012 Verb–Noun CLI Command Structure` |
| openspec/specs/openspec-conventions/spec.md | 243 | `#### Scenario: Verb-first command discovery` | `#### Scenario: SCN-OC-012-1 Verb-first command discovery` |
| openspec/specs/openspec-conventions/spec.md | 248 | `#### Scenario: Backward compatibility for noun commands` | `#### Scenario: SCN-OC-012-2 Backward compatibility for noun commands` |
| openspec/specs/openspec-conventions/spec.md | 253 | `#### Scenario: Disambiguation guidance` | `#### Scenario: SCN-OC-012-3 Disambiguation guidance` |
| openspec/specs/opsx-archive-skill/spec.md | 9 | `### Requirement: OPSX Archive Skill` | `### Requirement: REQ-OPAS-001 OPSX Archive Skill` |
| openspec/specs/opsx-archive-skill/spec.md | 13 | `#### Scenario: Archive a change with all artifacts complete` | `#### Scenario: SCN-OPAS-001-1 Archive a change with all artifacts complete` |
| openspec/specs/opsx-archive-skill/spec.md | 21 | `#### Scenario: Change selection prompt` | `#### Scenario: SCN-OPAS-001-2 Change selection prompt` |
| openspec/specs/opsx-archive-skill/spec.md | 28 | `### Requirement: Artifact Completion Check` | `### Requirement: REQ-OPAS-002 Artifact Completion Check` |
| openspec/specs/opsx-archive-skill/spec.md | 32 | `#### Scenario: Incomplete artifacts warning` | `#### Scenario: SCN-OPAS-002-1 Incomplete artifacts warning` |
| openspec/specs/opsx-archive-skill/spec.md | 40 | `#### Scenario: All artifacts complete` | `#### Scenario: SCN-OPAS-002-2 All artifacts complete` |
| openspec/specs/opsx-archive-skill/spec.md | 46 | `### Requirement: Task Completion Check` | `### Requirement: REQ-OPAS-003 Task Completion Check` |
| openspec/specs/opsx-archive-skill/spec.md | 50 | `#### Scenario: Incomplete tasks found` | `#### Scenario: SCN-OPAS-003-1 Incomplete tasks found` |
| openspec/specs/opsx-archive-skill/spec.md | 57 | `#### Scenario: All tasks complete` | `#### Scenario: SCN-OPAS-003-2 All tasks complete` |
| openspec/specs/opsx-archive-skill/spec.md | 62 | `#### Scenario: No tracked tasks` | `#### Scenario: SCN-OPAS-003-3 No tracked tasks` |
| openspec/specs/opsx-archive-skill/spec.md | 67 | `#### Scenario: Custom task artifact or output path` | `#### Scenario: SCN-OPAS-003-4 Custom task artifact or output path` |
| openspec/specs/opsx-archive-skill/spec.md | 73 | `#### Scenario: Task progress lookup unavailable` | `#### Scenario: SCN-OPAS-003-5 Task progress lookup unavailable` |
| openspec/specs/opsx-archive-skill/spec.md | 79 | `### Requirement: Spec Sync Prompt` | `### Requirement: REQ-OPAS-004 Spec Sync Prompt` |
| openspec/specs/opsx-archive-skill/spec.md | 83 | `#### Scenario: Delta specs exist` | `#### Scenario: SCN-OPAS-004-1 Delta specs exist` |
| openspec/specs/opsx-archive-skill/spec.md | 96 | `#### Scenario: Applicable ADDED delta whose main spec does not exist yet` | `#### Scenario: SCN-OPAS-004-2 Applicable ADDED delta whose main spec does not exist yet` |
| openspec/specs/opsx-archive-skill/spec.md | 108 | `#### Scenario: Unsupported delta operation whose main spec does not exist yet` | `#### Scenario: SCN-OPAS-004-3 Unsupported delta operation whose main spec does not exist yet` |
| openspec/specs/opsx-archive-skill/spec.md | 115 | `#### Scenario: Explicitly retired capability whose main spec is missing` | `#### Scenario: SCN-OPAS-004-4 Explicitly retired capability whose main spec is missing` |
| openspec/specs/opsx-archive-skill/spec.md | 123 | `#### Scenario: Nothing to put in a missing main spec without a declared retirement` | `#### Scenario: SCN-OPAS-004-5 Nothing to put in a missing main spec without a declared retirement` |
| openspec/specs/opsx-archive-skill/spec.md | 132 | `#### Scenario: Sync-blocked capability during archive assessment` | `#### Scenario: SCN-OPAS-004-6 Sync-blocked capability during archive assessment` |
| openspec/specs/opsx-archive-skill/spec.md | 142 | `#### Scenario: No delta specs` | `#### Scenario: SCN-OPAS-004-7 No delta specs` |
| openspec/specs/opsx-archive-skill/spec.md | 148 | `### Requirement: Archive Process` | `### Requirement: REQ-OPAS-005 Archive Process` |
| openspec/specs/opsx-archive-skill/spec.md | 152 | `#### Scenario: Successful archive` | `#### Scenario: SCN-OPAS-005-1 Successful archive` |
| openspec/specs/opsx-archive-skill/spec.md | 160 | `#### Scenario: Archive already exists` | `#### Scenario: SCN-OPAS-005-2 Archive already exists` |
| openspec/specs/opsx-archive-skill/spec.md | 166 | `### Requirement: Skill Output` | `### Requirement: REQ-OPAS-006 Skill Output` |
| openspec/specs/opsx-archive-skill/spec.md | 170 | `#### Scenario: Archive complete with sync` | `#### Scenario: SCN-OPAS-006-1 Archive complete with sync` |
| openspec/specs/opsx-archive-skill/spec.md | 178 | `#### Scenario: Archive complete without sync` | `#### Scenario: SCN-OPAS-006-2 Archive complete without sync` |
| openspec/specs/opsx-archive-skill/spec.md | 186 | `#### Scenario: Archive complete with warnings` | `#### Scenario: SCN-OPAS-006-3 Archive complete with warnings` |
| openspec/specs/opsx-onboard-skill/spec.md | 7 | `### Requirement: OPSX Onboard Skill` | `### Requirement: REQ-OOS-001 OPSX Onboard Skill` |
| openspec/specs/opsx-onboard-skill/spec.md | 11 | `#### Scenario: Skill invocation` | `#### Scenario: SCN-OOS-001-1 Skill invocation` |
| openspec/specs/opsx-onboard-skill/spec.md | 18 | `#### Scenario: Welcome and expectations` | `#### Scenario: SCN-OOS-001-2 Welcome and expectations` |
| openspec/specs/opsx-onboard-skill/spec.md | 25 | `### Requirement: Codebase Analysis for Task Suggestions` | `### Requirement: REQ-OOS-002 Codebase Analysis for Task Suggestions` |
| openspec/specs/opsx-onboard-skill/spec.md | 29 | `#### Scenario: Codebase scanning` | `#### Scenario: SCN-OOS-002-1 Codebase scanning` |
| openspec/specs/opsx-onboard-skill/spec.md | 36 | `#### Scenario: Task suggestion presentation` | `#### Scenario: SCN-OOS-002-2 Task suggestion presentation` |
| openspec/specs/opsx-onboard-skill/spec.md | 43 | `#### Scenario: Scope guardrail` | `#### Scenario: SCN-OOS-002-3 Scope guardrail` |
| openspec/specs/opsx-onboard-skill/spec.md | 50 | `### Requirement: Explore Phase Demo` | `### Requirement: REQ-OOS-003 Explore Phase Demo` |
| openspec/specs/opsx-onboard-skill/spec.md | 54 | `#### Scenario: Brief explore demonstration` | `#### Scenario: SCN-OOS-003-1 Brief explore demonstration` |
| openspec/specs/opsx-onboard-skill/spec.md | 62 | `### Requirement: Guided Artifact Creation` | `### Requirement: REQ-OOS-004 Guided Artifact Creation` |
| openspec/specs/opsx-onboard-skill/spec.md | 66 | `#### Scenario: Change creation with narration` | `#### Scenario: SCN-OOS-004-1 Change creation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 74 | `#### Scenario: Proposal creation with narration` | `#### Scenario: SCN-OOS-004-2 Proposal creation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 82 | `#### Scenario: Specs creation with narration` | `#### Scenario: SCN-OOS-004-3 Specs creation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 90 | `#### Scenario: Design creation with narration` | `#### Scenario: SCN-OOS-004-4 Design creation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 98 | `#### Scenario: Tasks creation with narration` | `#### Scenario: SCN-OOS-004-5 Tasks creation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 106 | `### Requirement: Guided Implementation` | `### Requirement: REQ-OOS-005 Guided Implementation` |
| openspec/specs/opsx-onboard-skill/spec.md | 110 | `#### Scenario: Implementation with narration` | `#### Scenario: SCN-OOS-005-1 Implementation with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 119 | `#### Scenario: Implementation completion` | `#### Scenario: SCN-OOS-005-2 Implementation completion` |
| openspec/specs/opsx-onboard-skill/spec.md | 126 | `### Requirement: Archive with Explanation` | `### Requirement: REQ-OOS-006 Archive with Explanation` |
| openspec/specs/opsx-onboard-skill/spec.md | 130 | `#### Scenario: Archive with narration` | `#### Scenario: SCN-OOS-006-1 Archive with narration` |
| openspec/specs/opsx-onboard-skill/spec.md | 138 | `### Requirement: Recap and Next Steps` | `### Requirement: REQ-OOS-007 Recap and Next Steps` |
| openspec/specs/opsx-onboard-skill/spec.md | 142 | `#### Scenario: Final recap` | `#### Scenario: SCN-OOS-007-1 Final recap` |
| openspec/specs/opsx-onboard-skill/spec.md | 150 | `### Requirement: Graceful Exit Handling` | `### Requirement: REQ-OOS-008 Graceful Exit Handling` |
| openspec/specs/opsx-onboard-skill/spec.md | 154 | `#### Scenario: User wants to stop` | `#### Scenario: SCN-OOS-008-1 User wants to stop` |
| openspec/specs/opsx-onboard-skill/spec.md | 162 | `#### Scenario: User wants quick reference only` | `#### Scenario: SCN-OOS-008-2 User wants quick reference only` |
| openspec/specs/opsx-verify-skill/spec.md | 7 | `### Requirement: Verify Skill Invocation` | `### Requirement: REQ-OVS-001 Verify Skill Invocation` |
| openspec/specs/opsx-verify-skill/spec.md | 10 | `#### Scenario: Verify with change name provided` | `#### Scenario: SCN-OVS-001-1 Verify with change name provided` |
| openspec/specs/opsx-verify-skill/spec.md | 15 | `#### Scenario: Verify without change name` | `#### Scenario: SCN-OVS-001-2 Verify without change name` |
| openspec/specs/opsx-verify-skill/spec.md | 21 | `#### Scenario: Change has no task descriptions` | `#### Scenario: SCN-OVS-001-3 Change has no task descriptions` |
| openspec/specs/opsx-verify-skill/spec.md | 26 | `#### Scenario: Schema has no task tracking` | `#### Scenario: SCN-OVS-001-4 Schema has no task tracking` |
| openspec/specs/opsx-verify-skill/spec.md | 32 | `### Requirement: Completeness Verification` | `### Requirement: REQ-OVS-002 Completeness Verification` |
| openspec/specs/opsx-verify-skill/spec.md | 35 | `#### Scenario: Task completion check` | `#### Scenario: SCN-OVS-002-1 Task completion check` |
| openspec/specs/opsx-verify-skill/spec.md | 43 | `#### Scenario: Tracking evidence becomes unavailable` | `#### Scenario: SCN-OVS-002-2 Tracking evidence becomes unavailable` |
| openspec/specs/opsx-verify-skill/spec.md | 50 | `#### Scenario: Spec coverage check` | `#### Scenario: SCN-OVS-002-3 Spec coverage check` |
| openspec/specs/opsx-verify-skill/spec.md | 58 | `#### Scenario: All tasks complete` | `#### Scenario: SCN-OVS-002-4 All tasks complete` |
| openspec/specs/opsx-verify-skill/spec.md | 64 | `#### Scenario: Incomplete tasks found` | `#### Scenario: SCN-OVS-002-5 Incomplete tasks found` |
| openspec/specs/opsx-verify-skill/spec.md | 71 | `### Requirement: Correctness Verification` | `### Requirement: REQ-OVS-003 Correctness Verification` |
| openspec/specs/opsx-verify-skill/spec.md | 74 | `#### Scenario: Requirement implementation mapping` | `#### Scenario: SCN-OVS-003-1 Requirement implementation mapping` |
| openspec/specs/opsx-verify-skill/spec.md | 81 | `#### Scenario: Scenario coverage check` | `#### Scenario: SCN-OVS-003-2 Scenario coverage check` |
| openspec/specs/opsx-verify-skill/spec.md | 88 | `#### Scenario: Implementation matches spec` | `#### Scenario: SCN-OVS-003-3 Implementation matches spec` |
| openspec/specs/opsx-verify-skill/spec.md | 93 | `#### Scenario: Implementation diverges from spec` | `#### Scenario: SCN-OVS-003-4 Implementation diverges from spec` |
| openspec/specs/opsx-verify-skill/spec.md | 99 | `#### Scenario: Missing implementation` | `#### Scenario: SCN-OVS-003-5 Missing implementation` |
| openspec/specs/opsx-verify-skill/spec.md | 104 | `#### Scenario: Removed requirement` | `#### Scenario: SCN-OVS-003-6 Removed requirement` |
| openspec/specs/opsx-verify-skill/spec.md | 117 | `#### Scenario: Renamed requirement` | `#### Scenario: SCN-OVS-003-7 Renamed requirement` |
| openspec/specs/opsx-verify-skill/spec.md | 125 | `#### Scenario: Change that only removes or renames requirements` | `#### Scenario: SCN-OVS-003-8 Change that only removes or renames requirements` |
| openspec/specs/opsx-verify-skill/spec.md | 131 | `### Requirement: Coherence Verification` | `### Requirement: REQ-OVS-004 Coherence Verification` |
| openspec/specs/opsx-verify-skill/spec.md | 134 | `#### Scenario: Design.md adherence check` | `#### Scenario: SCN-OVS-004-1 Design.md adherence check` |
| openspec/specs/opsx-verify-skill/spec.md | 141 | `#### Scenario: No design.md` | `#### Scenario: SCN-OVS-004-2 No design.md` |
| openspec/specs/opsx-verify-skill/spec.md | 147 | `#### Scenario: Design decision followed` | `#### Scenario: SCN-OVS-004-3 Design decision followed` |
| openspec/specs/opsx-verify-skill/spec.md | 152 | `#### Scenario: Design decision violated` | `#### Scenario: SCN-OVS-004-4 Design decision violated` |
| openspec/specs/opsx-verify-skill/spec.md | 158 | `#### Scenario: Code pattern consistency` | `#### Scenario: SCN-OVS-004-5 Code pattern consistency` |
| openspec/specs/opsx-verify-skill/spec.md | 165 | `### Requirement: Verification Report Format` | `### Requirement: REQ-OVS-005 Verification Report Format` |
| openspec/specs/opsx-verify-skill/spec.md | 168 | `#### Scenario: Report summary` | `#### Scenario: SCN-OVS-005-1 Report summary` |
| openspec/specs/opsx-verify-skill/spec.md | 184 | `#### Scenario: Issue prioritization` | `#### Scenario: SCN-OVS-005-2 Issue prioritization` |
| openspec/specs/opsx-verify-skill/spec.md | 191 | `#### Scenario: Actionable recommendations` | `#### Scenario: SCN-OVS-005-3 Actionable recommendations` |
| openspec/specs/opsx-verify-skill/spec.md | 197 | `#### Scenario: All checks pass` | `#### Scenario: SCN-OVS-005-4 All checks pass` |
| openspec/specs/opsx-verify-skill/spec.md | 204 | `#### Scenario: Critical issues found` | `#### Scenario: SCN-OVS-005-5 Critical issues found` |
| openspec/specs/opsx-verify-skill/spec.md | 213 | `#### Scenario: Only warnings` | `#### Scenario: SCN-OVS-005-6 Only warnings` |
| openspec/specs/opsx-verify-skill/spec.md | 221 | `#### Scenario: Only suggestions` | `#### Scenario: SCN-OVS-005-7 Only suggestions` |
| openspec/specs/opsx-verify-skill/spec.md | 225 | `#### Scenario: Checks skipped` | `#### Scenario: SCN-OVS-005-8 Checks skipped` |
| openspec/specs/opsx-verify-skill/spec.md | 232 | `#### Scenario: Suggestions in final assessment` | `#### Scenario: SCN-OVS-005-9 Suggestions in final assessment` |
| openspec/specs/opsx-verify-skill/spec.md | 236 | `### Requirement: Flexible Artifact Handling` | `### Requirement: REQ-OVS-006 Flexible Artifact Handling` |
| openspec/specs/opsx-verify-skill/spec.md | 239 | `#### Scenario: Minimal change (tasks only)` | `#### Scenario: SCN-OVS-006-1 Minimal change (tasks only)` |
| openspec/specs/opsx-verify-skill/spec.md | 245 | `#### Scenario: Change with specs but no design` | `#### Scenario: SCN-OVS-006-2 Change with specs but no design` |
| openspec/specs/opsx-verify-skill/spec.md | 251 | `#### Scenario: Full change (all artifacts)` | `#### Scenario: SCN-OVS-006-3 Full change (all artifacts)` |
| openspec/specs/opsx-verify-skill/spec.md | 256 | `#### Scenario: Unusable or partial artifact evidence` | `#### Scenario: SCN-OVS-006-4 Unusable or partial artifact evidence` |
| openspec/specs/opsx-verify-skill/spec.md | 261 | `#### Scenario: Intentional artifact omissions` | `#### Scenario: SCN-OVS-006-5 Intentional artifact omissions` |
| openspec/specs/rules-injection/spec.md | 7 | `### Requirement: Inject rules only for matching artifact` | `### Requirement: REQ-RI-001 Inject rules only for matching artifact` |
| openspec/specs/rules-injection/spec.md | 11 | `#### Scenario: Rules exist for the artifact` | `#### Scenario: SCN-RI-001-1 Rules exist for the artifact` |
| openspec/specs/rules-injection/spec.md | 15 | `#### Scenario: No rules for the artifact` | `#### Scenario: SCN-RI-001-2 No rules for the artifact` |
| openspec/specs/rules-injection/spec.md | 19 | `#### Scenario: Rules object is undefined` | `#### Scenario: SCN-RI-001-3 Rules object is undefined` |
| openspec/specs/rules-injection/spec.md | 23 | `#### Scenario: Rules array is empty for artifact` | `#### Scenario: SCN-RI-001-4 Rules array is empty for artifact` |
| openspec/specs/rules-injection/spec.md | 27 | `### Requirement: Format rules with XML-style tags and bullet list` | `### Requirement: REQ-RI-002 Format rules with XML-style tags and bullet list` |
| openspec/specs/rules-injection/spec.md | 31 | `#### Scenario: Single rule for artifact` | `#### Scenario: SCN-RI-002-1 Single rule for artifact` |
| openspec/specs/rules-injection/spec.md | 35 | `#### Scenario: Multiple rules for artifact` | `#### Scenario: SCN-RI-002-2 Multiple rules for artifact` |
| openspec/specs/rules-injection/spec.md | 39 | `#### Scenario: Rules appear after context and before template` | `#### Scenario: SCN-RI-002-3 Rules appear after context and before template` |
| openspec/specs/rules-injection/spec.md | 43 | `### Requirement: Preserve rule text exactly as provided` | `### Requirement: REQ-RI-003 Preserve rule text exactly as provided` |
| openspec/specs/rules-injection/spec.md | 47 | `#### Scenario: Rule contains markdown` | `#### Scenario: SCN-RI-003-1 Rule contains markdown` |
| openspec/specs/rules-injection/spec.md | 51 | `#### Scenario: Rule contains special characters` | `#### Scenario: SCN-RI-003-2 Rule contains special characters` |
| openspec/specs/rules-injection/spec.md | 55 | `#### Scenario: Rule is multi-line string` | `#### Scenario: SCN-RI-003-3 Rule is multi-line string` |
| openspec/specs/rules-injection/spec.md | 59 | `### Requirement: Support multiple artifacts with different rules` | `### Requirement: REQ-RI-004 Support multiple artifacts with different rules` |
| openspec/specs/rules-injection/spec.md | 63 | `#### Scenario: Multiple artifacts have rules` | `#### Scenario: SCN-RI-004-1 Multiple artifacts have rules` |
| openspec/specs/rules-injection/spec.md | 67 | `#### Scenario: Some artifacts have rules, others do not` | `#### Scenario: SCN-RI-004-2 Some artifacts have rules, others do not` |
| openspec/specs/rules-injection/spec.md | 71 | `### Requirement: Rules are additive to schema guidance` | `### Requirement: REQ-RI-005 Rules are additive to schema guidance` |
| openspec/specs/rules-injection/spec.md | 75 | `#### Scenario: Artifact has schema instruction and config rules` | `#### Scenario: SCN-RI-005-1 Artifact has schema instruction and config rules` |
| openspec/specs/rules-injection/spec.md | 79 | `#### Scenario: Rules provide additional constraints` | `#### Scenario: SCN-RI-005-2 Rules provide additional constraints` |
| openspec/specs/rules-injection/spec.md | 83 | `### Requirement: Validate artifact IDs during instruction loading` | `### Requirement: REQ-RI-006 Validate artifact IDs during instruction loading` |
| openspec/specs/rules-injection/spec.md | 87 | `#### Scenario: All artifact IDs are valid` | `#### Scenario: SCN-RI-006-1 All artifact IDs are valid` |
| openspec/specs/rules-injection/spec.md | 91 | `#### Scenario: Unknown artifact ID in rules` | `#### Scenario: SCN-RI-006-2 Unknown artifact ID in rules` |
| openspec/specs/rules-injection/spec.md | 95 | `#### Scenario: Multiple unknown artifact IDs` | `#### Scenario: SCN-RI-006-3 Multiple unknown artifact IDs` |
| openspec/specs/rules-injection/spec.md | 99 | `#### Scenario: Validation warnings shown once per session` | `#### Scenario: SCN-RI-006-4 Validation warnings shown once per session` |
| openspec/specs/schema-fork-command/spec.md | 7 | `### Requirement: Schema fork copies existing schema` | `### Requirement: REQ-SFC-001 Schema fork copies existing schema` |
| openspec/specs/schema-fork-command/spec.md | 10 | `#### Scenario: Fork with explicit name` | `#### Scenario: SCN-SFC-001-1 Fork with explicit name` |
| openspec/specs/schema-fork-command/spec.md | 17 | `#### Scenario: Fork with default name` | `#### Scenario: SCN-SFC-001-2 Fork with default name` |
| openspec/specs/schema-fork-command/spec.md | 22 | `#### Scenario: Source schema not found` | `#### Scenario: SCN-SFC-001-3 Source schema not found` |
| openspec/specs/schema-fork-command/spec.md | 28 | `### Requirement: Schema fork prevents accidental overwrites` | `### Requirement: REQ-SFC-002 Schema fork prevents accidental overwrites` |
| openspec/specs/schema-fork-command/spec.md | 31 | `#### Scenario: Destination exists without force` | `#### Scenario: SCN-SFC-002-1 Destination exists without force` |
| openspec/specs/schema-fork-command/spec.md | 37 | `#### Scenario: Destination exists with force flag` | `#### Scenario: SCN-SFC-002-2 Destination exists with force flag` |
| openspec/specs/schema-fork-command/spec.md | 43 | `#### Scenario: Interactive confirmation for overwrite` | `#### Scenario: SCN-SFC-002-3 Interactive confirmation for overwrite` |
| openspec/specs/schema-fork-command/spec.md | 48 | `### Requirement: Schema fork preserves all schema files` | `### Requirement: REQ-SFC-003 Schema fork preserves all schema files` |
| openspec/specs/schema-fork-command/spec.md | 51 | `#### Scenario: Copy includes template files` | `#### Scenario: SCN-SFC-003-1 Copy includes template files` |
| openspec/specs/schema-fork-command/spec.md | 56 | `#### Scenario: Copy includes nested directories` | `#### Scenario: SCN-SFC-003-2 Copy includes nested directories` |
| openspec/specs/schema-fork-command/spec.md | 61 | `### Requirement: Schema fork outputs JSON format` | `### Requirement: REQ-SFC-004 Schema fork outputs JSON format` |
| openspec/specs/schema-fork-command/spec.md | 64 | `#### Scenario: JSON output on success` | `#### Scenario: SCN-SFC-004-1 JSON output on success` |
| openspec/specs/schema-fork-command/spec.md | 68 | `#### Scenario: JSON output shows source location` | `#### Scenario: SCN-SFC-004-2 JSON output shows source location` |
| openspec/specs/schema-init-command/spec.md | 6 | `### Requirement: Schema init command creates project-local schema` | `### Requirement: REQ-SIC-001 Schema init command creates project-local schema` |
| openspec/specs/schema-init-command/spec.md | 9 | `#### Scenario: Create schema with valid name` | `#### Scenario: SCN-SIC-001-1 Create schema with valid name` |
| openspec/specs/schema-init-command/spec.md | 16 | `#### Scenario: Reject invalid schema name` | `#### Scenario: SCN-SIC-001-2 Reject invalid schema name` |
| openspec/specs/schema-init-command/spec.md | 22 | `#### Scenario: Schema name already exists` | `#### Scenario: SCN-SIC-001-3 Schema name already exists` |
| openspec/specs/schema-init-command/spec.md | 28 | `### Requirement: Schema init supports interactive mode` | `### Requirement: REQ-SIC-002 Schema init supports interactive mode` |
| openspec/specs/schema-init-command/spec.md | 31 | `#### Scenario: Interactive prompts for description` | `#### Scenario: SCN-SIC-002-1 Interactive prompts for description` |
| openspec/specs/schema-init-command/spec.md | 36 | `#### Scenario: Interactive prompts for artifact selection` | `#### Scenario: SCN-SIC-002-2 Interactive prompts for artifact selection` |
| openspec/specs/schema-init-command/spec.md | 42 | `#### Scenario: Non-interactive mode with flags` | `#### Scenario: SCN-SIC-002-3 Non-interactive mode with flags` |
| openspec/specs/schema-init-command/spec.md | 47 | `### Requirement: Schema init supports setting project default` | `### Requirement: REQ-SIC-003 Schema init supports setting project default` |
| openspec/specs/schema-init-command/spec.md | 50 | `#### Scenario: Set as default interactively` | `#### Scenario: SCN-SIC-003-1 Set as default interactively` |
| openspec/specs/schema-init-command/spec.md | 57 | `#### Scenario: Set as default via flag` | `#### Scenario: SCN-SIC-003-2 Set as default via flag` |
| openspec/specs/schema-init-command/spec.md | 63 | `#### Scenario: Skip setting default` | `#### Scenario: SCN-SIC-003-3 Skip setting default` |
| openspec/specs/schema-init-command/spec.md | 67 | `#### Scenario: Invalid config prevents schema creation` | `#### Scenario: SCN-SIC-003-4 Invalid config prevents schema creation` |
| openspec/specs/schema-init-command/spec.md | 74 | `#### Scenario: Config failure preserves a schema during forced replacement` | `#### Scenario: SCN-SIC-003-5 Config failure preserves a schema during forced replacement` |
| openspec/specs/schema-init-command/spec.md | 81 | `### Requirement: Schema init outputs JSON format` | `### Requirement: REQ-SIC-004 Schema init outputs JSON format` |
| openspec/specs/schema-init-command/spec.md | 84 | `#### Scenario: JSON output on success` | `#### Scenario: SCN-SIC-004-1 JSON output on success` |
| openspec/specs/schema-init-command/spec.md | 89 | `#### Scenario: JSON output on error` | `#### Scenario: SCN-SIC-004-2 JSON output on error` |
| openspec/specs/schema-init-command/spec.md | 94 | `### Requirement: Schema init validates artifacts before forced replacement` | `### Requirement: REQ-SIC-005 Schema init validates artifacts before forced replacement` |
| openspec/specs/schema-init-command/spec.md | 97 | `#### Scenario: Unknown artifact preserves existing schema` | `#### Scenario: SCN-SIC-005-1 Unknown artifact preserves existing schema` |
| openspec/specs/schema-init-command/spec.md | 103 | `#### Scenario: Unknown artifact preserves a schema at a Windows project path` | `#### Scenario: SCN-SIC-005-2 Unknown artifact preserves a schema at a Windows project path` |
| openspec/specs/schema-init-command/spec.md | 108 | `#### Scenario: Valid artifacts allow forced replacement` | `#### Scenario: SCN-SIC-005-3 Valid artifacts allow forced replacement` |
| openspec/specs/schema-resolution/spec.md | 6 | `### Requirement: Project-local schema resolution` | `### Requirement: REQ-SR-001 Project-local schema resolution` |
| openspec/specs/schema-resolution/spec.md | 10 | `#### Scenario: Project-local schema takes precedence over user override` | `#### Scenario: SCN-SR-001-1 Project-local schema takes precedence over user override` |
| openspec/specs/schema-resolution/spec.md | 16 | `#### Scenario: Project-local schema takes precedence over package built-in` | `#### Scenario: SCN-SR-001-2 Project-local schema takes precedence over package built-in` |
| openspec/specs/schema-resolution/spec.md | 22 | `#### Scenario: Falls back to user override when no project-local schema` | `#### Scenario: SCN-SR-001-3 Falls back to user override when no project-local schema` |
| openspec/specs/schema-resolution/spec.md | 28 | `#### Scenario: Falls back to package built-in when no project-local or user schema` | `#### Scenario: SCN-SR-001-4 Falls back to package built-in when no project-local or user schema` |
| openspec/specs/schema-resolution/spec.md | 35 | `#### Scenario: Backward compatibility when projectRoot not provided` | `#### Scenario: SCN-SR-001-5 Backward compatibility when projectRoot not provided` |
| openspec/specs/schema-resolution/spec.md | 40 | `### Requirement: Project schemas directory helper` | `### Requirement: REQ-SR-002 Project schemas directory helper` |
| openspec/specs/schema-resolution/spec.md | 44 | `#### Scenario: Returns correct path` | `#### Scenario: SCN-SR-002-1 Returns correct path` |
| openspec/specs/schema-resolution/spec.md | 48 | `### Requirement: List schemas includes project-local` | `### Requirement: REQ-SR-003 List schemas includes project-local` |
| openspec/specs/schema-resolution/spec.md | 52 | `#### Scenario: Project-local schemas appear in list` | `#### Scenario: SCN-SR-003-1 Project-local schemas appear in list` |
| openspec/specs/schema-resolution/spec.md | 57 | `#### Scenario: Project-local schema shadows same-named user schema in list` | `#### Scenario: SCN-SR-003-2 Project-local schema shadows same-named user schema in list` |
| openspec/specs/schema-resolution/spec.md | 62 | `#### Scenario: Backward compatibility for listSchemas` | `#### Scenario: SCN-SR-003-3 Backward compatibility for listSchemas` |
| openspec/specs/schema-resolution/spec.md | 66 | `### Requirement: Schema info includes project source` | `### Requirement: REQ-SR-004 Schema info includes project source` |
| openspec/specs/schema-resolution/spec.md | 70 | `#### Scenario: Project-local schema shows project source` | `#### Scenario: SCN-SR-004-1 Project-local schema shows project source` |
| openspec/specs/schema-resolution/spec.md | 75 | `#### Scenario: User override schema shows user source` | `#### Scenario: SCN-SR-004-2 User override schema shows user source` |
| openspec/specs/schema-resolution/spec.md | 80 | `#### Scenario: Package built-in schema shows package source` | `#### Scenario: SCN-SR-004-3 Package built-in schema shows package source` |
| openspec/specs/schema-resolution/spec.md | 85 | `### Requirement: Schemas command shows source` | `### Requirement: REQ-SR-005 Schemas command shows source` |
| openspec/specs/schema-resolution/spec.md | 89 | `#### Scenario: Display format includes source` | `#### Scenario: SCN-SR-005-1 Display format includes source` |
| openspec/specs/schema-resolution/spec.md | 93 | `### Requirement: Use config schema as default for new changes` | `### Requirement: REQ-SR-006 Use config schema as default for new changes` |
| openspec/specs/schema-resolution/spec.md | 97 | `#### Scenario: Create change without --schema flag and config exists` | `#### Scenario: SCN-SR-006-1 Create change without --schema flag and config exists` |
| openspec/specs/schema-resolution/spec.md | 101 | `#### Scenario: Create change without --schema flag and no config` | `#### Scenario: SCN-SR-006-2 Create change without --schema flag and no config` |
| openspec/specs/schema-resolution/spec.md | 105 | `#### Scenario: Create change with explicit --schema flag` | `#### Scenario: SCN-SR-006-3 Create change with explicit --schema flag` |
| openspec/specs/schema-resolution/spec.md | 109 | `### Requirement: Resolve schema with updated precedence order` | `### Requirement: REQ-SR-007 Resolve schema with updated precedence order` |
| openspec/specs/schema-resolution/spec.md | 113 | `#### Scenario: CLI flag is provided` | `#### Scenario: SCN-SR-007-1 CLI flag is provided` |
| openspec/specs/schema-resolution/spec.md | 117 | `#### Scenario: Change metadata specifies schema` | `#### Scenario: SCN-SR-007-2 Change metadata specifies schema` |
| openspec/specs/schema-resolution/spec.md | 121 | `#### Scenario: Only project config specifies schema` | `#### Scenario: SCN-SR-007-3 Only project config specifies schema` |
| openspec/specs/schema-resolution/spec.md | 125 | `#### Scenario: No schema specified anywhere` | `#### Scenario: SCN-SR-007-4 No schema specified anywhere` |
| openspec/specs/schema-resolution/spec.md | 129 | `### Requirement: Support project-local schema names in config` | `### Requirement: REQ-SR-008 Support project-local schema names in config` |
| openspec/specs/schema-resolution/spec.md | 133 | `#### Scenario: Config references project-local schema` | `#### Scenario: SCN-SR-008-1 Config references project-local schema` |
| openspec/specs/schema-resolution/spec.md | 137 | `#### Scenario: Config references non-existent schema` | `#### Scenario: SCN-SR-008-2 Config references non-existent schema` |
| openspec/specs/schema-resolution/spec.md | 141 | `### Requirement: Provide helpful error message for invalid schema` | `### Requirement: REQ-SR-009 Provide helpful error message for invalid schema` |
| openspec/specs/schema-resolution/spec.md | 145 | `#### Scenario: Schema name with typo (close match)` | `#### Scenario: SCN-SR-009-1 Schema name with typo (close match)` |
| openspec/specs/schema-resolution/spec.md | 149 | `#### Scenario: Schema name with no close matches` | `#### Scenario: SCN-SR-009-2 Schema name with no close matches` |
| openspec/specs/schema-resolution/spec.md | 153 | `#### Scenario: Error message includes fix instructions` | `#### Scenario: SCN-SR-009-3 Error message includes fix instructions` |
| openspec/specs/schema-resolution/spec.md | 157 | `#### Scenario: Error distinguishes built-in vs project-local schemas` | `#### Scenario: SCN-SR-009-4 Error distinguishes built-in vs project-local schemas` |
| openspec/specs/schema-resolution/spec.md | 161 | `### Requirement: Maintain backwards compatibility for existing changes` | `### Requirement: REQ-SR-010 Maintain backwards compatibility for existing changes` |
| openspec/specs/schema-resolution/spec.md | 165 | `#### Scenario: Existing change without config` | `#### Scenario: SCN-SR-010-1 Existing change without config` |
| openspec/specs/schema-resolution/spec.md | 169 | `#### Scenario: Existing change with config added later` | `#### Scenario: SCN-SR-010-2 Existing change with config added later` |
| openspec/specs/schema-validate-command/spec.md | 7 | `### Requirement: Schema validate checks schema structure` | `### Requirement: REQ-SVC-001 Schema validate checks schema structure` |
| openspec/specs/schema-validate-command/spec.md | 10 | `#### Scenario: Validate specific schema` | `#### Scenario: SCN-SVC-001-1 Validate specific schema` |
| openspec/specs/schema-validate-command/spec.md | 16 | `#### Scenario: Validate all project schemas` | `#### Scenario: SCN-SVC-001-2 Validate all project schemas` |
| openspec/specs/schema-validate-command/spec.md | 22 | `#### Scenario: Schema not found` | `#### Scenario: SCN-SVC-001-3 Schema not found` |
| openspec/specs/schema-validate-command/spec.md | 27 | `### Requirement: Schema validate checks YAML syntax` | `### Requirement: REQ-SVC-002 Schema validate checks YAML syntax` |
| openspec/specs/schema-validate-command/spec.md | 30 | `#### Scenario: Invalid YAML syntax` | `#### Scenario: SCN-SVC-002-1 Invalid YAML syntax` |
| openspec/specs/schema-validate-command/spec.md | 35 | `#### Scenario: Valid YAML but missing required fields` | `#### Scenario: SCN-SVC-002-2 Valid YAML but missing required fields` |
| openspec/specs/schema-validate-command/spec.md | 40 | `### Requirement: Schema validate checks template existence` | `### Requirement: REQ-SVC-003 Schema validate checks template existence` |
| openspec/specs/schema-validate-command/spec.md | 43 | `#### Scenario: Missing template file` | `#### Scenario: SCN-SVC-003-1 Missing template file` |
| openspec/specs/schema-validate-command/spec.md | 48 | `#### Scenario: All templates exist` | `#### Scenario: SCN-SVC-003-2 All templates exist` |
| openspec/specs/schema-validate-command/spec.md | 53 | `### Requirement: Schema validate checks dependency graph` | `### Requirement: REQ-SVC-004 Schema validate checks dependency graph` |
| openspec/specs/schema-validate-command/spec.md | 56 | `#### Scenario: Valid dependency graph` | `#### Scenario: SCN-SVC-004-1 Valid dependency graph` |
| openspec/specs/schema-validate-command/spec.md | 60 | `#### Scenario: Circular dependency detected` | `#### Scenario: SCN-SVC-004-2 Circular dependency detected` |
| openspec/specs/schema-validate-command/spec.md | 66 | `#### Scenario: Unknown dependency reference` | `#### Scenario: SCN-SVC-004-3 Unknown dependency reference` |
| openspec/specs/schema-validate-command/spec.md | 71 | `### Requirement: Schema validate outputs JSON format` | `### Requirement: REQ-SVC-005 Schema validate outputs JSON format` |
| openspec/specs/schema-validate-command/spec.md | 74 | `#### Scenario: JSON output for valid schema` | `#### Scenario: SCN-SVC-005-1 JSON output for valid schema` |
| openspec/specs/schema-validate-command/spec.md | 78 | `#### Scenario: JSON output for invalid schema` | `#### Scenario: SCN-SVC-005-2 JSON output for invalid schema` |
| openspec/specs/schema-validate-command/spec.md | 84 | `### Requirement: Schema validate supports verbose mode` | `### Requirement: REQ-SVC-006 Schema validate supports verbose mode` |
| openspec/specs/schema-validate-command/spec.md | 87 | `#### Scenario: Verbose output shows all checks` | `#### Scenario: SCN-SVC-006-1 Verbose output shows all checks` |
| openspec/specs/schema-which-command/spec.md | 7 | `### Requirement: Schema which shows resolution result` | `### Requirement: REQ-SWC-001 Schema which shows resolution result` |
| openspec/specs/schema-which-command/spec.md | 10 | `#### Scenario: Schema resolves from project` | `#### Scenario: SCN-SWC-001-1 Schema resolves from project` |
| openspec/specs/schema-which-command/spec.md | 15 | `#### Scenario: Schema resolves from user directory` | `#### Scenario: SCN-SWC-001-2 Schema resolves from user directory` |
| openspec/specs/schema-which-command/spec.md | 20 | `#### Scenario: Schema resolves from package` | `#### Scenario: SCN-SWC-001-3 Schema resolves from package` |
| openspec/specs/schema-which-command/spec.md | 25 | `#### Scenario: Schema not found` | `#### Scenario: SCN-SWC-001-4 Schema not found` |
| openspec/specs/schema-which-command/spec.md | 31 | `### Requirement: Schema which shows shadowing information` | `### Requirement: REQ-SWC-002 Schema which shows shadowing information` |
| openspec/specs/schema-which-command/spec.md | 34 | `#### Scenario: Project schema shadows package` | `#### Scenario: SCN-SWC-002-1 Project schema shadows package` |
| openspec/specs/schema-which-command/spec.md | 40 | `#### Scenario: No shadowing` | `#### Scenario: SCN-SWC-002-2 No shadowing` |
| openspec/specs/schema-which-command/spec.md | 44 | `#### Scenario: Multiple shadows` | `#### Scenario: SCN-SWC-002-3 Multiple shadows` |
| openspec/specs/schema-which-command/spec.md | 48 | `### Requirement: Schema which outputs JSON format` | `### Requirement: REQ-SWC-003 Schema which outputs JSON format` |
| openspec/specs/schema-which-command/spec.md | 51 | `#### Scenario: JSON output basic` | `#### Scenario: SCN-SWC-003-1 JSON output basic` |
| openspec/specs/schema-which-command/spec.md | 55 | `#### Scenario: JSON output with shadows` | `#### Scenario: SCN-SWC-003-2 JSON output with shadows` |
| openspec/specs/schema-which-command/spec.md | 59 | `### Requirement: Schema which supports list mode` | `### Requirement: REQ-SWC-004 Schema which supports list mode` |
| openspec/specs/schema-which-command/spec.md | 62 | `#### Scenario: List all schemas` | `#### Scenario: SCN-SWC-004-1 List all schemas` |
| openspec/specs/schema-which-command/spec.md | 67 | `#### Scenario: List in JSON format` | `#### Scenario: SCN-SWC-004-2 List in JSON format` |
| openspec/specs/specs-sync-skill/spec.md | 8 | `### Requirement: Specs Sync Skill` | `### Requirement: REQ-SSS-001 Specs Sync Skill` |
| openspec/specs/specs-sync-skill/spec.md | 11 | `#### Scenario: Sync delta specs to main specs` | `#### Scenario: SCN-SSS-001-1 Sync delta specs to main specs` |
| openspec/specs/specs-sync-skill/spec.md | 17 | `#### Scenario: Idempotent operation` | `#### Scenario: SCN-SSS-001-2 Idempotent operation` |
| openspec/specs/specs-sync-skill/spec.md | 22 | `#### Scenario: Change selection prompt` | `#### Scenario: SCN-SSS-001-3 Change selection prompt` |
| openspec/specs/specs-sync-skill/spec.md | 28 | `### Requirement: Delta Reconciliation Logic` | `### Requirement: REQ-SSS-002 Delta Reconciliation Logic` |
| openspec/specs/specs-sync-skill/spec.md | 31 | `#### Scenario: ADDED requirements` | `#### Scenario: SCN-SSS-002-1 ADDED requirements` |
| openspec/specs/specs-sync-skill/spec.md | 36 | `#### Scenario: ADDED requirement already exists` | `#### Scenario: SCN-SSS-002-2 ADDED requirement already exists` |
| openspec/specs/specs-sync-skill/spec.md | 41 | `#### Scenario: MODIFIED requirements` | `#### Scenario: SCN-SSS-002-3 MODIFIED requirements` |
| openspec/specs/specs-sync-skill/spec.md | 46 | `#### Scenario: REMOVED requirements` | `#### Scenario: SCN-SSS-002-4 REMOVED requirements` |
| openspec/specs/specs-sync-skill/spec.md | 51 | `#### Scenario: REMOVED requirements retire the capability` | `#### Scenario: SCN-SSS-002-5 REMOVED requirements retire the capability` |
| openspec/specs/specs-sync-skill/spec.md | 61 | `#### Scenario: Something is left in the spec` | `#### Scenario: SCN-SSS-002-6 Something is left in the spec` |
| openspec/specs/specs-sync-skill/spec.md | 67 | `#### Scenario: RENAMED requirements` | `#### Scenario: SCN-SSS-002-7 RENAMED requirements` |
| openspec/specs/specs-sync-skill/spec.md | 72 | `#### Scenario: New capability spec` | `#### Scenario: SCN-SSS-002-8 New capability spec` |
| openspec/specs/specs-sync-skill/spec.md | 79 | `#### Scenario: MODIFIED or RENAMED against a capability with no main spec` | `#### Scenario: SCN-SSS-002-9 MODIFIED or RENAMED against a capability with no main spec` |
| openspec/specs/specs-sync-skill/spec.md | 86 | `#### Scenario: Nothing to put in a new spec` | `#### Scenario: SCN-SSS-002-10 Nothing to put in a new spec` |
| openspec/specs/specs-sync-skill/spec.md | 95 | `#### Scenario: Merged main spec keeps canonical structure` | `#### Scenario: SCN-SSS-002-11 Merged main spec keeps canonical structure` |
| openspec/specs/specs-sync-skill/spec.md | 100 | `### Requirement: Skill Output` | `### Requirement: REQ-SSS-003 Skill Output` |
| openspec/specs/specs-sync-skill/spec.md | 103 | `#### Scenario: Show applied changes` | `#### Scenario: SCN-SSS-003-1 Show applied changes` |
| openspec/specs/specs-sync-skill/spec.md | 111 | `#### Scenario: No changes needed` | `#### Scenario: SCN-SSS-003-2 No changes needed` |
| openspec/specs/telemetry/spec.md | 9 | `### Requirement: Command execution tracking` | `### Requirement: REQ-TEL-001 Command execution tracking` |
| openspec/specs/telemetry/spec.md | 12 | `#### Scenario: Standard command execution` | `#### Scenario: SCN-TEL-001-1 Standard command execution` |
| openspec/specs/telemetry/spec.md | 16 | `#### Scenario: Subcommand execution` | `#### Scenario: SCN-TEL-001-2 Subcommand execution` |
| openspec/specs/telemetry/spec.md | 20 | `### Requirement: Privacy-preserving event design` | `### Requirement: REQ-TEL-002 Privacy-preserving event design` |
| openspec/specs/telemetry/spec.md | 23 | `#### Scenario: Command with arguments` | `#### Scenario: SCN-TEL-002-1 Command with arguments` |
| openspec/specs/telemetry/spec.md | 27 | `#### Scenario: IP address exclusion` | `#### Scenario: SCN-TEL-002-2 IP address exclusion` |
| openspec/specs/telemetry/spec.md | 31 | `### Requirement: Environment variable opt-out` | `### Requirement: REQ-TEL-003 Environment variable opt-out` |
| openspec/specs/telemetry/spec.md | 34 | `#### Scenario: OPENSPEC_TELEMETRY opt-out` | `#### Scenario: SCN-TEL-003-1 OPENSPEC_TELEMETRY opt-out` |
| openspec/specs/telemetry/spec.md | 38 | `#### Scenario: DO_NOT_TRACK opt-out` | `#### Scenario: SCN-TEL-003-2 DO_NOT_TRACK opt-out` |
| openspec/specs/telemetry/spec.md | 42 | `#### Scenario: Environment variable takes precedence` | `#### Scenario: SCN-TEL-003-3 Environment variable takes precedence` |
| openspec/specs/telemetry/spec.md | 47 | `### Requirement: CI environment auto-disable` | `### Requirement: REQ-TEL-004 CI environment auto-disable` |
| openspec/specs/telemetry/spec.md | 50 | `#### Scenario: CI environment detection` | `#### Scenario: SCN-TEL-004-1 CI environment detection` |
| openspec/specs/telemetry/spec.md | 54 | `#### Scenario: CI with explicit enable` | `#### Scenario: SCN-TEL-004-2 CI with explicit enable` |
| openspec/specs/telemetry/spec.md | 59 | `### Requirement: First-run telemetry notice` | `### Requirement: REQ-TEL-005 First-run telemetry notice` |
| openspec/specs/telemetry/spec.md | 62 | `#### Scenario: First command execution` | `#### Scenario: SCN-TEL-005-1 First command execution` |
| openspec/specs/telemetry/spec.md | 67 | `#### Scenario: Subsequent command execution` | `#### Scenario: SCN-TEL-005-2 Subsequent command execution` |
| openspec/specs/telemetry/spec.md | 71 | `#### Scenario: Notice before telemetry` | `#### Scenario: SCN-TEL-005-3 Notice before telemetry` |
| openspec/specs/telemetry/spec.md | 75 | `### Requirement: Anonymous user identification` | `### Requirement: REQ-TEL-006 Anonymous user identification` |
| openspec/specs/telemetry/spec.md | 78 | `#### Scenario: First telemetry event` | `#### Scenario: SCN-TEL-006-1 First telemetry event` |
| openspec/specs/telemetry/spec.md | 83 | `#### Scenario: Persistent identity` | `#### Scenario: SCN-TEL-006-2 Persistent identity` |
| openspec/specs/telemetry/spec.md | 87 | `#### Scenario: Lazy generation with opt-out` | `#### Scenario: SCN-TEL-006-3 Lazy generation with opt-out` |
| openspec/specs/telemetry/spec.md | 91 | `### Requirement: Immediate event sending` | `### Requirement: REQ-TEL-007 Immediate event sending` |
| openspec/specs/telemetry/spec.md | 94 | `#### Scenario: Event transmission timing` | `#### Scenario: SCN-TEL-007-1 Event transmission timing` |
| openspec/specs/telemetry/spec.md | 98 | `### Requirement: Graceful shutdown` | `### Requirement: REQ-TEL-008 Graceful shutdown` |
| openspec/specs/telemetry/spec.md | 101 | `#### Scenario: Normal exit` | `#### Scenario: SCN-TEL-008-1 Normal exit` |
| openspec/specs/telemetry/spec.md | 105 | `#### Scenario: Error exit` | `#### Scenario: SCN-TEL-008-2 Error exit` |
| openspec/specs/telemetry/spec.md | 109 | `### Requirement: Silent failure handling` | `### Requirement: REQ-TEL-009 Silent failure handling` |
| openspec/specs/telemetry/spec.md | 112 | `#### Scenario: Network failure` | `#### Scenario: SCN-TEL-009-1 Network failure` |
| openspec/specs/telemetry/spec.md | 116 | `#### Scenario: PostHog outage` | `#### Scenario: SCN-TEL-009-2 PostHog outage` |
| openspec/specs/telemetry/spec.md | 120 | `#### Scenario: Shutdown failure` | `#### Scenario: SCN-TEL-009-3 Shutdown failure` |

## Unmatched

These delta headers match no main header and no RENAMED line. They kept their text.

- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:7 `### Requirement: Skill generation per tool (REPLACES fixed 9-skill mandate)`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:23 `### Requirement: Command generation per tool (REPLACES fixed 9-command mandate)`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:42 `### Requirement: Tool auto-detection`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:58 `### Requirement: Smart defaults init flow`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:114 `### Requirement: Init performs migration on existing projects`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:129 `### Requirement: Init respects global config`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:151 `### Requirement: Init applies configured profile without confirmation`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:170 `### Requirement: Init preserves existing workflows`
- openspec/changes/simplify-skill-installation/specs/cli-init/spec.md:192 `### Requirement: Init tool confirmation UX`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:7 `### Requirement: Update respects global profile config`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:44 `### Requirement: Update respects delivery setting`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:68 `### Requirement: Update detects configured tools from skills or commands`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:78 `### Requirement: One-time migration for existing users`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:132 `### Requirement: Update detects new tool directories`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:154 `### Requirement: Update requires an OpenSpec project`
- openspec/changes/simplify-skill-installation/specs/cli-update/spec.md:163 `### Requirement: Extra workflows synchronized to active profile`
