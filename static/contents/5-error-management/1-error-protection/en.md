# Error protection

## Definition

The criterion *error protection* refers to the means available to detect and prevent data entry errors, command errors, or actions with destructive conse- quences.

## Rationale(s)

It is preferable to detect errors before validation rather than after: the detection is less disruptive.

## Examples of guidelines

* When a user requests LOG-OFF and if any pending transaction will not be completed, or if data will be lost, display an advisory message requesting user con® rmation.
* Protect ® eld labels from accidental change by users.
* Fields designed for inform ation display should be protected: users should not be allowed to change the information contained in these ® elds.
* Ensure that user interface software will deal appropriately with all possible user errors, includ- ing accidental inputs.