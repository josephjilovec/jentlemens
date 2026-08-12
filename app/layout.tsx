import type { Metadata } from "next";
import "./globals.css";
import "./multipage.css";
import "./luxury.css";
import "./v2.css";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Jentlemens | The Permanent 10 Designer Tie Bundle",
  description: "The Jentlemens Permanent 10: a curated ten-tie designer neckwear collection for $500 total, averaging $50 per tie.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
