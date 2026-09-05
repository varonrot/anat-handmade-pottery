import type { Metadata } from "next";
import { notFound } from "next/navigation";
import wordpress from "@/content/wordpress.json";

type Product = (typeof wordpress.products)[number];
const products = new Map(wordpress.products.map((product) => [product.slug, product]));
const plain = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export function generateStaticParams() { return wordpress.products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = products.get(slug); if (!product) return {};
  return { title: product.seoTitle || product.title, description: product.seoDescription || plain(product.excerpt).slice(0, 158) };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = products.get(slug) as Product | undefined; if (!product) notFound();
  return <main id="main">
    <section className="product-detail section-shell"><div className="product-detail-image"><img src={product.image?.url || "/media/woocommerce-placeholder.webp"} alt={product.image?.alt || product.title} /></div><div className="product-summary"><p className="eyebrow">{product.categories[0]?.name || "Handmade pottery"}</p><h1>{product.title}</h1><div className="availability"><strong>Available in-studio</strong><span>View and purchase this piece in person at the South Ealing studio.</span></div><div className="short-copy" dangerouslySetInnerHTML={{ __html: product.excerpt }} /><a className="button primary" href={`mailto:anat.pottery@gmail.com?subject=${encodeURIComponent(`Enquiry about ${product.title}`)}`}>Enquire About This Piece</a></div></section>
    <section className="section-shell product-description"><p className="eyebrow">The details</p><h2>About this piece</h2><div className="rich-copy" dangerouslySetInnerHTML={{ __html: product.content }} /></section>
  </main>;
}
