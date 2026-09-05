import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import SocialFeed from "@/components/social-feed";
import { HomeTwoReveal } from "@/components/home-two-reveal";
import wordpress from "@/content/wordpress.json";

export const metadata: Metadata = {
  title: "Homepage Concept 2",
  description: "A second homepage concept for Anat Handmade Pottery.",
  robots: { index: false, follow: false },
};

export default function HomeTwoPage() {
  const featured = wordpress.products.slice(-4).reverse();

  return (
    <main id="main" className="home-two">
      <HomeTwoReveal />

      <section className="home-two-hero">
        <img src="/media/2026/02/hero_home_page_1.webp" alt="Hand-painted porcelain bottles by Anat Handmade Pottery" />
        <div className="home-two-hero-shade" />
        <div className="home-two-hero-copy">
          <p className="home-two-brand">Anat Handmade Pottery <span>by Anat Varon Moneta</span></p>
          <h1>Made slowly.<br /><em>Kept forever.</em></h1>
          <p className="home-two-intro">Handcrafted ceramics and intimate pottery classes in a boutique garden studio in Ealing, West London.</p>
          <div className="home-two-actions">
            <Link className="home-two-primary" href="/classes/">Explore pottery classes <ArrowRight aria-hidden="true" /></Link>
            <Link className="home-two-secondary" href="/shop/">Shop handmade pottery</Link>
          </div>
        </div>
        <div className="home-two-location"><MapPin aria-hidden="true" /><span>South Ealing<br /><strong>London W5</strong></span></div>
      </section>

      <section className="home-two-opening home-two-reveal">
        <img src="/media/2026/02/floral-petals-3-1024x883.webp" alt="" />
        <p>Discover</p>
        <h2>Beautiful things happen<br />when we make time to create.</h2>
      </section>

      <section className="home-two-discover">
        <article className="home-two-feature home-two-reveal">
          <Link className="home-two-feature-image home-two-arch-left" href="/classes/">
            <img src="/media/2026/02/pottery-classes-1024x1024.webp" alt="Hands shaping clay during a private pottery class" />
            <span>01</span>
          </Link>
          <div className="home-two-feature-copy">
            <p>Learn with Anat</p>
            <h2>Discover Pottery Classes</h2>
            <span>Join my pottery workshops and explore your creativity. From beginners to advanced students, I offer small, personalized classes where you can learn techniques, create your own pieces, and take home something special.</span>
            <div className="home-two-feature-details"><span>Private guidance</span><span>All materials included</span><span>South Ealing studio</span></div>
            <Link className="home-two-text-link" href="/classes/">Find your class <ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>

        <article className="home-two-feature home-two-feature-reverse home-two-reveal">
          <Link className="home-two-feature-image home-two-arch-right" href="/shop/">
            <img src="/media/2026/02/shop-now-1024x1024.webp" alt="Colourful handmade porcelain lidded boxes" />
            <span>02</span>
          </Link>
          <div className="home-two-feature-copy">
            <p>Made by hand</p>
            <h2>Discover Handmade Pottery</h2>
            <span>Browse a collection of handcrafted pottery pieces, each made with care and attention to detail. From unique jars to decorative items, find something special for your home or as a gift.</span>
            <div className="home-two-feature-details"><span>One of a kind</span><span>Hand-painted details</span><span>Made in London</span></div>
            <Link className="home-two-text-link" href="/shop/">Browse the collection <ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>
      </section>

      <section className="home-two-shop">
        <div className="home-two-section-head home-two-reveal">
          <div><p>From the studio</p><h2>Shop handmade pottery</h2></div>
          <Link href="/shop/">View all pieces <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-two-products">
          {featured.map((product, index) => (
            <article className={`home-two-product home-two-reveal home-two-delay-${index}`} key={product.slug}>
              <Link className="home-two-product-image" href={`/product/${product.slug}/`}>
                <img src={product.image?.url || "/media/woocommerce-placeholder.webp"} alt={product.image?.alt || product.title} loading="lazy" />
                <span>View piece</span>
              </Link>
              <p>{product.categories?.[0]?.name || "Handmade pottery"}</p>
              <h3><Link href={`/product/${product.slug}/`}>{product.title}</Link></h3>
            </article>
          ))}
        </div>
      </section>

      <section className="home-two-statement home-two-reveal">
        <div className="home-two-statement-image"><img src="/media/2026/01/studio_image_7.webp" alt="Anat's pottery studio in Ealing" /></div>
        <div className="home-two-statement-copy">
          <p>A place to make</p>
          <h2>Step into my garden studio.</h2>
          <span>A quiet, welcoming creative space in Ealing where clay, colour and curiosity come together. Come for a class, discover the process and leave with something made by you.</span>
          <Link className="home-two-text-link light" href="/the-studio/">Visit the studio <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-two-social">
        <div className="home-two-social-head home-two-reveal">
          <img src="/media/2026/02/floral-petals-3-1024x883.webp" alt="" />
          <p>Behind the scenes</p>
          <h2>Follow the making</h2>
          <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer">@anat.handmade.pottery</a>
        </div>
        <div className="home-two-social-feed home-two-reveal"><SocialFeed /></div>
      </section>

      <section className="home-two-final home-two-reveal">
        <p>Your next creative chapter</p>
        <h2>Come and make something<br /><em>that is entirely yours.</em></h2>
        <Link className="home-two-primary coral" href="/classes/">Explore pottery classes <ArrowRight aria-hidden="true" /></Link>
      </section>

      <Link className="whatsapp-float" href="/contact-me/" aria-label="Contact Anat"><MessageCircle aria-hidden="true" /></Link>
    </main>
  );
}
