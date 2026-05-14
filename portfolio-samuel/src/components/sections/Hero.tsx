"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      <Container className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
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

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 34 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="max-w-5xl text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl light-text"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-3xl text-xl font-black leading-8 text-slate-100 md:text-2xl md:leading-10 light-text"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg md:leading-9 light-text-muted"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {t.hero.signals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-black text-slate-200 backdrop-blur light-border light-card light-text-muted"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
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
              href="/resume-samuel-yuiti.pdf"
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
            transition={{ duration: 0.7, delay: 0.42 }}
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
          className="relative mx-auto min-h-[640px] w-full max-w-[38rem] lg:min-h-[690px]"
        >
          <div className="absolute inset-x-8 top-6 h-[34rem] rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(var(--accent),0.34),rgba(34,197,94,0.18),transparent)] blur-3xl" />

          <div className="relative z-10 mx-auto w-[min(100%,32rem)] rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_32px_120px_rgba(2,6,23,0.5)] backdrop-blur-2xl light-border light-card">
            <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-slate-950 light-border light-inner-panel">
              <Image
                src="/images/samuel-profile.png"
                alt={t.hero.profileAlt}
                width={520}
                height={640}
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="aspect-[3/4] h-auto w-full object-cover"
                style={{ objectPosition: "center 12%" }}
              />
            </div>
            <div className="px-3 py-4">
              <p className="text-sm font-black uppercase text-[rgb(var(--accent))]">
                Samuel Yuiti Endo Silva
              </p>
              <p className="mt-2 text-lg font-black text-white light-text">
                {t.hero.photoCaption}
              </p>
            </div>
          </div>

          {t.hero.keywords.slice(0, 6).map((keyword, index) => (
            <motion.span
              key={keyword}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
                    }
              }
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={[
                "absolute z-20 hidden rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-sm font-black text-white shadow-xl backdrop-blur light-border light-card light-text sm:inline-flex",
                [
                  "-left-20 top-8",
                  "-right-16 top-16",
                  "-left-24 top-[42%]",
                  "-right-20 top-[47%]",
                  "-left-12 bottom-28",
                  "-right-10 bottom-20",
                ][index],
              ].join(" ")}
            >
              {keyword}
            </motion.span>
          ))}

          <div className="relative z-20 mx-auto mt-5 grid w-[min(100%,32rem)] gap-3 sm:grid-cols-3">
            {t.hero.pipeline.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/10 p-3 text-center text-xs font-black text-white backdrop-blur light-border light-card light-text"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="relative z-20 mx-auto mt-4 w-[min(100%,32rem)] rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-2xl backdrop-blur-xl light-border light-card">
            <p className="text-xs font-black uppercase text-slate-400 light-text-muted">
              {t.hero.focusLabel}
            </p>
            <p className="mt-2 text-sm font-black leading-6 text-white light-text">
              {t.hero.focusText}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
