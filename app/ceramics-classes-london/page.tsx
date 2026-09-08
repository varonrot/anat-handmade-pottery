import type { Metadata } from "next";
import Link from "next/link";
import { potteryClasses } from "@/content/classes";

export const metadata: Metadata = {
  title: "Ceramics Classes London | Pottery Courses in Ealing",
  description:
    "Discover private ceramics classes and pottery courses in South Ealing, West London. Learn wheel throwing, hand-building and glazing with Anat in a calm garden studio.",
  alternates: { canonical: "/ceramics-classes-london/" },
  openGraph: {
    title: "Ceramics Classes London | Anat Handmade Pottery",
    description:
      "Private ceramics classes, pottery courses and creative experiences in South Ealing, West London.",
    type: "website",
  },
};

const featuredSlugs = [
  "private-pottery-class",
  "pottery-for-2",
  "a-throwing-journey-for-adults",
  "4-week-hand-building-basics-adults",
];

const featured = featuredSlugs
  .map((slug) => potteryClasses.find((item) => item.slug === slug))
  .filter(Boolean) as typeof potteryClasses;

const faqs = [
  {
    q: "Are the ceramics classes suitable for beginners?",
    a: "Yes. Most sessions are designed to be beginner-friendly, with clear demonstrations and hands-on guidance throughout. You do not need any previous pottery experience.",
  },
  {
    q: "Where are the pottery classes held?",
    a: "Classes take place in Anat's garden pottery studio in South Ealing, West London, in a calm and personal setting rather than a large classroom.",
  },
  {
    q: "Can I learn wheel throwing?",
    a: "Yes. You can book a private wheel-throwing session or choose the four-week Throwing Journey course for a deeper introduction to centering, shaping, trimming, decorating and glazing.",
  },
  {
    q: "Can two people book together?",
    a: "Yes. Pottery for 2 is a private 2.5-hour ceramics experience designed for couples, friends or family members who want to learn and create side by side.",
  },
  {
    q: "Are materials and firing included?",
    a: "Yes. Clay, studio materials, glazing and professional kiln firing are included in the relevant class price. Your finished pieces are prepared after the session and made ready for collection.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CeramicsClassesLondonPage() {
  return (
    <main id="main" className="ceramics-london-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="ceramics-hero section-shell">
        <div className="ceramics-hero-copy">
          <p className="ceramics-eyebrow">CERAMICS CLASSES · SOUTH EALING, LONDON</p>
          <h1>Ceramics Classes in London</h1>
          <p className="ceramics-lead">
            Learn pottery in a calm, personal studio in West London — from your first time at the wheel to a complete four-week ceramics journey.
          </p>
          <p className="ceramics-copy">
            Anat Handmade Pottery offers private and small-scale ceramics classes for adults who want more than a crowded group workshop. Each session is practical, welcoming and tailored to your pace, with hands-on guidance from Anat throughout the creative process.
          </p>
          <div className="ceramics-actions">
            <Link className="button primary" href="/classes/">Explore Pottery Classes</Link>
            <Link className="button secondary" href="/contact-me/#contact-form">Ask About Availability</Link>
          </div>
          <div className="ceramics-quickfacts">
            <div><strong>South Ealing</strong><span>West London studio</span></div>
            <div><strong>Beginner friendly</strong><span>No experience needed</span></div>
            <div><strong>Private tuition</strong><span>Personal guidance</span></div>
          </div>
        </div>

        <div className="ceramics-hero-image">
          <img src="/media/2026/02/pottery42Lesson.webp" alt="Ceramics class in London at Anat Handmade Pottery" />
          <div className="ceramics-image-note">
            <span>Hands-on pottery</span>
            <strong>Learn by making</strong>
          </div>
        </div>
      </section>

      <section className="ceramics-intro section-shell">
        <div className="ceramics-section-heading">
          <p className="ceramics-eyebrow">A MORE PERSONAL WAY TO LEARN</p>
          <h2>Pottery lessons built around you</h2>
        </div>
        <div className="ceramics-intro-grid">
          <div className="ceramics-prose">
            <p>
              Searching for ceramics classes in London can mean choosing between large group workshops, one-off taster sessions and long college-style courses. Anat&apos;s studio offers something more personal: focused pottery tuition in a peaceful South Ealing garden studio, with time to ask questions, practise and understand what you are doing.
            </p>
            <p>
              Whether you want to try wheel throwing for the first time, build pottery by hand, enjoy a creative experience with someone special, or follow a structured multi-week course, there is a route designed around the way you want to learn.
            </p>
          </div>
          <div className="ceramics-highlight-box">
            <p className="ceramics-eyebrow">WHAT MAKES THE STUDIO DIFFERENT</p>
            <ul>
              <li>Private and highly personal tuition</li>
              <li>Calm garden studio in South Ealing</li>
              <li>Wheel throwing and hand-building options</li>
              <li>Clay, glazing and kiln firing included where specified</li>
              <li>Your finished work becomes something you can keep and use</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ceramics-courses-wrap">
        <div className="section-shell ceramics-courses">
          <div className="ceramics-section-heading wide">
            <p className="ceramics-eyebrow">CHOOSE YOUR EXPERIENCE</p>
            <h2>Ceramics classes and pottery courses in London</h2>
            <p>
              Start with a single session or take a deeper four-week journey. Each option gives you real studio time and personal guidance, not just a demonstration.
            </p>
          </div>

          <div className="ceramics-course-grid">
            {featured.map((item) => (
              <article className="ceramics-course-card" key={item.slug}>
                <Link href={`/classes/${item.slug}/`} className="ceramics-card-image">
                  <img src={item.image} alt={item.imageAlt} />
                </Link>
                <div className="ceramics-card-body">
                  <p className="ceramics-card-meta">{item.duration}</p>
                  <h3><Link href={`/classes/${item.slug}/`}>{item.title}</Link></h3>
                  <p>{item.cardDescription}</p>
                  <div className="ceramics-card-footer">
                    <div>
                      <span>{item.priceLabel}</span>
                      <strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong>
                    </div>
                    <Link className="text-link" href={`/classes/${item.slug}/`}>View class →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ceramics-two-col section-shell">
        <div className="ceramics-photo-panel">
          <img src="/media/2026/02/wheel-throwing-course.webp" alt="Learning wheel throwing in a London pottery class" />
        </div>
        <div className="ceramics-text-panel">
          <p className="ceramics-eyebrow">WHEEL THROWING CLASSES LONDON</p>
          <h2>Learn the wheel properly — not just for a few minutes</h2>
          <p>
            Wheel throwing is one of the most satisfying parts of ceramics, but it takes patient guidance to understand centering, opening, pulling walls and shaping a form. In Anat&apos;s private sessions you get time on the wheel, correction as you work, and the chance to build confidence at your own pace.
          </p>
          <p>
            If you want a first taste, the private single session is a strong place to begin. If you want to understand the full process from raw clay to finished glazed work, the four-week Throwing Journey follows the complete cycle step by step.
          </p>
          <Link className="button primary" href="/classes/a-throwing-journey-for-adults/">Explore the Throwing Course</Link>
        </div>
      </section>

      <section className="ceramics-two-col reverse section-shell">
        <div className="ceramics-text-panel">
          <p className="ceramics-eyebrow">HAND-BUILDING CERAMICS</p>
          <h2>Prefer shaping clay by hand?</h2>
          <p>
            Not every ceramics class needs a potter&apos;s wheel. Hand-building gives you a direct, tactile way to work with clay using pinching, coiling and slab techniques. It is ideal for creating expressive, functional pieces while developing an intuitive feel for the material.
          </p>
          <p>
            The four-week Hand-Building Journey takes you through construction, refinement, decoration and glazing, so you finish with a small collection that reflects your own ideas and style.
          </p>
          <Link className="button primary" href="/classes/4-week-hand-building-basics-adults/">Explore Hand-Building</Link>
        </div>
        <div className="ceramics-photo-panel">
          <img src="/media/2026/02/handbuilding-course.webp" alt="Hand-building ceramics course in London" />
        </div>
      </section>

      <section className="ceramics-for-two">
        <div className="section-shell ceramics-for-two-inner">
          <div>
            <p className="ceramics-eyebrow">A CREATIVE EXPERIENCE FOR TWO</p>
            <h2>Looking for something memorable to do together?</h2>
            <p>
              Pottery for 2 is a private 2.5-hour ceramics experience for couples, friends or family. You learn side by side, make your own pieces and leave the studio with the feeling that you have shared something genuinely creative — not just another night out.
            </p>
          </div>
          <div className="ceramics-for-two-price">
            <span>Private session for two</span>
            <div><del>£200</del> <strong>£180</strong></div>
            <p>2.5 hours · glazing and firing included</p>
            <Link className="button primary" href="/classes/pottery-for-2/">View Pottery for 2</Link>
          </div>
        </div>
      </section>

      <section className="ceramics-about section-shell">
        <div className="ceramics-about-card">
          <div>
            <p className="ceramics-eyebrow">ABOUT ANAT</p>
            <h2>A working potter teaching from her own studio</h2>
            <p>
              Anat is the maker behind Anat Handmade Pottery. Her work is rooted in handmade ceramics — pieces shaped slowly, finished thoughtfully and made to be lived with. The same approach carries into her teaching: patient, practical and focused on helping each person understand the process rather than simply copying a finished object.
            </p>
            <p>
              Classes take place in her South Ealing garden studio, creating a quieter and more personal learning environment than a large shared workshop. That means more attention, more time to practise and a class that can adapt to your confidence and goals.
            </p>
            <Link className="text-link" href="/about-me/">More about Anat →</Link>
          </div>
          <div className="ceramics-about-stats">
            <div><strong>1:1</strong><span>Private tuition available</span></div>
            <div><strong>2.5h</strong><span>Core single-session length</span></div>
            <div><strong>4 weeks</strong><span>Structured deeper courses</span></div>
          </div>
        </div>
      </section>

      <section className="ceramics-faq section-shell">
        <div className="ceramics-section-heading">
          <p className="ceramics-eyebrow">CERAMICS CLASSES LONDON FAQ</p>
          <h2>Questions before you book</h2>
        </div>
        <div className="ceramics-faq-grid">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ceramics-final-cta">
        <div className="section-shell ceramics-final-inner">
          <div>
            <p className="ceramics-eyebrow">READY TO START?</p>
            <h2>Find the ceramics class that fits you</h2>
            <p>
              Choose a single private session, a pottery experience for two, or a complete four-week course. If you are unsure which one is right, send Anat a message and she can help you choose.
            </p>
          </div>
          <div className="ceramics-final-actions">
            <Link className="button primary" href="/classes/">View All Classes</Link>
            <Link className="button secondary" href="/contact-me/#contact-form">Contact Anat</Link>
          </div>
        </div>
      </section>

      <style>{`
        .ceramics-london-page{background:#fbf7f4;color:#4e4b47}.ceramics-hero{display:grid;grid-template-columns:1.04fr .96fr;gap:64px;align-items:center;padding-top:68px;padding-bottom:72px}.ceramics-eyebrow{margin:0 0 16px;color:#b36f5d;font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}.ceramics-hero h1,.ceramics-section-heading h2,.ceramics-text-panel h2,.ceramics-for-two h2,.ceramics-about h2,.ceramics-final-cta h2{font-family:Georgia,'Times New Roman',serif;color:#2d4053;font-weight:400;letter-spacing:-.03em}.ceramics-hero h1{font-size:clamp(54px,6.4vw,92px);line-height:.94;margin:0 0 24px}.ceramics-lead{font-family:Georgia,'Times New Roman',serif;color:#657167;font-size:clamp(23px,2.2vw,32px);line-height:1.25;margin:0 0 22px;max-width:700px}.ceramics-copy{font-size:18px;line-height:1.75;max-width:680px}.ceramics-actions{display:flex;flex-wrap:wrap;gap:12px;margin:30px 0}.ceramics-actions .secondary,.ceramics-final-actions .secondary{background:transparent;border:1px solid rgba(45,64,83,.22);color:#2d4053}.ceramics-quickfacts{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:30px}.ceramics-quickfacts div{background:white;border:1px solid rgba(45,64,83,.08);padding:18px;border-radius:16px}.ceramics-quickfacts strong,.ceramics-quickfacts span{display:block}.ceramics-quickfacts strong{color:#2d4053;margin-bottom:5px}.ceramics-quickfacts span{font-size:14px;color:#777}.ceramics-hero-image{position:relative}.ceramics-hero-image img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;border-radius:3px}.ceramics-image-note{position:absolute;left:24px;bottom:24px;background:rgba(251,247,244,.94);padding:14px 18px;min-width:190px}.ceramics-image-note span,.ceramics-image-note strong{display:block}.ceramics-image-note span{font-size:12px;color:#8b7d75;text-transform:uppercase;letter-spacing:.14em}.ceramics-image-note strong{margin-top:4px;color:#2d4053;font-family:Georgia,'Times New Roman',serif;font-size:21px}.ceramics-intro{padding-top:62px;padding-bottom:72px}.ceramics-section-heading{max-width:850px;margin-bottom:32px}.ceramics-section-heading.wide{max-width:940px}.ceramics-section-heading h2,.ceramics-text-panel h2,.ceramics-for-two h2,.ceramics-about h2,.ceramics-final-cta h2{font-size:clamp(36px,4.4vw,60px);line-height:1.02;margin:0 0 18px}.ceramics-section-heading>p:last-child{font-size:18px;line-height:1.7}.ceramics-intro-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:40px}.ceramics-prose p,.ceramics-text-panel p,.ceramics-about p{font-size:18px;line-height:1.8;margin-top:0}.ceramics-highlight-box{background:#eef2ec;padding:30px;border-radius:24px}.ceramics-highlight-box ul{padding-left:20px;margin:0}.ceramics-highlight-box li{margin:0 0 12px;line-height:1.6}.ceramics-courses-wrap{background:#eef2ec}.ceramics-courses{padding-top:72px;padding-bottom:78px}.ceramics-course-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.ceramics-course-card{background:#fff;border-radius:24px;overflow:hidden;border:1px solid rgba(45,64,83,.07)}.ceramics-card-image{display:block}.ceramics-card-image img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover}.ceramics-card-body{padding:25px}.ceramics-card-meta{font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:#a66b5c;margin:0 0 10px}.ceramics-card-body h3{font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.08;margin:0 0 13px;font-weight:400}.ceramics-card-body h3 a{color:#2d4053;text-decoration:none}.ceramics-card-body>p{font-size:16px;line-height:1.7}.ceramics-card-footer{display:flex;justify-content:space-between;gap:18px;align-items:end;margin-top:22px;padding-top:18px;border-top:1px solid rgba(45,64,83,.1)}.ceramics-card-footer span,.ceramics-card-footer strong{display:block}.ceramics-card-footer span{font-size:12px;color:#888;margin-bottom:3px}.ceramics-card-footer strong{color:#2d4053;font-size:21px}.ceramics-card-footer del{color:#999;font-weight:400;margin-right:5px}.ceramics-two-col{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;padding-top:82px;padding-bottom:82px}.ceramics-two-col.reverse{padding-top:30px}.ceramics-photo-panel img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}.ceramics-text-panel .button{margin-top:12px}.ceramics-for-two{background:#dfe7e0;margin-top:28px}.ceramics-for-two-inner{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center;padding-top:62px;padding-bottom:62px}.ceramics-for-two p{font-size:18px;line-height:1.75}.ceramics-for-two-price{background:#fff;padding:28px;border-radius:22px}.ceramics-for-two-price>span{display:block;font-size:13px;color:#777;margin-bottom:8px}.ceramics-for-two-price div{font-size:22px;color:#777}.ceramics-for-two-price strong{font-size:48px;color:#2d4053}.ceramics-for-two-price del{margin-right:7px}.ceramics-about{padding-top:76px;padding-bottom:76px}.ceramics-about-card{display:grid;grid-template-columns:1.2fr .8fr;gap:54px;background:#fff;border:1px solid rgba(45,64,83,.08);padding:42px;border-radius:28px}.ceramics-about-stats{display:grid;gap:14px}.ceramics-about-stats div{background:#fbf7f4;padding:24px;border-radius:18px}.ceramics-about-stats strong,.ceramics-about-stats span{display:block}.ceramics-about-stats strong{font-family:Georgia,'Times New Roman',serif;font-size:38px;color:#2d4053;font-weight:400}.ceramics-about-stats span{margin-top:4px;color:#777}.ceramics-faq{padding-top:20px;padding-bottom:84px}.ceramics-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.ceramics-faq-grid article{background:#fff;border:1px solid rgba(45,64,83,.08);border-radius:20px;padding:25px}.ceramics-faq-grid h3{font-family:Georgia,'Times New Roman',serif;color:#2d4053;font-size:24px;font-weight:400;line-height:1.15;margin:0 0 10px}.ceramics-faq-grid p{margin:0;font-size:16px;line-height:1.7}.ceramics-final-cta{background:#dfe7e0}.ceramics-final-inner{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;padding-top:64px;padding-bottom:64px}.ceramics-final-inner>div:first-child{max-width:820px}.ceramics-final-inner p{font-size:18px;line-height:1.7}.ceramics-final-actions{display:flex;flex-direction:column;gap:12px;min-width:220px}@media(max-width:980px){.ceramics-hero,.ceramics-intro-grid,.ceramics-two-col,.ceramics-for-two-inner,.ceramics-about-card,.ceramics-final-inner{grid-template-columns:1fr}.ceramics-hero{gap:36px}.ceramics-hero-image img{aspect-ratio:16/11}.ceramics-course-grid{grid-template-columns:1fr}.ceramics-two-col.reverse .ceramics-text-panel{order:2}.ceramics-two-col.reverse .ceramics-photo-panel{order:1}.ceramics-final-actions{min-width:0;flex-direction:row;flex-wrap:wrap}}@media(max-width:680px){.ceramics-hero{padding-top:42px}.ceramics-quickfacts,.ceramics-faq-grid{grid-template-columns:1fr}.ceramics-hero h1{font-size:52px}.ceramics-section-heading h2,.ceramics-text-panel h2,.ceramics-for-two h2,.ceramics-about h2,.ceramics-final-cta h2{font-size:38px}.ceramics-card-footer{align-items:flex-start;flex-direction:column}.ceramics-two-col{gap:28px;padding-top:58px;padding-bottom:58px}.ceramics-about-card{padding:26px}.ceramics-for-two-price strong{font-size:42px}}
      `}</style>
    </main>
  );
}
