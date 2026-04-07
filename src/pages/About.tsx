import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Star, Users, MapPin, Compass, Heart, Award, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    url: "https://goceylontravel.com/uploads/about/sigiriya-rock-fortress-guided-tour.jpeg",
    altKey: "about.gallery_sigiriya_alt",
    titleKey: "about.gallery_sigiriya_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/ella-mountain-river-nature-tour.jpeg",
    altKey: "about.gallery_ella_nature_alt",
    titleKey: "about.gallery_ella_nature_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/family-tea-plantation-tour-ella.jpeg",
    altKey: "about.gallery_tea_plantation_alt",
    titleKey: "about.gallery_tea_plantation_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/kandy-temple-heritage-group-tour.jpeg",
    altKey: "about.gallery_kandy_temple_alt",
    titleKey: "about.gallery_kandy_temple_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/mirissa-beach-coastal-tour-sri-lanka.jpeg",
    altKey: "about.gallery_mirissa_beach_alt",
    titleKey: "about.gallery_mirissa_beach_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/sri-lanka-lake-boat-safari-adventure.jpeg",
    altKey: "about.gallery_boat_safari_alt",
    titleKey: "about.gallery_boat_safari_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/sri-lanka-spiritual-yoga-retreat.jpeg",
    altKey: "about.gallery_yoga_retreat_alt",
    titleKey: "about.gallery_yoga_retreat_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/authentic-tea-plucking-experience.jpeg",
    altKey: "about.gallery_tea_experience_alt",
    titleKey: "about.gallery_tea_experience_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/ella-railway-station-tour-sri-lanka.jpeg",
    altKey: "about.gallery_ella_station_alt",
    titleKey: "about.gallery_ella_station_title"
  },
  {
    url: "https://goceylontravel.com/uploads/about/independence-square-colombo-tour.jpeg",
    altKey: "about.gallery_colombo_city_alt",
    titleKey: "about.gallery_colombo_city_title"
  }
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{t("about.hero_title")} | Go Ceylon Travel</title>
        <meta name="description" content={t("about.hero_subtitle")} />
        <link rel="canonical" href="https://goceylontravel.com/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg"
            alt="About Go Ceylon Travel"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {t("about.hero_title")}
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light">
              {t("about.hero_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Ishan Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -z-10" />
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://goceylontravel.com/uploads/about/sigiriya-rock-fortress-guided-tour.jpeg" 
                alt="Ishan - Professional Tour Planner" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-emerald-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{t("about.trusted_badge")}</p>
                <p className="text-lg font-bold text-gray-900">{t("about.experience_badge")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Users className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("about.meet_title")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t("about.meet_name")}</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {t("about.meet_desc1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {t("about.meet_desc2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold">{t("about.personalized")}</span>
                </div>
                <p className="text-sm text-gray-500">{t("about.personalized_desc")}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold">{t("about.safe")}</span>
                </div>
                <p className="text-sm text-gray-500">{t("about.safe_desc")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("about.journey_title")}</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("about.journey_subtitle")}</p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all break-inside-avoid"
              >
                <img 
                  src={img.url} 
                  alt={t(img.altKey)} 
                  title={t(img.titleKey)}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">{t(img.titleKey)}</p>
                    <p className="text-sm font-light leading-snug">{t(img.altKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.quality_title")}</h3>
              <p className="text-gray-500 font-light">{t("about.quality_desc")}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.authentic_title")}</h3>
              <p className="text-gray-500 font-light">{t("about.authentic_desc")}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("about.impact_title")}</h3>
              <p className="text-gray-500 font-light">{t("about.impact_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">{t("about.cta_title")}</h2>
          <p className="text-emerald-100/70 text-lg font-light">
            {t("about.cta_desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-emerald-500 text-emerald-950 px-10 py-4 rounded-full font-bold shadow-xl shadow-emerald-500/20"
            >
              {t("about.cta_contact")}
            </Link>
            <Link
              to="/tours"
              className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold"
            >
              {t("cta_section.browse")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
