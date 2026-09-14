# Status of Service Specifications

This is a temporary administrative document for keeping track of the status of the services specifications.  
It is not part of the specification itself.  
It shall be deleted once the service specifications are complete.  

1 = "Sequence diagram"  
2 = "Readme"  
3 = "FirmWareManager.yaml"  
4 = "variables.yaml"  
5 = "Review"

Ka = Katharina  
Th = Thorsten

## Documenting firmware approvals (Engineering)

### Preparing servers

| Service                                                    | 1  | 2  | 5  | 3     | 4  | 5  |
| ---------------------------------------------------------- | -- | -- | -- | ----- | -- | -- |
| [/list-existing-servers](./listExistingServers/1.0.0/)     | Th | Th | Ka | Th    | Th |    |
| [/list-incomplete-servers](./listIncompleteServers/1.0.0/) | Th | Th | Ka |       |    |    |
| [/create-server](./createOrUpdateServer/1.0.0/)            | Th | Th | Ka |       |    |    |
| [/update-server](./createOrUpdateServer/1.0.0/)            | Th | Th | Ka |       |    |    |
| [/delete-server](./deleteServer/1.0.0/)                    | Th | Th | Ka | Th 1) | Th |    |

  > Technische Klärung der benötigten Inputparameter und ggf. deren Formatierung erforderlich.  

### Preparing firmware resources

| Service                                                                                 | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-firmware-resources](./listExistingFirmwareResources/1.0.0/)             | Th | Th | Ka | Th | Th |    |
| [/create-firmware-resource](./createFirmwareResource/1.0.0/)                            | Th | Th | Ka |    |    |    |
| [/update-firmware-resource](./updateFirmwareResource/1.0.0/)                            | Th | Th | Ka |    |    |    |
| [/delete-firmware-resource](./deleteFirmwareResource/1.0.0/)                            | Th | Th | Ka |    |    |    |

### Preparing device models

| Service                                                                     | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-device-models](./listExistingDeviceModels/1.0.0/)           | Th | Th | Ka |    |    |    |
| [/list-unknown-device-models](./listUnknownDeviceModels/1.0.0/)             | Th | Th | Ka |    |    |    |
| [/create-device-model](./createDeviceModel/1.0.0/)                          | Th | Th | Ka |    |    |    |
| [/delete-device-model](./deleteDeviceModel/1.0.0/)                          | Th | Th |    |    |    |    |

### Documenting firmware approvals

| Service                                                                                 | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-models-without-approvals](./listDeviceModelsWithoutApprovals/1.0.0/)      | Th | Th | Ka |    |    |    |
| [/list-existing-firmware-approvals](./listExistingFirmwareApprovals/1.0.0/)             | Th | Th | Ka |    |    |    |
| [/add-firmware-approval](./addFirmwareApproval/1.0.0/)                                  | Th | Th |    |    |    |    |
| [/remove-firmware-approval](./removeFirmwareApproval/1.0.0/)                            | Th | Th |    |    |    |    |

## Preparing device groups and initiating firmware roll-out (Operations)

### Preparing device groups

| Service                                                                       | 1  | 2  | 5  | 3  | 4  | 5  |
| ----------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-device-groups](./listExistingDeviceGroups/1.0.0/)             | Th | Th | Ka |    |    |    |
| [/create-device-group](./createDeviceGroup/1.0.0/)                            | Th | Th | Ka |    |    |    |
| [/update-device-group](./updateDeviceGroup/1.0.0/)                            | Th | Th | Ka |    |    |    |
| [/delete-device-group](./deleteDeviceGroup/1.0.0/)                            | Th | Th |  |    |    |    |

### Initiate firmware roll-out

| Service                                                                                       | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-groups-without-target-firmware](./listDeviceGroupsWithoutTargetFirmware/1.0.0/) | Th | Th | Ka |    |    |    |
| [/provide-existing-device-group](./provideExistingDeviceGroup/1.0.0/)                         | Th | Th | Ka |    |    |    |
| [/add-or-update-target-firmware](./addOrUpdateTargetFirmware/1.0.0/)                          | Th | Th | Ka |    |    |    |
| [/delete-target-firmware](./deleteTargetFirmware/1.0.0/)                                      | Th | Th | Ka |    |    |    |

## Categorizing individual devices into device groups (Planning)

### Preparing devices  

Solved by functions.

 > Wie werden wir die Devices wieder los?

### Categorizing individual devices into device groups

| Service                                                                             | 1  | 2  | 5  | 3  | 4  | 5  |
| ----------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-devices](./listExistingDevices/1.0.0/)                              | Th | Th | Ka |    |    |    |
| [/list-device-groups-without-devices](./listDeviceGroupsWithoutDevices/1.0.0/)      | Th | Th | Ka |    |    |    |
| [/add-devices-to-device-group](./addDevicesToDeviceGroup/1.0.0/)                    | Th | Th | Ka |    |    |    |
| [/remove-devices-from-device-group](./removeDevicesFromDeviceGroup/1.0.0/)          | Th | Th | Ka |    |    |    |

## Basic

### Kicking-off application

| Service                                  | 1 | 2 | 5 | 3 | 4 | 5 |
| ---------------------------------------- | - | - | - | - | - | - |
| [/embedYourself](./embedYourself/1.0.0/) |   |   |   |   |   |   |

---

---

  > 1\) Error Codes not yet defined.  
