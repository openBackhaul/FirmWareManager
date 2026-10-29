# FirmWareManager Specification

## Services

### High Level Specification

- [serviceList](./FirmWareManager+services.yaml)
- [forwardingList](./FirmWareManager+forwardings.yaml)
- [profileList](./FirmWareManager+profiles.yaml)
- [profileInstanceList](./FirmWareManager+profileInstances.yaml)

### Open API specification (Swagger)

- [FirmWareManager v1.0](./FirmWareManager.yaml)  

### Service Modules

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
    - [/list-existing-es-addresses](./Services/listExistingEsAddresses/1.0.0/)
    - [/update-es-address](./Services/updateEsAddress/1.0.0/)
  - Analyzing historical errors
    - [/list-historical-errors](./Services/listHistoricalErrors/1.0.0/)
  - Administrate Pulsers
    - [/list-existing-pulsers](./Services/listExistingPulsers/1.0.0/)
    - [/update-pulser](./Services/updatePulser/1.0.0/)

## Functions

### Administrative

- Ramp-up application
  - [p1ManageFirmware](./Functions/Administrative/p1ManageFirmware/1.0.0/)  
  - [p1LoadEsAddresses](./Functions/Administrative/p1LoadEsAddresses/1.0.0/)
  - [p1LoadParameters](./Functions/Administrative/p1LoadParameters/)  
  - [p1ResolveEsAddress](./Functions/Administrative/p1ResolveEsAddress/)  
  - [p1CreateDcFromStartupDS](./Functions/Administrative/p1CreateDcFromStartupDS/1.0.0/)

- CyclicProcesses
  - [p1Pulser](./Functions/Administrative/p1Pulser/1.0.0/)
  - [p1TrimHistoricalErrorList](./Functions/Administrative/p1TrimHistoricalErrorList/1.0.0/)

### Interpretation

- Preparing devices
  - [p1CreateDevices](./Functions/Interpretation/p1CreateDevices/1.0.0/)
  - [p1DeleteDevices](./Functions/Interpretation/p1DeleteDevices/1.0.0/)

- Purging DeviceGroups
  - [p1PurgeDeviceGroups](./Functions/Interpretation/p1PurgeDeviceGroups/1.0.0/)

### Validation

- _[future work]_

### Measurement

- [p1MeasureDomain](./Functions/Measurement/p1MeasureDomain/1.0.0/)
- [p1ListUpdatedCcs](./Functions/Measurement/p1ListUpdatedCcs/1.0.0/)
- [p1MeasureDevice](./Functions/Measurement/p1MeasureDevice/1.0.0/)
- [p1MeasureHw](./Functions/Measurement/p1MeasureHw/1.0.0/)
- [p1MeasureFw](./Functions/Measurement/p1MeasureFw/1.0.0/)
- [p1ExtractSingleFirmware](./Functions/Measurement/p1ExtractSingleFirmware/1.0.0/)
- [p1ExtractSeparatedNpuRauToo](./Functions/Measurement/p1ExtractSeparatedNpuRauToo/1.0.0/)
- [p1ExtractSeparatedAppToo](./Functions/Measurement/p1ExtractSeparatedAppToo/1.0.0/)
- [p1ExtractSeparatedBootWebOduToo](./Functions/Measurement/p1ExtractSeparatedBootWebOduToo/1.0.0/)

### Monitoring

- _[future work]_

### Implementation

- _[future work]_

## Initial Data

### configFile

- [configFile](./FirmWareManager+config.json)

### Domain

- [UML source](./InformationStructure/Schema/)
- [openApi specification](./InformationStructure/Schema/openApiSpec/informationStructure.yaml)
- [initial DomainController](./InformationStructure/initialData/domain-controller.json)

## Further Design Aspects

The documents linked in this section are NOT part of the official specification.  
They might be helpful for understanding the overall design and functionality of the FirmWareManager, but they weren't updated regularly during the specification process.  

External design aspects:  

- [Integration with Tools](https://github.com/openBackhaul/_FirmwareManagement/tree/develop/components/)

Internal design aspects:  

- [AutomationArchitecture](./Functions/diagrams/AutomationArchitecture/AutomationArchitecture.png)
- [High-Level Sequence Diagram](./diagrams/hl_sequence.png)
- [User Stories](./additionalDocumentation/UserStories/)
- [Concepts of Target Firmware](./additionalDocumentation/ConceptsOfTargetFirmware/)
- [Measurement Overview](./additionalDocumentation/Measurement/measurement_overview.png)
