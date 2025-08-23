// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Orbitron, Bangers } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YourCompany",
  description: "革新的なソリューションを提供する企業サイト",
};
//変更点
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${orbitron.variable} ${bangers.variable} antialiased bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          <PageLoader />
          <Header />
          <main className="flex-grow">{children}</main>
          <footer/>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}