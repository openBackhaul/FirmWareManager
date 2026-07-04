# FirmWareManager

Autonomously manages the firmware on the microwave devices in the mobile backhaul network  

## Location

The FirmWareManager belongs to the Automated Network Management.  

## Description

The FWM is an autonomous maintenance function that ensures that the generically specified firmware version is active on all individual devices.  
It follows the design pattern for AutomationApplications.  

## Relevance

The FWM performs the sole domain responsible for managing firmware on the microwave devices.  
In case of a failure, the network stops following the specifications set by Engineering, Operations, and Planning.  

## Resources

- [Specification](./spec/)
- [TestSuite](./testing/)
- [Implementation](./server/)

## Comments

This application is part of the ComarchOSS replacement project, respectively its [_FirmwareManagement](https://github.com/openBackhaul/_FirmwareManagement) module.  
