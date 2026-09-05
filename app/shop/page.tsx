import type { Metadata } from "next";
import wordpress from "@/content/wordpress.json";
import { ShopCatalog } from "@/components/shop-catalog";

export const metadata: Metadata = { title: "Handmade Pottery Collection", description: "Browse handmade porcelain and stoneware pieces created by Anat Varon Moneta in her Ealing studio." };

const categories = Array.from(
  new Map(
    wordpress.products.flatMap((product) => product.categories.map((category) => [category.slug, { name: category.name, slug: category.slug }] as const)),
  ).values(),
);

export default function ShopPage() {
  return <main id="main">
    <section className="page-hero shop-hero"><div><p className="eyebrow">Handmade in London</p><h1>Studio Collection</h1><p>Porcelain and stoneware, thrown and decorated by hand. Each piece carries the small variations that make handmade pottery unique.</p></div><img src="/media/2026/02/shop-now.webp" alt="A group of colourful handmade floral trinket boxes" /></section>
    <ShopCatalog products={wordpress.products} categories={categories} />
  </main>;
}
