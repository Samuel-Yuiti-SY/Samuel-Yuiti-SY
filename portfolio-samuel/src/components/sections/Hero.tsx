"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  GitBranch,
  Network,
  Mail,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { MagneticButton } from "@/components/common/MagneticButton";
import { Container } from "@/components/layout/Container";
import { ScrollLayers } from "@/components/effects/ScrollLayers";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="grid-bg relative isolate min-h-screen overflow-hidden pt-28"
    >
      <ScrollLayers />
      <Container className="grid min-h-[calc(100vh-6rem)] items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
        <div>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="accent-border accent-soft mb-7">
              <Sparkles size={14} />
              {t.hero.status}
            </Badge>
          </motion.div>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-5 text-sm font-black uppercase text-[rgb(var(--accent))]"
          >
            {t.hero.role}
          </motion.p>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 34 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="max-w-4xl text-3xl font-black leading-[1.04] text-white sm:text-4xl md:text-5xl light-text"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg light-text-muted"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#projects"
              variant="primary"
              icon={<ArrowDownRight size={18} />}
            >
              {t.actions.viewProjects}
            </MagneticButton>
            <MagneticButton
              href="/resume-samuel-yuiti.txt"
              download
              icon={<Download size={18} />}
            >
              {t.actions.downloadResume}
            </MagneticButton>
            <MagneticButton
              href="mailto:samuelyuit@gmail.com"
              icon={<Mail size={18} />}
            >
              {t.actions.contact}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400 light-text-muted"
          >
            <a
              href="https://github.com/Samuel-Yuiti-SY"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-1 py-1 font-bold transition hover:text-white light-text-muted"
            >
              <GitBranch size={17} />
              {t.actions.github}
            </a>
            <a
              href="https://www.linkedin.com/in/samuelyuiti/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-1 py-1 font-bold transition hover:text-white light-text-muted"
            >
              <Network size={17} />
              {t.actions.linkedin}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 30 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="relative min-h-[520px]"
        >
          <div className="absolute inset-x-0 top-4 mx-auto h-[30rem] max-w-[34rem] rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl backdrop-blur light-card light-border">
            <div className="grid h-full grid-rows-[auto_1fr_auto] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(15,23,42,0.72))] p-5 light-inner-panel">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 light-border">
                <span className="text-sm font-black text-white light-text">
                  financial_pipeline.py
                </span>
                <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-bold text-emerald-300">
                  running
                </span>
              </div>
              <div className="space-y-4 py-6 font-mono text-sm leading-7 text-slate-300 light-text-muted">
                <p>
                  <span className="text-sky-300">query</span> transactions where
                  status = pending
                </p>
                <p>
                  <span className="text-emerald-300">validate</span> required
                  fields and file layout
                </p>
                <p>
                  <span className="text-cyan-300">normalize</span> OFX records
                  for import
                </p>
                <p>
                  <span className="text-lime-300">export</span> reconciliation
                  summary
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["SQL", "Python", "Next.js"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-black text-white light-border light-card light-text"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {t.hero.keywords.map((keyword, index) => (
            <motion.span
              key={keyword}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: index % 2 === 0 ? [0, -12, 0] : [0, 12, 0],
                    }
              }
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white shadow-xl backdrop-blur light-border light-card light-text"
              style={{
                left: `${8 + (index % 4) * 23}%`,
                top: `${index < 4 ? 0 + index * 18 : 66 + (index - 4) * 9}%`,
              }}
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
