"use client";

import { useEffect } from "react";

export function HomeReveal() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".original-home");
    if (!page) return;

    const elements = Array.from(page.querySelectorAll<HTMLElement>(".reveal-up"));
    page.classList.add("reveal-enabled");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => page.classList.remove("reveal-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      page.classList.remove("reveal-enabled");
    };
  }, []);

  return null;
}
