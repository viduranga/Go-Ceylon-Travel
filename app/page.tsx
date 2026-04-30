import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Go Ceylon Travel | Sri Lanka Tour Package & Private Driver 2026",
  description: "Book your Sri Lanka Tour Package with Go Ceylon Travel. We specialize in tailor-made Sri Lanka holidays, customizable Sri Lanka tour packages, and provide a Sri Lanka private tour guide and driver. Perfect for Sri Lanka family vacation packages and romantic Sri Lanka honeymoon packages.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
