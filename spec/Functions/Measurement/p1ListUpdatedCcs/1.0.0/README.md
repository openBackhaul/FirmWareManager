# p1ListUpdatedCcs

Determines the list of ControlConstructs that have been updated in MWDI since last update of OperationalDS.  

> Further considerations that are to be deleted after clarification:
>
> According to current implementation, MWDI is writing the time of the last update of the CC into some meta data table.  
> Presumably the mountName attribute is serving as key.  
> If this would be true, consuming applications (like DPMDP) have to search through all 36.000 entries of the meta data table to find those that have been updated after some point in time (e.g., within last 8minutes).  
>
> Wouldn’t it be more efficient, if the sliding window process of the MWDI would  
>
> - append the mountName of the CC that has been updated to an ordered array
> - and delete the oldest entry from the same array?
>
> In this case, a consuming application could  
>
> - copy the entries of the list of updated mountNames from newest to oldest into an own first-in-last-out array
> - until it reaches the mountName of the device it dealt with last
>
> After that, it would just process the devices according to the first-in-last-out array of mountNames.  

## Diagram

<p align="center">
  <img src="./p1ListUpdatedCcs.png" alt="p1ListUpdatedCcs diagram" width="250" />
</p>

## Interface

Please find a detailed description of the [interface](./interface.yaml).  

## Variables

Please find a detailed description of the [variables](./variables.yaml).  

## Error Codes

./.

## Parameters

./.  

## NPM Module

[mw-sdn-p1-list-updated-ccs](https://www.npmjs.com/package/mw-sdn-p1-list-updated-ccs)
