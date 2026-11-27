"use client";

import {
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Badge } from "@/components/common/Badge";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";


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

      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t.sections.projects.eyebrow}
            title={t.sections.projects.title}
            description={t.sections.projects.description}
          />

        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">

            <h3 className="text-2xl font-black text-white light-text">
              {t.sections.projects.built}
            </h3>
          </div>
          <div className="grid gap-6">
            {built.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
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
}: {
  project: (typeof projects)[number];
  language: "pt" | "en";
  labels: ProjectLabels;
}) {
  const content = project[language];
  return (
    <article className="border-t border-[var(--portfolio-border)] py-8">
      <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <h3 className="mb-4 text-3xl font-bold text-white light-text">{content.title}</h3>
          <Image
            src={`/images/${project.id}-interface.webp`}
            alt={language === "pt" ? `Tela inicial de ${content.title}` : `${content.title} home screen`}
            width={900}
            height={563}
            unoptimized
            className="w-full border border-[var(--portfolio-border)]"
          />
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
                {language === "pt" ? "Abrir projeto" : "Live demo"}
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
    </article>
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
