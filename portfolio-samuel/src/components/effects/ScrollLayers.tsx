"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function ScrollLayers() {
  const scope = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !scope.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to("[data-layer='one']", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-layer='two']", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, scope);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        data-layer="one"
        className="absolute inset-x-0 top-0 h-96 bg-[linear-gradient(100deg,rgba(var(--accent),0.12),rgba(34,197,94,0.08),transparent_70%)] blur-3xl"
      />
      <div
        data-layer="two"
        className="absolute inset-x-0 bottom-0 h-96 bg-[linear-gradient(140deg,transparent,rgba(59,130,246,0.1),rgba(var(--accent),0.08))] blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(2,6,23,0.35))]" />
    </div>
  );
}
