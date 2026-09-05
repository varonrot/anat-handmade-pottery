import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anatpottery.co.uk"),
  title: { default: "Anat Handmade Pottery | Pottery Classes in Ealing, London", template: "%s | Anat Handmade Pottery" },
  description: "Handmade ceramics and small, personalised pottery classes in a boutique garden studio in Ealing, West London.",
  icons: { icon: "/media/2026/02/cropped-site-icon.webp", shortcut: "/media/2026/02/cropped-site-icon.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
