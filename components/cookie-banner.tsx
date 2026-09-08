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
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="cookie-banner__inner">
        <p>
          We use cookies to ensure that we give you the best experience on our pottery studio website. If you continue to use this site we will assume that you are happy with it.
        </p>
        <button type="button" onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
}
