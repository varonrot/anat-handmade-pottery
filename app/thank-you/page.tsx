import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received by Anat Handmade Pottery.",
};

export default function ThankYouPage() {
  return (
    <main id="main">
      <section className="page-hero thank-you-page">
        <div className="thank-you-hero-grid">
          <div className="thank-you-content">
            <h1>I’ve received your message!</h1>
            <div className="thank-you-copy">
          <p>
            I’ve received your enquiry and I’m so looking forward to welcoming you into the studio. There is something truly special about the process of working with clay, and I can’t wait to share that with you.
          </p>
          <p>
            I am currently looking at the studio diary and will reply to your email within 24 hours so we can find the perfect time for your session.
          </p>
          <p>Speak soon,</p>
          <p className="thank-you-signature">Anat</p>
            </div>
            <div className="center-actions">
              <Link className="button primary" href="/">Back to home</Link>
              <Link className="button secondary" href="/classes/">Explore pottery classes</Link>
            </div>
          </div>
          <div className="thank-you-image">
            <span className="thank-you-image-title" aria-hidden="true">I’ve received your message!</span>
            <img src="/media/throwingImg%2016%209%20ratio.webp" alt="Hands shaping clay on a pottery wheel" />
          </div>
        </div>
      </section>
    </main>
  );
}
