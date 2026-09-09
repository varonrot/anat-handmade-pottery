import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Anat Varon Moneta", description: "Meet Anat Varon Moneta, the ceramic artist and teacher behind Anat Handmade Pottery in Ealing, West London." };

export default function AboutPage() {
  return <main id="main">
    <section className="about-hero section-shell">
      <div className="about-image">
        <img src="/media/2026/01/Anat-Varon-Moneta-B.webp" alt="Anat Varon Moneta working at the potter's wheel" />
      </div>
      <div className="about-copy">
        <h1>The Journey from MBA to Mud</h1>
        <h2 className="about-subtitle">Artist, Teacher, and Founder of Anat Handmade Pottery</h2>
        <p className="lead">My love for ceramics started when I was just eight years old. It was a childhood passion that stayed with me, even as I moved into the business world to complete my BSc and MBA. But no matter how far I went in my career, I always found myself drawn back to the potter’s wheel. Eventually, I decided to leave the corporate path behind to follow my heart and become a full-time potter.</p>
        <p>I studied at the Bezalel Academy of Arts and Design, where I truly learned the craft and technical side of working with clay. During those years of study, I opened my first studio, discovering how much I loved both creating my own pieces and teaching others how to do the same.</p>
        <p>Now, I work from my boutique garden studio in West London, creating porcelain and stoneware pieces. My work is all about the details. I love combining the clean lines of wheel-throwing with colourful slips and screen prints that I produce myself.</p>
        <p>For me, pottery is a way to slow down and be present. Whether I’m working on a new collection or helping a student during a workshop, my goal is to share the simple, handmade joy that comes from working with clay.</p>
        <div className="signature">Anat Varon Moneta</div>
        <Link className="button primary" href="/the-studio/">Step Inside My Studio</Link>
      </div>
    </section>
  </main>;
}
