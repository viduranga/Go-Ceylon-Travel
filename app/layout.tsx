import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Layout from "@/src/components/Layout";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Go Ceylon Travel | Customizable Sri Lanka Tours & Private Driver 2026",
  description: "Experience the heart of Sri Lanka with Go Ceylon Travel. We offer 100% customizable 2026 tour packages with professional private drivers. From Sigiriya’s heights to Ella’s tea hills—plan your perfect island getaway today!",
  keywords: ["Sri Lanka tours", "private tour planner Sri Lanka", "best travel agency Sri Lanka", "Sri Lanka holiday packages 2026", "private driver Sri Lanka"],
  openGraph: {
    type: "website",
    url: "https://goceylontravel.com/",
    title: "Go Ceylon Travel | Customizable Sri Lanka Tours & Private Driver 2026",
    description: "Experience the heart of Sri Lanka with Go Ceylon Travel. We offer 100% customizable 2026 tour packages with professional private drivers. From Sigiriya’s heights to Ella’s tea hills—plan your perfect island getaway today!",
    images: [
      {
        url: "https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg",
      },
    ],
  },
  icons: {
    icon: "https://goceylontravel.com/uploads/Go-Ceylon-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://goceylontravel.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
