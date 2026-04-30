import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations in Sri Lanka | Go Ceylon Travel",
  description: "Discover the best places to visit in Sri Lanka. Sigiriya, Ella, Galle, Kandy, and more with our expert local guides.",
  alternates: {
    canonical: "/destinations/",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
