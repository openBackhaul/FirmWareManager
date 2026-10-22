# Status of Service Specifications

This is a temporary administrative document for keeping track of the status of the services specifications.  
It is not part of the specification itself.  
It shall be deleted once the service specifications are complete.  

1 = "Sequence diagram"  
2 = "Readme"  
3 = "Review"
4 = "interface.yaml"  
5 = "variables.yaml"  
6 = "Review"
7 = "TestCaseCollection"

Ka = Katharina  
Th = Thorsten

## Documenting firmware approvals (Engineering)

### Preparing servers

| Service                                                    | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ---------------------------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-existing-servers](./listExistingServers/1.0.0/)     | Th | Th | Ka | Th | /  | Ka |    |  2  |
| [/list-incomplete-servers](./listIncompleteServers/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  2  |
| [/create-server](./createServer/1.0.0/)                    | Th | Th | Ka | Th | /  | Ka |    |  2  |
| [/update-server](./updateServer/1.0.0/)                    | Th | Th | Ka | Th | /  | Ka |    |  2  |
| [/delete-server](./deleteServer/1.0.0/)                    | Th | Th | Ka | Th | Th | Ka |    |  2  |

### Preparing firmware resources

| Service                                                                     | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| --------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-existing-firmware-resources](./listExistingFirmwareResources/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  2  |
| [/create-firmware-resource](./createFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  2  |
| [/update-firmware-resource](./updateFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  2  |
| [/delete-firmware-resource](./deleteFirmwareResource/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  2  |

### Preparing device models

| Service                                                                         | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-existing-device-models](./listExistingDeviceModels/1.0.0/)               | Th | Th | Ka | Th | /  | Ka |    |  3  |
| [/list-unknown-device-models](./listUnknownDeviceModels/1.0.0/)                 | Th | Th | Ka | Th | /  | Ka |    |  3  |
| [/list-hardware-extraction-functions](./listHardwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  | Ka |    |  3  |
| [/list-firmware-extraction-functions](./listFirmwareExtractionFunctions/1.0.0/) | Th | Th |    | Th | /  | Ka |    |  3  |
| [/create-device-model](./createDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th | Ka |    |  3  |
| [/update-device-model](./updateDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th | Ka |    |  3  |
| [/delete-device-model](./deleteDeviceModel/1.0.0/)                              | Th | Th |    | Th | Th | Ka |    |  3  |

### Documenting firmware approvals

| Service                                                                            | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ---------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-device-models-without-approvals](./listDeviceModelsWithoutApprovals/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  3  |
| [/list-existing-firmware-approvals](./listExistingFirmwareApprovals/1.0.0/)        | Th | Th | Ka | Th | Th | Ka |    |  3  |
| [/add-firmware-approval](./addFirmwareApproval/1.0.0/)                             | Th | Th |    | Th | Th | Ka |    |  3  |
| [/withdraw-firmware-approval](./withdrawFirmwareApproval/1.0.0/)                   | Th | Th |    | Th | Th | Ka |    |  3  |

## Preparing device groups and initiating firmware roll-out (Operations)

### Preparing device groups

| Service                                                           | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ------------------------------------------------------------------| -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-existing-device-groups](./listExistingDeviceGroups/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  4  |
| [/create-device-group](./createDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  4  |
| [/update-device-group](./updateDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  4  |
| [/delete-device-group](./deleteDeviceGroup/1.0.0/)                | Th | Th | Ka | Th | Th | Ka |    |  4  |

### Initiate firmware roll-out

| Service                                                                                       | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| --------------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-device-groups-without-target-firmware](./listDeviceGroupsWithoutTargetFirmware/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  4  |
| [/provide-existing-device-group](./provideExistingDeviceGroup/1.0.0/)                         | Th | Th | Ka | Th | /  | Ka |    |  4  |
| [/add-target-firmware](./addTargetFirmware/1.0.0/)                                            | Th | Th |    | Th | Th | Ka |    |  4  |
| [/update-target-firmware](./updateTargetFirmware/1.0.0/)                                      | Th | Th |    | Th | Th | Ka |    |  4  |
| [/delete-target-firmware](./deleteTargetFirmware/1.0.0/)                                      | Th | Th | Ka | Th | Th | Ka |    |  4  |

## Categorizing individual devices into device groups (Planning)

### Preparing devices  

Solved by functions.

### Categorizing individual devices into device groups

| Service                                                                        | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ------------------------------------------------------------------------------ | -- | -- | -- | -- | -- | -- | -- | --- |
| [/list-existing-devices](./listExistingDevices/1.0.0/)                         | Th | Th | Ka | Th | /  | Ka |    |  4  |
| [/provide-existing-device](./provideExistingDevice/1.0.0/)                     | Th | Th |    | Th | /  | Ka |    |  4  |
| [/list-device-groups-without-devices](./listDeviceGroupsWithoutDevices/1.0.0/) | Th | Th | Ka | Th | /  | Ka |    |  4  |
| [/add-devices-to-device-group](./addDevicesToDeviceGroup/1.0.0/)               | Th | Th | Ka | Th | Th | Ka |    |  4  |
| [/remove-devices-from-device-group](./removeDevicesFromDeviceGroup/1.0.0/)     | Th | Th | Ka | Th | Th | Ka |    |  4  |

## Administrative

### Kicking-off application

| Service                                  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ---------------------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| [/embedYourself](./embedYourself/1.0.0/) | Th | Th |    | Th | /  |    |    |  1  |

### Administrate ElasticSearch indexes

| Service                      | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ---------------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| /list-existing-es-addresses  |    |    |    |    |    |    |    |     |
| /update-es-address           |    |    |    |    |    |    |    |     |

### Analyzing historical errors

| Service                  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ------------------------ | -- | -- | -- | -- | -- | -- | -- | --- |
| /list-historical-errors  |    |    |    |    |    |    |    |     |

### Administrate Pulsers

| Service                | 1  | 2  | 3  | 4  | 5  | 6  | 7  | lot |
| ---------------------- | -- | -- | -- | -- | -- | -- | -- | --- |
| /list-existing-pulsers |    |    |    |    |    |    |    |     |
| /update-pulser         |    |    |    |    |    |    |    |     |
