# FirmWareManager Specification

## Design Aspects

The documents linked in this section are NOT part of the official specification.  
They might be helpful for understanding the overall design and functionality of the FirmWareManager, but they weren't updated regularly during the specification process.  

External design aspects:  

- [Integration with Tools](https://github.com/openBackhaul/_FirmwareManagement/tree/develop/components/)

Internal design aspects:  

- [AutomationArchitecture](./Functions/diagrams/AutomationArchitecture/AutomationArchitecture.png)
- [User Stories](./additionalDocumentation/UserStories/)
- [Concepts of Target Firmware](./additionalDocumentation/ConceptsOfTargetFirmware/)
- [Measurement Overview](./additionalDocumentation/Measurement/measurement_overview.png)

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
    - [/list-hardware-extraction-functions](./Services/listHardwareExtractionFunctions/1.0.0/)
    - [/list-firmware-extraction-functions](./Services/listFirmwareExtractionFunctions/1.0.0/)
    - [/create-device-model](./Services/createDeviceModel/1.0.0/)
    - [/delete-device-model](./Services/deleteDeviceModel/1.0.0/)
    - [/update-device-model](./Services/updateDeviceModel/1.0.0/)
  - Documenting firmware approvals
    - [/list-device-models-without-approvals](./Services/listDeviceModelsWithoutApprovals/1.0.0/)
    - [/list-existing-firmware-approvals](./Services/listExistingFirmwareApprovals/1.0.0/)
    - [/add-firmware-approval](./Services/addFirmwareApproval/1.0.0/)
    - [/withdraw-firmware-approval](./Services/withdrawFirmwareApproval/1.0.0/)

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
    - /list-existing-es-addresses
    - /update-es-address
  - Analyzing historical errors
    - /list-historical-errors
  - Administrate Pulsers
    - /list-existing-pulsers
    - /update-pulser

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

- Preparing devices
  - [p1CreateDevices](./Functions/Interpretation/p1CreateDevices/1.0.0/)
  - [p1DeleteDevices](./Functions/Interpretation/p1DeleteDevices/1.0.0/)

- Purging DeviceGroups
  - [p1PurgeDeviceGroups](./Functions/Interpretation/p1PurgeDeviceGroups/1.0.0/)

#### Validation

- _[there are four definitions, but in an early stage]_

#### Measurement

- [p1MeasureDomain](./Functions/Measurement/p1MeasureDomain/1.0.0/)
- [p1ListUpdatedCcs](./Functions/Measurement/p1ListUpdatedCcs/1.0.0/)
- [p1UpdateDevice](./Functions/Measurement/p1UpdateDevice/1.0.0/)
- [p1UpdateHw](./Functions/Measurement/p1UpdateHw/1.0.0/)
- [p1UpdateFw](./Functions/Measurement/p1UpdateFw/1.0.0/)
- [p1ExtractSingleFirmware](./Functions/Measurement/p1ExtractSingleFirmware/1.0.0/)
- [p1ExtractSeparatedNpuRauToo](./Functions/Measurement/p1ExtractSeparatedNpuRauToo/1.0.0/)
- [p1ExtractSeparatedAppToo](./Functions/Measurement/p1ExtractSeparatedAppToo/1.0.0/)
- [p1ExtractSeparatedBootWebOduToo](./Functions/Measurement/p1ExtractSeparatedBootWebOduToo/1.0.0/)

#### Monitoring

- _[future work]_

#### Implementation

- _[future work]_

#### Administrative

- Kicking-off application
  - [p1ManageFirmware](./Functions/Administrative/p1ManageFirmware/1.0.0/)  
  - [p1LoadEsAddresses](./Functions/Administrative/p1LoadEsAddresses/1.0.0/)
  - [p1LoadParameters](./Functions/Administrative/p1LoadParameters/)  
  - [p1ResolveEsAddress](./Functions/Administrative/p1ResolveEsAddress/)  
  - [p1CreateDcFromStartupDS](./Functions/Administrative/p1CreateDcFromStartupDS/1.0.0/)

- CyclicProcesses
  - [p1Pulser](./Functions/Administrative/p1Pulser/1.0.0/)
  - [p1TrimHistoricalErrorList](./Functions/Administrative/p1TrimHistoricalErrorList/1.0.0/)
