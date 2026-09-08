import type { Metadata } from "next";
import Link from "next/link";
import wordpress from "@/content/wordpress.json";

export const metadata: Metadata = {
  title: "Studio Collection",
  description: "Small batch, hand-thrown stoneware crafted in South Ealing.",
};

const preferredOrder = [
  "Dessert Plate",
  "Floral Coffee Tea Mug",
  "Heart Dish With Floral Print",
  "Marbled Porcelain Trinket Box",
  "Mini porcelain decorative flower bottle vase",
  "Oval Serving Plate with Mini Dish",
  "Porcelain lidded jar with floral print and coloured lid",
  "Ring holder Stand – Small Jewelry Dish Tray",
  "Snack Set with Wooden Serving Tray",
  "Two-Handled Floral Snack Bowl",
];

const rank = new Map(preferredOrder.map((title, index) => [title.toLowerCase(), index]));

const orderedProducts = [...wordpress.products].sort((a, b) => {
  const aRank = rank.get(a.title.toLowerCase()) ?? 999;
  const bRank = rank.get(b.title.toLowerCase()) ?? 999;
  return aRank - bRank;
});

export default function ShopPage() {
  return (
    <main id="main" className="original-shop-page">
      <section className="original-shop-shell">
        <nav className="original-shop-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Studio Collection</span>
        </nav>

        <h1>Studio Collection</h1>
        <p className="original-shop-intro">
          Small batch, hand-thrown stoneware crafted in South Ealing. Click on any piece to view details and purchase via Etsy.
        </p>

        <div className="original-shop-grid">
          {orderedProducts.map((product) => (
            <article className="original-shop-card" key={product.slug}>
              <Link className="original-shop-image" href={`/product/${product.slug}/`}>
                <img
                  src={product.image?.url || "/media/woocommerce-placeholder.webp"}
                  alt={product.image?.alt || product.title}
                  loading="lazy"
                />
              </Link>

              <p className="original-shop-category">
                {product.categories?.[0]?.name === "Jewlery Dish"
                  ? "Jewelry Dish"
                  : product.categories?.[0]?.name || "Handmade pottery"}
              </p>

              <h2>
                <Link href={`/product/${product.slug}/`}>{product.title}</Link>
              </h2>

              <Link className="original-shop-button" href={`/product/${product.slug}/`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .original-shop-page {
          background: #faf7f4;
          color: #173047;
          min-height: 100vh;
        }

        .original-shop-shell {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 64px 0 90px;
        }

        .original-shop-breadcrumb {
          margin-bottom: 18px;
          color: #79828d;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .original-shop-breadcrumb a:hover { color: #d18477; }

        .original-shop-page h1 {
          margin: 0;
          color: #173047;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .original-shop-intro {
          margin: 38px 0 34px;
          color: #253b50;
          font-family: Arial, sans-serif;
          font-size: 18px;
          line-height: 1.6;
        }

        .original-shop-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 18px;
          row-gap: 46px;
          align-items: start;
        }

        .original-shop-card { min-width: 0; }

        .original-shop-image {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f1efec;
        }

        .original-shop-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .35s ease;
        }

        .original-shop-card:hover .original-shop-image img { transform: scale(1.025); }

        .original-shop-category {
          margin: 12px 0 5px;
          color: #8a929b;
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.35;
        }

        .original-shop-card h2 {
          min-height: 42px;
          margin: 0 0 14px;
          color: #102b43;
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: 0;
        }

        .original-shop-card h2 a:hover { color: #c97769; }

        .original-shop-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 114px;
          min-height: 36px;
          padding: 7px 19px;
          border-radius: 3px;
          background: #f3b0a7;
          color: #111;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          transition: background .2s ease;
        }

        .original-shop-button:hover { background: #eda095; }

        @media (max-width: 980px) {
          .original-shop-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (max-width: 720px) {
          .original-shop-shell {
            width: min(100% - 32px, 1180px);
            padding-top: 42px;
          }
          .original-shop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .original-shop-intro { margin-top: 26px; font-size: 16px; }
          .original-shop-page h1 { font-size: 32px; }
        }

        @media (max-width: 460px) {
          .original-shop-grid { grid-template-columns: 1fr; }
          .original-shop-card h2 { min-height: 0; }
        }
      `}</style>
    </main>
  );
}
