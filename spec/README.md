# FirmWareManager Specification

## Design Aspects

External design aspects:  

- [Integration with Tools](https://github.com/openBackhaul/_FirmwareManagement/tree/develop/components/)

Internal design aspects:  

- [AutomationArchitecture](./Functions/diagrams/AutomationArchitecture/AutomationArchitecture.png)
- [Information Structure](./additionalDocumentation/InformationStructure/)

## Detailed Specification

### API

- ServiceList  
  _[do we still need this?]_  

- ProfileList and ProfileInstanceList  
  _[do we still need this?]_  

- ForwardingList  
  _[do we still need this?]_  

- Open API specification (Swagger)  
  [FirmWareManager](./FirmWareManager.yaml)  

- CONFIGfile (JSON)  
  [FirmWareManager+config](./FirmWareManager+config.json)  

### Services

#### Basic

- [embedYourself](./Services/embedYourself/1.0.0/)

#### Approval Management

#### Device Group Management

#### Device Management

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
