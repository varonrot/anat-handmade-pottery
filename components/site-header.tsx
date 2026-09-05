"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Classes", "/classes/"],
  ["Shop", "/shop/"],
  ["The Studio", "/the-studio/"],
  ["About Me", "/about-me/"],
  ["Journal", "/journal/"],
  ["Contact Me", "/contact-me/"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Anat Handmade Pottery home">
          <img src="/media/2026/02/anatLogoBig-Circle_small.webp" alt="Anat Handmade Pottery" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      )}
    </header>
  );
}
