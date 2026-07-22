import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const siteUrl = new URL(SITE_URL);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Samuel Yuiti Endo Silva | Python, SQL and Financial Data",
  description:
    "Professional portfolio of Samuel Yuiti Endo Silva, focused on Python, SQL, financial data analysis, automation, file processing, and web solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samuel Yuiti Endo Silva | Developer Portfolio",
    description:
      "Python, SQL, financial data analysis, automation, file processing, and modern web interfaces.",
    url: "/",
    siteName: "Samuel Yuiti Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Yuiti Endo Silva | Developer Portfolio",
    description:
      "Python, SQL, financial data analysis, automation, file processing, and modern web interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-slate-950 font-sans">
        <AppProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
