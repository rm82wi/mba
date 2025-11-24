import Link from "next/link";

export default function KfzServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-lg">
              MBA
            </div>
            <div className="text-sm leading-tight">
              <p className="font-semibold">MBA KFZ-Service Station</p>
              <p className="text-xs text-slate-400">
                Wartung, Reparatur &amp; Diagnose
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <Link
              href="/baumaschinen"
              className="text-slate-300 hover:text-brand.yellow transition-colors"
            >
              Baumaschinen
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

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            KFZ-Service Station
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            In unserer KFZ-Service Station kümmern wir uns um PKW, Transporter
            und leichte Nutzfahrzeuge. Von der Inspektion über Bremsenservice
            bis hin zur Fehlerdiagnose bieten wir einen umfassenden Service aus
            einer Hand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-sm">
            <h2 className="font-semibold text-slate-50 mb-1">Wartung & Service</h2>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Inspektionen nach Herstellervorgaben</li>
              <li>• Öl- und Filterwechsel</li>
              <li>• Bremsenservice</li>
              <li>• Klimaservice</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-sm">
            <h2 className="font-semibold text-slate-50 mb-1">
              Diagnose & Reparaturen
            </h2>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Motordiagnose & Fehlerspeicher-Auslesen</li>
              <li>• Fahrwerks- und Lenkungsreparaturen</li>
              <li>• Auspuff & Abgasanlage</li>
              <li>• Batterie & Elektrik</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-sm">
            <h2 className="font-semibold text-slate-50 mb-1">
              Prüfungen & Zusatzleistungen
            </h2>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• HU-Vorbereitung / §57a (je nach Land anpassen)</li>
              <li>• Reifenservice & Einlagerung</li>
              <li>• Scheiben- & Steinschlagreparatur</li>
              <li>• Hol- & Bringservice (auf Anfrage)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 grid gap-6 md:grid-cols-2 text-sm">
          <div className="space-y-2">
            <h2 className="font-semibold text-slate-50">
              Kontakt & Terminvereinbarung
            </h2>
            <p className="text-slate-300">
              Hier kannst du später deine echten Kontaktdaten eintragen:
              Telefonnummer, E-Mail-Adresse und ggf. ein Kontaktformular.
            </p>
          </div>
          <div className="space-y-1 text-slate-300">
            <p className="font-semibold text-slate-200">Beispiel (Platzhalter):</p>
            <p>MBA KFZ-Service Station</p>
            <p>Musterstraße 1 · 12345 Musterstadt</p>
            <p>Tel.: +49 (0)123 456 789</p>
            <p>E-Mail: info@mba-kfz.de</p>
          </div>
        </div>
      </section>
    </main>
  );
}
