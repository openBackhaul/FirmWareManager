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
| [/list-existing-device-models](./listExistingDeviceModels/1.0.0/)               | Th | Th | Ka | Th | /  |  K  |
| [/list-unknown-device-models](./listUnknownDeviceModels/1.0.0/)                 | Th | Th | Ka | Th | /  |  K  |
| [/list-hardware-extraction-functions](./listHardwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  |  K  |
| [/list-firmware-extraction-functions](./listFirmwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  |  K  |
| [/create-device-model](./createDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |  K  |
| [/update-device-model](./updateDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |  K  |
| [/delete-device-model](./deleteDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th |  K  |

### Documenting firmware approvals

| Service                                                                            | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-models-without-approvals](./listDeviceModelsWithoutApprovals/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/list-existing-firmware-approvals](./listExistingFirmwareApprovals/1.0.0/)        | Th | Th | Ka | Th | Th |  K  |
| [/add-firmware-approval](./addFirmwareApproval/1.0.0/)                             | Th | Th |    | Th | Th |  K  |
| [/withdraw-firmware-approval](./withdrawFirmwareApproval/1.0.0/)                   | Th | Th |    | Th | Th |  K  |

## Preparing device groups and initiating firmware roll-out (Operations)

### Preparing device groups

| Service                                                           | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------------------------------------------------| -- | -- | -- | -- | -- | -- |
| [/list-existing-device-groups](./listExistingDeviceGroups/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/create-device-group](./createDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |
| [/update-device-group](./updateDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |
| [/delete-device-group](./deleteDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th |  K  |

### Initiate firmware roll-out

| Service                                                                                       | 1  | 2  | 5  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/list-device-groups-without-target-firmware](./listDeviceGroupsWithoutTargetFirmware/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/provide-existing-device-group](./provideExistingDeviceGroup/1.0.0/)                         | Th | Th | Ka | Th | /  |  K  |
| [/add-target-firmware](./addTargetFirmware/1.0.0/)                                            | Th | Th |    | Th | Th |  K  |
| [/update-target-firmware](./updateTargetFirmware/1.0.0/)                                      | Th | Th |    | Th | Th |  K  |
| [/delete-target-firmware](./deleteTargetFirmware/1.0.0/)                                      | Th | Th | Ka | Th | Th |  K  |

## Categorizing individual devices into device groups (Planning)

### Preparing devices  

Solved by functions.

### Categorizing individual devices into device groups

| Service                                                                        | 1  | 2  | 5  | 3  | 4  | 5  |
| ------------------------------------------------------------------------------ | -- | -- | -- | -- | -- | -- |
| [/list-existing-devices](./listExistingDevices/1.0.0/)                         | Th | Th | Ka | Th | /  |  K  |
| [/provide-existing-device](./provideExistingDevice/1.0.0/)                     | Th | Th |    | Th | /  |  K  |
| [/list-device-groups-without-devices](./listDeviceGroupsWithoutDevices/1.0.0/) | Th | Th | Ka | Th | /  |  K  |
| [/add-devices-to-device-group](./addDevicesToDeviceGroup/1.0.0/)               | Th | Th | Ka | Th | Th |  K  |
| [/remove-devices-from-device-group](./removeDevicesFromDeviceGroup/1.0.0/)     | Th | Th | Ka | Th | Th |  K  |

## Administrative

### Kicking-off application

| Service                                  | 1  | 2  | 5  | 3  | 4  | 5  |
| ---------------------------------------- | -- | -- | -- | -- | -- | -- |
| [/embedYourself](./embedYourself/1.0.0/) | Th | Th |    | Th | /  |    |

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
