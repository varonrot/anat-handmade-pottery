import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { classBySlug, potteryClasses } from "@/content/classes";

export function generateStaticParams() { return potteryClasses.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = classBySlug.get(slug); if (!item) return {};
  return { title: item.title, description: item.cardDescription };
}

export default async function ClassDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = classBySlug.get(slug); if (!item) notFound();
  const waitingList = item.waitingList;
  return <main id="main">
    <nav className="class-breadcrumb section-shell" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/classes/">Pottery Classes</Link><span aria-hidden="true"> / </span><span aria-current="page">{item.title}</span></nav>
    <section className="detail-hero section-shell">
      <div className="detail-image">
        <img src={item.image} alt={item.imageAlt} />
        </div><div className="detail-intro">
          <h1>{item.title}</h1>
          <div className="detail-meta">
      <div>
        <small>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="#8C9D87" aria-hidden="true"><path d="M0 252.1V48C0 21.5 21.5 0 48 0h204.1c12.7 0 24.9 5.1 33.9 14.1l211.9 211.9c18.7 18.7 18.7 49.1 0 67.9L293.8 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 286.1C5.1 277.1 0 264.9 0 252.1zM112 64c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z"></path></svg>
         {item.priceLabel} : 
        </small>
        <strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong>
      </div>
      <div>
        <small><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="#8C9D87" aria-hidden="true"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
        </svg>
        Duration : 
        </small>
        <strong>{item.duration}</strong>
      </div>
    </div>
        <a className="button primary" href="#enquire">{waitingList ? "Join the waiting list" : "Enquire About This Class"}</a></div></section>
    <section className="detail-body section-shell"><article className="prose single-class-description-text">
      <h2>{item.heading}</h2>{item.intro.map((p) => <p key={p}>{p}</p>)}{item.highlights.length > 0 && <><h2>{item.sectionTitle}</h2><ul>{item.highlights.map((line) => <li key={line}>{line}</li>)}</ul></>}<h2>{item.includedTitle}</h2>
      <ul className="included-list">{item.included.map((line) => <li key={line}>{line}</li>)}</ul><h2>Ideal For</h2>{item.idealForDetails ? <div className="ideal-for-details"><p>{item.idealForDetails.intro}</p><p><strong>Flexible Booking:</strong> {item.idealForDetails.booking}</p><p><strong>Age guidance:</strong> {item.idealForDetails.ageGuidance}</p></div> : <p>{item.idealFor}</p>}</article><aside id="enquire" className="booking-panel"><p className="eyebrow">{waitingList ? "Friday morning class" : "Request a booking"}</p><h2>{waitingList ? "Join the waiting list" : "Find a time that works"}</h2><p>{waitingList ? "Tell Anat you’d like a place and she’ll be in touch when one becomes available." : "Share your preferred date and Anat will reply with availability within 24 hours."}</p><EnquiryForm compact subject={`${item.title} enquiry`} submitLabel={waitingList ? "Join the waiting list" : "Check availability"} /></aside></section>
  </main>;
}
