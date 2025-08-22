"use client";
import { useEffect, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../containers/active-section";
import type { SectionName } from "./types";
import { useRouter } from "next/navigation";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const router = useRouter();

  useLayoutEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as | PerformanceNavigationTiming | undefined;

    if (nav?.type === "back_forward" || nav?.type === "navigate") {
       window.history.replaceState(null, "","/");
       setActiveSection("#");
       window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [setActiveSection]);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      router.replace(sectionName, { scroll: false });
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, router]);

  return { ref };
}
