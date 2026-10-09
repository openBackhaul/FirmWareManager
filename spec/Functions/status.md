# Status of Function Specifications

This is a temporary administrative document for keeping track of the status of the function specifications.  
It is not part of the specification itself.  
It shall be deleted once the service specifications are complete.  

1 = "Sequence diagram"  
2 = "Readme"  
3 = "Review"  
4 = "interface.yaml"  
5 = "variables.yaml"  
6 = "Review"  

Ka = Katharina  
Th = Thorsten

## Interpretation

### Preparing devices

| Function        |  1  |  2  |  3  |  4  |  5  |  6  |
|-----------------|-----|-----|-----|-----|-----|-----|
| p1CreateDevices | Th  | Th  |     |     |     |     |
| p1DeleteDevices | Th  | Th  |     |     |     |     |

### Purging DeviceGroups

| Function            |  1  |  2  |  3  |  4  |  5  |  6  |
|---------------------|-----|-----|-----|-----|-----|-----|
| p1PurgeDeviceGroups | Th  | Th  |     |     |     |     |

## Validation

Es wurden Verzeichnisse und README-Dateien für drei ValidationFunctions erstellt.  
Deren Struktur und Sinnhaftigkeit muss jedoch noch einmal geprüft werden.  

### Measurement

| Function                            |  1  |  2  |  3  |  4  |  5  |  6  |
|-------------------------------------|-----|-----|-----|-----|-----|-----|
| p1MeasureDomain                     | Th  | Th  |     |     |     |     |
| . p1ListUpdatedCcs                  | Th  | Th  |     |     |     |     |
| . p1UpdateDevice                    | Th  | Th  | Ka  |     |     |     |
| .. p1UpdateHw                       | Th  | Th  | Ka  |     |     |     |
| .. p1UpdateFw                       | Th  | Th  | Ka  |     |     |     |
| ... p1ExtractSingleFirmware         | Th  | Th  | Ka  |     |     |     |
| ... p1ExtractSeparatedNpuRauToo     | Th  | Th  |     |     |     |     |
| ... p1ExtractSeparatedAppToo        | Th  | Th  |     |     |     |     |
| ... p1ExtractSeparatedBootWebOduToo | Th  | Th  |     |     |     |     |

### Administrative

| Function                     |  1  |  2  |  3  |  4  |  5  |  6  |
|------------------------------|-----|-----|-----|-----|-----|-----|
| p1ManageFirmware             | Th  | Th  |     | (3) |     |     |
| . p1LoadEsAddresses          | Th  | Th  |     | (3) |     |     |
| .. p1LoadParameters          | ./. | Th  |     | (3) |     |     |
| .. p1ResolveEsAddress        | ./. | Th  |     | (3) |     |     |
| . p1CreateDcFromStartupDS    | Th  | Th  |     | (3) |     |     |
| . p1Pulser                   | Th  | Th  |     | (3) |     |     |
| .. p1TrimHistoricalErrorList | Th  | Th  |     | (3) |     |     |
