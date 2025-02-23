# Single-Page-Application: Tankstellen

Wilkommen im GitHub Repo zur Single-Page-Application für die Suche nach Tankstellen.

Das Tech-Stack der Applikation ist so einfach wie möglich gehalten mit:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Weiterführende Aufgaben

### Kollaboratives Entwickeln

**Frage: Überlege dir welche geeignete Mittel man einsetzen kann, um ein kollaboratives Entwickeln zu gewährleisten und die Qualität des Codes möglichst hoch zu halten.**

- Nutzung des bereits bestehenden GitHub Repository
- Änderungen der Repo-Einstellungen
    - Entwickeln/Pushen auf Main deaktivieren
    - Arbeiten nur noch über Branches
    - Merge Requests müssen immer von einem anderen Entwickler überprüft und approved werden (Vier-Augen-Prinzip)
    - Automatisierte Frontend Tests, bei Erstellung eines Merge Requests, die erfolgreich durchlaufen werden müssen

**Frage: Wie könnte man die bestehende Schnittstelle in eine eigene CRUD Schnittstelle umbauen? Wie sähe eine solche Architektur aus und welchen TechStack könnte man einsetzen?**

- Weg ohne Erweiterung des TechStacks / Reine Frontend-Lösung:
    - Funktion, die jeder Tabellenzeile einen "Delete" Button hinzufügt, um den jeweiligen Eintrag zu entfernen
    - Kleines Formular hinzufügen, um Einträge in die Tabelle hinzuzufügen (dazu sollten die Daten vorher normalisiert werden)
- Weg mit Erweiterung des TechStacks:
    - Datenbank im Backend (Bspw. PostgreSQL oder MongoDB, in die die Daten geschrieben wird)
    - API zwischen Frontend und Backend z.B. FASTAPI mit Python oder Node.js mit Express.js

**Frage: Was wären geeignete Maßnahmen um die Applikation zu hosten?**

- Einfachste Lösung: Hosting über GitHub Pages (falls nur Frontend)
    - kostenlos, schnell und einfach
    - keine Domain notwendig
- Selfhosting: bspw. auf RaspberryPi oder gemieteter Server
    - generelles Hosting: 
        - Statischer nginx oder apache Server in einem Docker Container (nur Frontend)
        - Node.js Server + API und Datenbank jeweils in einem Docker Container
    - Erreichbarkeit von Außen: DNS-Adresse einrichten + Portfreigabe + (optional HTTPS Zertrifikat)

## Externe Tools / Libraries

Einziges exterenes Tool ist die Library **sorttable.js** zur einfachen auf- und absteigenden Sortierung in der Tabelle **([Hier klicken](https://www.kryogenix.org/code/browser/sorttable/))**

## Ideen zur Weiterentwicklung / Nächste Schritte in der Applikation abseits der gestellten Aufgabe

- [ ] Normalisierung der Daten - Aufsplitten in Straße, Hausnummer, PLZ und Stadt (verbessertes Ergebnis beim Sortieren) und besser im Falle von Datenbankeinsatz
- [ ] Designverbesserungen
    - [ ] Seite generell moderner
    - [ ] Favicon
    - [ ] Schöneres Tabellendesign
    - [ ] Tabelle scrollbar machen, anstatt dass die Seite immer länger wird
    - [ ] Tabellendesign (Zebramuster) dynamisch, also auch bei der Suche
- [ ] Koordinaten verwenden um die Tankstellen auf einer Karte anzuzeigen (OpenStreetMap)
- [ ] Header/Navbar und Footer hinzufügen
