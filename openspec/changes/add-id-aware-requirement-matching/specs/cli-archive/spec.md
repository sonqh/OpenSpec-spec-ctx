## ADDED Requirements

### Requirement: REQ-CA-014 Archive matches requirements by ID when the header has one
When a requirement header starts with an ID token such as `REQ-CA-001`, archive SHALL match the delta header to the main spec header by that token. Archive SHALL ignore the title text after the token. A header without an ID token SHALL keep exact text matching. When a MODIFIED block keeps the ID and changes the title, archive SHALL apply it. The new title SHALL replace the old one in the main spec.

#### Scenario: SCN-CA-014-1 MODIFIED block with the same ID and a new title
- **GIVEN** a main spec with `### Requirement: REQ-TEL-005 First-run telemetry notice`
- **AND** a change whose MODIFIED section has `### Requirement: REQ-TEL-005 Telemetry notice on the first run`
- **WHEN** the change is archived
- **THEN** archive applies the block
- **AND** the main spec reads `### Requirement: REQ-TEL-005 Telemetry notice on the first run`

#### Scenario: SCN-CA-014-2 REMOVED header found by ID
- **GIVEN** a main spec with `### Requirement: REQ-BIL-002 Late fees`
- **AND** a change whose REMOVED section lists `### Requirement: REQ-BIL-002 Fees for late payment`
- **WHEN** the change is archived
- **THEN** the requirement with ID `REQ-BIL-002` is removed from the main spec

#### Scenario: SCN-CA-014-3 RENAMED pair with one ID on both sides
- **GIVEN** a RENAMED entry whose FROM and TO headers start with the same ID token
- **WHEN** the change is archived
- **THEN** archive treats the pair as a retitle of that one requirement
- **AND** archive does not report that the target already exists

#### Scenario: SCN-CA-014-4 Header without an ID keeps text matching
- **GIVEN** a main spec with `### Requirement: Refund window`
- **AND** a change whose MODIFIED section has `### Requirement: Refund period`
- **WHEN** the change is archived
- **THEN** archive refuses the block as not found, the same as before

#### Scenario: SCN-CA-014-5 Two main spec headers share one ID
- **GIVEN** a main spec where two requirement headers start with the same ID token
- **WHEN** a change for that capability is archived
- **THEN** archive stops with an error that names the duplicate ID and the capability

### Requirement: REQ-CA-015 Archive compares scenarios by ID when the header has one
When a scenario header starts with an ID token such as `SCN-CA-001-1`, the scenario-loss check SHALL compare the current and modified blocks by that token. A scenario that keeps its token and changes its title SHALL count as present. A scenario header without a token SHALL keep text comparison. Messages SHALL show the scenario name as the main spec writes it.

#### Scenario: SCN-CA-015-1 Scenario titles change under stable IDs
- **GIVEN** a main spec requirement with scenarios `SCN-BIL-002-1 Thirty days overdue`
- **AND** a MODIFIED block with the scenario `SCN-BIL-002-1 An invoice is thirty days overdue`
- **WHEN** the change is archived
- **THEN** archive applies the block without a scenario-loss error

#### Scenario: SCN-CA-015-2 A scenario with a different ID is still a loss
- **GIVEN** a main spec requirement with the scenario `SCN-BIL-002-1 Thirty days overdue`
- **AND** a MODIFIED block whose only scenario is `SCN-BIL-002-2 A different scenario`
- **WHEN** the change is archived
- **THEN** archive refuses the block and names `SCN-BIL-002-1 Thirty days overdue` as missing
