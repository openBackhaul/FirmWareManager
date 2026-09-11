# Concepts of Validation

Gedanken, die zu einer Neustrukturierung der ValidationFunctions führen könnten:

## Ansatzpunkte

Folgende Aspekte sollten durch ValidationFunctions abgedeckt werden:

1. Systematische Schwachstellen des Informationsmodells
2. Konformität des Interpretationsergebnisses mit den ursprünglichen Anforderungen

Folgende Aspekte sollten eventuell außen vor bleiben:

1. Konformität der Daten mit der erwarteten Datenstruktur (vor allem in der generischen Ebene)

## Eingrenzung der Zielsetzung

Die Validierung schließt die Interpretation einer generisch formulierten Absicht ab.  

Das Scheiternlassen einer Validierung ist nur dann sinnvoll, wenn dadurch so gezielt auf die erneute Formulierung der Absicht eingewirkt werden kann, dass der Grund des Scheiterns beim erneuten Versuch sicher ausgeschlossen werden kann.  

Ebenso ist das Scheiternlassen einer Validierung nur dann sinnvoll, wenn der Grund des Scheiterns tatsächlich auf die Formulierung der Absicht zurückzuführen ist, und nicht ohnehin bestand.  

## Grund für gezielten Verzicht

Entscheidend für die Effektivität erscheint, dass die Validierung nach anderen Berechnungsmethoden erfolgt als die ursprüngliche Interpretation.  

Sollte eine alternative Berechnungsmethode nicht zu Verfügung stehen, erscheint der Versuch einer Validierung sinnlos.  

Da das Informationsmodell für die Methoden der Interpretation optimiert ist, scheint der Rechenaufwand im Rahmen der Validierung nicht nur zusätzlich, sondern auch höher zu sein.  

## Konkret für den FirmWareManager

### Schwachstellen des Informationsmodells

_Gruppenzugehörigkeit des Gerätes_  
Dass die Assoziation von der DeviceGroup zum Device zeigt, stellt nicht sicher, dass das Device durch exakt eine DeviceGroup referenziert wird.  

### Konformität des Interpretationsergebnisses mit den ursprünglichen Anforderungen

_firmwareList des Devices_  
Für den konkreten Einzelfall ist zu überprüfen, ob die zugewiesene Firmware für die Hardware des Gerätes freigegeben wurde.  
