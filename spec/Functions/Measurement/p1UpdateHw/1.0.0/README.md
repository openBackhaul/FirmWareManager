# p1UpdateHw

Updates the hardware information required to resolve dependencies of firmware for a Device in the OperationalDS.  
Depending on the deviceModel, different subfunctions get called to allow different information structures.  

## Diagram

<p align="center">
  <img src="./p1UpdateHw.png" alt="p1UpdateHw diagram" width="320" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

|#| Code | Message                                                           |
|-|------|-------------------------------------------------------------------|
|1|      | No hardware extraction function defined for deviceModel           |

## Parameters

./.  

## NPM Module

[mw-sdn-p1-update-hw](https://www.npmjs.com/package/mw-sdn-p1-update-hw)
