import type { Metadata } from "next";
import "./globals.css";
import { Header } from "components/Header";

export const metadata: Metadata = {
  title: "The Monaco Protocol",
  description: "The Monaco Protocol provides a decentralized liquidity network for exchange-based applications built on the Solana blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
