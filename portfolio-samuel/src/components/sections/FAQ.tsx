"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { faqItems } from "@/data/faq";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState<string>(faqItems[0].id);

  return (
    <section id="faq" className="section-space">
      <Container>
        <SectionHeader
          eyebrow={t.sections.faq.eyebrow}
          title={t.sections.faq.title}
        />

        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 light-border">
          {faqItems.map((item, index) => {
            const open = active === item.id;
            const content = item[language];

            return (
              <div key={item.id} className="bg-white/5 light-card">
                <button
                  type="button"
                  onClick={() => setActive(open ? "" : item.id)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-7"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-black text-[rgb(var(--accent))]">
                      0{index + 1}
                    </span>
                    <span className="text-base font-black text-white md:text-lg light-text">
                      {content.question}
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-slate-400 transition",
                      open && "rotate-180 text-[rgb(var(--accent))]",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 leading-8 text-slate-300 md:px-7 light-text-muted">
                        {content.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
