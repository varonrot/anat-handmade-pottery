"use client";

import { useState } from "react";

const INITIAL_POSTS = 8;
const POSTS_PER_LOAD = 4;

const socialPosts = [
  { image: "/media/social/studio-glimpse.webp", href: "https://www.instagram.com/reel/DcPFnqxxs30/", alt: "Anat holding a miniature floral pottery bottle in her studio", kind: "reel" },
  { image: "/media/social/studio-tour.webp", href: "https://www.instagram.com/reel/DbYVR26IH7E/", alt: "A tour of Anat's garden pottery studio", kind: "reel" },
  { image: "/media/social/happy-place.webp", href: "https://www.instagram.com/p/DYHxKb9CI47/", alt: "Anat standing at the entrance to her garden pottery studio", kind: "post" },
  { image: "/media/social/mug-journey.webp", href: "https://www.instagram.com/p/DXhKfqlDaGK/", alt: "Two handmade floral pottery mugs", kind: "post" },
  { image: "/media/social/trimming.webp", href: "https://www.instagram.com/reel/DVySpL1CL91/", alt: "Anat demonstrating pottery trimming", kind: "reel" },
  { image: "/media/social/face-behind-clay.webp", href: "https://www.instagram.com/p/DVtqf6cDASK/", alt: "Anat holding a handmade pottery mug", kind: "carousel" },
  { image: "/media/social/underglaze.webp", href: "https://www.instagram.com/reel/DRCtr0GCAk0/", alt: "A handmade pot with blue underglaze", kind: "reel" },
  { image: "/media/social/flower-decoration.webp", href: "https://www.instagram.com/reel/DQrwl2HCDbq/", alt: "Decorating a green handmade pottery vase", kind: "reel" },
  { image: "/media/social/decorating-vase.webp", href: "https://www.instagram.com/reel/DQegBmkiCf-/", alt: "Decorating a handmade pottery vase", kind: "reel" },
  { image: "/media/social/floral-bowl.webp", href: "https://www.instagram.com/p/DQccjcKCC0o/", alt: "Hand-painted floral pottery bowl", kind: "post" },
  { image: "/media/social/painting-pottery.webp", href: "https://www.instagram.com/reel/DP1Wu8eiBns/", alt: "Painting botanical details on handmade pottery", kind: "reel" },
  { image: "/media/social/pottery-collection.webp", href: "https://www.instagram.com/p/DPraH32CTw7/", alt: "A collection of handmade pottery pieces", kind: "post" },
  { image: "/media/social/throwing-clay.webp", href: "https://www.instagram.com/reel/DPoSmGXiIH6/", alt: "Throwing clay on the pottery wheel", kind: "reel" },
  { image: "/media/social/handmade-cup.webp", href: "https://www.instagram.com/p/DPeUhHECaiM/", alt: "A handmade pottery cup", kind: "post" },
  { image: "/media/social/studio-pottery.webp", href: "https://www.instagram.com/p/DJZNkioKY2C/", alt: "Handmade pottery in Anat's studio", kind: "post" },
  { image: "/media/social/pottery-process.webp", href: "https://www.instagram.com/reel/DFDOrfJsAQX/", alt: "A step in Anat's pottery-making process", kind: "reel" },
] as const;

export default function SocialFeed() {
  const [visiblePosts, setVisiblePosts] = useState(INITIAL_POSTS);
  const hasMore = visiblePosts < socialPosts.length;

  return (
    <>
      <div className="social-grid" aria-live="polite">
        {socialPosts.slice(0, visiblePosts).map((post) => (
          <a className="social-tile" href={post.href} target="_blank" rel="noreferrer" key={post.href} aria-label={`${post.alt} on Instagram`}>
            <img src={post.image} alt={post.alt} loading={visiblePosts > INITIAL_POSTS ? "lazy" : undefined} />
            {post.kind === "reel" && <span className="play-mark" aria-hidden="true" />}
            {post.kind === "carousel" && <span className="carousel-mark" aria-hidden="true" />}
          </a>
        ))}
      </div>
      <div className="social-actions">
        {hasMore && (
          <button type="button" onClick={() => setVisiblePosts((count) => Math.min(count + POSTS_PER_LOAD, socialPosts.length))}>
            Load More
          </button>
        )}
        <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer">◎&nbsp;&nbsp; Follow on Instagram</a>
      </div>
    </>
  );
}
