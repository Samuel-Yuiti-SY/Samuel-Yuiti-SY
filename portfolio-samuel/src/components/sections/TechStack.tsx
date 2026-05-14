"use client";

import { Code2, Database, LayoutDashboard, Wrench } from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Marquee } from "@/components/effects/Marquee";
import { ParallaxText } from "@/components/effects/ParallaxText";
import { Container } from "@/components/layout/Container";
import { techStack } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [Code2, LayoutDashboard, Database, Wrench];

export function TechStack() {
  const { language, t } = useLanguage();
  const midpoint = Math.ceil(techStack.marquee.length / 2);
  const firstRow = techStack.marquee.slice(0, midpoint);
  const secondRow = techStack.marquee.slice(midpoint);
  const workflowLabels =
    language === "pt"
      ? [
          "Tratamento de arquivos",
          "Validação SQL",
          "Dashboards",
          "Deploy na Vercel",
        ]
      : ["File processing", "SQL validation", "Dashboards", "Vercel deploy"];

  return (
    <section id="stack" className="section-space overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow={t.sections.stack.eyebrow}
          title={t.sections.stack.title}
          description={t.sections.stack.description}
        />
      </Container>

      <div className="mt-10 space-y-4">
        <Marquee items={firstRow} />
        <Marquee items={secondRow} reverse />
      </div>

      <Container className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {techStack.categories.map((category, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <AnimatedCard key={category.id} delay={index * 0.05}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="accent-soft accent-border inline-flex h-10 w-10 items-center justify-center rounded-xl text-[rgb(var(--accent))]">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-black text-white light-text">
                    {category[language].title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <div className="mt-6 h-px bg-[linear-gradient(90deg,rgba(var(--accent),0.55),transparent)]" />
                <p className="mt-4 text-xs font-bold uppercase text-slate-500">
                  {language === "pt" ? "Uso prático" : "Practical use"}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>

      <Container className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 light-border light-card">
          <div className="grid gap-3 md:grid-cols-4">
            {workflowLabels.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-xs font-black uppercase text-slate-300 light-border light-card light-text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <ParallaxText>PYTHON SQL AUTOMATION DATA</ParallaxText>
    </section>
  );
}
