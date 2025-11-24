import type { Machine } from "@/data/machines";

interface MachineCardProps {
  machine: Machine;
}

export function MachineCard({ machine }: MachineCardProps) {
  const {
    name,
    weightClass,
    description,
    dayPrice,
    weekendPrice,
    weekPrice,
    includes,
    notes,
  } = machine;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 flex flex-col justify-between shadow-md">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-50">{name}</h3>
          <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
            {weightClass}
          </span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {description}
        </p>

        {includes && includes.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold text-slate-400 mb-1">
              Inklusive:
            </p>
            <ul className="text-xs text-slate-300 list-disc list-inside space-y-0.5">
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-4 border-t border-slate-700 pt-4 space-y-2">
        <div className="grid grid-cols-3 gap-2 text-xs text-slate-200">
          <div>
            <p className="text-slate-400 mb-1">Tag</p>
            <p className="font-semibold">{dayPrice.toFixed(0)} €</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Wochenende</p>
            <p className="font-semibold">
              {weekendPrice ? `${weekendPrice.toFixed(0)} €` : "auf Anfrage"}
            </p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Woche</p>
            <p className="font-semibold">
              {weekPrice ? `${weekPrice.toFixed(0)} €` : "auf Anfrage"}
            </p>
          </div>
        </div>

        {notes && (
          <p className="mt-2 text-[11px] text-slate-400 leading-snug">
            {notes}
          </p>
        )}
        <p className="mt-1 text-[11px] text-slate-500">
          Alle Preise zzgl. MwSt. & ohne Versicherung, Änderungen vorbehalten.
        </p>
      </div>
    </div>
  );
}
