import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Anat Varon Moneta", description: "Meet Anat Varon Moneta, the ceramic artist and teacher behind Anat Handmade Pottery in Ealing, West London." };

export default function AboutPage() {
  return <main id="main">
    <section className="about-hero section-shell"><div className="about-image"><img src="/media/2026/01/Anat-Varon-Moneta-B.webp" alt="Anat Varon Moneta working at the potter's wheel" /></div><div className="about-copy"><p className="eyebrow">Artist · Teacher · Founder</p><h1>The Journey from MBA to Mud</h1><p className="lead">My love for ceramics started when I was eight years old. It stayed with me through a career in business, until I decided to follow my heart and become a full-time potter.</p><p>I studied at the Bezalel Academy of Arts and Design, where I learned both the craft and technical side of clay. During those years I opened my first studio and discovered how much I loved creating my own pieces and teaching others.</p><p>Today I work from my boutique garden studio in West London, creating porcelain and stoneware. I combine clean wheel-thrown forms with colourful slips and screen prints that I produce myself.</p><p>For me, pottery is a way to slow down and be present. Whether I’m making a new collection or guiding a student, my aim is to share the simple, handmade joy of working with clay.</p><div className="signature">Anat Varon Moneta</div><Link className="button primary" href="/the-studio/">Step Inside My Studio</Link></div></section>
  </main>;
}
