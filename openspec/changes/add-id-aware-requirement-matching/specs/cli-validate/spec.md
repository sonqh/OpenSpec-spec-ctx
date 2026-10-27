## ADDED Requirements

### Requirement: REQ-CLIV-021 Change validation matches requirements and scenarios the way archive does
Change validation SHALL match delta headers to main spec headers by the rule archive uses. The rule is by ID token when the header starts with one, and by exact text otherwise. The scenario-loss check and the archive preflight SHALL use that rule. A MODIFIED block that keeps its ID and changes its title SHALL pass without an "Archive would refuse this delta" note. Duplicate and cross-section checks SHALL compare by that rule and SHALL show the ID token in their messages.

#### Scenario: SCN-CLIV-021-1 Strict validation of an ID-matched retitle
- **GIVEN** a main spec with `### Requirement: REQ-TEL-005 First-run telemetry notice`
- **AND** a change whose MODIFIED section has `### Requirement: REQ-TEL-005 Telemetry notice on the first run` with the same scenarios
- **WHEN** running `openspec validate <change> --type change --strict`
- **THEN** the change is valid
- **AND** no "Archive would refuse this delta" line is printed

#### Scenario: SCN-CLIV-021-2 Scenario titles change under stable IDs
- **GIVEN** a MODIFIED block whose scenarios keep their `SCN-` tokens and change their titles
- **WHEN** running `openspec validate <change> --type change --strict`
- **THEN** the scenario-loss check reports nothing

#### Scenario: SCN-CLIV-021-3 Retitled header without an ID is still refused
- **GIVEN** a main spec with `### Requirement: Plain widget`
- **AND** a change whose MODIFIED section has `### Requirement: Plain widget, retitled`
- **WHEN** running `openspec validate <change> --type change --strict`
- **THEN** validation prints an "Archive would refuse this delta" note that says the header was not found

#### Scenario: SCN-CLIV-021-4 Same ID in two sections
- **GIVEN** a change whose MODIFIED and REMOVED sections both name a header that starts with `REQ-WID-001`, with different titles
- **WHEN** running `openspec validate <change> --type change`
- **THEN** validation reports that `REQ-WID-001` is present in both MODIFIED and REMOVED
