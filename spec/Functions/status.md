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
7 = "TestCaseCollection"  

Ka = Katharina  
Th = Thorsten

## Interpretation

### Preparing devices

| Function        |  1  |  2  |  3  |  4  |  5  |  6  |  7  | lot |
|-----------------|-----|-----|-----|-----|-----|-----|-----|-----|
| p1CreateDevices | Th  | Th  |     |     |     |     |     |     |
| p1DeleteDevices | Th  | Th  |     |     |     |     |     |     |

### Purging DeviceGroups

| Function            |  1  |  2  |  3  |  4  |  5  |  6  |  7  | lot |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| p1PurgeDeviceGroups | Th  | Th  |     |     |     |     |     |     |

## Validation

Es wurden Verzeichnisse und README-Dateien für drei ValidationFunctions erstellt.  
Deren Struktur und Sinnhaftigkeit muss jedoch noch einmal geprüft werden.  

### Measurement

| Function                            |  1  |  2  |  3  |  4  |  5  |  6  |  7  | lot |
|-------------------------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| p1MeasureDomain                     | Th  | Th  |     | Th  | Th  |     |     |     |
| . p1ListUpdatedCcs                  | Th  | Th  |     | Th  | Th  |     |     |     |
| . p1MeasureDevice                   | Th  | Th  | Ka  | Th  | Th  |     |     |     |
| .. p1MeasureHw                      | Th  | Th  | Ka  | Th  | Th  |     |     |     |
| .. p1MeasureFw                      | Th  | Th  | Ka  | Th  | Th  |     |     |     |
| ... p1ExtractSingleFirmware         | Th  | Th  | Ka  | Th  | Th  | Ka  |     |     |
| ... p1ExtractSeparatedNpuRauToo     | Th  | Th  |     | Th  | Th  | K   |     |     |
| ... p1ExtractSeparatedAppToo        | Th  | Th  |     | Th  | Th  | K   |     |     |
| ... p1ExtractSeparatedBootWebOduToo | Th  | Th  |     | Th  | Th  | Ka  |     |     |

### Administrative

| Function                     |  1  |  2  |  3  |  4  |  5  |  6  |  7  | lot |
|------------------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| p1ManageFirmware             | Th  | Th  |     | Th  | Th  | Ka  |     |  1  |
| . p1LoadEsAddresses          | Th  | Th  |     | Th  | Th  | Ka  |     |  1  |
| .. p1LoadParameters          | /   | Th  |     | /   | /   | /   |     |  1  |
| .. p1ResolveEsAddress        | /   | Th  |     | /   | /   | /   |     |  1  |
| . p1CreateDcFromStartupDS    | Th  | Th  |     | Th  | Th  | Ka  |     |  1  |
| . p1Pulser                   | Th  | Th  |     | Th  | Th  | Ka  |     |  1  |
| .. p1TrimHistoricalErrorList | Th  | Th  |     | Th  | Th  | Ka  |     |  1  |
