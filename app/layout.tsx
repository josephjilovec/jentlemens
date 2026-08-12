import type { Metadata } from "next";
import "./globals.css";
import "./multipage.css";
import "./luxury.css";
import "./v2.css";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Jentlemens | Athletic Fit Menswear",
  description: "Premium men's tailoring, shirting, performance clothing, leather goods, jewelry and timepieces organized around the Jentlemens Athletic Fit standard.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
