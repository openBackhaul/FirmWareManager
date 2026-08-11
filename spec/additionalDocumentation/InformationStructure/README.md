# Information Structure

Apart from the [AutomationApplication's basic information structure at the DomainController level](./DomainController.md), the [structure specific for the Firmware domain](./NetworkControlDomain.md) has to contain the necessary information for ...

- executing the [RPCs for installing and activating a new firmware](OnfRpcsAndClasses.md) on the devices
- validating the firmware in CandidateDS against
  - the approvals and
  - the compatibility of the hardware components of the devices

The chosen information structure has to support performance by being ...

- ... light weight
- ... optimized for the most often executed operations
