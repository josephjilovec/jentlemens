import type { Metadata } from "next";
import "./base.css";
import "./v2.css";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Jentlemens | The Permanent 10 Designer Tie Bundle",
  description: "Jentlemens is a disciplined men's luxury and athletic menswear house. Shop the Permanent 10: a curated ten-tie neckwear collection for $500 total, averaging $50 per tie.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
