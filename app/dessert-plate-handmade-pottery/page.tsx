import type { Metadata } from "next";
import Link from "next/link";
import wordpress from "@/content/wordpress.json";

const product = wordpress.products.find((item) => item.slug === "dessert-plate");

export const metadata: Metadata = {
  title: "Handmade Dessert Plate | Anat Handmade Pottery",
  description:
    "Discover Anat's handmade ceramic Dessert Plate, shaped and finished by hand in her South Ealing pottery studio in West London.",
};

export default function DessertPlatePost() {
  const image = product?.image?.url || "/media/2026/02/hero_home_page_1.webp";
  const alt = product?.image?.alt || "Handmade ceramic dessert plate by Anat Handmade Pottery";

  return (
    <main id="main" style={{ background: "#fbf7f4" }}>
      <section
        style={{
          maxWidth: 1260,
          margin: "0 auto",
          padding: "72px 34px 70px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
          gap: 72,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt={alt}
            style={{
              width: "100%",
              maxWidth: 470,
              aspectRatio: "1 / 1",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div style={{ maxWidth: 660 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 24,
              color: "#b76c5b",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <span>Handmade in the studio</span>
            <span style={{ width: 56, height: 1, background: "#c48a7a", display: "inline-block" }} />
          </div>

          <h1
            style={{
              margin: 0,
              color: "#293b4f",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: "clamp(48px, 5.2vw, 78px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              maxWidth: 760,
            }}
          >
            A Dessert Plate
            <br />
            Made Slowly, by Hand
          </h1>

          <p
            style={{
              margin: "26px 0 24px",
              maxWidth: 560,
              color: "#6d766e",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(24px, 2vw, 31px)",
              lineHeight: 1.22,
            }}
          >
            A simple plate for everyday moments that feel a little more special.
          </p>

          <div
            style={{
              maxWidth: 620,
              color: "#4f4b48",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 17,
              lineHeight: 1.58,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              Each dessert plate is handmade in my studio, from a lump of clay to a finished glaze. I love the quiet,
              meditative process — the way the form slowly takes shape, the small variations that make each piece one of a kind.
            </p>
            <p style={{ margin: 0 }}>
              Perfect for a slice of cake, a morning pastry, or a few fresh fruits, this plate is designed to bring beauty to the
              everyday. Neutral, tactile, and timeless, it&apos;s a little reminder to slow down and savor.
            </p>
          </div>

          <div style={{ marginTop: 26 }}>
            <Link
              href="/product/dessert-plate/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                background: "#2f302e",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 999,
                padding: "14px 23px",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              View the Dessert Plate <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          #main > section {
            grid-template-columns: 1fr !important;
            gap: 38px !important;
            padding-top: 42px !important;
          }
          #main > section > div:first-child img {
            max-width: 560px !important;
          }
        }
        @media (max-width: 600px) {
          #main > section {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
        }
      `}</style>
    </main>
  );
}
