# Information Structure

The development of the information structure of the FWM is driven by Papyrus class diagram (master).  
The OpenAPI like representation is generated from the Papyrus class diagram.  
The individual interface.yaml and variables.yaml files have to consolidate into the OpenAPI like representation.  

## Papyrus Class Diagram

The export of the Papyrus class diagram is available in the [papyrusExport](./papyrusExport/) folder.  
An Eclipse Papyrus installation is required to open the file.  

### DomainController

The information structure of the DomainController is close to the one already developed for the ControllerDomainManager.  
Few improvements have been made based on the DevicePerformanceManagementDataProcessor.  

<p align="center">
  <img src="./diagrams/AaDomainController.png" alt="Domain Controller" width="400"/>
</p>

### NetworkControlDomain

The information structure specific for the firmware domain contains the necessary information for  

- executing the [RPCs for installing and activating new firmware](OnfRpcsAndClasses.md) on the devices
- validating the pairings of individual device and its firmware in CandidateDS against general firmware approvals

<p align="center">
  <img src="./diagrams/AaNetworkControlDomain.png" alt="Network Control Domain" width="400"/>
</p>

## UML to OpenAPI Transformation

The transformation of the Papyrus class diagram into the OpenAPI like representation is done by GitHub Copilot.  

> Warning!  
> This method does not produce reproducible results!  
> The old and the new informationStructure.yaml have to be manually compared side by side.  
> It must be assured by human review that actually exclusively the willingly made changes got into the new file.

The following two files have to be provided as context for the transformation:  

- ./openApiSpec/informationStructure.yaml
- ./papyrusExport/FirmWareManager.uml

The following prompt provided the best results for the transformation:

```text
Update the data tree in informationStructure.yaml from the information documented in FirmWareManager.uml.
Regard the structure defined by the existing examples in informationStructure.yaml.
Transfer the exact wording from the FirmWareManager.uml to the description statements in the informationStructure.yaml, except for the " Pattern:" that shall be transferred into separate pattern statements.
```
