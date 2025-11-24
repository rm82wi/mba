import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MBA – Baumaschinenverleih & KFZ-Service",
  description:
    "MBA – Bagger und Baumaschinenverleih sowie KFZ-Service Station.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
