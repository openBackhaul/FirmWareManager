# p1InstantiateDevice

Funktion wird regelmäßig durch den Pulser aufgerufen.  
Ermittelt Devices, die in OperationalDS aber nicht in RunningDS existieren.  
Neue Devices werden in RunningDS instanziiert.  
Falls das DeviceModel zum deviceModel des neuen Devices existiert:  
\- Eine Referenz wird in der default DeviceGroup des entsprechenden DeviceModels erstellt.  
\- Die targetFirmwareList der DeviceGroup wird auf die firmwareList des Devices übertragen.  
