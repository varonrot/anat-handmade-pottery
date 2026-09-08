import type { Metadata } from "next";
import Script from "next/script";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-40Y0QQ1M0T";

export const metadata: Metadata = {
  metadataBase: new URL("https://anatpottery.co.uk"),
  title: { default: "Anat Handmade Pottery | Pottery Classes in Ealing, London", template: "%s | Anat Handmade Pottery" },
  description: "Handmade ceramics and small, personalised pottery classes in a boutique garden studio in Ealing, West London.",
  icons: { icon: "/media/2026/02/cropped-site-icon.webp", shortcut: "/media/2026/02/cropped-site-icon.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
