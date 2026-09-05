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
            <a href="https://www.instagram.com/anat.handmade.pottery/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://www.facebook.com/anathandmadepottery/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="http://anathandmadepottery.etsy.com/" target="_blank" rel="noreferrer" aria-label="Etsy">E</a>
          </div>
          <a href="mailto:anat.pottery@gmail.com">anat.pottery@gmail.com</a>
          <span>Ealing, London W5</span>
        </div>
      </div>
      <p className="copyright">© 2026 Anat Handmade Pottery. Handcrafted in London.</p>
    </footer>
  );
}
