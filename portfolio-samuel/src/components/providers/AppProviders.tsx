"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/hooks/useLanguage";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange={false}
      enableSystem={false}
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
