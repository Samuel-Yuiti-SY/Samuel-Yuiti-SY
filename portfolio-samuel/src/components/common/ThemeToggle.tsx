"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ label }: { label?: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10 light-border light-card light-text",
        label ? "min-w-28 justify-center" : "w-11 justify-center",
      )}
    >
      {isDark ? <Moon size={17} /> : <Sun size={17} />}
      {label ? <span>{label}</span> : null}
    </button>
  );
}
