# FirmWareManager Specification

## Design Aspects

External design aspects:  

- [Integration with Tools](https://github.com/openBackhaul/_FirmwareManagement/tree/develop/components/)

Internal design aspects:  

- [AutomationArchitecture](./Functions/diagrams/AutomationArchitecture/AutomationArchitecture.png)
- [User Stories](./additionalDocumentation/UserStories/)
- [Concepts of Target Firmware](./additionalDocumentation/ConceptsOfTargetFirmware/)

## Detailed Specification

### API

#### Open API specification (Swagger)

  [FirmWareManager](./FirmWareManager.yaml)  

#### ServiceList

- **Documenting firmware approvals (Engineering)**
  - Preparing servers
    - [/list-existing-servers](./Services/listExistingServers/1.0.0/)
    - [/list-incomplete-servers](./Services/listIncompleteServers/1.0.0/)
    - [/create-server](./Services/createServer/1.0.0/)
    - [/update-server](./Services/updateServer/1.0.0/)
    - [/delete-server](./Services/deleteServer/1.0.0/)
  - Preparing firmware resources
    - [/list-existing-firmware-resources](./Services/listExistingFirmwareResources/1.0.0/)
    - [/create-firmware-resource](./Services/createFirmwareResource/1.0.0/)
    - [/update-firmware-resource](./Services/updateFirmwareResource/1.0.0/)
    - [/delete-firmware-resource](./Services/deleteFirmwareResource/1.0.0/)
  - Preparing device models
    - [/list-existing-device-models](./Services/listExistingDeviceModels/1.0.0/)
    - [/list-unknown-device-models](./Services/listUnknownDeviceModels/1.0.0/)
    - [/create-device-model](./Services/createDeviceModel/1.0.0/)
    - [/delete-device-model](./Services/deleteDeviceModel/1.0.0/)
  - Documenting firmware approvals
    - [/list-device-models-without-approvals](./Services/listDeviceModelsWithoutApprovals/1.0.0/)
    - [/list-existing-firmware-approvals](./Services/listExistingFirmwareApprovals/1.0.0/)
    - [/add-firmware-approval](./Services/addFirmwareApproval/1.0.0/)
    - [/remove-firmware-approval](./Services/removeFirmwareApproval/1.0.0/)

- **Preparing device groups and initiating firmware roll-out (Operations)**
  - Preparing device groups
    - [/list-existing-device-groups](./Services/listExistingDeviceGroups/1.0.0/)
    - [/create-device-group](./Services/createDeviceGroup/1.0.0/)
    - [/update-device-group](./Services/updateDeviceGroup/1.0.0/)
    - [/delete-device-group](./Services/deleteDeviceGroup/1.0.0/)
  - Initiate firmware roll-out
    - [/list-device-groups-without-target-firmware](./Services/listDeviceGroupsWithoutTargetFirmware/1.0.0/)
    - [/provide-existing-device-group](./Services/provideExistingDeviceGroup/1.0.0/)
    - [/add-target-firmware](./Services/addTargetFirmware/1.0.0/)
    - [/update-target-firmware](./Services/updateTargetFirmware/1.0.0/)
    - [/delete-target-firmware](./Services/deleteTargetFirmware/1.0.0/)

- **Categorizing individual devices into device groups (Planning)**
  - Preparing devices  
    (solved by function)
  - Categorizing individual devices into device groups
    - [/list-existing-devices](./Services/listExistingDevices/1.0.0/)
    - [/provide-existing-device](./Services/provideExistingDevice/1.0.0/)
    - [/list-device-groups-without-devices](./Services/listDeviceGroupsWithoutDevices/1.0.0/)
    - [/add-devices-to-device-group](./Services/addDevicesToDeviceGroup/1.0.0/)
    - [/remove-devices-from-device-group](./Services/removeDevicesFromDeviceGroup/1.0.0/)

- **Administrative**
  - Kicking-off application
    - [/embedYourself](./Services/embedYourself/1.0.0/)
  - Administrate ElasticSearch indexes
    - [/list-existing-es-addresses](./Services/listExistingEsAddresses/1.0.0/)
    - [/update-es-address](./Services/updateEsAddress/1.0.0/)
  - Analyzing historical errors
    - [/list-historical-errors](./Services/listHistoricalErrors/1.0.0/)
  - Administrate Pulsers
    - [/list-existing-pulsers](./Services/listExistingPulsers/1.0.0/)
    - [/update-pulser](./Services/updatePulser/1.0.0/)

### Initial Data

#### configFile

- configFile (JSON)
  - [FirmWareManager+config](./InitialData/configFile/FirmWareManager+config.json)

- ProfileList and ProfileInstanceList
  - _[do we still need this?]_

- ForwardingList
  - _[do we still need this?]_

#### Domain

- Schema
  - [Information Structure](./InitialData/Domain/Schema/)

- Initial StartupDS
  - [Initial StartupDS Structure](./InitialData/Domain/Startup/)  
    Contains the configuration information that is directly attached to the DomainController and the persistent copy of the RunningDS (StartupDS).  

### Functions

#### Interpretation

- **Preparing devices**
  - [p1CreateDevices](./Functions/Interpretation/p1CreateDevices/1.0.0/)
  - [p1DeleteDevices](./Functions/Interpretation/p1DeleteDevices/1.0.0/)

- **Purging DeviceGroups**
  - [p1PurgeDeviceGroups](./Functions/Interpretation/p1PurgeDeviceGroups/1.0.0/)

#### Validation

- **Ensuring Device to DeviceGroup consistency**
  - [p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel](./Functions/Validation/p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel/1.0.0/)

- **Ensuring Device To firmware consistency**
  - [p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware](./Functions/Validation/p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware/1.0.0/)
  - [p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup](./Functions/Validation/p1EnsureEveryDeviceHasFirmwareAsTargetOfItsGroup/1.0.0/)

- **Basic**
  - [p1ValidationManager](./Functions/Validation/p1ValidationManager/1.0.0/)

#### Measurement

#### Monitoring

#### Implementation

#### Administrative

- **Kicking-off application**
  - [p1ManageFirmware](./Functions/Administrative/p1ManageFirmware/1.0.0/)  
  - [p1LoadEsAddresses](./Functions/Administrative/p1LoadEsAddresses/1.0.0/)
  - [p1LoadParameters](./Functions/Administrative/p1LoadParameters/)  
  - [p1ResolveEsAddress](./Functions/Administrative/p1ResolveEsAddress/)  
  - [p1CreateDcFromStartupDS](./Functions/Administrative/p1CreateDcFromStartupDS/1.0.0/)

- **CyclicProcesses**
  - [p1Pulser](./Functions/Administrative/p1Pulser/1.0.0/)
