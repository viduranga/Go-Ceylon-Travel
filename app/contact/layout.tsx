import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Go Ceylon Travel - Book Your Sri Lanka Tour",
  description: "Get in touch with Go Ceylon Travel to plan your tailor-made Sri Lanka holiday. Contact us for inquiries about tour packages, private drivers, and travel tips.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
