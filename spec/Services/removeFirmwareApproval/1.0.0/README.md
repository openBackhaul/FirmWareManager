# removeFirmwareApproval

Deletes a FirmwareApproval.  
If any DeviceModel is still referencing the FirmwareApproval, the deletion will be aborted.  
A list of DeviceModels will be returned in that case.  

## Diagram

<p align="center">
  <img src="./removeFirmwareApproval.png" alt="removeFirmwareApproval diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

| Code | Message                                                                                                  |
|------|----------------------------------------------------------------------------------------------------------|
|      | To be deleted object still referenced                                                                    |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
