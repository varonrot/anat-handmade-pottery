"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function FacebookPixelTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const analyticsWindow = window as unknown as {
      fbq?: (...args: unknown[]) => void;
      gtag?: (...args: unknown[]) => void;
    };

    if (!isFirstRender.current && typeof analyticsWindow.fbq === "function") {
      analyticsWindow.fbq("track", "PageView");
    }

    if (pathname === "/thank-you") {
      analyticsWindow.fbq?.("track", "Lead");
      analyticsWindow.gtag?.("event", "generate_lead", { method: "enquiry_form" });
    }

    isFirstRender.current = false;
  }, [pathname]);

  return null;
}

