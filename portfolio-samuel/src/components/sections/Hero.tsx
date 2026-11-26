"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/hooks/useLanguage";
import { RESUME_FILENAME, RESUME_URL } from "@/lib/resume";
import styles from "./Hero.module.css";

export function Hero() {
  const { language, t } = useLanguage();
  return (
    <section id="top" className={styles.hero}>
      <Container>
        <div className={styles.introLine}>
          <p>samuel-yuiti / README.md</p>
          <span>
            {language === "pt"
              ? "Desenvolvimento · Dados · Automação"
              : "Development · Data · Automation"}
          </span>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.copy}>
            <p className={styles.status}>
              <span aria-hidden />
              {t.hero.status}
            </p>
            <h1>
              Samuel
              <br />
              <span>Yuiti.</span>
            </h1>
            <p className={styles.role}>
              {language === "pt"
                ? "Python, SQL e aplicações web para resolver problemas de dados."
                : "Python, SQL and web applications to solve data problems."}
            </p>
            <p className={styles.description}>{t.hero.subtitle}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#projects">
                {t.actions.viewProjects}
                <ArrowDownRight size={18} aria-hidden />
              </a>
              <a
                className={styles.secondary}
                href={RESUME_URL}
                download={RESUME_FILENAME}
              >
                <Download size={17} aria-hidden />
                {t.actions.downloadResume}
              </a>
            </div>
            <div className={styles.socials}>
              <a
                href="https://github.com/Samuel-Yuiti-SY"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/samuelyuiti/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden />
              </a>
              <a href="mailto:samuelyuit@gmail.com">
                {t.actions.contact}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.photoFrame}>
              <Image
                src="/images/samuel-terno.webp"
                unoptimized
                alt={t.hero.profileAlt}
                width={520}
                height={640}
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className={styles.photo}
              />
            </div>
            <figcaption>
              <span>Samuel Yuiti</span>
              <p>Maringá, PR</p>
            </figcaption>
          </figure>
        </div>
        <div className={styles.skills}>
          <p>{language === "pt" ? "ÁREAS DE ATUAÇÃO" : "FOCUS AREAS"}</p>
          <ul>
            {t.hero.signals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#about" aria-label={t.nav.about}>
            <ArrowDownRight size={24} aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
