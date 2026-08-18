# Hardware Firmware Dependencies

    ! This document is not part of the specification !

    Im nachfolgenden Dokument wurde versucht einen Ansatz zur Dokumentation der Abhängigkeiten zwischen Hardwarekomponenten und Firmwarekomponenten zu entwickeln.

    Dieser Ansatz wurde jedoch verworfen, da er möglicherweise zu einer unnötig generischen/komplizierten InformationStructure führen könnte.

    Nun wurde zunächst für einen einfachen Fall designt, um anschließend für die komplexeren Fälle zu erweitern, sobald deren Anforderungen klarer sind.

    Dieses Dokument dient potentiell als Reservoir für die zukünftige Erweiterung auf komplexere Fälle.

## DeviceModelTemplate

The device internal hardware structure and particularly the firmware structure is not harmonized across the different device models.  

There are dependencies between hardware components and firmware components.  
These dependencies are hard to describe, because the structure of the hardware and even the categorization of the components is varying.  

Nevertheless, it is necessary to document these dependencies.  
They are required for validating the bundles of firmware components at a device group definition, and for identifying the relevant firmware components while reading from the device.  

Important to understand:  
The DeviceModelTemplate does not describe a valid compositions of item codes.  
It describes the structure of the device model in regards of hardware component categories that create dependencies with firmware component classes.

Example:
In a hypothetical device model, the IDU needs a firmware component and the ODU needs a firmware component, too. The IDU can be operated with diverse ODU types. The DeviceModelTemplate is required to describe **in the device's language** that a valid firmware bundle for this device model needs to contain a firmware component for the IDU and a firmware component for the ODU.  

The ONF information model provides an attribute for categorizing hardware component types (EquipmentStructure::category).  

Unfortunately, different values are used for identifying the same or similar hardware component category across different device models.  
E.g., the IDU might be identified as "STAND_ALONE_UNIT", "SUBRACK" or "CENTRAL_PROCESSING_UNIT". Furthermore, inside modern devices the "FULL_OUTDOOR_UNIT" might serve the same purpose.  

It is of fundamental importance that the DeviceModelTemplate documents the value of the category attribute of those hardware components that create a dependency to one or several firmware components.  

The ONF information model provides an attribute for categorizing firmware components (FirmwareComponentCapability::firmwareComponentClass).  

Unfortunately, different values are used for identifying the same or similar firmware component categories across different device models.  
E.g., the ODU firmware might be identified as "PACKAGE" or "APPLICATION_SOFTWARE".  

It is of fundamental importance that the DeviceModelTemplate documents the class of firmware component that is required for a specific hardware component category by the value of the firmwareComponentClass attribute.  

Follow up on the former example:  
The DeviceModelTemplate documents that the same hypothetical device model is composed from firmware relevant hardware components of categories "STAND_ALONE_UNIT" and "OUTDOOR_UNIT". The hardware component of category "STAND_ALONE_UNIT" requires a firmware component of class "PACKAGE" and the hardware component of category "OUTDOOR_UNIT" requires a firmware component of class "APPLICATION_SOFTWARE".  

## Relevant Device Information

### mountName

The FWM has to learn the devices in the network from somewhere.  

Assumptions:  
\- Planning data is not useful, because it will always differ from the actual network.  

Design decision:  
\- The FWM is learning every new device by receiving its data from the MWDI.  
\- Existing categorizations of devices into device groups shall not be lost, because of temporary unavailability of the DCN.  
\- The FWM is **not** deleting any device from its data store, because of not receiving any new data from the MWDI.  

This will lead to an increasing number and share of unsuccessful attempts to download and activate some firmware on devices that are no longer available in the network.  

The mountName is retrieved from the ControlConstructPac::externalLabel attribute.  

### firmwareList

The ONF information model provides a harmonized information structure for firmware.  
Nevertheless, the structure of firmware differs significantly by the implementations of the individual device model.  

In general the ONF information model allows to distinguish between firmware packages and firmware components that are specific to some hardware component.  
It also allows indicating, whether some firmware component can be activated individually.  

Assumptions:  
\- Active management of firmware can be limited to those components that can be activated individually.  

Design decision:  
\- Throughout the entire FWM application, dealing with firmware is limited to those firmware components that can be activated individually (individualActivationIsAvail==true).  

### deviceModelName

The deviceModelName is considered to be the minimum criteria for assessing firmware compatibility.  
It is retrieved from the ControlConstructPac::deviceModelName attribute.  

### actualEquipmentTypeList

The approval of some firmware components might be restricted to specific hardware components.  
Checking for the firmwareList to match the actual hardware of the device must be part of the validation of the CandidateDS.  

Design decision:  
\- The actualEquipmentTypeList is to be filled from the ...  

_It is currently not clear with which values the approvals could be properly expressed and which attribute to be retrieved from the device.  
Completeness of the content of the EquipmentType::typeName attribute might fall short the need.  
Number of different entries in Equipment::ManufacturedThing::EquipmentType::modelIdentifier might be too high to be kept up-to-date in the approvals._  
