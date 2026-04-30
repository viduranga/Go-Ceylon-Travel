import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages | Go Ceylon Travel",
  description: "Explore our customizable Sri Lanka tour packages. Private guides, drivers, and tailor-made holidays for families and honeymoons.",
  alternates: {
    canonical: "/tours/",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
