"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { PotteryClass } from "@/content/classes";

const filters = [
  { key: "all", label: "All Classes", count: null, slugs: null },
  { key: "11-lesson", label: "1:1 Lesson", count: 4, slugs: ["private-pottery-class", "a-throwing-journey-for-adults", "4-week-hand-building-basics-adults", "gift-vouchers"] },
  { key: "group-lesson", label: "Group Lesson", count: 2, slugs: ["pottery-for-2", "gift-vouchers"] },
  { key: "hand-building-lesson", label: "Hand-Building Lesson", count: 3, slugs: ["private-pottery-class", "4-week-hand-building-basics-adults", "gift-vouchers"] },
  { key: "multiple-sessions", label: "Multiple Sessions", count: 3, slugs: ["a-throwing-journey-for-adults", "4-week-hand-building-basics-adults", "gift-vouchers"] },
  { key: "single-session", label: "Single Session", count: 3, slugs: ["private-pottery-class", "pottery-for-2", "gift-vouchers"] },
  { key: "throwing-lesson", label: "Throwing Lesson", count: 4, slugs: ["private-pottery-class", "pottery-for-2", "a-throwing-journey-for-adults", "gift-vouchers"] },
] as const;

export function ClassesCatalog({ items }: { items: PotteryClass[] }) {
  const [active, setActive] = useState("all");
  const selected = filters.find((filter) => filter.key === active) ?? filters[0];
  const selectedSlugs = selected.slugs as readonly string[] | null;
  const visibleItems = selectedSlugs ? items.filter((item) => selectedSlugs.includes(item.slug)) : items;

  useEffect(() => {
    const syncFromUrl = () => {
      const requested = new URL(window.location.href).searchParams.get("category_name") || "all";
      setActive(filters.some((filter) => filter.key === requested) ? requested : "all");
    };
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const selectCategory = (key: string) => {
    setActive(key);
    const url = new URL(window.location.href);
    if (key === "all") url.searchParams.delete("category_name");
    else url.searchParams.set("category_name", key);
    window.history.pushState({}, "", url);
  };

  return (
    <section className="classes-catalog section-shell" aria-label="Pottery classes">
      <aside className="classes-categories">
        <h2>Categories</h2>
        <div className="classes-category-list">
          {filters.map((filter) => (
            <button
              className={active === filter.key ? "is-active" : undefined}
              key={filter.key}
              type="button"
              onClick={() => selectCategory(filter.key)}
              aria-pressed={active === filter.key}
            >
              <span>{filter.label}</span>
              {filter.count !== null && <span>{filter.count}</span>}
            </button>
          ))}
        </div>
      </aside>

      <div className="classes-card-grid" id="classes" aria-live="polite">
        {visibleItems.map((item) => (
          <article className="original-class-card" key={`${active}-${item.slug}`}>
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
