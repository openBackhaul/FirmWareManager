# p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware

Every combination of firmwareResourceName and firmwareResourceVersion referenced in firmwareList at any Device must be approved for the DeviceModel of that Device.  

## Diagram

<p align="center">
  <img src="./p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware.png" alt="p1EnsureEveryDeviceReferencingExclusivelyApprovedFirmware diagram" width="400" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

| Code | Message                                                                                                  |
|------|----------------------------------------------------------------------------------------------------------|
|      | Referenced object does not exist                                                                         |
|      | Referenced device is unknown                                                                             |
|      | Referenced device of the wrong device type                                                               |

## Parameters

./.  

## NPM Module

[mw-sdn-p1-ensure-every-device-referencing-exclusively-approved-firmware](https://www.npmjs.com/package/mw-sdn-p1-ensure-every-device-referencing-exclusively-approved-firmware)  
