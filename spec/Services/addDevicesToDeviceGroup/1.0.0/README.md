# addDevicesToDeviceGroup

References to the given Devices get transferred from their current DeviceGroup to the given DeviceGroup.  
Transfer to given DeviceGroup includes updating the firmwareList of the transferred Devices.  

Consequences: The target firmware of the given DeviceGroup will be attempted to be loaded onto the devices and activated.  

## Diagram

<p align="center">
  <img src="./addDevicesToDeviceGroup.png" alt="addDevicesToDeviceGroup diagram" width="400" />
</p>

## Interface

Please find a detailed description of the interface in the [openAPI specification](../../../FirmWareManager.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                                                           |
|-|------|-------------------------------------------------------------------|
|1|      | Referenced object does not exist                                  |
|2|      | Referenced device is unknown                                      |
|3|      | Referenced device of the wrong device type                        |
|4|      | _[provided by ValidationFunctions]_                               |

## Parameters

./.  

## NPM Module

[onf-core-model-ap](https://www.npmjs.com/package/onf-core-model-ap) to be complemented.  
