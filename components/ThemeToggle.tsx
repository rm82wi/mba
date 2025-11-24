"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Verhindert Hydration-Flicker
  if (!mounted) {
    return (
      <div className="h-7 w-7 rounded-full border border-slate-300/50 dark:border-slate-600/60 bg-slate-100 dark:bg-slate-800" />
    );
  }

  const current = theme === "system" ? systemTheme : theme;

  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-7 w-7 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[13px] text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
      aria-label="Theme wechseln"
    >
      {isDark ? "☀︎" : "☾"}
    </button>
  );
}
