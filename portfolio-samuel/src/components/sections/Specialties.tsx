"use client";

import {
  Bot,
  ChartNoAxesCombined,
  Database,
  FileCode2,
  Workflow,
} from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { specialties } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [FileCode2, Database, ChartNoAxesCombined, Workflow, Bot];

export function Specialties() {
  const { language, t } = useLanguage();

  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow={t.sections.specialties.eyebrow}
          title={t.sections.specialties.title}
          description={t.sections.specialties.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {specialties.map((item, index) => {
            const Icon = icons[index];
            const content = item[language];

            return (
              <AnimatedCard key={item.id} delay={index * 0.05}>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[rgb(var(--accent))] light-border light-card">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-black text-white light-text">
                  {content.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400 light-text-muted">
                  {content.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
