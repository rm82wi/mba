import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top-Bar / Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
              {/* Hauptlogo, leicht invertiert für Dark-Mode */}
              <Image
                src="/logos/mba-main.png"
                alt="MBA Logo"
                fill
                className="object-contain invert"
              />
            </div>
            <div className="text-sm leading-tight">
              <p className="font-semibold tracking-wide">MBA</p>
              <p className="text-xs text-slate-400">
                Maschinen · Bagger · Anhänger
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-4 text-xs md:text-sm">
            <Link
              href="/baumaschinen"
              className="text-slate-300 hover:text-brand.yellow transition-colors"
            >
              Baumaschinen
            </Link>
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
            <Link
              href="/impressum"
              className="text-slate-500 hover:text-slate-100 transition-colors"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero-Bereich */}
      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* Linke Seite: Hauptmarke */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Regionaler Partner für Bau & KFZ</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                MBA
                <span className="block text-xl md:text-2xl text-slate-300 mt-2">
                  Maschinen · Bagger · Anhänger
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-xl">
                Zwei starke Gewerbe unter einem Dach: moderner
                Baumaschinenverleih für Baustellen aller Größen und eine
                zuverlässige KFZ-Service Station für PKW, Transporter und
                leichte Nutzfahrzeuge.
              </p>
            </div>

            {/* Kurze Übersicht der zwei Bereiche */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-brand.yellow">
                  Gewerbe 1
                </p>
                <p className="font-semibold">Baumaschinenverleih</p>
                <p className="text-xs text-slate-300">
                  Bagger, Radlader, Rüttelplatten, Anhänger – mit transparenter
                  Preisübersicht.
                </p>
                <Link
                  href="/baumaschinen"
                  className="inline-flex items-center gap-1 text-xs text-brand.yellow hover:underline mt-1"
                >
                  Maschinen & Preise ansehen
                  <span>→</span>
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                  Gewerbe 2
                </p>
                <p className="font-semibold">KFZ-Service Station</p>
                <p className="text-xs text-slate-300">
                  Wartung, Inspektionen, Diagnose und HU-Vorbereitung für Ihre
                  Fahrzeuge.
                </p>
                <Link
                  href="/kfz-service"
                  className="inline-flex items-center gap-1 text-xs text-emerald-300 hover:underline mt-1"
                >
                  Leistungen ansehen
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Rechte Seite: große Kacheln mit Logos */}
          <div className="space-y-5">
            {/* Maschinenverleih-Kachel */}
            <Link
              href="/baumaschinen"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl hover:shadow-brand.yellow/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/maschinenverleih.png"
                    alt="MBA Maschinenverleih"
                    fill
                    className="object-contain invert"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand.yellow">
                    Maschinen · Bagger · Anhänger
                  </p>
                  <h2 className="text-xl font-semibold">
                    MBA Maschinenverleih
                  </h2>
                  <p className="text-xs text-slate-300">
                    Verfügbarkeit & Mietpreise direkt online einsehbar.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <p>Zur Maschinenübersicht</p>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>

            {/* KFZ-Service-Kachel */}
            <Link
              href="/kfz-service"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl hover:shadow-emerald-300/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/kfz-service.png"
                    alt="MBA KFZ-Service"
                    fill
                    className="object-contain invert"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                    KFZ-Service
                  </p>
                  <h2 className="text-xl font-semibold">MBA KFZ-Service</h2>
                  <p className="text-xs text-slate-300">
                    Werkstatttermin, Diagnose & Wartung aus einer Hand.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <p>Zu Leistungen & Service</p>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} MBA – Maschinen, Bagger, Anhänger.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hover:text-slate-300 transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/impressum"
              className="hover:text-slate-300 transition-colors"
            >
              Impressum & Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
