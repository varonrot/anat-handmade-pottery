"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";

type ShopProduct = {
  title: string;
  slug: string;
  image?: { url?: string; alt?: string } | null;
  categories?: { name: string; slug?: string }[];
};

type ShopCategory = {
  name: string;
  slug: string;
};

export function ShopCatalog({ products, categories }: { products: ShopProduct[]; categories: ShopCategory[] }) {
  const [active, setActive] = useState("all");
  const visibleProducts = active === "all"
    ? products
    : products.filter((product) => product.categories?.some((category) => category.slug === active));

  useEffect(() => {
    const syncFromUrl = () => {
      const requested = new URL(window.location.href).searchParams.get("product_category") || "all";
      setActive(categories.some((category) => category.slug === requested) ? requested : "all");
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [categories]);

  const selectCategory = (slug: string) => {
    const next = active === slug ? "all" : slug;
    setActive(next);

    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("product_category");
    else url.searchParams.set("product_category", next);
    window.history.pushState({}, "", url);
  };

  return (
    <section className="section-shell shop-catalog" aria-label="Studio collection">
      <div className="tag-row category-row" aria-label="Filter pieces by category">
        {categories.map((category) => (
          <button
            className={active === category.slug ? "is-active" : undefined}
            key={category.slug}
            type="button"
            onClick={() => selectCategory(category.slug)}
            aria-pressed={active === category.slug}
          >
            {category.name === "Jewlery Dish" ? "Jewelry Dish" : category.name}
          </button>
        ))}
      </div>

      <div className="product-grid shop-grid" id="shop-products" aria-live="polite">
        {visibleProducts.map((product) => <ProductCard key={`${active}-${product.slug}`} product={product} />)}
      </div>
    </section>
  );
}
