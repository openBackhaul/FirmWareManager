# removeFirmwareApproval

Deletes a firmware approval.  
If the approved firmware is still referenced as target firmware by any DeviceGroup, the deletion will be aborted.  
A list of DeviceGroups that are still referencing the formerly approved firmware will be returned in that case.  

  > Service must be changed:
  >
  > - Withdrawing some approval must result in immediate stopping of the roll-out process
  > - Instead of blocking targetFirmware from removing the approval, withdrawn firmware must be deleted from DeviceGroup::targetFirmware and Device::firmwareList
  > - Consider renaming removeFirmwareApproval -> withdrawFirmwareApproval
  >

## Diagram

<p align="center">
  <img src="./removeFirmwareApproval.png" alt="removeFirmwareApproval diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                                                           |
|-|------|-------------------------------------------------------------------|
|1|      | Referenced object does not exist                                  |
|2|      | To be deleted object still referenced                             |
|3|      | _[provided by ValidationFunctions]_                               |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
