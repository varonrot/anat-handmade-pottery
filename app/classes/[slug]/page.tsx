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
    <section className="detail-hero section-shell"><div className="detail-image"><img src={item.image} alt={item.imageAlt} /></div><div className="detail-intro"><h1>{item.title}</h1><div className="detail-meta"><div><small>{item.priceLabel}</small><strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong></div><div><small>Duration</small><strong>{item.duration}</strong></div></div><a className="button primary" href="#enquire">{waitingList ? "Join the waiting list" : "Enquire About This Class"}</a></div></section>
    <section className="detail-body section-shell"><article className="prose"><h2>{item.heading}</h2>{item.intro.map((p) => <p key={p}>{p}</p>)}{item.highlights.length > 0 && <><h2>{item.sectionTitle}</h2><ul>{item.highlights.map((line) => <li key={line}>{line}</li>)}</ul></>}<h2>{item.includedTitle}</h2><ul>{item.included.map((line) => <li key={line}>{line}</li>)}</ul><h2>Ideal For</h2><p>{item.idealFor}</p></article><aside id="enquire" className="booking-panel"><p className="eyebrow">{waitingList ? "Friday morning class" : "Request a booking"}</p><h2>{waitingList ? "Join the waiting list" : "Find a time that works"}</h2><p>{waitingList ? "Tell Anat you’d like a place and she’ll be in touch when one becomes available." : "Share your preferred date and Anat will reply with availability."}</p><EnquiryForm compact subject={`${item.title} enquiry`} submitLabel={waitingList ? "Join the waiting list" : undefined} /></aside></section>
  </main>;
}
