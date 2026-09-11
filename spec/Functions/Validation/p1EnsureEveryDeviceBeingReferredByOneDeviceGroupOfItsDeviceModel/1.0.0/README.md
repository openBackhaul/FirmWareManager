# p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel

Every Device referencing an existing DeviceModel must be referred by exactly one DeviceGroup of that DeviceModel.
Every Device referencing an undocumented DeviceModel must not be referred by any DeviceGroup.  

## Diagram

<p align="center">
  <img src="./p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel.png" alt="p1EnsureEveryDeviceBeingReferredByOneDeviceGroupOfItsDeviceModel diagram" width="400" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

| Code | Message                                                                      |
|------|------------------------------------------------------------------------------|
|      | DeviceGroup referencing a non-existing DeviceModel                           |
|      | Device referenced by multiple DeviceGroups                                   |
|      | Device not referred by any DeviceGroup of its DeviceModel                    |

## Parameters

./.  

## NPM Module

[mw-sdn-p1-ensure-every-device-being-referred-by-one-device-group-of-its-device-model](https://www.npmjs.com/package/mw-sdn-p1-ensure-every-device-being-referred-by-one-device-group-of-its-device-model)  
