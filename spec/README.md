# FirmWareManager Specification

## Design Aspects

External design aspects:  

- [Integration with Tools](https://github.com/openBackhaul/_FirmwareManagement/tree/develop/components/)

Internal design aspects:  

- [AutomationArchitecture](./Functions/diagrams/AutomationArchitecture/AutomationArchitecture.png)
- [Information Structure](./additionalDocumentation/InformationStructure/)
- [User Stories](./additionalDocumentation/UserStories/)

## Detailed Specification

### API

#### ServiceList

- **Documenting firmware approvals (Engineering)**
  - Preparing servers
    - [/list-existing-servers](./Services/listExistingServers/1.0.0/)
    - [/create-or-update-server](./Services/createOrUpdateServer/1.0.0/)
    - [/delete-server](./Services/deleteServer/1.0.0/)
  - Preparing firmware resources
    - [/list-existing-firmware-resources](./Services/listExistingFirmwareResources/1.0.0/)
    - [/create-or-update-firmware-resource](./Services/createOrUpdateFirmwareResource/1.0.0/)
    - [/delete-firmware-resource](./Services/deleteFirmwareResource/1.0.0/)
  - Preparing device models
    - [/list-existing-device-models](./Services/listExistingDeviceModels/1.0.0/)
    - [/create-device-model](./Services/createDeviceModel/1.0.0/)
    - [/delete-device-model](./Services/deleteDeviceModel/1.0.0/)
  - Documenting firmware approvals
    - [/list-existing-firmware-approvals](./Services/listExistingFirmwareApprovals/1.0.0/)
    - [/add-firmware-approval](./Services/addFirmwareApproval/1.0.0/)
    - [/remove-firmware-approval](./Services/removeFirmwareApproval/1.0.0/)

- **Preparing device groups and initiating firmware roll-out (Operations)**
  - Preparing device groups
    - [/list-existing-device-groups](./Services/listExistingDeviceGroups/1.0.0/)
    - [/create-or-update-device-group](./Services/createOrUpdateDeviceGroup/1.0.0/)
    - [/delete-device-group](./Services/deleteDeviceGroup/1.0.0/)
  - Initiate firmware roll-out
    - [/list-target-firmware](./Services/listTargetFirmware/1.0.0/)
    - [/add-target-firmware](./Services/addTargetFirmware/1.0.0/)
    - [/delete-target-firmware](./Services/deleteTargetFirmware/1.0.0/)

- **Categorizing individual devices into device groups (Planning)**
  - Preparing devices
    (solved by function)
  - Categorizing individual devices into device groups
    - [/list-existing-devices](./Services/listExistingDevices/1.0.0/)
    - [/add-device-to-device-group](./Services/addDeviceToDeviceGroup/1.0.0/)
    - [/remove-device-from-device-group](./Services/removeDeviceFromDeviceGroup/1.0.0/)

- **Basic**
  - Kicking-off application
    - [/embedYourself](./Services/embedYourself/1.0.0/)
  - Configuring application
    - t.b.d.

#### ProfileList and ProfileInstanceList

  _[do we still need this?]_  

#### ForwardingList

  _[do we still need this?]_

#### Open API specification (Swagger)

  [FirmWareManager](./FirmWareManager.yaml)  

#### CONFIGfile (JSON)

  [FirmWareManager+config](./FirmWareManager+config.json)  

### Functions

#### Administrative

- p1ManageFirmware  
  Basic process started by embedYourself  

- p1LoadParameters  

- p1ResolveEsAddress  
  For storing StartupDS (persistent copy of RunningDS)  

- p1UpdateMwdiReplica  
  _[if MWDI replication is used for measuring]_  

- p1InitKafka  
  _[if Kafka is used for error reporting]_  

- p1TransmittingKafka  
  _[if Kafka is used for error reporting]_  

#### Interpretation

#### Validation

#### Measurement

- p2LoadRawCc  

- p1FieldsFilter  

#### Monitoring

#### Implementation

### Most relevant Data Structures

#### Internal Data Structures

#### Output Formats
