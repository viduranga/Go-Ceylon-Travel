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
  title: "Go Ceylon Travel | Best Sri Lanka Tours & Private Tour Planner 2026",
  description: "Experience breathtaking landscapes, ancient heritage, and warm hospitality with Go Ceylon Travel. Your journey to paradise starts here.",
  keywords: ["Sri Lanka tours", "private tour planner Sri Lanka", "best travel agency Sri Lanka", "Sri Lanka holiday packages 2026", "private driver Sri Lanka"],
  openGraph: {
    type: "website",
    url: "https://goceylontravel.com/",
    title: "Go Ceylon Travel | Best Sri Lanka Tours & Private Tour Planner 2026",
    description: "Experience breathtaking landscapes, ancient heritage, and warm hospitality with Go Ceylon Travel. Your journey to paradise starts here.",
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
