// src/app/layout.tsx

import type { Metadata } from "next";
import { Sintony, Bangers } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";

const sintony = Sintony({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sintony",
  display: "swap",
});

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUREST - Nom!Nom! Project",
  description: "立命館大学OICキャンパスのキッチンカー評価プラットフォーム「Nom!Nom!」を開発中",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${sintony.variable} ${bangers.variable} font-sans antialiased min-h-screen`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}