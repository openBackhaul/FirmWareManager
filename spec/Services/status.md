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

| Service                                                             | 1  | 2  | 3  | 4  | 5  |
| ------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-servers](./Services/listExistingServers/1.0.0/)     | Th | Th | Th | Th |  |
| [/create-or-update-server](./Services/createOrUpdateServer/1.0.0/)  | Th 1) | Th 1) | Th 1) | Th |  |
| [/delete-server](./Services/deleteServer/1.0.0/)                    | Th 1) | Th 1) | Th 1) | Th |  |

### Preparing firmware resources

| Service                                                                                 | 1  | 2  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-firmware-resources](./Services/listExistingFirmwareResources/1.0.0/)    | Th | Th | Th | Th |  |
| [/create-or-update-firmware-resource](./Services/createOrUpdateFirmwareResource/1.0.0/) | Th 1) 2) | Th 1) |  |  |  |
| [/delete-firmware-resource](./Services/deleteFirmwareResource/1.0.0/)                   | Th 1) | Th 1) |  |  |  |

### Preparing device models

| Service                                                                     | 1  | 2  | 3  | 4  | 5  |
| --------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-device-models](./Services/listExistingDeviceModels/1.0.0/)  | Th | Th |  |  |  |
| [/create-device-model](./Services/createDeviceModel/1.0.0/)                 | Th 1) | Th 1) |  |  |  |
| [/delete-device-model](./Services/deleteDeviceModel/1.0.0/)                 | Th 1) |  |  |  |  |

### Documenting firmware approvals

| Service                                                                                 | 1  | 2  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-firmware-approvals](./Services/listExistingFirmwareApprovals/1.0.0/)    | Th | Th |  |  |  |
| [/add-firmware-approval](./Services/addFirmwareApproval/1.0.0/)                         | Th 1) |  |  |  |  |
| [/remove-firmware-approval](./Services/removeFirmwareApproval/1.0.0/)                   | Th 1) |  |  |  |  |

## Preparing device groups and initiating firmware roll-out (Operations)

### Preparing device groups

| Service                                                                       | 1  | 2  | 3  | 4  | 5  |
| ----------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-device-groups](./Services/listExistingDeviceGroups/1.0.0/)    | Th |  |  |  |  |
| [/create-or-update-device-group](./Services/createOrUpdateDeviceGroup/1.0.0/) | Th 1) |  |  |  |  |
| [/delete-device-group](./Services/deleteDeviceGroup/1.0.0/)                   | Th 1) |  |  |  |  |

### Initiate firmware roll-out

| Service                                                           | 1  | 2  | 3  | 4  | 5  |
| ----------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/provide-existing-device-group](./Services/provideExistingDeviceGroup/1.0.0/)    | Th |  |  |  |  |
| [/add-or-update-target-firmware](./Services/addOrUpdateTargetFirmware/1.0.0/)       | Th 1) |  |  |  |  |
| [/delete-target-firmware](./Services/deleteTargetFirmware/1.0.0/) | Th 1) |  |  |  |  |

## Categorizing individual devices into device groups (Planning)

### Preparing devices  

Solved by functions.

### Categorizing individual devices into device groups

| Service                                                                           | 1  | 2  | 3  | 4  | 5  |
| --------------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/list-existing-devices](./Services/listExistingDevices/1.0.0/)                   | Th |  |  |  |  |
| [/add-devices-to-device-group](./Services/addDevicesToDeviceGroup/1.0.0/)           | ! |  |  |  |  |
| [/remove-devices-from-device-group](./Services/removeDevicesFromDeviceGroup/1.0.0/) | Th 1) |  |  |  |  |

## Basic

### Kicking-off application

| Service                                                                     | 1  | 2  | 3  | 4  | 5  |
| --------------------------------------------------------------------------- | -- | -- | -- | -- | -- |
| [/embedYourself](./Services/embedYourself/1.0.0/)                           |  |  |  |  |  |

---

---

  > 1\) Error Codes not yet defined.  
  > 2\) Sollten die Attribute bei Create erzwungen werden?
