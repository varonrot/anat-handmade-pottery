import type { MetadataRoute } from "next";
import wordpress from "@/content/wordpress.json";
import { potteryClasses } from "@/content/classes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anatpottery.co.uk";
  const fixed = ["", "/classes/", "/pottery-classes-ealing/", "/shop/", "/the-studio/", "/about-me/", "/journal/", "/contact-me/", "/faq/"];
  return [
    ...fixed.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...potteryClasses.map((item) => ({ url: `${base}/classes/${item.slug}/`, lastModified: new Date() })),
    ...wordpress.products.map((item) => ({ url: `${base}/product/${item.slug}/`, lastModified: item.date })),
    ...wordpress.posts.map((item) => ({ url: `${base}/${item.slug}/`, lastModified: item.date })),
  ];
}
