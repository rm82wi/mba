export type MachineCategory =
  | "Bagger"
  | "Radlader"
  | "Verdichtung"
  | "Transport";

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  weightClass: string;
  description: string;
  dayPrice: number; // Netto / Tag
  weekendPrice?: number;
  weekPrice?: number;
  includes?: string[];
  notes?: string;
}

export const machines: Machine[] = [
  {
    id: "minibagger-18",
    name: "Minibagger 1,8 t",
    category: "Bagger",
    weightClass: "1,8 t",
    description:
      "Kompakter Bagger für Garten- und kleinere Erdarbeiten. Ideal für enge Zufahrten.",
    dayPrice: 120,
    weekendPrice: 220,
    weekPrice: 550,
    includes: ["1 Tieflöffel", "1 Grabenräumlöffel"],
    notes: "Zuzüglich Transportpauschale oder Selbstabholung.",
  },
  {
    id: "mobilbagger-15",
    name: "Mobilbagger 15 t",
    category: "Bagger",
    weightClass: "15 t",
    description:
      "Leistungsstarker Mobilbagger für größere Erdbewegungen und Baustellen.",
    dayPrice: 290,
    weekendPrice: 520,
    weekPrice: 1350,
    includes: ["Tieflöffel", "Hydraulik-Schnellwechsler"],
  },
  {
    id: "radlader-45",
    name: "Radlader 4,5 t",
    category: "Radlader",
    weightClass: "4,5 t",
    description:
      "Vielseitiger Radlader für Schüttgut, Hof- und Baustellenarbeiten.",
    dayPrice: 180,
    weekendPrice: 320,
    weekPrice: 780,
    includes: ["Schaufel", "Palettengabel"],
  },
  {
    id: "stampfer-70",
    name: "Rüttelstampfer 70 kg",
    category: "Verdichtung",
    weightClass: "70 kg",
    description:
      "Ideal für Verdichtungsarbeiten in Gräben und kleinen Flächen.",
    dayPrice: 45,
    weekendPrice: 80,
    weekPrice: 190,
  },
  {
    id: "platte-300",
    name: "Rüttelplatte 300 kg reversierbar",
    category: "Verdichtung",
    weightClass: "300 kg",
    description:
      "Reversierbare Rüttelplatte für Pflaster- und Wegebau, auch auf enger Fläche.",
    dayPrice: 65,
    weekendPrice: 110,
    weekPrice: 260,
  },
  {
    id: "anhaengerkipper-35",
    name: "Anhänger-Kipper 3,5 t",
    category: "Transport",
    weightClass: "3,5 t",
    description:
      "Tandem-Kippanhänger für Schüttguttransport, geeignet für PKW mit Zuglast.",
    dayPrice: 70,
    weekendPrice: 120,
    weekPrice: 320,
    notes: "Führerscheinklasse & zulässige Anhängelast beachten.",
  },
];
