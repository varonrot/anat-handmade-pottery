"use client";

import Link from "next/link";
import { useState } from "react";
import type { PotteryClass } from "@/content/classes";

const filters = [
  { label: "All Classes", count: null, matches: () => true },
  { label: "1:1 Lesson", count: 4, matches: (item: PotteryClass) => item.categories.includes("1:1") || item.slug === "pottery-for-2" },
  { label: "Group Lesson", count: 2, matches: (item: PotteryClass) => item.slug === "private-pottery-class" || item.slug === "pottery-for-2" },
  { label: "Hand-Building Lesson", count: 3, matches: (item: PotteryClass) => item.categories.includes("Hand-building") || item.slug === "gift-vouchers" },
  { label: "Multiple Sessions", count: 3, matches: (item: PotteryClass) => item.categories.includes("Four weeks") || item.slug === "gift-vouchers" },
  { label: "Single Session", count: 3, matches: (item: PotteryClass) => item.categories.includes("Single session") || item.slug === "gift-vouchers" },
  { label: "Throwing Lesson", count: 4, matches: (item: PotteryClass) => item.categories.includes("Throwing") || item.slug === "pottery-for-2" || item.slug === "gift-vouchers" },
] as const;

export function ClassesCatalog({ items }: { items: PotteryClass[] }) {
  const [active, setActive] = useState("All Classes");
  const selected = filters.find((filter) => filter.label === active) ?? filters[0];
  const visibleItems = items.filter(selected.matches);

  return (
    <section className="classes-catalog section-shell" aria-label="Pottery classes">
      <aside className="classes-categories">
        <h2>Categories</h2>
        <div className="classes-category-list">
          {filters.map((filter) => (
            <button
              className={active === filter.label ? "is-active" : undefined}
              key={filter.label}
              type="button"
              onClick={() => setActive(filter.label)}
              aria-pressed={active === filter.label}
            >
              <span>{filter.label}</span>
              {filter.count !== null && <span>{filter.count}</span>}
            </button>
          ))}
        </div>
      </aside>

      <div className="classes-card-grid" id="classes" aria-live="polite">
        {visibleItems.map((item) => (
          <article className="original-class-card" key={item.slug}>
            <Link className="original-class-image" href={`/classes/${item.slug}/`}>
              <img src={item.image} alt={item.imageAlt} />
            </Link>
            <div className="original-class-copy">
              <h3><Link href={`/classes/${item.slug}/`}>{item.title}</Link></h3>
              <p>{item.cardDescription}</p>
              <div className="original-class-meta">
                <div>
                  <span>Price</span>
                  <strong>{item.originalPrice && <del>{item.originalPrice}</del>} {item.price}</strong>
                </div>
                <div>
                  <span>Duration</span>
                  <strong>{item.duration}</strong>
                </div>
              </div>
              <Link className="original-read-more" href={`/classes/${item.slug}/`}>Read More &gt;</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
