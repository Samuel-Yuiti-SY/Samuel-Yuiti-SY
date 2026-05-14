"use client";

import { GitBranch, Mail, Network } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-10 light-border">
      <Container className="flex flex-col gap-5 text-sm text-slate-400 light-text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} - {t.footer.text}
        </p>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href="https://github.com/Samuel-Yuiti-SY"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10 light-border"
          >
            <GitBranch size={17} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/samuelyuiti/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10 light-border"
          >
            <Network size={17} />
          </a>
          <a
            aria-label="Email"
            href="mailto:samuelyuit@gmail.com"
            className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10 light-border"
          >
            <Mail size={17} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
