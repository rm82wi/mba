import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 relative">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Logo / Firmenwortlaut */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/70 px-4 py-1 border border-slate-700/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">
              MBA – Regional. Zuverlässig. Flexibel.
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50">
            <span className="block text-sm font-semibold text-brand.yellow logo-text mb-2">
              MBA
            </span>
            Bagger & Baumaschinenverleih <br />
            <span className="text-slate-300 text-3xl md:text-4xl">
              KFZ Service Station
            </span>
          </h1>
        </div>

        {/* Kacheln */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link
            href="/baumaschinen"
            className="group rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 text-left shadow-lg hover:shadow-2xl hover:shadow-brand.yellow/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand.yellow">
                Gewerbe 1
              </p>
              <h2 className="text-2xl font-semibold text-slate-50">
                Bagger & Baumaschinenverleih
              </h2>
              <p className="text-sm text-slate-300">
                Übersicht der verfügbaren Maschinen, technische Daten und
                Mietpreise auf einen Blick.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span className="group-hover:text-brand.yellow transition-colors">
                Maschinen ansehen
              </span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/kfz-service"
            className="group rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 text-left shadow-lg hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Gewerbe 2
              </p>
              <h2 className="text-2xl font-semibold text-slate-50">
                KFZ Service Station
              </h2>
              <p className="text-sm text-slate-300">
                Wartung, Reparatur, HU-Vorbereitung und mehr – alle
                Leistungen übersichtlich.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span className="group-hover:text-emerald-300 transition-colors">
                KFZ-Leistungen ansehen
              </span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-4 left-0 right-0">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-end gap-4 text-[11px] text-slate-400">
          <Link href="/kontakt" className="hover:text-slate-100 transition-colors">
            Kontakt
          </Link>
          <Link href="/impressum" className="hover:text-slate-100 transition-colors">
            Impressum
          </Link>
        </div>
      </footer>
    </main>
  );
}
