"use client";

import { DatabaseZap, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const items = [
    { href: "#top", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#projects", label: t.nav.projects },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl light-header">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-3 rounded-xl text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] light-text"
          aria-label="Samuel Yuiti portfolio home"
        >
          <span className="accent-bg inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-950">
            <DatabaseZap size={22} />
          </span>
          <span className="hidden text-sm font-black sm:block">
            Samuel Yuiti
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white light-text-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle compact />
          <ThemeToggle />
          <MagneticButton
            href="/resume-samuel-yuiti.txt"
            download
            variant="primary"
            icon={<Download size={17} />}
            className="min-h-11 px-4"
          >
            CV
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white light-border light-card light-text lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </Container>

      <div
        className={cn(
          "grid border-t border-white/10 bg-slate-950/95 transition-all duration-300 light-header lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-2 py-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-bold text-slate-200 hover:bg-white/10 light-text"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap gap-2 pt-3">
              <LanguageToggle />
              <ThemeToggle label="Theme" />
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
