"use client";

import { useState } from "react";
import socialPosts from "@/content/social-posts.json";

const INITIAL_POSTS = 8;
const POSTS_PER_LOAD = 8;

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
