import type { Metadata } from "next";
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
  return <main id="main">
    <section className="detail-hero section-shell"><div className="detail-image"><img src={item.image} alt={item.imageAlt} /></div><div className="detail-intro"><p className="eyebrow">Pottery class · South Ealing</p><h1>{item.title}</h1><div className="detail-meta"><div><small>{item.priceLabel}</small><strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong></div><div><small>Duration</small><strong>{item.duration}</strong></div></div><a className="button primary" href="#enquire">Enquire About This Class</a></div></section>
    <section className="detail-body section-shell"><article className="prose"><h2>{item.heading}</h2>{item.intro.map((p) => <p key={p}>{p}</p>)}{item.highlights.length > 0 && <><h2>{item.sectionTitle}</h2><ul>{item.highlights.map((line) => <li key={line}>{line}</li>)}</ul></>}<h2>{item.includedTitle}</h2><ul>{item.included.map((line) => <li key={line}>{line}</li>)}</ul><h2>Ideal For</h2><p>{item.idealFor}</p></article><aside id="enquire" className="booking-panel"><p className="eyebrow">Request a booking</p><h2>Find a time that works</h2><p>Share your preferred date and Anat will reply with availability.</p><EnquiryForm compact subject={`${item.title} enquiry`} /></aside></section>
  </main>;
}
