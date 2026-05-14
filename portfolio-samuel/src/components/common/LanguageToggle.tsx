"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={toggleLanguage}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10 light-border light-card light-text",
        compact ? "w-16" : "min-w-24",
      )}
    >
      {!compact ? <Languages size={17} /> : null}
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
