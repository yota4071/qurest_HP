// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300`}
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