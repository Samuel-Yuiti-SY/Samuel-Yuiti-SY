"use client";

import {
  ArrowUpRight,
  BarChart3,
  FileCheck2,
  Gamepad2,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Badge } from "@/components/common/Badge";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ProjectLabels = {
  challenge: string;
  delivery: string;
  stack: string;
  highlights: string;
  roadmap: string;
  labStatus: string;
  builtStatus: string;
};

const projectLabels: Record<"pt" | "en", ProjectLabels> = {
  pt: {
    challenge: "Contexto",
    delivery: "Solução",
    stack: "Stack",
    highlights: "Destaques",
    roadmap: "Evolução",
    labStatus: "Experimento em andamento",
    builtStatus: "Projeto criado",
  },
  en: {
    challenge: "Context",
    delivery: "Solution",
    stack: "Stack",
    highlights: "Highlights",
    roadmap: "Evolution",
    labStatus: "Experiment in progress",
    builtStatus: "Built project",
  },
};

export function Projects() {
  const { language, t } = useLanguage();
  const built = projects.filter((project) => project.status === "built");
  const labs = projects.filter((project) => project.status === "future");
  const labels = projectLabels[language];

  return (
    <section id="projects" className="section-space relative overflow-hidden">
      <div className="absolute inset-x-0 top-20 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(var(--accent),0.14),transparent_65%)] blur-3xl" />
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t.sections.projects.eyebrow}
            title={t.sections.projects.title}
            description={t.sections.projects.description}
          />
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-slate-300 light-border light-card light-text-muted lg:block">
            Python / SQL / Next.js / Vercel
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={18} className="text-[rgb(var(--accent))]" />
            <h3 className="text-2xl font-black text-white light-text">
              {t.sections.projects.built}
            </h3>
          </div>
          <div className="grid gap-6">
            {built.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 light-border light-card md:p-7">
          <div className="mb-7 max-w-3xl">
            <Badge className="accent-border accent-soft mb-4">
              {t.sections.projects.future}
            </Badge>
            <p className="text-base leading-8 text-slate-300 light-text-muted">
              {t.sections.projects.labsDescription}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {labs.map((project, index) => (
              <LabCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  language,
  labels,
  index,
}: {
  project: (typeof projects)[number];
  language: "pt" | "en";
  labels: ProjectLabels;
  index: number;
}) {
  const content = project[language];
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 52, scale: 0.98 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(140deg,rgba(15,23,42,0.94),rgba(15,23,42,0.7))] p-5 shadow-[0_30px_120px_rgba(2,6,23,0.38)] light-border light-card md:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent),0.85),transparent)]" />
      <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 light-border light-inner-panel">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--accent),0.22),transparent_45%,rgba(34,197,94,0.12))]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge className="accent-border accent-soft">
                  {labels.builtStatus}
                </Badge>
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <p className="text-sm font-black uppercase text-[rgb(var(--accent))]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-white light-text md:text-4xl">
                {content.title}
              </h3>
              <ProjectMockup projectId={project.id} language={language} />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {content.technologies.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/10 p-3 text-center text-xs font-black text-white backdrop-blur light-border light-card light-text"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 light-text-muted">
              {content.description}
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <Detail title={labels.challenge} value={content.problem} />
              <Detail title={labels.delivery} value={content.solution} />
            </div>

            <div className="mt-7">
              <p className="mb-4 text-xs font-black uppercase text-[rgb(var(--accent))]">
                {labels.highlights}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-200 light-border light-card light-text-muted"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {"liveUrl" in project && project.liveUrl ? (
              <MagneticButton
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                icon={<ArrowUpRight size={17} />}
              >
                {language === "pt" ? "Link demo" : "Live demo"}
              </MagneticButton>
            ) : null}
            {"githubUrl" in project && project.githubUrl ? (
              <MagneticButton
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                icon={<GitBranch size={17} />}
              >
                GitHub
              </MagneticButton>
            ) : null}
            <span className="text-sm font-bold text-slate-400 light-text-muted">
              {content.technologies.join(" / ")}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMockup({
  projectId,
  language,
}: {
  projectId: string;
  language: "pt" | "en";
}) {
  if (projectId === "carbontrack") {
    const labels =
      language === "pt"
        ? ["CO₂ evitado", "Frota", "Relatórios"]
        : ["CO₂ avoided", "Fleet", "Reports"];

    return (
      <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl light-border">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[rgb(var(--accent))]">
            <BarChart3 size={18} />
            <span className="text-xs font-black uppercase">
              {language === "pt" ? "Preview SaaS" : "SaaS preview"}
            </span>
          </div>
          <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-black text-emerald-300">
            KPI
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {labels.map((label, itemIndex) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.07] p-3 light-border"
            >
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-[rgb(var(--accent))]"
                  style={{ width: `${52 + itemIndex * 18}%` }}
                />
              </div>
              <p className="mt-3 text-xs font-bold text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === "gamedex") {
    const rows =
      language === "pt"
        ? ["Importação Steam", "Catálogo PC", "Comparação de preços"]
        : ["Steam import", "PC catalog", "Price comparison"];

    return (
      <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl light-border">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[rgb(var(--accent))]">
            <Gamepad2 size={18} />
            <span className="text-xs font-black uppercase">
              {language === "pt" ? "Preview produto" : "Product preview"}
            </span>
          </div>
          <span className="rounded-full bg-violet-400/12 px-3 py-1 text-xs font-black text-violet-300">
            PC only
          </span>
        </div>
        <div className="grid gap-3">
          {rows.map((row, itemIndex) => (
            <div
              key={row}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 light-border"
            >
              <span className="accent-bg inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black text-slate-950">
                {itemIndex + 1}
              </span>
              <span className="text-xs font-bold text-slate-300">{row}</span>
              <span className="h-2 w-14 rounded-full bg-[rgb(var(--accent))]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const rows =
    language === "pt"
      ? ["Upload OFX", "Normalização", "Download corrigido"]
      : ["OFX upload", "Normalization", "Corrected download"];

  return (
    <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl light-border">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[rgb(var(--accent))]">
          <FileCheck2 size={18} />
          <span className="text-xs font-black uppercase">
            {language === "pt" ? "Fluxo OFX" : "OFX flow"}
          </span>
        </div>
        <span className="rounded-full bg-sky-400/12 px-3 py-1 text-xs font-black text-sky-300">
          Vercel
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((row, itemIndex) => (
          <div
            key={row}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 light-border"
          >
            <span className="accent-bg inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs font-black text-slate-950">
              {itemIndex + 1}
            </span>
            <span className="text-xs font-bold text-slate-300">{row}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LabCard({
  project,
  language,
  labels,
  delay,
}: {
  project: (typeof projects)[number];
  language: "pt" | "en";
  labels: ProjectLabels;
  delay: number;
}) {
  const content = project[language];

  return (
    <AnimatedCard className="min-h-0 p-5 md:p-5" delay={delay}>
      <Badge className="mb-5">{labels.labStatus}</Badge>
      <h3 className="text-xl font-black text-white light-text">
        {content.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-400 light-text-muted">
        {content.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </AnimatedCard>
  );
}

function Detail({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-black uppercase text-[rgb(var(--accent))]">
        {title}
      </p>
      <p className="text-sm leading-7 text-slate-300 light-text-muted">
        {value}
      </p>
    </div>
  );
}
