"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ParallaxText({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <div ref={ref} className="overflow-hidden py-8">
      <motion.div
        style={reducedMotion ? undefined : { x }}
        className="flex min-w-max gap-6 text-5xl font-black text-white/5 md:text-7xl light-watermark"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}
