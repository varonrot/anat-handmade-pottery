import { notFound } from "next/navigation";
import Link from "next/link";
import wordpress from "@/content/wordpress.json";
import { potteryClasses } from "@/content/classes";

const classCategoryMap: Record<string, string> = { "single-session": "Single session", "throwing-lesson": "Throwing", "hand-building-lesson": "Hand-building", "11-lesson": "1:1", "group-lesson": "For two", "multiple-sessions": "Four weeks" };
const journalCategories = new Set(["student-stories", "the-process"]);

export function generateStaticParams() { return [...Object.keys(classCategoryMap), ...journalCategories].map((slug) => ({ slug })); }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (journalCategories.has(slug)) {
    const posts = wordpress.posts.filter((post) => post.categories.some((category) => category.slug === slug));
    return <main id="main"><section className="page-hero compact-hero"><p className="eyebrow">Journal category</p><h1>{posts[0]?.categories.find((category) => category.slug === slug)?.name || "Journal"}</h1></section><section className="section-shell simple-list">{posts.map((post) => <article key={post.slug}><h2><Link href={`/${post.slug}/`}>{post.title}</Link></h2></article>)}</section></main>;
  }
  const label = classCategoryMap[slug]; if (!label) notFound(); const classes = potteryClasses.filter((item) => item.categories.includes(label));
  return <main id="main"><section className="page-hero compact-hero"><p className="eyebrow">Pottery classes</p><h1>{label}</h1></section><section className="section-shell simple-list">{classes.map((item) => <article key={item.slug}><img src={item.image} alt={item.imageAlt} /><div><h2><Link href={`/classes/${item.slug}/`}>{item.title}</Link></h2><p>{item.cardDescription}</p></div></article>)}</section></main>;
}
