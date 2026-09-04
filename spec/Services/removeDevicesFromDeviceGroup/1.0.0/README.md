# removeDevicesFromDeviceGroup

Removes the given mountNames from the device list of the given DeviceGroup (must not be default DeviceGroup).  
Appends them to the device list of the default DeviceGroup of the same deviceModel.  
Updates the firmwareList of the given Devices according to the targetFirmwareList of the default DeviceGroup.  

Consequences: The target firmware of the default DeviceGroup will be attempted to be loaded onto the devices and activated.  

## Diagram

<p align="center">
  <img src="./removeDevicesFromDeviceGroup.png" alt="removeDevicesFromDeviceGroup diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

| Code | Message                                                                                                  |
|------|----------------------------------------------------------------------------------------------------------|
|      | Referenced object does not exist                                                                         |
|      | Cannot remove Devices from default DeviceGroup                                                           |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
