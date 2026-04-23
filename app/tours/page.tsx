"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { toursData, TourPlan } from "@/src/data/tours";
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

function TourCard({ tour }: { tour: TourPlan; key?: string | number }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const router = useRouter();

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/contact/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white rounded-[2rem] overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full",
        tour.isSpecial ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-emerald-100"
      )}
    >
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden shrink-0">
        <Image
          src={tour.image}
          alt={tour.imageAlt || tour.title}
          title={tour.imageTitle}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
          <span className={cn(
            "backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border",
            tour.isSpecial 
              ? "bg-emerald-500 text-emerald-950 border-emerald-400" 
              : "bg-emerald-900/90 text-emerald-50 border-emerald-700/50"
          )}>
            {t(tour.subtitle)}
          </span>
          <span className="bg-white/90 backdrop-blur-md text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100 shadow-sm">
            {t(tour.duration)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
            {t(tour.title)}
          </h3>
          <div className="flex items-start gap-2 text-emerald-600/80">
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <p className="text-sm font-medium leading-relaxed">{tour.route}</p>
          </div>
        </div>

        {tour.description && (
          <div className="mb-8">
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {t(tour.description)}
            </p>
          </div>
        )}

        {/* Itinerary Preview/Full */}
        <div className="space-y-4 mb-8 flex-grow">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("tours.highlights")}</h4>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-emerald-600 text-xs font-bold flex items-center gap-1 hover:underline"
            >
              {isExpanded ? t("tours.show_less") : t("tours.view_full")}
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <div className="space-y-3">
            {tour.itinerary.slice(0, isExpanded ? undefined : 2).map((day, idx) => (
              <motion.div
                layout
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-emerald-600 text-white w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0">
                    {day.day}
                  </span>
                  <span className="text-sm font-bold text-emerald-900">{day.title}</span>
                </div>
                <ul className="space-y-1.5 pl-9">
                  {day.activities.map((act, aIdx) => (
                    <li key={aIdx} className="text-xs text-gray-600 flex items-start gap-2">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
                {day.overnight && (
                  <div className="mt-3 pl-9 flex items-center gap-2 text-[10px] font-bold text-emerald-600/60 uppercase tracking-wider">
                    <Clock className="w-3 h-3" />
                    Overnight: {day.overnight}
                  </div>
                )}
              </motion.div>
            ))}
            {!isExpanded && tour.itinerary.length > 2 && (
              <div className="text-center py-2">
                <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1" />
                <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1" />
                <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1" />
              </div>
            )}
          </div>
        </div>

        <button 
          type="button"
          onClick={handleBookNow}
          className="w-full bg-emerald-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer relative z-10"
        >
          {t("tours.book_now")}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function Tours() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-emerald-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg"
            alt="Visit Sri Lanka 2026 - Best tours in Sri Lanka"
            fill
            className="object-cover grayscale"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {t("tours.hero_title_1")} <span className="text-emerald-400">{t("tours.hero_title_2")}</span>
            </h1>
            <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto font-light">
              {t("tours.hero_subtitle")}
            </p>
            <div className="pt-4">
              <Link href="/destinations/" className="text-emerald-400 font-bold hover:underline text-sm">
                {t("nav.destinations")} &rarr;
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-emerald-400/80 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t("tours.feature_guides")}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400/80 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t("tours.feature_transport")}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400/80 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t("tours.feature_hotels")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {toursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-emerald-100">
          <div className="space-y-6 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 leading-tight">
              {t("tours.custom_title")}
            </h2>
            <p className="text-emerald-900/60 text-lg">
              {t("tours.custom_desc")}
            </p>
            <button 
              type="button"
              onClick={() => {
                router.push("/contact/");
              }}
              className="inline-block bg-emerald-900 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 active:scale-95 cursor-pointer"
            >
              {t("tours.custom_cta")}
            </button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-emerald-200 rounded-full absolute -top-10 -right-10 blur-3xl opacity-30 animate-pulse" />
            <div className="w-80 h-80 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/d/16FppfEdw_Hwwkw6SFqX5p17uyrDrKMbS"
                alt="Custom Travel"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visually Hidden SEO Keywords */}
      <section className="sr-only" aria-hidden="true">
        <h2>Sri Lanka Tour Package</h2>
        <p>Explore our variety of Sri Lanka Tour Package options. We specialize in tailor-made Sri Lanka holidays and customizable Sri Lanka tour packages for every type of traveler.</p>
        <h2>Sri Lanka private tour guide and driver</h2>
        <p>Our tours include a professional Sri Lanka private tour guide and driver to ensure a seamless experience. We also offer specialized Sri Lanka family vacation packages and romantic Sri Lanka honeymoon packages.</p>
        <ul>
          <li>Sri Lanka Tour Package</li>
          <li>Tailor-made Sri Lanka holidays</li>
          <li>Customizable Sri Lanka tour packages</li>
          <li>Sri Lanka private tour guide and driver</li>
          <li>Sri Lanka family vacation packages</li>
          <li>Romantic Sri Lanka Honeymoon Packages</li>
        </ul>
      </section>
    </div>
  );
}
