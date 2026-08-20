import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TERA — Hospitality Experience Platform",
  description: "Manage stays, direct bookings and experiences in one platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
