# deleteDeviceGroup

Deletes a DeviceGroup.  
It does not delete default DeviceGroups, but returns the deviceModelName in that case.  
If the to be deleted DeviceGroup is referencing any Devices, these references get transferred to the default DeviceGroup of the deviceModel, before the deletion is executed.  

## Diagram

<p align="center">
  <img src="./deleteDeviceGroup.png" alt="deleteDeviceGroup diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

| Code | Message                                           |
|------|---------------------------------------------------|
|      | To be deleted DeviceGroup is default DeviceGroup  |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
