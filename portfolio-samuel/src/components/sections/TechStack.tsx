"use client";

import { Layers3 } from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Badge } from "@/components/common/Badge";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Marquee } from "@/components/effects/Marquee";
import { ParallaxText } from "@/components/effects/ParallaxText";
import { Container } from "@/components/layout/Container";
import { techStack } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

export function TechStack() {
  const { language, t } = useLanguage();

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
        <Marquee items={techStack.marquee} />
        <Marquee items={techStack.marquee} reverse />
      </div>

      <Container className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {techStack.categories.map((category, index) => (
            <AnimatedCard key={category.id} delay={index * 0.05}>
              <div className="mb-5 flex items-center gap-3">
                <span className="accent-soft accent-border inline-flex h-10 w-10 items-center justify-center rounded-xl text-[rgb(var(--accent))]">
                  <Layers3 size={19} />
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
            </AnimatedCard>
          ))}
        </div>
      </Container>

      <ParallaxText>PYTHON SQL AUTOMATION DATA</ParallaxText>
    </section>
  );
}
