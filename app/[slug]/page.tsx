import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import wordpress from "@/content/wordpress.json";

const posts = new Map(wordpress.posts.map((post) => [post.slug, post]));
const plain = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export function generateStaticParams() {
  return [
    ...wordpress.posts.map(({ slug }) => ({ slug })),
    ...["sample-page", "cart", "checkout", "my-account", "thank-you"].map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const post = posts.get(slug); if (!post) return {};
  return { title: post.seoTitle || post.title, description: post.seoDescription || plain(post.excerpt || post.content).slice(0, 158) };
}

export default async function LegacyOrPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "sample-page") redirect("/");
  if (["cart", "checkout", "my-account"].includes(slug)) redirect("/shop/");
  if (slug === "thank-you") return <main id="main"><section className="page-hero compact-hero"><p className="eyebrow">Thank you</p><h1>Your message is on its way</h1><p>Anat will be in touch shortly.</p></section></main>;
  const post = posts.get(slug); if (!post) notFound();
  return <main id="main"><article className="article-page"><header className="article-header section-shell"><p className="eyebrow">{post.categories[0]?.name || "Pottery Journal"}</p><h1>{post.title}</h1><p>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p></header>{post.image && <div className="article-feature"><img src={post.image.url} alt={post.image.alt || post.title} /></div>}<div className="rich-copy article-copy" dangerouslySetInnerHTML={{ __html: post.content }} /></article></main>;
}
