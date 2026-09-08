"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "anat-pottery-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: "#efb0a7",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.08)",
        padding: "14px 20px",
        color: "#111",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.45 }}>
          We use cookies to ensure that we give you the best experience on our pottery studio website. If you continue to use this site we will assume that you are happy with it.
        </p>
        <button
          type="button"
          onClick={acceptCookies}
          style={{
            border: 0,
            borderRadius: 4,
            background: "#789b82",
            color: "#111",
            padding: "9px 14px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
