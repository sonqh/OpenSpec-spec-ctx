## Purpose

Profiles SHALL define which workflows to install, enabling a streamlined core experience for new users while allowing power users to customize their workflow selection.

## ADDED Requirements

### Requirement: REQ-PRO-001 Profile definitions
The system SHALL support two workflow profiles: `core` and `custom`.

#### Scenario: SCN-PRO-001-1 Core profile contents
- **WHEN** profile is set to `core`
- **THEN** the profile SHALL include workflows: `propose`, `explore`, `apply`, `archive`

#### Scenario: SCN-PRO-001-2 Custom profile contents
- **WHEN** profile is set to `custom`
- **THEN** the profile SHALL include only the workflows specified in global config `workflows` array

### Requirement: REQ-PRO-002 Delivery is independent of profile
The delivery setting SHALL control HOW workflows are installed (skills, commands, or both), separate from WHICH workflows are installed.

#### Scenario: SCN-PRO-002-1 Delivery options
- **WHEN** configuring delivery
- **THEN** the system SHALL support three options: `both` (skills and commands), `skills` (skill files only), `commands` (command files only)

#### Scenario: SCN-PRO-002-2 Both delivery
- **WHEN** delivery is set to `both`
- **THEN** the system SHALL install both skill files and command files for each workflow

#### Scenario: SCN-PRO-002-3 Skills-only delivery
- **WHEN** delivery is set to `skills`
- **THEN** the system SHALL install only skill files for each workflow
- **THEN** the system SHALL NOT install command files

#### Scenario: SCN-PRO-002-4 Commands-only delivery
- **WHEN** delivery is set to `commands`
- **THEN** the system SHALL install only command files for each workflow
- **THEN** the system SHALL NOT install skill files

#### Scenario: SCN-PRO-002-5 Core profile with custom delivery
- **WHEN** profile is set to `core`
- **AND** delivery is set to `skills`
- **THEN** the system SHALL install core workflows as skills only (no commands)

#### Scenario: SCN-PRO-002-6 Delivery defaults
- **WHEN** delivery is not set in global config
- **THEN** the system SHALL default to `both`

### Requirement: REQ-PRO-003 Profile configuration via interactive picker
The system SHALL provide an interactive picker for configuring profiles.

#### Scenario: SCN-PRO-003-1 Interactive profile configuration
- **WHEN** user runs `openspec config profile`
- **THEN** the system SHALL display an interactive picker with:
  - Delivery selection: `skills`, `commands`, `both`
  - Workflow toggles for all available workflows
- **THEN** the system SHALL pre-select current config values
- **THEN** on confirmation, the system SHALL update global config
- **THEN** the system SHALL set profile to `custom` if selected workflows differ from core defaults
- **THEN** the system SHALL set profile to `core` if selected workflows match core defaults exactly (propose, explore, apply, archive), regardless of delivery setting
- **THEN** the system SHALL NOT modify any project files
- **THEN** the system SHALL display: "Config updated. Run `openspec update` in your projects to apply."

#### Scenario: SCN-PRO-003-2 Core preset shortcut
- **WHEN** user runs `openspec config profile core`
- **THEN** the system SHALL set profile to `core`
- **THEN** the system SHALL set workflows to `['propose', 'explore', 'apply', 'archive']`
- **THEN** the system SHALL NOT change the delivery setting (preserves user preference)
- **THEN** the system SHALL NOT modify any project files
- **THEN** the system SHALL display: "Config updated. Run `openspec update` in your projects to apply."
- **THEN** the new profile takes effect on the next `openspec init` or `openspec update` run

#### Scenario: SCN-PRO-003-3 Config profile run inside a project
- **WHEN** user runs `openspec config profile` inside an OpenSpec project directory
- **THEN** after updating global config, the system SHALL prompt: "Apply to this project now? (y/n)"
- **WHEN** user confirms
- **THEN** the system SHALL run `openspec update` automatically
- **THEN** the system SHALL still display: "Run `openspec update` in your other projects to apply."

#### Scenario: SCN-PRO-003-4 Config profile - user declines apply
- **WHEN** user runs `openspec config profile` inside an OpenSpec project directory
- **AND** user declines the "Apply to this project now?" prompt
- **THEN** the system SHALL display: "Config updated. Run `openspec update` in your projects to apply."
- **THEN** the system SHALL exit successfully without modifying project files

#### Scenario: SCN-PRO-003-5 Config profile non-interactive
- **WHEN** user runs `openspec config profile` non-interactively (e.g., in CI, no TTY)
- **THEN** the system SHALL display an error: "Interactive mode required. Use `openspec config profile core` or set config via environment/flags."
- **THEN** the system SHALL exit with code 1

### Requirement: REQ-PRO-004 Profile settings stored in global config
Profile and delivery settings SHALL be stored in the existing global config file (`~/.config/openspec/config.json`) alongside telemetry and feature flags.

#### Scenario: SCN-PRO-004-1 Config schema
- **WHEN** reading profile configuration
- **THEN** the config SHALL contain `profile` (core|custom), `delivery` (both|skills|commands), and optionally `workflows` (array of workflow names)

#### Scenario: SCN-PRO-004-2 Schema evolution
- **WHEN** loading config without profile/delivery fields
- **THEN** the system SHALL use defaults (profile=core, delivery=both)
- **AND** existing config fields (telemetry, featureFlags) SHALL be preserved

#### Scenario: SCN-PRO-004-3 Config list displays profile settings
- **WHEN** user runs `openspec config list`
- **THEN** the system SHALL display profile, delivery, and workflows settings
- **AND** SHALL indicate which values are defaults vs explicitly set

### Requirement: REQ-PRO-005 Config is global, projects are explicit
Config changes SHALL NOT automatically propagate to projects.

#### Scenario: SCN-PRO-005-1 Config update does not modify projects
- **WHEN** user updates config via `openspec config profile`
- **THEN** the system SHALL only update global config (`~/.config/openspec/config.json`)
- **THEN** the system SHALL NOT modify any project skill/command files
- **THEN** existing projects retain their current workflow files until user runs `openspec update`

### Requirement: REQ-PRO-006 Config changes applied via update command
The existing `openspec update` command SHALL apply the current global config to a project. See `specs/cli-update/spec.md` for detailed update behavior.

#### Scenario: SCN-PRO-006-1 Config changes require explicit project sync
- **WHEN** user updates profile or delivery via `openspec config profile`
- **THEN** the global config SHALL be updated immediately
- **AND** project files SHALL remain unchanged until `openspec update` is run for that project

### Requirement: REQ-PRO-007 Profile defaults
The system SHALL use `core` as the default profile for new users, while preserving existing users' workflows via migration.

#### Scenario: SCN-PRO-007-1 No global config exists (new user)
- **WHEN** global config file does not exist
- **AND** no existing workflows are installed in the project
- **THEN** the system SHALL behave as if profile is `core`

#### Scenario: SCN-PRO-007-2 Global config exists but profile field absent (new user)
- **WHEN** global config file exists but does not contain a `profile` field
- **AND** no existing workflows are installed in the project
- **THEN** the system SHALL behave as if profile is `core`

#### Scenario: SCN-PRO-007-3 Profile field absent with existing workflows (existing user migration)
- **WHEN** global config does not contain a `profile` field
- **AND** the `update` command detects existing workflow files in the project
- **THEN** the system SHALL perform one-time migration (see `specs/cli-update/spec.md` for details)
- **THEN** the system SHALL set profile to `custom` with the detected workflows
- **THEN** the system SHALL NOT add or remove any workflow files during migration
