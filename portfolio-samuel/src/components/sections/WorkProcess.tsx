"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { workProcess } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WorkProcess() {
  const { language, t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="section-space">
      <Container>
        <SectionHeader
          eyebrow={t.sections.process.eyebrow}
          title={t.sections.process.title}
          description={t.sections.process.description}
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block light-border" />
          <div className="grid gap-5">
            {workProcess.map((step, index) => (
              <motion.article
                key={step.id}
                initial={reducedMotion ? false : { opacity: 0, x: -24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-4 md:grid-cols-[4rem_1fr]"
              >
                <div className="hidden md:block">
                  <span className="accent-bg relative z-10 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <p className="mb-2 text-sm font-black text-[rgb(var(--accent))]">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl font-black text-white light-text">
                    {step[language].title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-8 text-slate-300 light-text-muted">
                    {step[language].description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
