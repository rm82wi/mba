import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand.yellow flex items-center justify-center text-slate-900 font-bold text-lg">
              MBA
            </div>
            <div className="text-sm leading-tight">
              <p className="font-semibold">MBA</p>
              <p className="text-xs text-slate-400">
                Baumaschinenverleih & KFZ-Service
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
              href="/impressum"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Kontakt
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              Sie möchten eine Maschine anmieten, einen Werkstatttermin
              vereinbaren oder haben eine allgemeine Frage? Schreiben Sie uns
              einfach über das Formular – wir melden uns schnellstmöglich.
            </p>

            <ContactForm />
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <h2 className="text-base font-semibold text-slate-50">
                Standorte & Kontakt
              </h2>
              <p className="text-slate-200 font-medium">MBA</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>

              <div className="mt-3 space-y-1">
                <p>Telefon: +49 (0)123 456 789</p>
                <p>E-Mail: info@mba-bau-kfz.de</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-xs">
              <h2 className="text-sm font-semibold text-slate-50">
                Öffnungszeiten
              </h2>
              <p className="text-slate-300">
                <span className="font-medium text-slate-200">
                  Baumaschinenverleih:
                </span>{" "}
                Mo–Fr 07:30–17:00 Uhr, Sa nach Vereinbarung
              </p>
              <p className="text-slate-300">
                <span className="font-medium text-slate-200">
                  KFZ-Service:
                </span>{" "}
                Mo–Fr 08:00–17:00 Uhr, Sa nach Vereinbarung
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} MBA – Baumaschinen & KFZ-Service.</p>
          <div className="flex items-center gap-4">
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
