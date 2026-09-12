# Drosselau — WFRP-Aufwertung

## Neue Funktion: Drosselauer Werkstatt

Die App enthält nun unter **Werkstatt** einen interaktiven, lokalen WFRP-NPC- und Szenenaufhänger-Generator. Er erzeugt eine Nebenfigur mit Name, Bezirk, Rolle, Sprechweise, Motivation, Geheimnis, Zeitdruck, konkretem Ort und sofort spielbarem Gruppenaufhänger.

## Vollständige kanontreue Ortsausarbeitung

Alle **118 Orte** besitzen nun zusätzlich eine redaktionelle Spielschicht mit vier Feldern: einen Spielertext für den ersten Eindruck, einen explizit ausgewiesenen kanonischen Kern, eine konkrete Szenenöffnung und eine dreistufige Eskalationsleiter. Die ursprünglichen Kernfelder wurden nicht ersetzt oder inhaltlich überschrieben. Namen, Gassen, Hausbezeichnungen, Statusangaben, Gerüchte, SL-Notizen, Sichtbefunde, Gerüche, Personen und „Am Tisch“-Hinweise bleiben bindend vorhanden.

Die neue Ebene verbindet jeden Ort mit der Grundspannung seines Bezirks und macht die Konsequenz einer Szene sichtbar: zuerst der alltägliche Befund, danach sozialer Druck und schließlich eine Spur, Schuld oder Entscheidung, die in einen anderen Bezirk weiterführt. Die Darstellung respektiert den Schalter zum Ausblenden von SL-Inhalten.

Die Werkstatt nutzt die vorhandenen Ortsnamen und Bezirke aus dem Katalog. Dadurch entstehen keine losgelösten Zufallsfiguren, sondern Kontakte, die direkt in Vorstadt, Tor, Markt, Handwerk, Morr-Ost oder Schatten eingesetzt werden können. Erzeugte Dossiers können während der Sitzung im Arbeitsspeicher gemerkt und als kleine Kontaktliste gesammelt werden.

Die Funktion ist bewusst regelneutral gehalten. Sie ergänzt keine geschützten Regeltexte oder kopierten Tabellen, sondern liefert dramatische Ausgangslagen, die mit der jeweiligen WFRP-Ausgabe und Gruppe ausgefüllt werden können.

## Inhaltliche Aufwertung

Die Bezirksbeschreibungen wurden zu spielbaren sozialen Räumen erweitert. Jeder Bezirk enthält nun stärker erkennbare Konfliktfelder, sinnliche Anker, wirtschaftliche Abhängigkeiten, religiöse Präsenz und mögliche Ermittlungswege. Die Abgleichseite erklärt außerdem, wie die Ortsfelder am Tisch genutzt werden können und enthält fünf neue Abenteueranschlüsse.

Die neuen Abenteueranschlüsse sind:

1. **Das Siegel im Schlamm** — eine verschwundene Gildenlieferung, drei glaubhafte Beweise und ein absichtlich ersetztes Siegel.
2. **Die Nacht im offenen Portal** — ein geöffnetes Grab, Morrs Garten und ein Name, der nicht ausgesprochen werden darf.
3. **Kohle, Blut und Beize** — ein Lehrling, eine verbotene Klinge und ein Farbfleck, der zu einem alten Schuldschein führt.
4. **Das Haus, das nicht antwortet** — ein brennendes Licht, eine verschwundene Familie und ein offizieller Widerspruch.
5. **Ein ruhiger Abend in der Stube** — ein eingeschlossenes Wirtshaus, ein Glaubenswächter und eine Entscheidung zwischen Wahrheit und öffentlicher Sicherheit.

## Recherchegrundlage

Die Funktion orientiert sich an öffentlich auffindbaren WFRP-NPC- und Generator-Konzepten. Als externe Inspirationsquelle ist in der Werkstatt der [WFRP Random NPC Generator von Black Dragon Adventures](https://blackdragonadventures.com/npc/) verlinkt.

Für das Reikland- und Ortsdesign wurden außerdem offizielle WFRP-Referenzen berücksichtigt:

- [Buildings of the Reikland](https://cubicle7games.com/en_EU/buildings-of-the-reikland-pdf)
- [One Shots of the Reikland](https://cubicle7games.com/en_EU/blog/wfrp-one-shots-of-the-reikland-out-now)
- [Ubersreik Adventures](https://cubicle7games.com/en_EU/ubersreik-adventures-pdf)

Die App übernimmt daraus keine geschützten Texte, Karten oder Regelwerte. Sie verwendet die Quellen ausschließlich als Genre-, Struktur- und Szenarioorientierung.

## Technischer Stand

- Produktions-Build erfolgreich.
- TypeScript-Prüfung erfolgreich.
- Neue Route: `/werkstatt`.
- Neuer Navigationspunkt: **Werkstatt** beziehungsweise **WFRP-Werkstatt**.
- Abhängigkeiten und Build-Artefakte sind nicht Bestandteil des ZIP-Archivs; sie werden beim Installieren mit `npm install` wiederhergestellt.
