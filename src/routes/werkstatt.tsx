import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { catalog, placesInDistrict } from "@/lib/catalog";

export const Route = createFileRoute("/werkstatt")({
  component: WerkstattPage,
});

type Dossier = {
  name: string;
  district: string;
  role: string;
  voice: string;
  motive: string;
  secret: string;
  hook: string;
  pressure: string;
  place: string;
};

const firstNames = ["Alrik", "Elsa", "Hannes", "Marta", "Jaan", "Sigrid", "Konrad", "Liesel", "Otto", "Brunhilde", "Willi", "Greta"];
const familyNames = ["Karr", "Moos", "Holtz", "Hesse", "Bode", "Wurzel", "Eckert", "Staub", "Karg", "Unken", "Dünn", "Leder"];
const roles = ["Zollschreiber", "Tagelöhnerin", "Gildengehilfe", "Gesellin der Schmiede", "Wäscherin", "Fuhrmann", "Krämer", "Totengräbergehilfe", "Bettler mit gutem Gedächtnis", "Wirtshausgast", "Färberlehrling", "Wache außer Dienst"];
const voices = ["spricht leise und zählt dabei Münzen mit dem Daumen", "beantwortet jede Frage mit einer Gegenfrage", "lacht zu früh, wenn jemand von den Toten spricht", "hält die linke Hand ständig über eine alte Narbe", "wechselt zwischen höflicher Förmlichkeit und blanker Erschöpfung", "kennt jeden Weg, aber nie den richtigen Namen dazu", "redet über das Wetter, sobald eine Schuld zur Sprache kommt", "sieht den Gesprächspartner selten direkt an"];
const motives = ["will die ausstehende Schuld der Familie tilgen", "möchte Drosselau verlassen, bevor der nächste Winter kommt", "will beweisen, dass die Gilde nicht unantastbar ist", "sucht eine verschwundene Person, ohne die Wache einzuschalten", "braucht Schutz für jemanden, den sie öffentlich verleugnet", "will aus einem Gerücht einen bezahlten Vorteil machen", "versucht, einen alten Fehler vor Morrs Garten geheim zu halten", "möchte endlich als ehrlicher Mensch gelten"];
const secrets = ["hat einen Schlüssel, der zu keinem sichtbaren Schloss im Bezirk passt", "hat eine Lieferung umgeleitet und die Quittung behalten", "war in der Nacht am offenen Portal, obwohl sie es bestreitet", "kennt den wahren Besitzer eines verlassenen Hauses", "hat eine Münze mit abgeschliffenem Gepräge erhalten", "hat einen Namen aus dem Gildenarchiv entfernt", "hat etwas im Mistplatz gefunden, das nicht weggeworfen wurde", "ist überzeugt, dass ein harmloses Zeichen auf der Tür beobachtet wird"];
const hooks = ["bittet die Gruppe, eine Nachricht zu überbringen, ohne den Namen des Empfängers zu nennen", "bietet eine Unterkunft an, verlangt dafür aber eine unbequeme Wahrheit", "führt die Gruppe zu einem Ort, an dem eine Spur im Regen verschwindet", "behauptet, dass ein offizielles Siegel falsch ist", "kennt ein Opfer und den Verdächtigen, verwechselt aber absichtlich beide Namen", "hat einen Auftrag, der harmlos beginnt und am Pranger endet"];
const pressures = ["Die Wache stellt in zwei Stunden Fragen.", "Der Regen macht die sichtbare Spur bis Sonnenaufgang unbrauchbar.", "Eine dritte Partei hört im Nebenzimmer mit.", "Die Person schuldet jemandem aus dem Schattenbezirk Geld.", "Morrs Garten schließt nicht, aber die Tore werden gezählt.", "Ein Auftraggeber zahlt nur, wenn niemand Gewalt angewendet hat."];

function pick<T>(items: T[], seed: number) {
  return items[Math.abs(seed) % items.length];
}

function buildDossier(seed: number, districtKey: string): Dossier {
  const district = catalog.districts.find((d) => d.key === districtKey) ?? catalog.districts[0];
  const places = placesInDistrict(district.key, []).filter((p) => p.name);
  const place = places[Math.abs(seed * 7) % Math.max(places.length, 1)];
  return {
    name: `${pick(firstNames, seed)} ${pick(familyNames, seed + 3)}`,
    district: district.name,
    role: pick(roles, seed + 5),
    voice: pick(voices, seed + 7),
    motive: pick(motives, seed + 11),
    secret: pick(secrets, seed + 13),
    hook: pick(hooks, seed + 17),
    pressure: pick(pressures, seed + 19),
    place: place?.name ?? "eine namenlose Ecke des Bezirks",
  };
}

function WerkstattPage() {
  const [districtKey, setDistrictKey] = useState(catalog.districts[0].key);
  const [seed, setSeed] = useState(() => Math.floor(Date.now() / 1000));
  const [saved, setSaved] = useState<Dossier[]>([]);
  const dossier = useMemo(() => buildDossier(seed, districtKey), [seed, districtKey]);

  function generate() {
    setSeed((value) => value + 1 + Math.floor(Math.random() * 97));
  }

  return (
    <AppShell>
      <section className="max-w-[88ch]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-sans text-xs uppercase tracking-[0.16em] text-mute">Neue Online-Funktion</div>
            <h1 className="mt-1 font-serif text-4xl">Die Drosselauer Werkstatt</h1>
            <p className="mt-3 max-w-[68ch] text-[18px] leading-relaxed text-ink-soft">
              Erzeuge in wenigen Augenblicken eine spielbare Nebenfigur mit sozialem Druck, einem brauchbaren Geheimnis und einem Ort, an dem sie in Drosselau tatsächlich auftauchen kann. Die Werkstatt arbeitet ohne externe Konten und ohne Regelwerte; sie liefert bewusst systemneutrale WFRP-Aufhänger, die du mit dem Profil deiner Gruppe ausfüllst.
            </p>
          </div>
          <button type="button" onClick={generate} className="rounded-full border border-[#5a2410] bg-accent px-4 py-2 font-sans text-sm text-paper-2 transition-transform active:scale-[.97]">
            Neue Person würfeln
          </button>
        </div>
      </section>
    </AppShell>
  );
}
