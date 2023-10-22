import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Ignacio Sánchez",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
