# p1UpdateFw

Updates the information about the composition of firmware on a Device in the OperationalDS.  
Depending on the deviceModel, different subfunctions get called to allow different information structures.  

## Diagram

<p align="center">
  <img src="./p1UpdateFw.png" alt="p1UpdateFw diagram" width="320" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                                                           |
|-|------|-------------------------------------------------------------------|
|1|      | No firmware extraction function defined for deviceModel           |

## Parameters

| Parameter Name    | Description                                                                                                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [deviceModelName] | Special usage of the Parameters. For all Parameters with attribute purpose==firmwareExtractionFunction, attribute value contains the name of the subfunction to be called by p1UpdateFw |

In its initial release, the ElasticSearchClients domainControllerEsClient and mwdiEsClient are defined.  

## NPM Module

[mw-sdn-p1-update-fw](https://www.npmjs.com/package/mw-sdn-p1-update-fw)
