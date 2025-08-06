import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoSantos - Landing Page",
  description: "Jogo educativo sobre a cidade de Santos (SP)",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
