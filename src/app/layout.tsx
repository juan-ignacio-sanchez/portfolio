import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const playfair = Lora({ subsets: ["latin"], weight: "400" });

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
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
