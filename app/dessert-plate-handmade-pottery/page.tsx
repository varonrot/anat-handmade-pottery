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
    <main id="main">
      <section className="page-hero journal-hero">
        <p className="eyebrow">Handmade in the studio</p>
        <h1>A Dessert Plate Made Slowly, by Hand</h1>
        <p>
          A closer look at one of Anat&apos;s handmade ceramic pieces, created in her garden studio in South Ealing, London.
        </p>
      </section>

      <article className="section-shell" style={{ maxWidth: 980, paddingTop: 56, paddingBottom: 72 }}>
        <img
          src={image}
          alt={alt}
          style={{ width: "100%", display: "block", borderRadius: 2, marginBottom: 38 }}
        />

        <div style={{ maxWidth: 760, margin: "0 auto", fontSize: 18, lineHeight: 1.75 }}>
          <p>
            Every handmade plate begins as a simple piece of clay. What makes it special is the process that follows: shaping,
            refining, drying, firing and glazing, with each stage leaving a subtle trace of the maker&apos;s hand.
          </p>
          <p>
            Anat&apos;s Dessert Plate is designed to feel comfortable in everyday use while still carrying the warmth and character
            of a one-of-a-kind studio piece. Small variations in surface, glaze and form are part of what makes handmade pottery
            different from factory-made tableware.
          </p>
          <p>
            Made in Anat&apos;s South Ealing studio, the plate works beautifully for cake, fruit, a small breakfast or simply as a
            piece to enjoy on the table. It is pottery intended to be used, held and lived with.
          </p>

          <div style={{ marginTop: 36 }}>
            <Link className="button primary" href="/product/dessert-plate/">
              View the Dessert Plate
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
