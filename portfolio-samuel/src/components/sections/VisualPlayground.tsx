"use client";

import { Check, Palette, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const accents = [
  { id: "blue", label: "Azul", rgb: "59 130 246", solid: "#3b82f6" },
  { id: "green", label: "Verde", rgb: "34 197 94", solid: "#22c55e" },
  { id: "cyan", label: "Ciano", rgb: "34 211 238", solid: "#22d3ee" },
] as const;

export function VisualPlayground() {
  const { language, t } = useLanguage();
  const [accent, setAccent] = useState(() => {
    if (typeof window === "undefined") return "cyan";
    return window.localStorage.getItem("portfolio-accent") ?? "cyan";
  });
  const [motion, setMotion] = useState(() => {
    if (typeof window === "undefined") return "on";
    return window.localStorage.getItem("portfolio-motion") ?? "on";
  });
  const [density, setDensity] = useState(() => {
    if (typeof window === "undefined") return "comfortable";
    return window.localStorage.getItem("portfolio-density") ?? "comfortable";
  });

  useEffect(() => {
    const selected = accents.find((item) => item.id === accent) ?? accents[2];
    document.documentElement.style.setProperty("--accent", selected.rgb);
    document.documentElement.style.setProperty(
      "--accent-solid",
      selected.solid,
    );
    window.localStorage.setItem("portfolio-accent", selected.id);
  }, [accent]);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-off", motion === "off");
    window.localStorage.setItem("portfolio-motion", motion);
    window.dispatchEvent(new Event("portfolio-motion-change"));
  }, [motion]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "compact-density",
      density === "compact",
    );
    window.localStorage.setItem("portfolio-density", density);
  }, [density]);

  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow={t.sections.playground.eyebrow}
            title={t.sections.playground.title}
            description={t.sections.playground.description}
          />

          <div className="glass-card rounded-2xl p-6 md:p-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="accent-bg inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-950">
                <SlidersHorizontal size={20} />
              </span>
              <h3 className="text-xl font-black text-white light-text">
                {language === "pt" ? "Controles" : "Controls"}
              </h3>
            </div>

            <div className="grid gap-6">
              <ControlRow label={t.sections.playground.theme}>
                <ThemeToggle label={language === "pt" ? "Tema" : "Theme"} />
              </ControlRow>

              <ControlRow label={t.sections.playground.language}>
                <LanguageToggle />
              </ControlRow>

              <ControlRow label={t.sections.playground.accent}>
                <div className="flex flex-wrap gap-2">
                  {accents.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAccent(item.id)}
                      className={cn(
                        "inline-flex h-11 items-center gap-2 rounded-xl border px-3 text-sm font-bold text-white transition light-text",
                        accent === item.id
                          ? "border-white/30 bg-white/10 light-border"
                          : "border-white/10 bg-white/5 light-border light-card",
                      )}
                    >
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.solid }}
                      />
                      {language === "pt"
                        ? item.label
                        : item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                      {accent === item.id ? <Check size={15} /> : null}
                    </button>
                  ))}
                </div>
              </ControlRow>

              <ControlRow label={t.sections.playground.animations}>
                <Segmented
                  value={motion}
                  options={[
                    { id: "on", label: t.sections.playground.enabled },
                    { id: "off", label: t.sections.playground.disabled },
                  ]}
                  onChange={setMotion}
                />
              </ControlRow>

              <ControlRow label={t.sections.playground.density}>
                <Segmented
                  value={density}
                  options={[
                    {
                      id: "comfortable",
                      label: t.sections.playground.comfortable,
                    },
                    { id: "compact", label: t.sections.playground.compact },
                  ]}
                  onChange={setDensity}
                />
              </ControlRow>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(var(--accent),0.16),rgba(15,23,42,0.45))] p-5 light-border">
              <div className="mb-4 flex items-center gap-2 text-[rgb(var(--accent))]">
                <Palette size={18} />
                <span className="text-sm font-black">
                  {language === "pt" ? "Prévia visual" : "Visual preview"}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Python", "SQL", "Dashboards"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/10 p-4 text-sm font-black text-white light-border light-card light-text"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ControlRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 border-b border-white/10 pb-5 last:border-b-0 last:pb-0 light-border md:grid-cols-[12rem_1fr] md:items-center">
      <p className="text-sm font-black text-slate-300 light-text-muted">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

function Segmented({
  value,
  options,
  onChange,
}: {
  value: string;
  options: Array<{ id: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 light-border light-card">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={cn(
            "rounded-lg px-3 py-2 text-sm font-bold transition",
            value === option.id
              ? "accent-bg text-slate-950"
              : "text-slate-300 hover:text-white light-text-muted",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
