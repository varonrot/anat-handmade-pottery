import Link from "next/link";
import { MessageCircle } from "lucide-react";
import wordpress from "@/content/wordpress.json";
import SocialFeed from "@/components/social-feed";

export default function Home() {
  const featured = wordpress.products.slice(-4).reverse();

  return (
    <main id="main" className="original-home">
      <section className="home-title" aria-labelledby="home-title">
        <h1 id="home-title">Anat Handmade Pottery</h1>
        <p>By Anat Varon Moneta</p>
      </section>

      <section className="home-hero" aria-label="Handmade floral porcelain bottles" />

      <section className="home-section-title">
        <img src="/media/2026/02/floral-petals-3-1024x883.webp" alt="" />
        <h2>Discover</h2>
      </section>

      <section className="discover-rows section-shell">
        <article className="discover-row">
          <Link className="discover-image arch-right" href="/classes/">
            <img src="/media/2026/02/pottery-classes-1024x1024.webp" alt="Pottery classes in South Ealing" />
          </Link>
          <div className="discover-copy">
            <h2>Discover Pottery Classes</h2>
            <p>Join my pottery workshops and explore your creativity. From beginners to advanced students, I offer small, personalized classes where you can learn techniques, create your own pieces, and take home something special. Check schedules, prices, and full class details below.</p>
            <Link className="home-button" href="/classes/">Join a Class <span aria-hidden="true">→</span></Link>
          </div>
        </article>

        <article className="discover-row">
          <Link className="discover-image arch-right" href="/shop/">
            <img src="/media/2026/02/shop-now-1024x1024.webp" alt="Colourful porcelain lidded boxes with floral prints" />
          </Link>
          <div className="discover-copy">
            <h2>Discover Handmade Pottery</h2>
            <p>Browse a collection of handcrafted pottery pieces, each made with care and attention to detail. From unique jars to decorative items, find something special for your home or as a gift.</p>
            <Link className="home-button" href="/shop/">Browse Collection <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      </section>

      <section className="home-shop section-shell" aria-labelledby="home-shop-title">
        <div className="home-section-title">
          <img src="/media/2026/02/floral-petals-3-1024x883.webp" alt="" />
          <h2 id="home-shop-title">Shop</h2>
        </div>
        <div className="home-shop-grid">
          {featured.map((product) => (
            <article className="home-product" key={product.slug}>
              <Link className="home-product-image" href={`/product/${product.slug}/`}>
                <img src={product.image?.url || "/media/woocommerce-placeholder.webp"} alt={product.image?.alt || product.title} loading="lazy" />
              </Link>
              <p>{product.categories?.[0]?.name || "Handmade pottery"}</p>
              <h3><Link href={`/product/${product.slug}/`}>{product.title}</Link></h3>
              <Link className="home-button product-button" href={`/product/${product.slug}/`}>Read more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-social section-shell" aria-labelledby="home-social-title">
        <div className="home-section-title">
          <img src="/media/2026/02/floral-petals-3-1024x883.webp" alt="" />
          <h2 id="home-social-title">Social</h2>
          <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer">@anat.handmade.pottery</a>
        </div>
        <SocialFeed />
      </section>

      <Link className="whatsapp-float" href="/contact-me/" aria-label="Contact Anat">
        <MessageCircle aria-hidden="true" />
      </Link>
    </main>
  );
}
