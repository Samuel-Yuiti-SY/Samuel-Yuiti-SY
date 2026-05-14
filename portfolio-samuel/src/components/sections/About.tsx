"use client";

import Image from "next/image";
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
          <div>
            <SectionHeader
              eyebrow={t.sections.about.eyebrow}
              title={t.sections.about.title}
            />
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-3 shadow-2xl backdrop-blur light-border light-card">
              <div className="grid gap-4 sm:grid-cols-[6.5rem_1fr] sm:items-center">
                <Image
                  src="/images/samuel-profile.png"
                  alt={t.hero.profileAlt}
                  width={140}
                  height={180}
                  className="aspect-[4/5] w-full rounded-xl object-cover sm:max-w-[6.5rem]"
                  style={{ objectPosition: "center 18%" }}
                />
                <div>
                  <p className="text-sm font-black uppercase text-[rgb(var(--accent))]">
                    Samuel Yuiti Endo Silva
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300 light-text-muted">
                    {t.sections.about.profileSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6 text-lg leading-9 text-slate-300 light-text-muted">
              {t.sections.about.body.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
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
