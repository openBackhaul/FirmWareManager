# Validation Functions

| triggerFunction             | sequence                                                         |
| --------------------------- | ---------------------------------------------------------------- |
| createDeviceModel           | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel |
| deleteDeviceModel           | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel |
| deleteDeviceGroup           | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel |
| removeFirmwareApproval      | p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware        |
| addOrUpdateTargetFirmware   | p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup                 |
| p1InstantiateDevice         | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel <br> p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup |
| addDevicesToDeviceGroup     | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel <br> p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup <br> p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware |
| removeDeviceFromDeviceGroup | p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel <br> p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup <br> p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware |
