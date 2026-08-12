import type { Metadata } from "next";
import "./globals.css";
import "./multipage.css";
import "./luxury.css";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Jentlemens | Athletic Fit Menswear",
  description: "A disciplined men's wardrobe system built around Athletic Fit tailoring, neutral colors, made-to-order suiting, and limited seasonal footwear.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
