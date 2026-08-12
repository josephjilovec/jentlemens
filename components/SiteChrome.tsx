import Link from "next/link";
import { departmentConfig } from "@/lib/site-config";

export function SiteHeader() {
  return <>
    <div className="announcement">Complimentary Custom Measurement Reviews on All Made-to-Order Suits</div>
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
              <Link className="v2MegaFeature" href={dept.featured.href}>
                <div style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.45),transparent),url('${dept.featured.image}')`}}/>
                <span>{dept.featured.label}</span><strong>{dept.featured.title}</strong><small>Explore →</small>
              </Link>
            </div>
          </div>)}
        </nav>
        <div className="v2HeaderTools"><Link href="/capsule-builder">Build Capsule</Link><Link href="/made-to-order">Profile</Link><Link className="v2Bag" href="/new">Bag <span>0</span></Link></div>
      </div>
      <nav className="v2MobileNav" aria-label="Mobile navigation">
        {departmentConfig.map(dept=><details key={dept.key}><summary>{dept.label}</summary><div><Link className="v2MobileDepartment" href={dept.href}>Shop {dept.label}</Link>{dept.columns.flatMap(c=>c.links).map(link=><Link key={link.href+link.label} href={link.href}>{link.label}</Link>)}</div></details>)}
      </nav>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="v2Footer">
    <div className="v2FooterLead"><Link className="v2Brand light" href="/"><span>J</span><b>JENTLEMENS</b></Link><p>Disciplined menswear built around Athletic Fit proportions, permanent neutrals and material clarity.</p></div>
    <div><b>THE HOUSE</b><Link href="/athletic-fit-standard">Athletic Fit Standard</Link><Link href="/made-to-order">Measurement Studio</Link><Link href="/capsule-builder">Build Your Capsule</Link></div>
    <div><b>DEPARTMENTS</b>{departmentConfig.map(dept=><Link key={dept.key} href={dept.href}>{dept.label}</Link>)}</div>
    <div className="v2FooterBottom">© 2026 Jentlemens <span>A Joseph Jilovec Venture</span><a href="mailto:realjjemail@gmail.com">Contact</a></div>
  </footer>;
}
