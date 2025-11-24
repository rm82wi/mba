import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header / Top-Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
              {/* Hauptlogo, invertiert für Dark Mode */}
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
      <section className="px-4 py-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          {/* Headline + Intro */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ihr Partner für Bauprojekte & KFZ-Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              MBA
              <span className="block text-xl md:text-2xl text-slate-300 mt-2">
                Maschinen · Bagger · Anhänger
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300">
              Moderner Baumaschinenverleih und professionelle KFZ-Service
              Station unter einem Dach. Wählen Sie einen Bereich und erhalten
              Sie alle Infos zu Leistungen, Maschinen und Preisen.
            </p>
          </div>

          {/* Kacheln (nur diese 2) */}
          <div className="space-y-6 max-w-3xl w-full">
            {/* Maschinenverleih */}
            <Link
              href="/baumaschinen"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl hover:shadow-brand.yellow/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="relative h-20 w-20 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/maschinenverleih.png"
                    alt="MBA Maschinenverleih"
                    fill
                    className="object-contain invert"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <p className="text-xs uppercase tracking-[0.20em] text-brand.yellow">
                    Maschinen · Bagger · Anhänger
                  </p>

                  <h2 className="text-xl font-semibold">
                    MBA Maschinenverleih
                  </h2>
                  <p className="text-sm text-slate-300">
                    Verfügbarkeit & Mietpreise direkt online einsehbar.
                  </p>

                  <p className="text-xs text-slate-400 mt-2 group-hover:text-brand.yellow transition-colors">
                    Zur Maschinenübersicht
                  </p>
                </div>

                <span className="text-lg text-slate-400 group-hover:text-brand.yellow transition-colors">
                  →
                </span>
              </div>
            </Link>

            {/* KFZ-Service */}
            <Link
              href="/kfz-service"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl hover:shadow-emerald-300/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="relative h-20 w-20 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/kfz-service.png"
                    alt="MBA KFZ-Service"
                    fill
                    className="object-contain invert"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <p className="text-xs uppercase tracking-[0.20em] text-emerald-300">
                    KFZ-Service
                  </p>

                  <h2 className="text-xl font-semibold">MBA KFZ-Service</h2>
                  <p className="text-sm text-slate-300">
                    Werkstatttermin, Diagnose & Wartung aus einer Hand.
                  </p>

                  <p className="text-xs text-slate-400 mt-2 group-hover:text-emerald-300 transition-colors">
                    Zu Leistungen & Service
                  </p>
                </div>

                <span className="text-lg text-slate-400 group-hover:text-emerald-300 transition-colors">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-top border-slate-800">
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
