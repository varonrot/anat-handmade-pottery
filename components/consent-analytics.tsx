"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const COOKIE_CONSENT_KEY = "anat-pottery-cookie-consent";
const GA_MEASUREMENT_ID = "G-40Y0QQ1M0T";
const FB_PIXEL_ID = "1645945813090659";

export function ConsentAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const updateConsent = () => setConsent(window.localStorage.getItem(COOKIE_CONSENT_KEY));
    updateConsent();
    window.addEventListener("anat-cookie-consent", updateConsent);
    return () => window.removeEventListener("anat-cookie-consent", updateConsent);
  }, []);

  if (consent !== "accepted") return null;

  return <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}
    </Script>
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  </>;
}
