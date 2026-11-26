# addTargetFirmware

Adds a FirmwareResource to one of the target firmware lists of the given DeviceGroup.  
Adds the same firmware to the respective firmware list of all Devices referenced by the given DeviceGroup.  

Consequences: The firmware will be attempted to be loaded onto the devices.  

Changes from 1.0 to 2.0:  

- The service now considers all firmwareStructure specific target firmware lists.

## Diagram

<p align="center">
  <img src="./addTargetFirmware.png" alt="addTargetFirmware diagram" width="250" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                             |
|-|------|-------------------------------------|
|1| 404  | Not Found                           |
|2| 409  | Conflict                            |
|3| 422  | Unprocessable Content               |
|4| 422  | Unprocessable Content               |
|5| 462  | _[provided by ValidationFunctions]_ |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
