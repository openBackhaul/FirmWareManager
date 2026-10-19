# Status of Service Specifications

This is a temporary administrative document for keeping track of the status of the services specifications.  
It is not part of the specification itself.  
It shall be deleted once the service specifications are complete.  

1 = "Sequence diagram"  
2 = "Readme"  
3 = "interface.yaml"  
4 = "variables.yaml"  
5 = "Review"

Ka = Katharina  
Th = Thorsten

## Documenting firmware approvals (Engineering)

### Preparing servers

| Service                                                    | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-servers](./listExistingServers/1.0.0/)     | Th | Th | Ka | Th | /  |  K  |
| [/list-incomplete-servers](./listIncompleteServers/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/create-server](./createServer/1.0.0/)                    | Th | Th | Ka | Th | /  |  K  |
| [/update-server](./updateServer/1.0.0/)                    | Th | Th | Ka | Th | /  |  K  |
| [/delete-server](./deleteServer/1.0.0/)                    | Th | Th | Ka | Th | Th |  K  |

### Preparing firmware resources

| Service                                                                     | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-firmware-resources](./listExistingFirmwareResources/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/create-firmware-resource](./createFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |
| [/update-firmware-resource](./updateFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |
| [/delete-firmware-resource](./deleteFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |

### Preparing device models

| Service                                                                         | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-existing-device-models](./listExistingDeviceModels/1.0.0/)               | Th | Th | Ka | Th | /  |    |
| [/list-unknown-device-models](./listUnknownDeviceModels/1.0.0/)                 | Th | Th | Ka | Th | /  |    |
| [/list-hardware-extraction-functions](./listHardwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  |    |
| [/list-firmware-extraction-functions](./listFirmwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  |    |
| [/create-device-model](./createDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |    |
| [/update-device-model](./updateDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |  K  |
| [/delete-device-model](./deleteDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |    |

### Documenting firmware approvals

| Service                                                                            | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-models-without-approvals](./listDeviceModelsWithoutApprovals/1.0.0/) | Th | Th | Ka | Th | /  |    |
| [/list-existing-firmware-approvals](./listExistingFirmwareApprovals/1.0.0/)        | Th | Th | Ka | Th | Th |    |
| [/add-firmware-approval](./addFirmwareApproval/1.0.0/)                             | Th | Th |    | Th | Th |    |
| [/withdraw-firmware-approval](./withdrawFirmwareApproval/1.0.0/)                   | Th | Th |    | Th | Th |    |

## Preparing device groups and initiating firmware roll-out (Operations)

### Preparing device groups

| Service                                                           | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------------------------------------------------| -- | -- | -- | -- | -- | -- |
| [/list-existing-device-groups](./listExistingDeviceGroups/1.0.0/) | Th | Th | Ka | Th | /  |    |
| [/create-device-group](./createDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |    |
| [/update-device-group](./updateDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |    |
| [/delete-device-group](./deleteDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |    |

### Initiate firmware roll-out

| Service                                                                                       | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-groups-without-target-firmware](./listDeviceGroupsWithoutTargetFirmware/1.0.0/) | Th | Th | Ka | Th | /  |    |
| [/provide-existing-device-group](./provideExistingDeviceGroup/1.0.0/)                         | Th | Th | Ka | Th | /  |    |
| [/add-target-firmware](./addTargetFirmware/1.0.0/)                                            | Th | Th |    | Th | Th |    |
| [/update-target-firmware](./updateTargetFirmware/1.0.0/)                                      | Th | Th |    | Th | Th |    |
| [/delete-target-firmware](./deleteTargetFirmware/1.0.0/)                                      | Th | Th | Ka | Th | Th |    |

## Categorizing individual devices into device groups (Planning)

### Preparing devices  

Solved by functions.

### Categorizing individual devices into device groups

| Service                                                                        | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------------------------------------------------------------ | -- | -- | -- | -- | -- | -- |
| [/list-existing-devices](./listExistingDevices/1.0.0/)                         | Th | Th | Ka | Th | /  |  K  |
| [/provide-existing-device](./provideExistingDevice/1.0.0/)                     | Th | Th |    | Th | /  |  K  |
| [/list-device-groups-without-devices](./listDeviceGroupsWithoutDevices/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/add-devices-to-device-group](./addDevicesToDeviceGroup/1.0.0/)               | Th | Th | Ka | TE |    |    |
| [/remove-devices-from-device-group](./removeDevicesFromDeviceGroup/1.0.0/)     | Th | Th | Ka | Te |    |    |

## Administrative

### Kicking-off application

| Service                                  | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/embedYourself](./embedYourself/1.0.0/) | Th | Th |    |    |    |    |

### Administrate ElasticSearch indexes

| Service                      | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------- | -- | -- | -- | -- | -- | -- |
| /list-existing-es-addresses  |    |    |    |    |    |    |
| /update-es-address           |    |    |    |    |    |    |

### Analyzing historical errors

| Service                  | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------ | -- | -- | -- | -- | -- | -- |
| /list-historical-errors  |    |    |    |    |    |    |

### Administrate Pulsers

| Service                | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------- | -- | -- | -- | -- | -- | -- |
| /list-existing-pulsers |    |    |    |    |    |    |
| /update-pulser         |    |    |    |    |    |    |
