# p1MeasureHw

Updates the hardware information required to resolve dependencies of firmware for a Device in the OperationalDS.  
Depending on the deviceModel, different subfunctions get called to allow different information structures.  

## Diagram

<p align="center">
  <img src="./p1MeasureHw.png" alt="p1MeasureHw diagram" width="320" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Parameters

| Parameter Name    | Description                                                                                                                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [deviceModelName] | Special usage of the Parameters. For all Parameters with attribute description==hardwareExtractionFunction, attribute value contains the name of the subfunction to be called by p1MeasureHw |

## NPM Module

[mw-sdn-p1-measure-hw](https://www.npmjs.com/package/mw-sdn-p1-measure-hw)
