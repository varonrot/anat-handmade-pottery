import Link from "next/link";

type Product = {
  title: string;
  slug: string;
  image?: { url?: string; alt?: string } | null;
  categories?: { name: string }[];
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/product/${product.slug}/`}>
        <img src={product.image?.url || "/media/woocommerce-placeholder.webp"} alt={product.image?.alt || product.title} loading="lazy" />
      </Link>
      <div className="product-card-copy">
        <p className="eyebrow">{product.categories?.[0]?.name || "Handmade pottery"}</p>
        <h2><Link href={`/product/${product.slug}/`}>{product.title}</Link></h2>
        <Link className="text-link" href={`/product/${product.slug}/`}>View piece</Link>
      </div>
    </article>
  );
}
