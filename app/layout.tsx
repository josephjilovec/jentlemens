import type { Metadata } from "next";
import "./base.css";
import "./v2.css";
import "./brand-guard.css";
import "./luxury-fit.css";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Jentlemens | Athletic Fit & Made-to-Order Menswear",
  description: "Jentlemens is a disciplined men's luxury and athletic menswear house built around Athletic Fit proportions, made-to-order tailoring, fabric exploration and a permanent wardrobe system.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
