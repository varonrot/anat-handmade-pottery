import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "The Garden Pottery Studio in Ealing", description: "Discover Anat Handmade Pottery's light-filled boutique garden studio in South Ealing, West London." };

const gallery = [
  ["/media/2026/01/20251002_103119.webp", "Handmade mini plant pots"],
  ["/media/2026/01/20251026_150437.webp", "The pottery studio wall"],
  ["/media/2026/01/20251030_1349062-scaled.webp", "Heart-shaped underglaze colour samples"],
  ["/media/2026/01/20251101_095158-scaled.webp", "Studio brushes and colour samples"],
  ["/media/2026/01/20251119_141940-scaled.webp", "A small porcelain vase"],
  ["/media/2026/01/porcelain-centering.webp", "Centering porcelain on the wheel"],
  ["/media/2026/01/PXL_20250801_123617410.webp", "Anat beside the studio kiln"],
] as const;

export default function StudioPage() {
  return <main id="main">
    <section className="studio-hero"><img src="/media/2026/01/my-studio-hero.webp" alt="The garden outside Anat's pottery studio" /><div><p className="eyebrow">South Ealing · West London</p><h1>The Garden Studio</h1></div></section>
    <section className="studio-intro section-shell"><div><p className="eyebrow">A quiet creative space</p><h2>A Boutique Garden Studio in West London</h2><p>Welcome to Anat Handmade Pottery, a sanctuary tucked away in the heart of Ealing. This light-filled garden studio was designed for beginners and improvers who want hands-on guidance and artistic growth.</p><p>The studio is fully equipped with professional wheels, hand-building tools and a kiln, all arranged to create a calm and inspiring atmosphere.</p><p>Here, we leave the rush of the city behind. It is a place to breathe, enjoy the tactile nature of clay and experience the simple joy of making something beautiful.</p></div><img src="/media/2026/01/studio_image_main.webp" alt="Inside Anat Handmade Pottery's garden studio" /></section>
    <section className="section-shell gallery-section"><div className="section-heading"><p className="eyebrow">Around the studio</p><h2>The Details</h2></div><div className="studio-gallery">{gallery.map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" />)}</div><p className="location-note">A short walk from South Ealing Station and easy to reach on the 65, E2 and E3 buses. Full directions are provided when your booking is confirmed.</p><div className="center-actions"><Link className="button primary" href="/classes/">Explore Classes</Link><Link className="text-link" href="/contact-me/">Have a question? Get in touch</Link></div></section>
  </main>;
}
