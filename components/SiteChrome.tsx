import Link from "next/link";
import { departmentConfig } from "@/lib/site-config";

export function SiteHeader() {
  return <>
    <div className="announcement">THE PERMANENT 10 — 10 DESIGNER TIES · $500 TOTAL · $50 PER TIE</div>
    <header className="v2Header">
      <div className="v2HeaderTop">
        <Link className="v2Brand" href="/"><span>J</span><b>JENTLEMENS</b></Link>
        <nav className="v2DesktopNav" aria-label="Primary navigation">
          {departmentConfig.map(dept=><div className="v2NavGroup" key={dept.key}>
            <Link className="v2NavTrigger" href={dept.href}>{dept.label}</Link>
            <div className="v2MegaMenu">
              <div className="v2MegaColumns">
                {dept.columns.map(column=><div className="v2MegaColumn" key={column.title}><b>{column.title}</b>{column.links.map(link=><Link key={link.href+link.label} href={link.href}>{link.label}</Link>)}</div>)}
              </div>
              <Link className="v2MegaFeature" href={dept.key==="shirting"?"/products/permanent-ten-bundle":dept.featured.href}>
                <div style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.45),transparent),url('${dept.key==="shirting"?"https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1000&q=88":dept.featured.image}')`}}/>
                <span>{dept.key==="shirting"?"THE PERMANENT 10":dept.featured.label}</span><strong>{dept.key==="shirting"?"10 ties · one $500 collection":dept.featured.title}</strong><small>Explore →</small>
              </Link>
            </div>
          </div>)}
        </nav>
        <div className="v2HeaderTools"><Link href="/products/permanent-ten-bundle">Shop 10-Pack</Link><Link href="/shirting/ties">The Edit</Link><Link className="v2Bag" href="/products/permanent-ten-bundle">$500 <span>10</span></Link></div>
      </div>
      <nav className="v2MobileNav" aria-label="Mobile navigation">
        <Link className="v2MobileDepartment" href="/products/permanent-ten-bundle">Shop the Permanent 10 — $500</Link>
        {departmentConfig.map(dept=><details key={dept.key}><summary>{dept.label}</summary><div><Link className="v2MobileDepartment" href={dept.href}>Explore {dept.label}</Link>{dept.columns.flatMap(c=>c.links).map(link=><Link key={link.href+link.label} href={link.href}>{link.label}</Link>)}</div></details>)}
      </nav>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="v2Footer">
    <div className="v2FooterLead"><Link className="v2Brand light" href="/"><span>J</span><b>JENTLEMENS</b></Link><p>The current offer is deliberately simple: ten coordinated designer ties, one $500 collection, $50 per tie.</p></div>
    <div><b>THE CURRENT OFFER</b><Link href="/products/permanent-ten-bundle">The Permanent 10</Link><Link href="/shirting/ties">View the tie edit</Link><Link href="/">Why the bundle works</Link></div>
    <div><b>THE HOUSE</b>{departmentConfig.map(dept=><Link key={dept.key} href={dept.href}>{dept.label}</Link>)}</div>
    <div className="v2FooterBottom">© 2026 Jentlemens <span>A Joseph Jilovec Venture</span><a href="mailto:realjjemail@gmail.com">Contact</a></div>
  </footer>;
}
