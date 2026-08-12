import Link from "next/link";

const menuGroups = [
  {
    label: "Tailoring & Suits",
    featured: { label: "The Permanent 5", href: "/suits" },
    columns: [
      { title: "Featured", links: [["The Permanent 5", "/suits"], ["Athletic Fit", "/fit-guide"], ["New Deliveries", "/new"]] },
      { title: "Tailoring", links: [["Made-to-Order", "/made-to-order"], ["Two-Piece Suits", "/suits"], ["Separate Trousers", "/trousers"]] },
      { title: "Occasion", links: [["Boardroom Neutral", "/suits"], ["Seasonal Evening", "/suits"], ["Travel Suitcase", "/suits"]] }
    ]
  },
  {
    label: "Shirts & Tops",
    featured: { label: "Permanent Solids", href: "/shirts" },
    columns: [
      { title: "Shirting", links: [["Dress Shirts", "/shirts"], ["Casual Knits", "/shirts"], ["Permanent Solids", "/shirts"]] },
      { title: "Fit", links: [["Athletic Fit Shirts", "/shirts"], ["Fit Guide", "/fit-guide"], ["Measurement Studio", "/made-to-order"]] },
      { title: "Edit", links: [["Office Core", "/shirts"], ["Friday Microcheck", "/shirts"], ["New Deliveries", "/new"]] }
    ]
  },
  {
    label: "Footwear & Leather",
    featured: { label: "Cap-Toe Oxford", href: "/shoes" },
    columns: [
      { title: "Footwear", links: [["Dress Shoes", "/shoes"], ["Seasonal Trainers", "/shoes"], ["Travel Footwear", "/shoes"]] },
      { title: "Leather", links: [["Black Leather Belt", "/accessories"], ["Brown Leather Belt", "/accessories"], ["The Leather Rule", "/accessories"]] },
      { title: "Occasion", links: [["Boardroom", "/shoes"], ["Evening", "/shoes"], ["Travel", "/shoes"]] }
    ]
  },
  {
    label: "The House Fit",
    featured: { label: "The Jentlemens System", href: "/fit-guide" },
    columns: [
      { title: "Fit Studio", links: [["Fit Guide", "/fit-guide"], ["Measurement Studio", "/made-to-order"], ["Athletic Fit Logic", "/fit-guide"]] },
      { title: "Made to Order", links: [["Build Your Suit", "/made-to-order"], ["Measurement Profile", "/made-to-order"], ["Production Process", "/made-to-order"]] },
      { title: "The System", links: [["Permanent Wardrobe", "/"], ["Five Suit Colors", "/suits"], ["Complete the Look", "/products/athletic-fit-suit"]] }
    ]
  }
];

export function SiteHeader() {
  return (
    <>
      <div className="announcement">Complimentary Custom Measurement Reviews on All Made-to-Order Suits</div>
      <header className="siteHeader">
        <Link className="brand" href="/"><span>J</span><b>JENTLEMENS</b></Link>
        <nav className="mainNav desktopMegaNav" aria-label="Primary navigation">
          {menuGroups.map((group) => (
            <div className="navGroup" key={group.label}>
              <button className="navTrigger" type="button">{group.label}</button>
              <div className="megaMenu">
                <div className="megaColumns">
                  {group.columns.map((column) => (
                    <div key={column.title} className="megaColumn">
                      <b>{column.title}</b>
                      {column.links.map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}
                    </div>
                  ))}
                </div>
                <Link className="megaFeature" href={group.featured.href}>
                  <div className="megaFeatureImage" />
                  <span>House selection</span>
                  <strong>{group.featured.label}</strong>
                  <small>Explore the edit →</small>
                </Link>
              </div>
            </div>
          ))}
        </nav>
        <div className="headerUtilities"><Link href="/new">Search</Link><Link className="bagLink" href="/new">Bag <span>0</span></Link></div>
        <nav className="mobileNav" aria-label="Mobile navigation">
          {menuGroups.map((group) => (
            <details key={group.label}>
              <summary>{group.label}</summary>
              <div>{group.columns.flatMap((column) => column.links).slice(0,6).map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}</div>
            </details>
          ))}
        </nav>
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
