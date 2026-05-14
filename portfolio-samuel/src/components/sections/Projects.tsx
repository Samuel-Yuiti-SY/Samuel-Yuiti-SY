"use client";

import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Badge } from "@/components/common/Badge";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";

type ProjectLabels = {
  problem: string;
  solution: string;
  technologies: string;
  features: string;
  future: string;
  concept: string;
};

const projectLabels: Record<"pt" | "en", ProjectLabels> = {
  pt: {
    problem: "Problema",
    solution: "Solução",
    technologies: "Tecnologias",
    features: "Funcionalidades",
    future: "Melhorias futuras",
    concept: "Em desenvolvimento",
  },
  en: {
    problem: "Problem",
    solution: "Solution",
    technologies: "Technologies",
    features: "Features",
    future: "Future improvements",
    concept: "In development",
  },
} as const;

export function Projects() {
  const { language, t } = useLanguage();
  const built = projects.filter((project) => project.status === "built");
  const future = projects.filter((project) => project.status === "future");
  const l = projectLabels[language];

  return (
    <section id="projects" className="section-space">
      <Container>
        <SectionHeader
          eyebrow={t.sections.projects.eyebrow}
          title={t.sections.projects.title}
        />

        <div className="mt-12">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles size={18} className="text-[rgb(var(--accent))]" />
            <h3 className="text-xl font-black text-white light-text">
              {t.sections.projects.built}
            </h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {built.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={l}
                delay={index * 0.08}
                featured
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[rgb(var(--accent))]" />
            <h3 className="text-xl font-black text-white light-text">
              {t.sections.projects.future}
            </h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {future.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={l}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  language,
  labels,
  delay,
  featured = false,
}: {
  project: (typeof projects)[number];
  language: "pt" | "en";
  labels: ProjectLabels;
  delay: number;
  featured?: boolean;
}) {
  const content = project[language];

  return (
    <AnimatedCard
      delay={delay}
      className={featured ? "min-h-[34rem]" : "min-h-[28rem]"}
    >
      <div className="absolute inset-x-0 top-0 h-1 accent-bg" />
      <div className="mb-8 flex min-h-32 items-end rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(var(--accent),0.18),rgba(59,130,246,0.12),rgba(15,23,42,0.4))] p-5 light-border">
        <div>
          {project.status === "future" ? (
            <Badge className="mb-4">{labels.concept}</Badge>
          ) : null}
          <h3 className="text-2xl font-black text-white light-text">
            {content.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 light-text-muted">
            {content.description}
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="grid gap-4">
        <Detail title={labels.problem} value={content.problem} />
        <Detail title={labels.solution} value={content.solution} />
        <div className="grid gap-4 md:grid-cols-2">
          <Detail
            title={labels.technologies}
            value={content.technologies.join(", ")}
          />
          <Detail title={labels.future} value={content.future} />
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase text-[rgb(var(--accent))]">
            {labels.features}
          </p>
          <ul className="grid gap-2 text-sm text-slate-300 light-text-muted">
            {content.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {"liveUrl" in project && project.liveUrl ? (
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            icon={<ArrowUpRight size={17} />}
          >
            {language === "pt" ? "Link demo" : "Live demo"}
          </MagneticButton>
          <MagneticButton
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            icon={<GitBranch size={17} />}
          >
            GitHub
          </MagneticButton>
        </div>
      ) : null}
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
