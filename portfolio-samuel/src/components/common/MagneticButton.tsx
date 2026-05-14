"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
};

const variants = {
  primary:
    "accent-bg text-slate-950 shadow-[0_18px_60px_rgba(var(--accent),0.22)] hover:shadow-[0_22px_80px_rgba(var(--accent),0.28)]",
  secondary:
    "border border-white/10 bg-white/10 text-white backdrop-blur hover:bg-white/10 light-border light-card light-text",
  ghost:
    "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/10 light-text-muted",
};

export function MagneticButton({
  children,
  className,
  variant = "secondary",
  icon,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      {...props}
      animate={reducedMotion ? undefined : position}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.2 }}
      onMouseMove={(event) => {
        if (!reducedMotion) {
          const bounds = event.currentTarget.getBoundingClientRect();
          setPosition({
            x: (event.clientX - bounds.left - bounds.width / 2) * 0.12,
            y: (event.clientY - bounds.top - bounds.height / 2) * 0.18,
          });
        }

        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        setPosition({ x: 0, y: 0 });
        onMouseLeave?.(event);
      }}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
        variants[variant],
        className,
      )}
    >
      {icon}
      {children}
    </motion.a>
  );
}
