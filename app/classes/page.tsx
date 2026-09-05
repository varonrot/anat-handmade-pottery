import type { Metadata } from "next";
import { ClassesCatalog } from "@/components/classes-catalog";
import { potteryClasses } from "@/content/classes";

export const metadata: Metadata = { title: "Pottery Classes & Workshops in West London", description: "Private and small-group pottery classes in a boutique South Ealing garden studio." };

export default function ClassesPage() {
  return (
    <main id="main" className="original-classes-page">
      <section className="classes-page-heading">
        <h1>Pottery Classes &amp; Workshops in West London</h1>
        <p>Small-group sessions in South Ealing garden studio. Explore the world of clay at your own pace.</p>
      </section>
      <ClassesCatalog items={potteryClasses} />
    </main>
  );
}
