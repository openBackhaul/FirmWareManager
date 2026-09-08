# p1PurgeDeviceGroup

Funktion wird regelmäßig durch den Pulser aufgerufen.  
Sie überprüft für alle DeviceGroups, ob das DeviceGroup::purgeDate überschritten ist.  
Falls das DeviceGroup::purgeDate überschritten ist, wird der Service deleteDeviceGroup ausgelöst.  
