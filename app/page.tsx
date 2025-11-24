import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 px-4">
      {/* zentrierter Container */}
      <div className="max-w-xl w-full rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-wide">MBA</h1>
          <ThemeToggle />
        </div>

        {/* Inhalt + zwei Karten */}
        <div className="space-y-5">
          {/* Maschinenverleih-Karte */}
          <Link
            href="/baumaschinen"
            className="group block rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800/40 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition"
          >
            <div className="flex items-center gap-5">
              {/* Logo */}
              <div className="relative h-16 w-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logos/maschinenverleih.png"
                  alt="MBA Maschinenverleih"
                  fill
                  className="object-contain dark:invert"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300 mb-1">
                  Maschinen · Bagger · Anhänger
                </p>

                <h2 className="text-lg font-semibold mb-1">
                  MBA Maschinenverleih
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                  Verfügbarkeit & Mietpreise direkt online einsehbar.
                </p>
              </div>

              {/* Pfeil */}
              <div className="text-slate-400 dark:text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-100 text-xl transition">
                →
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition">
              Zur Maschinenübersicht
            </p>
          </Link>

          {/* KFZ-Service-Karte */}
          <Link
            href="/kfz-service"
            className="group block rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800/40 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition"
          >
            <div className="flex items-center gap-5">
              {/* Logo KFZ */}
              <div className="relative h-16 w-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logos/kfz-service.png"
                  alt="MBA KFZ-Service"
                  fill
                  className="object-contain dark:invert"
                />
              </div>

              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-500 dark:text-emerald-300 mb-1">
                  KFZ-Service
                </p>

                <h2 className="text-lg font-semibold">MBA KFZ-Service</h2>

                <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                  Werkstatttermin, Diagnose & Wartung aus einer Hand.
                </p>
              </div>

              <div className="text-slate-400 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 text-xl transition">
                →
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition">
              Zu Leistungen & Service
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
