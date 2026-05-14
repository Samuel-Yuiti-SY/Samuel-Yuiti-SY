"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { experienceItems } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow={t.sections.experience.eyebrow}
            title={t.sections.experience.title}
            description={t.sections.experience.body}
          />
          <AnimatedCard className="p-0">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 light-border">
              {experienceItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 bg-slate-950/80 p-5 light-card"
                >
                  <span className="accent-soft mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[rgb(var(--accent))]">
                    <CheckCircle2 size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">
                      0{index + 1}
                    </p>
                    <p className="mt-1 font-bold text-slate-200 light-text">
                      {item[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}
