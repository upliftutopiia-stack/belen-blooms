
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belen Blooms | Floral Boutique Website Concept",
  description:
    "An independent website concept for Belen Blooms, featuring natural and eternal bouquet inspiration in Houston, Texas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
