import Link from "next/link";
import wordpress from "@/content/wordpress.json";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  const featured = wordpress.products.slice(-4).reverse();
  return (
    <main id="main">
      <section className="home-hero">
        <img src="/media/2026/02/hero_home_page_1.webp" alt="A collection of handmade floral porcelain bottles" />
        <div className="hero-overlay">
          <p className="eyebrow">Handcrafted in West London</p>
          <h1>Anat Handmade Pottery</h1>
          <p>By Anat Varon Moneta</p>
          <div className="hero-actions">
            <Link className="button primary" href="/classes/">Explore Classes</Link>
            <Link className="button secondary" href="/shop/">View the Collection</Link>
          </div>
        </div>
      </section>

      <section className="intro-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">Discover</p>
          <h2>A place to make, learn and slow down</h2>
        </div>
        <div className="discover-grid">
          <article>
            <img src="/media/2026/02/pottery-classes.webp" alt="Hands shaping porcelain on a pottery wheel" />
            <div><h3>Pottery Classes</h3><p>Personal, hands-on sessions for beginners and improvers in a calm garden studio.</p><Link className="text-link" href="/classes/">Join a class</Link></div>
          </article>
          <article>
            <img src="/media/2026/02/shop-now.webp" alt="Small handmade porcelain trinket boxes with floral prints" />
            <div><h3>Handmade Pottery</h3><p>One-of-a-kind porcelain and stoneware pieces, made slowly and finished by hand.</p><Link className="text-link" href="/shop/">Browse the collection</Link></div>
          </article>
        </div>
      </section>

      <section className="shop-preview section-shell">
        <div className="section-heading horizontal">
          <div><p className="eyebrow">Studio Collection</p><h2>Made by hand, one piece at a time</h2></div>
          <Link className="text-link" href="/shop/">View all pottery</Link>
        </div>
        <div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="studio-callout">
        <div className="studio-callout-image"><img src="/media/2026/01/my-studio-hero.webp" alt="The garden surrounding Anat's pottery studio" /></div>
        <div className="studio-callout-copy"><p className="eyebrow">South Ealing · London W5</p><h2>Step inside the garden studio</h2><p>A light-filled, fully equipped space designed for creative focus, personal guidance and the simple joy of working with clay.</p><Link className="button primary" href="/the-studio/">Explore the studio</Link></div>
      </section>
    </main>
  );
}
