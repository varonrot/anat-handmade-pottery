type DescriptionSection = {
  title: string;
  paragraphs: string[];
  items: string[];
};

const headingPattern = /^(key features|(?:approximate\s+)?(?:dimensions|dimentions)(?:\s*\(approximately\))?|please note)\s*:?$/i;

function cleanText(content: string) {
  return content
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/\r/g, "");
}

function sectionTitle(value: string) {
  const clean = value.replace(/^[●∙]\s*/, "").replace(/\s*:\s*$/, "").trim();
  if (/key features/i.test(clean)) return "Key Features";
  if (/please note/i.test(clean)) return "Please note";
  if (/dimensions|dimentions/i.test(clean)) return /approximately/i.test(clean) ? "Dimensions (approximately)" : "Dimensions";
  return clean;
}

function parseDescription(content: string) {
  const intro: string[] = [];
  const sections: DescriptionSection[] = [];
  let current: DescriptionSection | null = null;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").replace(/\s+/g, " ").trim();
    if (text) (current ? current.paragraphs : intro).push(text);
    paragraph = [];
  };

  for (const rawLine of cleanText(content).split("\n")) {
    const line = rawLine.trim();
    if (!line || line === "***") {
      flushParagraph();
      continue;
    }

    const possibleHeading = line.replace(/^[●∙]\s*/, "");
    if (headingPattern.test(possibleHeading)) {
      flushParagraph();
      current = { title: sectionTitle(possibleHeading), paragraphs: [], items: [] };
      sections.push(current);
      continue;
    }

    if (/^[●∙]/.test(line)) {
      flushParagraph();
      const item = line.replace(/^[●∙]\s*/, "").trim();
      if (!current) {
        current = { title: "Details", paragraphs: [], items: [] };
        sections.push(current);
      }
      current.items.push(item);
      continue;
    }

    if (current?.items.length && current.title.toLowerCase().includes("note")) {
      current.items[current.items.length - 1] += ` ${line}`;
    } else {
      paragraph.push(line);
    }
  }

  flushParagraph();
  return { intro, sections };
}

export function ProductDescription({ content }: { content: string }) {
  const description = parseDescription(content);

  return (
    <div className="product-description-copy">
      {description.intro.map((paragraph, index) => <p className={index === 0 ? "product-description-lead" : undefined} key={paragraph}>{paragraph}</p>)}

      {description.sections.map((section) => (
        <section className="product-description-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.length > 0 && (
            <div className={section.title.startsWith("Dimensions") ? "product-dimensions" : undefined}>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          )}
          {section.items.length > 0 && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>
      ))}
    </div>
  );
}
