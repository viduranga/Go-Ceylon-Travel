import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/src/components/Layout";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Sri Lanka Tour Packages | Go Ceylon Travel",
  description: "Experience the heart of Sri Lanka with Go Ceylon Travel. We offer 100% customizable 2026 tour packages with professional private drivers. From Sigiriya’s heights to Ella’s tea hills—plan your perfect island getaway today!",
  keywords: ["Sri Lanka tours", "private tour planner Sri Lanka", "best travel agency Sri Lanka", "Sri Lanka holiday packages 2026", "private driver Sri Lanka"],
  openGraph: {
    type: "website",
    url: "https://goceylontravel.com/",
    title: "Best Sri Lanka Tour Packages | Go Ceylon Travel",
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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
