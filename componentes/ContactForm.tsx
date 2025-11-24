"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const topic = String(formData.get("topic") || "");
    const message = String(formData.get("message") || "");

    // TODO: An eine echte API-Route senden.
    try {
      if (!name || !email || !message) {
        throw new Error("Bitte füllen Sie alle Pflichtfelder aus.");
      }

      console.log({ name, email, phone, topic, message });

      await new Promise((res) => setTimeout(res, 800));

      setSuccess(
        "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen."
      );
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(
        err?.message ||
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-xs font-medium text-slate-200"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand.yellow"
            placeholder="Max Mustermann"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-200"
          >
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand.yellow"
            placeholder="name@beispiel.de"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-200"
          >
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand.yellow"
            placeholder="+49 ..."
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="topic"
            className="text-xs font-medium text-slate-200"
          >
            Betreff
          </label>
          <select
            id="topic"
            name="topic"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-brand.yellow"
          >
            <option>Allgemeine Anfrage</option>
            <option>Baumaschinenverleih</option>
            <option>KFZ-Service</option>
            <option>Angebot / Rückrufbitte</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-medium text-slate-200"
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand.yellow"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      <p className="text-[11px] text-slate-500">
        Mit dem Absenden Ihrer Anfrage erklären Sie sich damit einverstanden,
        dass wir Ihre Angaben zur Beantwortung verwenden. Weitere Informationen
        finden Sie im{" "}
        <a
          href="/impressum"
          className="underline underline-offset-2 hover:text-brand.yellow"
        >
          Impressum & Datenschutz
        </a>
        .
      </p>

      {success && (
        <p className="text-xs text-emerald-400 border border-emerald-500/40 rounded-lg px-3 py-2 bg-emerald-900/30">
          {success}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-400 border border-red-500/40 rounded-lg px-3 py-2 bg-red-900/30">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-lg bg-brand.yellow px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Wird gesendet ..." : "Nachricht senden"}
      </button>
    </form>
  );
}
