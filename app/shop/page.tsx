import type { Metadata } from "next";
import wordpress from "@/content/wordpress.json";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = { title: "Handmade Pottery Collection", description: "Browse handmade porcelain and stoneware pieces created by Anat Varon Moneta in her Ealing studio." };

const categories = Array.from(new Set(wordpress.products.flatMap((product) => product.categories.map((category) => category.name))));

export default function ShopPage() {
  return <main id="main">
    <section className="page-hero shop-hero"><div><p className="eyebrow">Handmade in London</p><h1>Studio Collection</h1><p>Porcelain and stoneware, thrown and decorated by hand. Each piece carries the small variations that make handmade pottery unique.</p></div><img src="/media/2026/02/shop-now.webp" alt="A group of colourful handmade floral trinket boxes" /></section>
    <section className="section-shell">
      <div className="tag-row category-row">{categories.map((category) => <span key={category}>{category}</span>)}</div>
      <div className="product-grid shop-grid">{wordpress.products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  </main>;
}
