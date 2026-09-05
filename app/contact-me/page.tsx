import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = { title: "Contact Anat Handmade Pottery", description: "Contact Anat about pottery classes, studio visits and handmade ceramics in Ealing, London." };

export default function ContactPage() {
  return <main id="main">
    <section className="contact-grid section-shell"><div className="contact-image"><img src="/media/2026/01/studio_image_7.webp" alt="Inside Anat's South Ealing pottery studio" /><div><strong>Studio hours</strong><span>By appointment only</span><strong>Location</strong><span>South Ealing, London W5</span></div></div><div className="contact-copy"><p className="eyebrow">Contact</p><h1>Let’s Create Something Together</h1><p>I’d love to hear from you. Send a message about classes, a studio visit or a handmade piece and I’ll get back to you shortly.</p><EnquiryForm /></div></section>
  </main>;
}
