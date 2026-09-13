import type { Metadata } from "next";
import { GoodToKnow } from "@/components/good-to-know";

export const metadata: Metadata = { title: "Good to Know", description: "Helpful information about pottery classes, bookings, collection and shipping from Anat Handmade Pottery." };

export default function FaqPage() {
  return <main id="main"><section className="page-hero compact-hero"><p className="eyebrow">Before your visit</p><h1>Good to Know</h1></section><GoodToKnow showHeading={false} /></main>;
}
