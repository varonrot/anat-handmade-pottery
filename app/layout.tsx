import type { Metadata } from "next";
import { CookieBanner } from "@/components/cookie-banner";
import { ConsentAnalytics } from "@/components/consent-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { FacebookPixelTracker } from "@/components/facebook-pixel-tracker";
import "./globals.css";

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
        <ConsentAnalytics />
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
