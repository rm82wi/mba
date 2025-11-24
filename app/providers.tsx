"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"   // ← Dark Mode ist Standard
      enableSystem={false} // ← System-Theme ignorieren
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
