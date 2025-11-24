import Link from "next/link";

export default function ImpressumPage() {
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
              href="/kontakt"
              className="text-slate-300 hover:text-slate-100 transition-colors"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-8 text-sm text-slate-200">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Impressum
          </h1>
          <p className="text-slate-400 text-xs">
            Hinweis: Platzhalter-Beispiel. Bitte mit echten Daten ersetzen und
            rechtlich prüfen lassen (z.&nbsp;B. durch einen Anwalt oder
            Generator).
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>MBA Mustermann Bau & Auto GmbH</p>
          <p>Bagger- und Baumaschinenverleih / KFZ-Service Station</p>
          <p>Musterstraße 1</p>
          <p>12345 Musterstadt</p>
          <p>Deutschland</p>
        </section>

        <section className="space-y-1">
          <h2 className="text-lg font-semibold">Vertreten durch</h2>
          <p>Geschäftsführer: Max Mustermann</p>
        </section>

        <section className="space-y-1">
          <h2 className="text-lg font-semibold">Kontakt</h2>
          <p>Telefon: +49 (0)123 456 789</p>
          <p>E-Mail: info@mba-bau-kfz.de</p>
        </section>

        <section className="space-y-1">
          <h2 className="text-lg font-semibold">Registereintrag</h2>
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Musterstadt</p>
          <p>Registernummer: HRB 12345</p>
        </section>

        <section className="space-y-1">
          <h2 className="text-lg font-semibold">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:</p>
          <p>DE123456789</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Haftung für Inhalte</h2>
          <p className="text-slate-300">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-slate-300">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Haftung für Links</h2>
          <p className="text-slate-300">
            Unser Angebot enthält ggf. Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Urheberrecht</h2>
          <p className="text-slate-300">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            Datenschutzhinweis (Kurzfassung)
          </h2>
          <p className="text-slate-300">
            Wir verarbeiten personenbezogene Daten (z.&nbsp;B. Name, E-Mail,
            Telefonnummer), die Sie uns im Rahmen von Kontaktanfragen oder
            Geschäftsbeziehungen mitteilen, ausschließlich zur Bearbeitung Ihrer
            Anfrage und zur Vertragsabwicklung. Eine Weitergabe an Dritte findet
            nur statt, soweit dies zur Vertragserfüllung notwendig ist oder wir
            gesetzlich dazu verpflichtet sind.
          </p>
          <p className="text-slate-300">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer Daten sowie ein
            Widerspruchsrecht gegen die Verarbeitung. Bitte kontaktieren Sie
            uns hierzu über die oben angegebenen Kontaktdaten.
          </p>
        </section>
      </section>

      <footer className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} MBA – Baumaschinen & KFZ-Service.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hover:text-slate-300 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
