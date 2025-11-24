import Link from "next/link";
import { machines } from "/data/machines";
import { MachineCard } from "/components/MachineCard";

export default function BaumaschinenPage() {
  const sortedMachines = [...machines].sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand.yellow flex items-center justify-center text-slate-900 font-bold text-lg">
              MBA
            </div>
            <div className="text-sm leading-tight">
              <p className="font-semibold">MBA Baumaschinenverleih</p>
              <p className="text-xs text-slate-400">
                Bagger, Radlader & Verdichtungstechnik
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <Link
              href="/kfz-service"
              className="text-slate-300 hover:text-emerald-300 transition-colors"
            >
              KFZ-Service
            </Link>
            <Link
              href="/kontakt"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Baumaschinenverleih
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              Hier finden Sie eine Auswahl unserer verfügbaren Maschinen mit
              Mietpreisen. Für längere Mietzeiträume, andere Anbaugeräte oder
              Maschinentransport erstellen wir gerne ein individuelles Angebot.
            </p>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">
              Öffnungszeiten Disposition
            </p>
            <p>Mo–Fr: 07:30 – 17:00 Uhr</p>
            <p>Sa: nach Vereinbarung</p>
            <p>Telefon &amp; E-Mail kannst du später einfügen.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 grid gap-2 md:grid-cols-3">
          <div>
            <p className="font-semibold mb-1 text-slate-200">Tag</p>
            <p>Mietpreis für einen Kalendertag (max. 8 Betriebsstunden).</p>
          </div>
          <div>
            <p className="font-semibold mb-1 text-slate-200">Wochenende</p>
            <p>Freitag Nachmittag bis Montag Morgen (nach Vereinbarung).</p>
          </div>
          <div>
            <p className="font-semibold mb-1 text-slate-200">Woche</p>
            <p>Mietpreis für 5 aufeinanderfolgende Werktage.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedMachines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500 space-y-1">
          <p>
            * Alle Angaben ohne Gewähr. Verfügbarkeit der Maschinen vorbehaltlich
            vorheriger Vermietung.
          </p>
          <p>
            * Zuzüglich Kraftstoff, Reinigung sowie optionaler
            Vollschutzversicherung.
          </p>
        </div>
      </section>
    </main>
  );
}
