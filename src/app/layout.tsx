import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurélie — perfume, skincare & makeup",
  description:
    "A small demo storefront for perfume, skincare and makeup, with a working cart.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
