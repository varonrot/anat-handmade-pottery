"use client";

import { useEffect, useState } from "react";

type GalleryImage = readonly [string, string];

type StudioGalleryProps = {
  images: readonly GalleryImage[];
};

export function StudioGallery({ images }: StudioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="studio-gallery">
        {images.map(([src, alt], index) => (
          <button className="studio-gallery-item" key={src} type="button" onClick={() => setActiveIndex(index)} aria-label={`View larger: ${alt}`}>
            <img src={src} alt={alt} loading="lazy" />
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="studio-lightbox" role="dialog" aria-modal="true" aria-label="Studio gallery" onClick={() => setActiveIndex(null)}>
          <div className="studio-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="studio-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery">×</button>
            <button className="studio-lightbox-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} aria-label="Previous photo">‹</button>
            <img src={images[activeIndex][0]} alt={images[activeIndex][1]} />
            <button className="studio-lightbox-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} aria-label="Next photo">›</button>
            <p>{images[activeIndex][1]}</p>
          </div>
        </div>
      )}
    </>
  );
}
