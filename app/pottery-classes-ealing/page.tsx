import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MapPin, Sparkles, Users } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { LandingReveal } from "@/components/landing-reveal";

export const metadata: Metadata = {
  title: "Private Pottery Classes in Ealing, West London",
  description: "Slow down, get creative and make your own pottery in Anat’s boutique South Ealing garden studio. Private classes for beginners, couples and adults.",
};

const classes = [
  {
    title: "Private Pottery Experience",
    copy: "A relaxed one-to-one session tailored to you. Choose wheel-throwing or hand-building and create 2–3 pieces with Anat beside you.",
    price: "£100",
    duration: "2.5 hours",
    image: "/media/2026/02/20230503_111500.webp",
    href: "/classes/private-pottery-class/",
  },
  {
    title: "Pottery for Two",
    copy: "Share the wheel with someone special. A private creative experience for couples, friends or family — no experience needed.",
    price: "£180",
    oldPrice: "£200",
    duration: "2.5 hours",
    image: "/media/2026/02/pottery42Lesson.webp",
    href: "/classes/pottery-for-2/",
  },
  {
    title: "The Four-Week Journey",
    copy: "Learn the complete process: throwing or hand-building, refining, decorating and glazing — with ten hours of private tuition.",
    price: "£320",
    oldPrice: "£400",
    duration: "4 × 2.5 hours",
    image: "/media/2026/02/wheel-throwing-course.webp",
    href: "/classes/a-throwing-journey-for-adults/",
  },
];

export default function PotteryClassesLandingPage() {
  return (
    <main id="main" className="landing-page">
      <LandingReveal />

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <span className="landing-kicker"><Sparkles aria-hidden="true" /> Private pottery classes in Ealing</span>
          <h1>Make something beautiful <em>with your own hands.</em></h1>
          <p>Step away from the noise and into a calm, boutique garden studio in South Ealing. Learn pottery at your own pace, with personal guidance from artist and teacher Anat Varon Moneta.</p>
          <div className="landing-actions">
            <a className="landing-primary" href="#classes">Find your class <ArrowRight aria-hidden="true" /></a>
            <a className="landing-secondary" href="#enquire">Ask Anat a question</a>
          </div>
          <div className="landing-trust" aria-label="Class highlights">
            <span><Check aria-hidden="true" /> Beginner-friendly</span>
            <span><Users aria-hidden="true" /> Private &amp; personal</span>
            <span><MapPin aria-hidden="true" /> South Ealing, W5</span>
          </div>
        </div>
        <div className="landing-hero-visual">
          <img src="/media/2026/02/pottery-classes.webp" alt="Hands shaping clay on a pottery wheel in Anat's studio" />
          <div className="landing-hero-note"><strong>Your first piece starts here.</strong><span>All materials, glazing and firing included.</span></div>
        </div>
      </section>

      <section className="landing-promise landing-reveal">
        <p>More than a class</p>
        <h2>A few quiet hours to slow down, get messy and surprise yourself.</h2>
        <div className="landing-promise-grid">
          <div><span>01</span><strong>No experience needed</strong><p>Start exactly where you are. Anat demonstrates each step and stays with you throughout.</p></div>
          <div><span>02</span><strong>Made around you</strong><p>Private tuition means you can learn at your own pace and focus on what excites you.</p></div>
          <div><span>03</span><strong>Pieces to keep</strong><p>Your work is professionally glazed and fired, ready to collect in approximately four weeks.</p></div>
        </div>
      </section>

      <section className="landing-classes" id="classes">
        <div className="landing-section-heading landing-reveal">
          <p>Choose your experience</p>
          <h2>One studio. Three ways to begin.</h2>
          <span>Every class includes clay, tools, glazing, firing — and tea, coffee and biscuits.</span>
        </div>
        <div className="landing-class-grid">
          {classes.map((item, index) => (
            <article className={`landing-class-card landing-reveal landing-delay-${index}`} key={item.title}>
              <Link href={item.href} className="landing-class-image"><img src={item.image} alt="" /></Link>
              <div className="landing-class-body">
                <div className="landing-class-meta"><span><Clock3 aria-hidden="true" /> {item.duration}</span><span>{item.oldPrice && <del>{item.oldPrice}</del>} <strong>{item.price}</strong></span></div>
                <h3><Link href={item.href}>{item.title}</Link></h3>
                <p>{item.copy}</p>
                <Link className="landing-card-link" href={item.href}>See class details <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-studio landing-reveal">
        <div className="landing-studio-image"><img src="/media/2026/01/studio_image_7.webp" alt="Anat's private garden pottery studio in South Ealing" /></div>
        <div className="landing-studio-copy">
          <p>Not a crowded classroom</p>
          <h2>Your own creative corner in West London.</h2>
          <span>The garden studio is small by design: calm, welcoming and fully equipped for focused, personal teaching. It’s a place to switch off, work with your hands and enjoy the process.</span>
          <ul>
            <li><Check aria-hidden="true" /> Personal guidance from a practising ceramic artist</li>
            <li><Check aria-hidden="true" /> Wheel-throwing and hand-building options</li>
            <li><Check aria-hidden="true" /> All tools, clay, glazes and kiln firings included</li>
            <li><Check aria-hidden="true" /> Easy to reach in South Ealing, London W5</li>
          </ul>
          <Link className="landing-text-link" href="/the-studio/">Take a look inside the studio <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="landing-steps">
        <div className="landing-section-heading landing-reveal"><p>From clay to keepsake</p><h2>What happens after you book?</h2></div>
        <div className="landing-step-grid">
          <div className="landing-reveal"><span>1</span><h3>Choose</h3><p>Pick the experience that fits you and send Anat your preferred dates.</p></div>
          <div className="landing-reveal landing-delay-1"><span>2</span><h3>Create</h3><p>Learn the technique, get hands-on and make pieces that feel unmistakably yours.</p></div>
          <div className="landing-reveal landing-delay-2"><span>3</span><h3>Collect</h3><p>Anat finishes, glazes and fires your work. Collect it around four weeks later.</p></div>
        </div>
      </section>

      <section className="landing-faq landing-reveal">
        <div><p>Good to know</p><h2>Your questions, answered.</h2></div>
        <div className="landing-faq-list">
          <details><summary>Do I need any pottery experience?</summary><p>Not at all. The classes are designed for complete beginners as well as people who want to improve an existing skill.</p></details>
          <details><summary>What should I wear?</summary><p>Wear comfortable clothes you don’t mind getting a little clay on. Aprons and all equipment are provided.</p></details>
          <details><summary>Can I book for two people?</summary><p>Yes. Pottery for Two is a private 2.5-hour session created especially for couples, friends or family members.</p></details>
          <details><summary>When will my pottery be ready?</summary><p>Your pieces are trimmed, glazed and fired after class and are usually ready to collect in approximately four weeks.</p></details>
        </div>
      </section>

      <section className="landing-enquiry" id="enquire">
        <div className="landing-enquiry-intro">
          <p>Ready when you are</p>
          <h2>Let’s get your hands in clay.</h2>
          <span>Tell Anat which experience interests you and when you’d like to come. She’ll reply personally to arrange your session.</span>
          <a href="mailto:anat.pottery@gmail.com">anat.pottery@gmail.com</a>
        </div>
        <div className="landing-form-card"><EnquiryForm /></div>
      </section>

      <a className="landing-mobile-cta" href="#enquire">Book a pottery class <ArrowRight aria-hidden="true" /></a>
    </main>
  );
}
