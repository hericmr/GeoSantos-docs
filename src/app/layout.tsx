import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoSantos - Jogo Educativo sobre Santos (SP)",
  description: "Jogo educativo sobre a cidade de Santos (SP) - Explore a história e geografia de Santos de forma interativa",
  keywords: "GeoSantos, jogo educativo, Santos, São Paulo, geografia, história, educação",
  authors: [{ name: "Héric Moura" }],
  creator: "Héric Moura",
  publisher: "GeoSantos",
  robots: "index, follow",
  openGraph: {
    title: "GeoSantos - Jogo Educativo sobre Santos (SP)",
    description: "Jogo educativo sobre a cidade de Santos (SP) - Explore a história e geografia de Santos de forma interativa",
    type: "website",
    url: "https://hericmr.github.io/GeoSantos-docs",
    images: [
      {
        url: "/assets/logo.png",
        width: 1014,
        height: 1014,
        alt: "GeoSantos Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoSantos - Jogo Educativo sobre Santos (SP)",
    description: "Jogo educativo sobre a cidade de Santos (SP) - Explore a história e geografia de Santos de forma interativa",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/terra.png",
    apple: "/assets/terra.png",
  },
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
