## ADDED Requirements

### Requirement: REQ-CI-017 Init install scope selection
The init command SHALL support install scope selection for generated artifacts.

#### Scenario: SCN-CI-017-1 Scope defaults to global
- **WHEN** user runs `openspec init` without explicit scope override
- **THEN** init SHALL use global config install scope
- **AND** if unset, SHALL resolve migration-aware default (`global` for newly created configs, `project` for legacy schema-evolved configs)

#### Scenario: SCN-CI-017-2 Scope override via flag
- **WHEN** user runs `openspec init --scope project`
- **THEN** init SHALL use `project` as preferred scope for that run
- **AND** SHALL NOT mutate persisted global config unless user explicitly changes config

### Requirement: REQ-CI-018 Init uses effective scope resolution
The init command SHALL resolve effective scope per tool surface before generating files.

#### Scenario: SCN-CI-018-1 Effective scope with fallback
- **WHEN** selected tool/surface does not support preferred scope
- **AND** supports alternate scope
- **THEN** init SHALL generate files at alternate effective scope
- **AND** SHALL display fallback note in summary

#### Scenario: SCN-CI-018-2 Unsupported scope selection
- **WHEN** selected tool/surface supports neither preferred nor alternate scope
- **THEN** init SHALL fail before writing files
- **AND** SHALL provide clear error guidance
