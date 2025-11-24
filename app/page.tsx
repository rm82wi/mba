import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 dark:bg-slate-950 dark:text-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
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

          {/* Navigation + Theme Toggle */}
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <nav className="flex items-center gap-4">
              <Link
                href="/baumaschinen"
                className="text-slate-200 hover:text-brand.yellow transition-colors"
              >
                Baumaschinen
              </Link>
              <Link
                href="/kfz-service"
                className="text-slate-200 hover:text-emerald-300 transition-colors"
              >
                KFZ-Service
              </Link>
              <Link
                href="/kontakt"
                className="text-slate-300 hover:text-slate-50 transition-colors"
              >
                Kontakt
              </Link>
              <Link
                href="/impressum"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                Impressum
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
          {/* Hero-Text */}
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ihr Partner für Bauprojekte &amp; KFZ-Service</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                MBA
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
                Maschinen · Bagger · Anhänger
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Moderner Baumaschinenverleih und professionelle KFZ-Service
              Station unter einem Dach. Wählen Sie einen Bereich und erhalten
              Sie alle Infos zu Leistungen, Maschinen und Preisen.
            </p>
          </div>

          {/* KACHELN – größer & nebeneinander (Desktop) */}
          <div className="max-w-5xl w-full grid gap-6 md:grid-cols-2">
            {/* Maschinenverleih */}
            <Link
              href="/baumaschinen"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950/95 to-slate-800/85 p-7 md:p-8 shadow-xl hover:border-slate-600 hover:shadow-brand.yellow/25 transition-all duration-300 min-h-[230px]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logos/maschinenverleih.png"
                      alt="MBA Maschinenverleih"
                      fill
                      className="object-contain invert"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300 mb-1">
                      Maschinen · Bagger · Anhänger
                    </p>
                    <h3 className="text-xl font-semibold mb-1">
                      MBA Maschinenverleih
                    </h3>
                    <p className="text-sm text-slate-300">
                      Verfügbarkeit &amp; Mietpreise direkt online einsehbar.
                    </p>
                  </div>

                  <div className="hidden md:block text-2xl text-slate-400 group-hover:text-brand.yellow transition-colors">
                    →
                  </div>
                </div>

                <p className="mt-6 text-xs text-slate-400 group-hover:text-brand.yellow transition-colors">
                  Zur Maschinenübersicht
                </p>
              </div>
            </Link>

            {/* KFZ-Service */}
            <Link
              href="/kfz-service"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950/95 to-slate-800/85 p-7 md:p-8 shadow-xl hover:border-slate-600 hover:shadow-emerald-300/25 transition-all duration-300 min-h-[230px]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logos/kfz-service.png"
                      alt="MBA KFZ-Service"
                      fill
                      className="object-contain invert"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-300 mb-1">
                      KFZ-Service
                    </p>
                    <h3 className="text-xl font-semibold mb-1">
                      MBA KFZ-Service
                    </h3>
                    <p className="text-sm text-slate-300">
                      Werkstatttermin, Diagnose &amp; Wartung aus einer Hand.
                    </p>
                  </div>

                  <div className="hidden md:block text-2xl text-slate-400 group-hover:text-emerald-300 transition-colors">
                    →
                  </div>
                </div>

                <p className="mt-6 text-xs text-slate-400 group-hover:text-emerald-300 transition-colors">
                  Zu Leistungen &amp; Service
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} MBA – Maschinen, Bagger, Anhänger.
          </p>
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
              Impressum &amp; Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
