import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-story">
          <img src="/media/2026/02/anatLogoBig-Circle_small.webp" alt="" />
          <p>Handcrafted ceramics and a space to create. I design and make pottery in my garden studio in Ealing, where I also host small group workshops for those looking to explore the world of clay.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/classes/">Pottery Classes</Link>
          <Link href="/shop/">Shop</Link>
          <Link href="/the-studio/">The Studio</Link>
          <Link href="/about-me/">About Me</Link>
          <Link href="/faq/">Good to Know</Link>
          <Link href="/contact-me/">Contact Me</Link>
        </div>
        <div>
          <h2>Visit & Connect</h2>
          <div className="footer-socials">
            <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="footer-social-dot" /></svg>
            </a>
            <a href="https://www.facebook.com/anathandmadepottery/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.4-.1-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V10H8.5v3h2.6v8h2.7Z" /></svg>
            </a>
            <a href="http://anathandmadepottery.etsy.com/" target="_blank" rel="noreferrer" aria-label="Etsy">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14l.4 5h-1.6c-.4-2.1-1.5-3.2-4.1-3.2H11v6h1.3c1.7 0 2.4-.9 2.6-2.5h1.5v6.6h-1.5c-.2-1.6-.9-2.5-2.6-2.5H11v6.8h3c2.6 0 4-1.4 4.5-3.9H20l-.5 5.7H5v-1.5l2-.4V5l-2-.5V3Z" /></svg>
            </a>
          </div>
          <a href="mailto:anat.pottery@gmail.com">anat.pottery@gmail.com</a>
          <span>Ealing, London W5</span>
        </div>
      </div>
      <p className="copyright">© 2026 Anat Handmade Pottery. Handcrafted in London.</p>
    </footer>
  );
}
