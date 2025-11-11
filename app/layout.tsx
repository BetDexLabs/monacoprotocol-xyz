import { Footer, Header } from "@/app/components";
import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";

export const metadata: Metadata = {
  title: "The Monaco Protocol",
  description:
    "A world class, globally available liquidity pool for betting and prediction markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-common">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
