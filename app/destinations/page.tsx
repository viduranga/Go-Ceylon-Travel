"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Compass, Camera, Info } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const destinations = [
  {
    id: "sigiriya",
    nameKey: "destinations.sigiriya.name",
    image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
    descriptionKey: "destinations.sigiriya.description",
    highlightsKeys: ["destinations.sigiriya.highlight1", "destinations.sigiriya.highlight2", "destinations.sigiriya.highlight3", "destinations.sigiriya.highlight4"]
  },
  {
    id: "ella",
    nameKey: "destinations.ella.name",
    image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
    descriptionKey: "destinations.ella.description",
    highlightsKeys: ["destinations.ella.highlight1", "destinations.ella.highlight2", "destinations.ella.highlight3", "destinations.ella.highlight4"]
  },
  {
    id: "galle",
    nameKey: "destinations.galle.name",
    image: "https://lh3.googleusercontent.com/d/18pjjbA6y3xErTb_rd0Nj4x7UbzcGoJj1",
    descriptionKey: "destinations.galle.description",
    highlightsKeys: ["destinations.galle.highlight1", "destinations.galle.highlight2", "destinations.galle.highlight3", "destinations.galle.highlight4"]
  },
  {
    id: "kandy",
    nameKey: "destinations.kandy.name",
    image: "https://goceylontravel.com/uploads/temple-of-the-tooth-kandy.jpeg",
    descriptionKey: "destinations.kandy.description",
    highlightsKeys: ["destinations.kandy.highlight1", "destinations.kandy.highlight2", "destinations.kandy.highlight3", "destinations.kandy.highlight4"]
  },
  {
    id: "nuwara-eliya",
    nameKey: "destinations.nuwara_eliya.name",
    image: "https://lh3.googleusercontent.com/d/11PCRlKAnLFHb23vEByMMfDCem9T76uyG",
    descriptionKey: "destinations.nuwara_eliya.description",
    highlightsKeys: ["destinations.nuwara_eliya.highlight1", "destinations.nuwara_eliya.highlight2", "destinations.nuwara_eliya.highlight3", "destinations.nuwara_eliya.highlight4"]
  },
  {
    id: "yala",
    nameKey: "destinations.yala.name",
    image: "https://goceylontravel.com/uploads/Udawalawe-national-park-safari.jpg",
    descriptionKey: "destinations.yala.description",
    highlightsKeys: ["destinations.yala.highlight1", "destinations.yala.highlight2", "destinations.yala.highlight3", "destinations.yala.highlight4"]
  },
  {
    id: "mirissa",
    nameKey: "destinations.mirissa.name",
    image: "https://lh3.googleusercontent.com/d/1gg1YeL731Fu95Id1eNZVh02EAe4K4iD5",
    descriptionKey: "destinations.mirissa.description",
    highlightsKeys: ["destinations.mirissa.highlight1", "destinations.mirissa.highlight2", "destinations.mirissa.highlight3", "destinations.mirissa.highlight4"]
  },
  {
    id: "colombo",
    nameKey: "destinations.colombo.name",
    image: "https://lh3.googleusercontent.com/d/1zXgqE8fp2ldnx11m7ndjViPSdvWk7TNH",
    descriptionKey: "destinations.colombo.description",
    highlightsKeys: ["destinations.colombo.highlight1", "destinations.colombo.highlight2", "destinations.colombo.highlight3", "destinations.colombo.highlight4"]
  }
];

export default function Destinations() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg"
            alt="Visit Sri Lanka 2026 - Best tours in Sri Lanka"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {t("destinations.hero_title")}
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light">
              {t("destinations.hero_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[2.5rem] -z-10 group-hover:bg-emerald-100 transition-colors duration-500" />
                <div className="h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img
                    src={dest.image}
                    alt={t(dest.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Camera className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest">{t("destinations.gallery")}</span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("destinations.label")}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t(dest.nameKey)}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {t(dest.descriptionKey)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {dest.highlightsKeys.map((highlightKey, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-sm font-medium">{t(highlightKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href="/tours"
                    className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-3 active:scale-95"
                  >
                    {t("destinations.view_tours")} {t(dest.nameKey)}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-white border-2 border-emerald-100 text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all flex items-center gap-3 active:scale-95">
                    <Info className="w-5 h-5" />
                    {t("destinations.travel_guide")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Compass className="w-16 h-16 text-emerald-600 mx-auto animate-spin-slow" />
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">{t("destinations.custom_title")}</h2>
          <p className="text-emerald-900/60 text-lg">
            {t("destinations.custom_desc")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
          >
            {t("destinations.plan_custom")}
          </Link>
        </div>
      </section>
    </div>
  );
}
