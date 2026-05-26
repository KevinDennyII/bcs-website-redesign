import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFrame } from "@/components/site/site-frame";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-family-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BCS Team | Modernization In Progress",
    template: "%s | BCS Team",
  },
  description:
    "Phase 1 foundation for the BCS Team website modernization: secure, accessible, and React-first.",
  metadataBase: new URL("https://bcsteam.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
