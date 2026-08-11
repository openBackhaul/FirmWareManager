# NetworkControlDomain

## Relevant Operations

The following operations must be executed efficiently and fast.  

### Measurement

**Repetitions**  
The information about the device is updated in OperationalDS.  
To be executed with new information being available from the network.  

Design decision:  
\- The input interface of the DPMDP is re-used.  

This results in a frequency of 320,000 devices/day.  

### Monitoring

**Repetitions**  
Alarm list must be updated based on differences between RunningDS and OperationalDS.  

Design decisions:  
\- Comparison is not triggered by time (Pulser), but by changes in either OperationalDS or RunningDS.  
\- Comparison is limited to changed devices; its not required to compare the entire data store content.  

Re-use of the DPMDP input interface and sporadic input results in a frequency of 324,000 devices/day.  

**Processing**  
The OperationalDS might contain more information about the device than the RunningDS.  

Design decisions:  
\- The comparison is limited to checking the content of the RunningDS for contradictions with the content of the OperationalDS.  
\- Differences in some attributes (deviceModelName, actualEquipmentTypeList) lead to immediate update of the RunningDS (which might cause a need for updating the firmware attribute, too).  
\- Apart from availability of the firmware component, its activation status is also checked.

### Validation

The firmware in the CandidateDS must be validated against the approvals.  
This includes checking for compatibility with the actual hardware of the devices before transferring to RunningDS

**Repetitions**  
Changing the device group of a device requires to at least validate this device (administrative event).  
Changing the firmware at a device group requires to at least validate all devices in this group (operational event).  

Assumptions:  
\- 50 administrative events/day  
\- 4 operational events/year  
\- administrative events affect a single device only  
\- operational events affect 15,000 devices  

Design decisions:  
\- In case of an administrative event, only the affected devices are validated.  
\- In case of an operational event, all devices are validated (not just the ones in the affected group).  

This requires 50 devices/day and 160,000 devices/year, which results in 550 devices/day.  

**Processing**  
Assumptions:  
\- The ControlConstruct::actualEquipmentTypeList in CandidateDS is copied from RunningDS, which is copied from OperationalDS.  
\- It contains a lot of equipment types, which are covered by firmware components that are parts of some firmware package.  
\- These equipment types are not listed in the Approval::approvedEquipmentTypeList.  
\- So checking for all equipment types listed in ControlConstruct::actualEquipmentTypeList being covered by an entry in Approval::approvedEquipmentTypeList would fail.  
\- If the approval of a firmware component is restricted to specific hardware, there might be more than one entry in Approval::approvedEquipmentTypeList  

Design decisions:  
\- A firmware component from ControlConstruct::firmwareList in CandidateDS is considered to be approved, if  
  \- the combination of {Firmware::firmwareComponentName and Firmware::firmwareComponentVersion} can be found in {FirmwareResource::firmwareComponentName and FirmwareResource::firmwareComponentVersion}  
  \- AND the value of ControlConstruct::deviceModelName can be found in Approval::deviceModelName of the approvalList of this instance of FirmwareResource  
  \- AND  
    \- the Approval::approvedEquipmentTypeList is either empty  
    \- OR at least one of the values of Approval::approvedEquipmentTypeList can be found in ControlConstruct::actualEquipmentTypeList

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

    The following text might be outdated.

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
