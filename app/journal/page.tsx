import type { Metadata } from "next";
import Link from "next/link";
import wordpress from "@/content/wordpress.json";

export const metadata: Metadata = { title: "Pottery Journal", description: "Stories from the studio, student journeys and the handmade pottery process." };

const plain = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export default function JournalPage() {
  return <main id="main"><section className="page-hero journal-hero"><p className="eyebrow">From the studio</p><h1>Journal</h1><p>The stories, techniques and patient transformations behind handmade pottery.</p></section><section className="journal-grid section-shell">{wordpress.posts.map((post) => <article className="journal-card" key={post.slug}><Link href={`/${post.slug}/`}><img src={post.image?.url || "/media/2026/02/hero_home_page_1.webp"} alt={post.image?.alt || post.title} /></Link><div><p className="eyebrow">{post.categories[0]?.name || "Journal"}</p><h2><Link href={`/${post.slug}/`}>{post.title}</Link></h2><p>{plain(post.excerpt || post.content).slice(0, 180)}…</p><Link className="text-link" href={`/${post.slug}/`}>Read the story</Link></div></article>)}</section></main>;
}
