# global-config Specification

## Purpose

This spec defines how OpenSpec resolves, reads, and writes user-level global configuration. It governs the `src/core/global-config.ts` module, which provides the foundation for storing user preferences, feature flags, and settings that persist across projects. The spec ensures cross-platform compatibility by following XDG Base Directory Specification with platform-specific fallbacks, and guarantees forward/backward compatibility through schema evolution rules.
## Requirements
### Requirement: REQ-GC-001 Global configuration storage
The system SHALL store global configuration in `~/.config/openspec/config.json`, including telemetry state with `anonymousId` and `noticeSeen` fields.

#### Scenario: SCN-GC-001-1 Initial config creation
- **WHEN** no global config file exists
- **AND** the first telemetry event is about to be sent
- **THEN** the system creates `~/.config/openspec/config.json` with telemetry configuration

#### Scenario: SCN-GC-001-2 Telemetry config structure
- **WHEN** reading or writing telemetry configuration
- **THEN** the config contains a `telemetry` object with `anonymousId` (string UUID) and `noticeSeen` (boolean) fields

#### Scenario: SCN-GC-001-3 Config file format
- **WHEN** storing configuration
- **THEN** the system writes valid JSON that can be read and modified by users

#### Scenario: SCN-GC-001-4 Existing config preservation
- **WHEN** adding telemetry fields to an existing config file
- **THEN** the system preserves all existing configuration fields

### Requirement: REQ-GC-002 Global Config Directory Path

The system SHALL resolve the global configuration directory path following XDG Base Directory Specification with platform-specific fallbacks.

#### Scenario: SCN-GC-002-1 Unix/macOS with XDG_CONFIG_HOME set
- **WHEN** `$XDG_CONFIG_HOME` environment variable is set to `/custom/config`
- **THEN** `getGlobalConfigDir()` returns `/custom/config/openspec`

#### Scenario: SCN-GC-002-2 Unix/macOS without XDG_CONFIG_HOME
- **WHEN** `$XDG_CONFIG_HOME` environment variable is not set
- **AND** the platform is Unix or macOS
- **THEN** `getGlobalConfigDir()` returns `~/.config/openspec` (expanded to absolute path)

#### Scenario: SCN-GC-002-3 Windows platform
- **WHEN** the platform is Windows
- **AND** `%APPDATA%` is set to `C:\Users\User\AppData\Roaming`
- **THEN** `getGlobalConfigDir()` returns `C:\Users\User\AppData\Roaming\openspec`

### Requirement: REQ-GC-003 Global Config Loading

The system SHALL load global configuration from the config directory with sensible defaults when the config file does not exist or cannot be parsed.

#### Scenario: SCN-GC-003-1 Config file exists and is valid
- **WHEN** `config.json` exists in the global config directory
- **AND** the file contains valid JSON matching the config schema
- **THEN** `getGlobalConfig()` returns the parsed configuration

#### Scenario: SCN-GC-003-2 Config file does not exist
- **WHEN** `config.json` does not exist in the global config directory
- **THEN** `getGlobalConfig()` returns the default configuration
- **AND** no directory or file is created

#### Scenario: SCN-GC-003-3 Config file is invalid JSON
- **WHEN** `config.json` exists but contains invalid JSON
- **THEN** `getGlobalConfig()` returns the default configuration
- **AND** a warning is logged to stderr

### Requirement: REQ-GC-004 Global Config Saving

The system SHALL save global configuration to the config directory, creating the directory if it does not exist.

#### Scenario: SCN-GC-004-1 Save config to new directory
- **WHEN** `saveGlobalConfig(config)` is called
- **AND** the global config directory does not exist
- **THEN** the directory is created
- **AND** `config.json` is written with the provided configuration

#### Scenario: SCN-GC-004-2 Save config to existing directory
- **WHEN** `saveGlobalConfig(config)` is called
- **AND** the global config directory already exists
- **THEN** `config.json` is written (overwriting if exists)

### Requirement: REQ-GC-005 Default Configuration

The system SHALL provide a default configuration that is used when no config file exists.

#### Scenario: SCN-GC-005-1 Default config structure
- **WHEN** no config file exists
- **THEN** the default configuration includes an empty `featureFlags` object

### Requirement: REQ-GC-006 Config Schema Evolution

The system SHALL merge loaded configuration with default values to ensure new config fields are available even when loading older config files.

#### Scenario: SCN-GC-006-1 Config file missing new fields
- **WHEN** `config.json` exists with `{ "featureFlags": {} }`
- **AND** the current schema includes a new field `defaultAiTool`
- **THEN** `getGlobalConfig()` returns `{ featureFlags: {}, defaultAiTool: <default> }`
- **AND** the loaded values take precedence over defaults for fields that exist in both

#### Scenario: SCN-GC-006-2 Config file has extra unknown fields
- **WHEN** `config.json` contains fields not in the current schema
- **THEN** the unknown fields are preserved in the returned configuration
- **AND** no error or warning is raised

