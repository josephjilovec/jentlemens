import Link from "next/link";
import { departments } from "@/lib/catalog";

export function SiteHeader() {
  return (
    <>
      <div className="announcement">ATHLETIC FIT / MADE-TO-ORDER SUITING / LIMITED SEASONAL FOOTWEAR</div>
      <header className="siteHeader">
        <a className="brand" href="/"><span>J</span><b>JENTLEMENS</b></a>
        <nav className="mainNav" aria-label="Primary navigation">
          {departments.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="bagLink" href="/new">Shop</a>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footerBrand"><b>JENTLEMENS</b><p>A disciplined men's wardrobe built around Athletic Fit.</p></div>
      <div><b>SHOP</b><Link href="/suits">Suits</Link><Link href="/shirts">Shirts</Link><Link href="/trousers">Trousers</Link><Link href="/shoes">Shoes</Link><Link href="/accessories">Accessories</Link></div>
      <div><b>SERVICE</b><Link href="/fit-guide">Fit guide</Link><Link href="/made-to-order">Made to order</Link><a href="mailto:realjjemail@gmail.com">Contact</a></div>
      <div className="bottom">© 2026 Jentlemens <span>A Joseph Jilovec Venture</span><a href="https://www.josephjilovec.com/ventures">Explore the Venture Studio →</a></div>
    </footer>
  );
}
