"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreference = () => {
      setReducedMotion(
        media.matches ||
          window.localStorage.getItem("portfolio-motion") === "off",
      );
    };

    syncPreference();
    media.addEventListener("change", syncPreference);
    window.addEventListener("portfolio-motion-change", syncPreference);

    return () => {
      media.removeEventListener("change", syncPreference);
      window.removeEventListener("portfolio-motion-change", syncPreference);
    };
  }, []);

  return reducedMotion;
}
