import type { Metadata } from "next";
import Script from "next/script";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { FacebookPixelTracker } from "@/components/facebook-pixel-tracker";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-40Y0QQ1M0T";
const FB_PIXEL_ID = "1645945813090659";

export const metadata: Metadata = {
  metadataBase: new URL("https://anatpottery.co.uk"),
  title: { default: "Anat Handmade Pottery | Pottery Classes in Ealing, London", template: "%s | Anat Handmade Pottery" },
  description: "Handmade ceramics and small, personalised pottery classes in a boutique garden studio in Ealing, West London.",
  icons: { icon: "/media/2026/02/cropped-site-icon.webp", shortcut: "/media/2026/02/cropped-site-icon.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Libre+Baskerville:ital@0;1&family=Playfair+Display:ital,wght@0,600;1,600&family=Rosario:wght@300;400;500;600&display=swap"
        />
        <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'></link>
      </head>
      <body>
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <FacebookPixelTracker />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
