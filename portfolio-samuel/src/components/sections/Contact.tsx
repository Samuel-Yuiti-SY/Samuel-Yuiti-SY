"use client";

import { Download, GitBranch, Mail, Network, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:samuelyuit@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t.sections.contact.eyebrow}
              title={t.sections.contact.title}
              description={t.sections.contact.body}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="mailto:samuelyuit@gmail.com"
                variant="primary"
                icon={<Mail size={17} />}
              >
                {t.actions.email}
              </MagneticButton>
              <MagneticButton
                href="https://github.com/Samuel-Yuiti-SY"
                target="_blank"
                rel="noreferrer"
                icon={<GitBranch size={17} />}
              >
                {t.actions.github}
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/samuelyuiti/"
                target="_blank"
                rel="noreferrer"
                icon={<Network size={17} />}
              >
                {t.actions.linkedin}
              </MagneticButton>
              <MagneticButton
                href="/resume-samuel-yuiti.txt"
                download
                icon={<Download size={17} />}
              >
                {t.actions.downloadResume}
              </MagneticButton>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card grid gap-5 rounded-2xl p-6 md:p-7"
          >
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-300 light-text-muted">
                {t.sections.contact.name}
              </span>
              <input
                required
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                placeholder={t.sections.contact.namePlaceholder}
                className="input-field"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-300 light-text-muted">
                {t.sections.contact.email}
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder={t.sections.contact.emailPlaceholder}
                className="input-field"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-300 light-text-muted">
                {t.sections.contact.message}
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder={t.sections.contact.messagePlaceholder}
                className="input-field resize-none"
              />
            </label>

            <button
              type="submit"
              className="accent-bg inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-slate-950 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              <Send size={17} />
              {t.actions.send}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
