# deleteDeviceGroup

Deletes a DeviceGroup.  
It does not delete default DeviceGroups, but returns the deviceModelName in that case.  
If the to be deleted DeviceGroup is referencing any Devices, these references get transferred to the default DeviceGroup of the same deviceModel.  
Transfer to default DeviceGroup includes updating the firmwareList of the transferred Devices.  

Consequences: Devices transferred to the default DeviceGroup, might undergo firmware download and activation.  

Dependencies: The p1PurgeDeviceGroups function depends on calling this service.  

## Diagram

<p align="center">
  <img src="./deleteDeviceGroup.png" alt="deleteDeviceGroup diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                                                           |
|-|------|-------------------------------------------------------------------|
|1|      | Referenced object does not exist                                  |
|2|      | Deletion denied as it is a default DeviceGroup                    |
|3|      | _[provided by ValidationFunctions]_                               |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
