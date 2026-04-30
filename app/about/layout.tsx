import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Go Ceylon Travel | Sustainable Tourism Sri Lanka",
  description: "Learn about Go Ceylon Travel, our mission, and our founder Ishan. We provide authentic, high-quality, and sustainable travel experiences in Sri Lanka.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
