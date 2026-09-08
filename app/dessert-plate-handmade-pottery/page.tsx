import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pottery for 2 | Private Pottery Experience in Ealing, London",
  description:
    "A private 2.5-hour pottery experience for two in South Ealing, London. Learn wheel-throwing side by side, with clay, glazing and firing included.",
};

const included = [
  "A private 2.5-hour pottery session for two",
  "Hands-on guidance throughout the experience",
  "Suitable for complete beginners and all skill levels",
  "Use of clay, tools and studio materials",
  "Professional glazing and kiln firing of your finished pieces",
  "Tea, coffee and biscuits in Anat's South Ealing garden studio",
];

const occasions = [
  ["A creative date", "Swap the usual dinner date for something tactile, playful and memorable."],
  ["Birthday or anniversary", "Celebrate with an experience you can enjoy together — and take home something you made."],
  ["A gift for two", "A thoughtful shared experience for couples, friends, siblings or family members."],
  ["A London day out", "Slow down for a few hours and discover the pleasure of making something by hand."],
];

const steps = [
  ["01", "Welcome to the studio", "Settle in with tea or coffee, see the space and get a simple introduction to clay and the potter's wheel."],
  ["02", "Create side by side", "After a demonstration, you'll each work at the wheel with Anat guiding you through centering, pulling and shaping."],
  ["03", "Make your pieces", "Create 1–2 pieces each, usually bowls or cups, with plenty of time to experiment and enjoy the process."],
  ["04", "Glazing & firing", "After the session Anat trims, glazes and kiln-fires your chosen pieces, ready for collection after firing."],
];

const faqs = [
  ["Do we need pottery experience?", "No. Pottery for 2 is designed to be beginner-friendly, and the session is adapted to your pace."],
  ["Is the workshop private?", "Yes. The session is for the two of you, so you have dedicated guidance throughout."],
  ["What is included in £180?", "The private 2.5-hour session for two, clay, use of tools, studio glazes, professional trimming and kiln firing are included."],
  ["How long is the session?", "The workshop lasts approximately 2.5 hours."],
  ["What will we make?", "Most beginners make 1–2 pieces each, such as bowls or cups, depending on pace and technique."],
  ["When are our pieces ready?", "Finished pieces are normally ready for collection after trimming, glazing and firing, approximately four weeks later."],
];

export default function PotteryForTwoLandingPage() {
  return (
    <main id="main" className="pf2-page">
      <section className="pf2-hero">
        <div className="pf2-hero-image-wrap">
          <img
            className="pf2-hero-image"
            src="/media/2026/02/pottery42Lesson.webp"
            alt="Two people learning pottery together in Anat's studio"
          />
        </div>

        <div className="pf2-hero-copy">
          <div className="pf2-eyebrow"><span>PRIVATE POTTERY EXPERIENCE</span><i /></div>
          <h1>Pottery for 2</h1>
          <p className="pf2-subtitle">A creative experience to share, side by side.</p>
          <p className="pf2-intro">
            Spend 2.5 relaxed hours discovering the potter&apos;s wheel together in Anat&apos;s intimate South Ealing garden studio.
            Designed for complete beginners as well as anyone who has tried pottery before, this private session gives you both
            plenty of hands-on time, personal guidance and the chance to make pieces that are genuinely yours.
          </p>

          <div className="pf2-price-row">
            <div><small>PRICE FOR TWO</small><strong><del>£200</del> £180</strong></div>
            <div><small>DURATION</small><strong>2.5 Hours</strong></div>
            <div><small>FORMAT</small><strong>Private Session</strong></div>
          </div>

          <div className="pf2-actions">
            <Link className="pf2-button primary" href="/contact-me/?class=Pottery%20for%202#contact-form">Enquire About a Session <span>→</span></Link>
            <Link className="pf2-button secondary" href="/classes/pottery-for-2/">View Class Details</Link>
          </div>
        </div>
      </section>

      <section className="pf2-band">
        <div className="pf2-shell pf2-band-inner">
          <span>Private tuition</span><b>•</b><span>Beginner friendly</span><b>•</b><span>Clay & firing included</span><b>•</b><span>South Ealing, London</span>
        </div>
      </section>

      <section className="pf2-section pf2-shell pf2-story">
        <div className="pf2-section-heading">
          <p className="pf2-kicker">WHY POTTERY FOR TWO?</p>
          <h2>Make something together, not just another memory on your phone.</h2>
        </div>
        <div className="pf2-story-grid">
          <div className="pf2-story-copy">
            <p>
              There is something special about working with clay together. You are focused, your hands are busy, you laugh when
              the clay has other ideas, and for a little while everything else disappears.
            </p>
            <p>
              Pottery for 2 is intentionally small and personal. There is no crowded classroom and no pressure to keep up with a
              group. Anat can watch what each of you is doing, demonstrate again when needed and help you turn those first uncertain
              movements into a form you are proud of.
            </p>
            <p>
              The result is more than a workshop. It is shared time, a new skill and a pair of handmade objects that carry the story
              of the afternoon you made them.
            </p>
          </div>
          <div className="pf2-quote">
            <p>“A calm, creative date where the experience matters just as much as the finished pieces.”</p>
          </div>
        </div>
      </section>

      <section className="pf2-section pf2-soft">
        <div className="pf2-shell">
          <div className="pf2-section-heading center">
            <p className="pf2-kicker">WHAT&apos;S INCLUDED</p>
            <h2>Everything is taken care of.</h2>
            <p>You only need to arrive ready to get your hands a little muddy.</p>
          </div>
          <div className="pf2-included-grid">
            {included.map((item) => <div className="pf2-included" key={item}><span>✓</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="pf2-section pf2-shell">
        <div className="pf2-section-heading">
          <p className="pf2-kicker">YOUR 2.5 HOURS</p>
          <h2>From first touch of clay to pieces of your own.</h2>
        </div>
        <div className="pf2-steps">
          {steps.map(([number, title, text]) => (
            <article className="pf2-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pf2-section pf2-occasions">
        <div className="pf2-shell">
          <div className="pf2-section-heading center">
            <p className="pf2-kicker">PERFECT FOR</p>
            <h2>A different kind of time together.</h2>
          </div>
          <div className="pf2-occasion-grid">
            {occasions.map(([title, text]) => (
              <article className="pf2-occasion" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf2-section pf2-shell">
        <div className="pf2-booking-card">
          <div>
            <p className="pf2-kicker">THE EXPERIENCE</p>
            <h2>Pottery for 2</h2>
            <p>A private wheel-throwing workshop for two with personal guidance from start to finish.</p>
            <ul>
              <li>1 private session</li>
              <li>2.5 hours</li>
              <li>1–2 pieces each</li>
              <li>Glazing & kiln firing included</li>
            </ul>
          </div>
          <div className="pf2-booking-price">
            <small>PRICE FOR TWO</small>
            <del>£200</del>
            <strong>£180</strong>
            <Link className="pf2-button primary" href="/contact-me/?class=Pottery%20for%202#contact-form">Ask About Availability <span>→</span></Link>
            <p>No experience required.</p>
          </div>
        </div>
      </section>

      <section className="pf2-section pf2-soft">
        <div className="pf2-shell">
          <div className="pf2-section-heading center">
            <p className="pf2-kicker">COMMON QUESTIONS</p>
            <h2>Before you book</h2>
          </div>
          <div className="pf2-faq-grid">
            {faqs.map(([q, a]) => <article className="pf2-faq" key={q}><h3>{q}</h3><p>{a}</p></article>)}
          </div>
        </div>
      </section>

      <section className="pf2-final">
        <div className="pf2-shell pf2-final-inner">
          <div>
            <p className="pf2-kicker">CREATE SOMETHING TOGETHER</p>
            <h2>Ready for your pottery date?</h2>
            <p>Tell Anat which days work for you and she&apos;ll help you find a suitable private session.</p>
          </div>
          <Link className="pf2-button primary light" href="/contact-me/?class=Pottery%20for%202#contact-form">Enquire Now <span>→</span></Link>
        </div>
      </section>

      <style>{`
        .pf2-page{background:#fbf7f4;color:#30312f}.pf2-shell{width:min(1180px,calc(100% - 48px));margin:0 auto}.pf2-hero{width:min(1280px,calc(100% - 48px));margin:0 auto;display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:68px;align-items:center;padding:68px 0 74px}.pf2-hero-image{width:100%;aspect-ratio:1/1.04;object-fit:cover;display:block}.pf2-hero-copy{max-width:680px}.pf2-eyebrow{display:flex;align-items:center;gap:18px;margin-bottom:22px;color:#b86d5a;font-size:12px;font-weight:700;letter-spacing:.22em}.pf2-eyebrow i{width:58px;height:1px;background:#c58a7c}.pf2-hero h1,.pf2-section h2,.pf2-final h2{font-family:Georgia,'Times New Roman',serif;color:#2b3d50;font-weight:400;letter-spacing:-.035em}.pf2-hero h1{font-size:clamp(58px,7vw,96px);line-height:.92;margin:0}.pf2-subtitle{font-family:Georgia,'Times New Roman',serif;color:#6d776e;font-size:clamp(25px,2.2vw,34px);line-height:1.22;margin:22px 0}.pf2-intro{font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.72;color:#55514e;max-width:650px}.pf2-price-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.pf2-price-row>div{background:#fff;border:1px solid rgba(43,61,80,.1);padding:16px 17px}.pf2-price-row small,.pf2-booking-price small{display:block;color:#8b817d;font-size:10px;letter-spacing:.14em;margin-bottom:7px}.pf2-price-row strong{display:block;color:#2b3d50;font-size:20px}.pf2-price-row del{color:#958b86;font-weight:400;margin-right:6px}.pf2-actions{display:flex;gap:12px;flex-wrap:wrap}.pf2-button{display:inline-flex;align-items:center;justify-content:center;gap:14px;text-decoration:none;border-radius:999px;padding:14px 22px;font-size:14px;font-weight:700;transition:.2s}.pf2-button.primary{background:#2f302e;color:#fff}.pf2-button.secondary{border:1px solid rgba(47,48,46,.25);color:#2f302e;background:transparent}.pf2-button:hover{transform:translateY(-1px)}.pf2-band{background:#dce5de}.pf2-band-inner{display:flex;align-items:center;justify-content:center;gap:23px;flex-wrap:wrap;padding:18px 0;color:#536259;font-size:14px}.pf2-band b{color:#b86d5a}.pf2-section{padding:82px 0}.pf2-section-heading{max-width:830px;margin-bottom:38px}.pf2-section-heading.center{text-align:center;margin-left:auto;margin-right:auto}.pf2-kicker{font-size:11px;letter-spacing:.2em;color:#b86d5a;font-weight:700;margin:0 0 15px}.pf2-section-heading h2,.pf2-booking-card h2{font-size:clamp(39px,4.6vw,62px);line-height:1.02;margin:0 0 16px}.pf2-section-heading>p:last-child{font-size:18px;line-height:1.7;color:#66605c}.pf2-story-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:56px}.pf2-story-copy p{font-family:Georgia,'Times New Roman',serif;font-size:19px;line-height:1.85;color:#504d49}.pf2-quote{border-left:1px solid #c58a7c;padding:12px 0 12px 38px;align-self:center}.pf2-quote p{font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.35;color:#5e6b62;margin:0}.pf2-soft{background:#eef2ed}.pf2-included-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.pf2-included{background:#fff;display:flex;gap:13px;align-items:flex-start;padding:20px 22px}.pf2-included span{color:#b86d5a;font-weight:700}.pf2-included p{margin:0;line-height:1.65;color:#57534f}.pf2-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.pf2-step{border-top:1px solid #c8c0ba;padding-top:18px}.pf2-step>span{color:#b86d5a;font-size:12px;letter-spacing:.14em}.pf2-step h3,.pf2-occasion h3,.pf2-faq h3{font-family:Georgia,'Times New Roman',serif;color:#2b3d50;font-weight:400}.pf2-step h3{font-size:24px;margin:14px 0 10px}.pf2-step p,.pf2-occasion p,.pf2-faq p{color:#5b5753;line-height:1.7;margin:0}.pf2-occasions{background:#f4ece7}.pf2-occasion-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.pf2-occasion{background:#fff;padding:26px 24px;min-height:180px}.pf2-occasion h3{font-size:25px;margin:0 0 12px}.pf2-booking-card{display:grid;grid-template-columns:1.2fr .8fr;gap:50px;background:#fff;border:1px solid rgba(43,61,80,.09);padding:44px}.pf2-booking-card>div:first-child>p:not(.pf2-kicker){font-size:18px;line-height:1.7;color:#5a5652}.pf2-booking-card ul{padding-left:20px;line-height:1.9;color:#56524e}.pf2-booking-price{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;border-left:1px solid #e1dad5;padding-left:46px}.pf2-booking-price del{font-size:20px;color:#938983}.pf2-booking-price strong{font-family:Georgia,'Times New Roman',serif;font-size:70px;font-weight:400;color:#2b3d50;line-height:1;margin:5px 0 24px}.pf2-booking-price p{font-size:13px;color:#7b746f}.pf2-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.pf2-faq{background:#fff;padding:25px 27px}.pf2-faq h3{font-size:22px;margin:0 0 10px}.pf2-final{background:#2f4039;color:#fff;padding:64px 0}.pf2-final-inner{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center}.pf2-final h2{color:#fff;font-size:clamp(40px,4.5vw,60px);line-height:1;margin:0 0 13px}.pf2-final p:not(.pf2-kicker){color:#d8e1da;font-size:18px;max-width:700px}.pf2-button.light{background:#f7f2ed;color:#2f4039}.pf2-final .pf2-kicker{color:#e3ad9d}
        @media(max-width:980px){.pf2-hero{grid-template-columns:1fr;gap:38px}.pf2-hero-image{aspect-ratio:16/10}.pf2-story-grid,.pf2-booking-card,.pf2-final-inner{grid-template-columns:1fr}.pf2-steps,.pf2-occasion-grid{grid-template-columns:repeat(2,1fr)}.pf2-booking-price{border-left:0;border-top:1px solid #e1dad5;padding-left:0;padding-top:30px}}
        @media(max-width:640px){.pf2-shell,.pf2-hero{width:min(100% - 36px,1180px)}.pf2-hero{padding:38px 0 48px}.pf2-hero h1{font-size:56px}.pf2-price-row,.pf2-included-grid,.pf2-steps,.pf2-occasion-grid,.pf2-faq-grid{grid-template-columns:1fr}.pf2-section{padding:58px 0}.pf2-story-grid{gap:30px}.pf2-quote{padding-left:24px}.pf2-booking-card{padding:28px}.pf2-actions{flex-direction:column;align-items:stretch}.pf2-band-inner{gap:10px 14px}.pf2-band b{display:none}}
      `}</style>
    </main>
  );
}
