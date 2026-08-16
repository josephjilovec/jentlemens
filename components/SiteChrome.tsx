import Link from "next/link";
import { departmentConfig } from "@/lib/site-config";

export function SiteHeader() {
  return <>
    <div className="announcement">ATHLETIC FIT · MADE TO ORDER · PERMANENT WARDROBE SYSTEM</div>
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
              <Link className="v2MegaFeature" href={dept.key==="shirting"?"/products/permanent-ten-bundle":dept.featured.href} aria-label={`${dept.featured.title}. ${dept.featured.alt}`}>
                <div role="img" aria-label={dept.featured.alt} style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.48),transparent),url('${dept.featured.image}')`}}/>
                <span>{dept.key==="shirting"?"THE PERMANENT 10":dept.featured.label}</span><strong>{dept.key==="shirting"?"10 ties · one $500 collection":dept.featured.title}</strong><small>Explore →</small>
              </Link>
            </div>
          </div>)}
        </nav>
        <div className="v2HeaderTools"><Link href="/fit-finder">Fit Finder</Link><Link href="/fabric-explorer">Fabrics</Link><Link className="v2Bag" href="/products/permanent-ten-bundle">Permanent 10</Link></div>
      </div>
      <nav className="v2MobileNav" aria-label="Mobile navigation">
        <Link className="v2MobileDepartment" href="/fit-finder">Fit Finder</Link>
        <Link className="v2MobileDepartment" href="/fabric-explorer">Fabric Explorer</Link>
        <Link className="v2MobileDepartment" href="/capsule-builder">Capsule Builder</Link>
        <Link className="v2MobileDepartment" href="/products/permanent-ten-bundle">Shop the Permanent 10 — $500</Link>
        {departmentConfig.map(dept=><details key={dept.key}><summary>{dept.label}</summary><div><Link className="v2MobileDepartment" href={dept.href}>Explore {dept.label}</Link>{dept.columns.flatMap(c=>c.links).map(link=><Link key={link.href+link.label} href={link.href}>{link.label}</Link>)}</div></details>)}
      </nav>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="v2Footer">
    <div className="v2FooterLead"><Link className="v2Brand light" href="/"><span>J</span><b>JENTLEMENS</b></Link><p>A disciplined men's luxury and athletic menswear house built around stronger proportions, made-to-order logic and a permanent wardrobe system.</p></div>
    <div><b>FIT & TAILORING</b><Link href="/fit-finder">Fit Finder</Link><Link href="/made-to-order">Made-to-Order Studio</Link><Link href="/fabric-explorer">Fabric Explorer</Link><Link href="/capsule-builder">Permanent Capsule Builder</Link></div>
    <div><b>THE HOUSE</b>{departmentConfig.map(dept=><Link key={dept.key} href={dept.href}>{dept.label}</Link>)}</div>
    <div className="v2FooterBottom">© 2026 Jentlemens <span>A Joseph Jilovec Venture</span><a href="mailto:realjjemail@gmail.com">Contact</a></div>
  </footer>;
}
