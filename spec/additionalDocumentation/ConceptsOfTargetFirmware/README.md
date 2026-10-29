# Concepts of Target Firmware

Stoffsammlung:  

- targetFirmwareList listet Firmware, für die der Versuch unternommen werden soll, sie auf die Geräte zu laden

- kein Eintrag in targetFirmwareList bedeutet, dass unabhängig vom Zustand des individuellen Geräts keine Änderung vorgenommen werden soll

- Löschen eines Eintrags aus targetFirmwareList bedeutet, dass die entsprechende Firmware nicht mehr aktiv auf die Geräte geladen werden soll (sie wird aber auch nicht aktiv von den Geräten gelöscht, was ohnehin nicht möglich wäre)

- RDS:status==active bedeutet, dass die Firmware auf den Geräten in ODS:status==active sein soll, ggf. soll sie dafür aktiv auf diesen Status gesetzt werden

- RDS:status==stand-by bedeutet, dass die Firmware auf den Geräten nicht in ODS:status==active sein muss, hierfür wird jedoch keine aktive Statuskonfiguration vorgenommen

- Downside: Es gibt gegenwärtig keine Validierung auf die korrekte Anzahl und Gattung von Firmware, d.h. es könnte vorkommen, dass zu viele Firmware in die targetFirmwareList eingetragen werden. In diesem Fall würden immer wieder neue Downloadversuche angestoßen werden
