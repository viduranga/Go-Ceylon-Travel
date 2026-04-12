import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "Go Ceylon Travel | Sri Lanka Tour Package & Private Driver 2026",
  description: "Book your Sri Lanka Tour Package with Go Ceylon Travel. We specialize in tailor-made Sri Lanka holidays, customizable Sri Lanka tour packages, and provide a Sri Lanka private tour guide and driver. Perfect for Sri Lanka family vacation packages and romantic Sri Lanka honeymoon packages.",
  keywords: [
    "Sri Lanka Tour Package",
    "Tailor-made Sri Lanka holidays",
    "Customizable Sri Lanka tour packages",
    "Sri Lanka private tour guide and driver",
    "Sri Lanka family vacation packages",
    "Romantic Sri Lanka Honeymoon Packages",
    "Sri Lanka tours",
    "private tour planner Sri Lanka",
    "best travel agency Sri Lanka",
    "Sri Lanka holiday packages 2026",
    "private driver Sri Lanka"
  ],
  openGraph: {
    type: "website",
    url: "https://goceylontravel.com/",
    title: "Go Ceylon Travel | Sri Lanka Tour Package & Private Driver 2026",
    description: "Book your Sri Lanka Tour Package with Go Ceylon Travel. We specialize in tailor-made Sri Lanka holidays, customizable Sri Lanka tour packages, and provide a Sri Lanka private tour guide and driver. Perfect for Sri Lanka family vacation packages and romantic Sri Lanka honeymoon packages.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-817730072"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-817730072');
          `}
        </Script>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
