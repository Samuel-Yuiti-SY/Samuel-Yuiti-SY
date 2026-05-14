"use client";

import { Brain, Code2, Database, FileSearch, LineChart } from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { aboutHighlights } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [Code2, Database, LineChart, FileSearch, Brain];

export function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="section-space">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow={t.sections.about.eyebrow}
            title={t.sections.about.title}
          />
          <div>
            <p className="text-lg leading-9 text-slate-300 light-text-muted">
              {t.sections.about.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = icons[index];
                const content = item[language];

                return (
                  <AnimatedCard key={item.id} delay={index * 0.05}>
                    <Icon
                      className="mb-5 text-[rgb(var(--accent))]"
                      size={24}
                    />
                    <h3 className="text-lg font-black text-white light-text">
                      {content.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400 light-text-muted">
                      {content.description}
                    </p>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
