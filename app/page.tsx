import Link from "next/link";
import { MessageCircle } from "lucide-react";
import wordpress from "@/content/wordpress.json";

const socialPosts = [
  { image: "/media/social/studio-glimpse.webp", href: "https://www.instagram.com/reel/DcPFnqxxs30/", alt: "Anat holding a miniature floral pottery bottle in her studio", kind: "reel" },
  { image: "/media/social/studio-tour.webp", href: "https://www.instagram.com/reel/DbYVR26IH7E/", alt: "A tour of Anat's garden pottery studio", kind: "reel" },
  { image: "/media/social/happy-place.webp", href: "https://www.instagram.com/p/DYHxKb9CI47/", alt: "Anat standing at the entrance to her garden pottery studio", kind: "post" },
  { image: "/media/social/mug-journey.webp", href: "https://www.instagram.com/p/DXhKfqlDaGK/", alt: "Two handmade floral pottery mugs", kind: "post" },
  { image: "/media/social/trimming.webp", href: "https://www.instagram.com/reel/DVySpL1CL91/", alt: "Anat demonstrating pottery trimming", kind: "reel" },
  { image: "/media/social/face-behind-clay.webp", href: "https://www.instagram.com/p/DVtqf6cDASK/", alt: "Anat holding a handmade pottery mug", kind: "carousel" },
  { image: "/media/social/underglaze.webp", href: "https://www.instagram.com/reel/DRCtr0GCAk0/", alt: "A handmade pot with blue underglaze", kind: "reel" },
  { image: "/media/social/flower-decoration.webp", href: "https://www.instagram.com/reel/DQrwl2HCDbq/", alt: "Decorating a green handmade pottery vase", kind: "reel" },
] as const;

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
        <div className="social-grid">
          {socialPosts.map((post) => (
            <a className="social-tile" href={post.href} target="_blank" rel="noreferrer" key={post.href} aria-label={`${post.alt} on Instagram`}>
              <img src={post.image} alt={post.alt} />
              {post.kind === "reel" && <span className="play-mark" aria-hidden="true" />}
              {post.kind === "carousel" && <span className="carousel-mark" aria-hidden="true" />}
            </a>
          ))}
        </div>
        <div className="social-actions">
          <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer">Load More</a>
          <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer">◎&nbsp;&nbsp; Follow on Instagram</a>
        </div>
      </section>

      <Link className="whatsapp-float" href="/contact-me/" aria-label="Contact Anat">
        <MessageCircle aria-hidden="true" />
      </Link>
    </main>
  );
}
