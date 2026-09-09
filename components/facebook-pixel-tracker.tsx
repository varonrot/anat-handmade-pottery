"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function FacebookPixelTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // The base script in layout.tsx already fires PageView on the initial load.
    // This effect tracks subsequent client-side route transitions in Next.js.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

