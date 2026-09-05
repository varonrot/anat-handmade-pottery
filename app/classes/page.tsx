import type { Metadata } from "next";
import Link from "next/link";
import { potteryClasses } from "@/content/classes";

export const metadata: Metadata = { title: "Pottery Classes & Workshops in West London", description: "Private and small-group pottery classes in a boutique South Ealing garden studio." };

export default function ClassesPage() {
  return <main id="main">
    <section className="page-hero compact-hero"><p className="eyebrow">Learn at your own pace</p><h1>Pottery Classes & Workshops in West London</h1><p>Small, personal sessions in a South Ealing garden studio. Explore the world of clay with hands-on guidance.</p></section>
    <section className="section-shell class-grid">
      {potteryClasses.map((item) => <article className="class-card" key={item.slug}>
        <Link href={`/classes/${item.slug}/`} className="class-card-image"><img src={item.image} alt={item.imageAlt} /></Link>
        <div className="class-card-copy"><div className="tag-row">{item.categories.slice(0, 3).map((category) => <span key={category}>{category}</span>)}</div><h2><Link href={`/classes/${item.slug}/`}>{item.title}</Link></h2><p>{item.cardDescription}</p><div className="class-meta"><div><small>{item.priceLabel}</small><strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong></div><div><small>Duration</small><strong>{item.duration}</strong></div></div><Link className="text-link" href={`/classes/${item.slug}/`}>View class details</Link></div>
      </article>)}
    </section>
  </main>;
}
