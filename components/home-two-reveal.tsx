"use client";

import { useEffect } from "react";

export function HomeTwoReveal() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".home-two");
    if (!page) return;

    const items = Array.from(page.querySelectorAll<HTMLElement>(".home-two-reveal"));
    page.classList.add("home-two-reveal-enabled");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8%" });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
