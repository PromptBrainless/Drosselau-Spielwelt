# Drosselau-Spielwelt

WFRP-Marktflecken **Drosselau, 2512 IZ** — Ortskatalog, Bezirke, SL-Karten, Ortsfotos und die **Drosselauer Werkstatt**.

Das ist die aufgewertete Fassung (Werkstatt, Spielschicht für 118 Orte, fünf Abenteueranschlüsse). Das ältere Repo [Spielwelt](https://github.com/PromptBrainless/Spielwelt) bleibt unangetastet.

## Start

```bash
npm install
npm run dev
```

App unter `http://localhost:8080`.

## Inhalt

- Katalog und Bezirke: Vorstadt, Tor, Markt, Handwerk, Morr-Ost, Schatten
- 118 Orte mit kanonischem Kern plus Spielertext, Szenenöffnung und Eskalationsleiter
- Werkstatt: lokaler NPC- und Szenenaufhänger-Generator (`/werkstatt`)
- Abgleichseite mit fünf Anschlüssen:
  1. Das Siegel im Schlamm
  2. Die Nacht im offenen Portal
  3. Kohle, Blut und Beize
  4. Das Haus, das nicht antwortet
  5. Ein ruhiger Abend in der Stube

Details: `DROSSELAU_WFRP_AUFWERTUNG.md`

## Hinweise

- Keine geschützten WFRP-Regeltexte oder Tabellen.
- `public/fotos/` enthält die Katalogbilder. Fehlen sie im Clone, aus dem Quell-ZIP nachlegen.
- `.grok/` und Build-Caches gehören nicht in dieses Repo.
