import { notFound } from "next/navigation";
import wordpress from "@/content/wordpress.json";
import { ProductCard } from "@/components/product-card";

const slugs = Array.from(new Set(wordpress.products.flatMap((product) => product.categories.map((category) => category.slug))));
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const products = wordpress.products.filter((product) => product.categories.some((category) => category.slug === slug)); if (!products.length) notFound();
  const name = products[0].categories.find((category) => category.slug === slug)?.name;
  return <main id="main"><section className="page-hero compact-hero"><p className="eyebrow">Studio collection</p><h1>{name}</h1></section><section className="product-grid shop-grid section-shell">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</section></main>;
}
