"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, ShieldCheck, Star, Users, MapPin, Compass, CheckCircle2, Quote, MessageSquare, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useTranslation();
  const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false);
  const [reviews, setReviews] = React.useState<{
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    date: string;
  }[]>([]);

  const [newReview, setNewReview] = React.useState({
    name: "",
    location: "",
    rating: 5,
    comment: ""
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: Date.now(),
      date: "Just now"
    };
    setReviews([review, ...reviews]);
    setIsReviewModalOpen(false);
    setNewReview({ name: "", location: "", rating: 5, comment: "" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg"
            alt="Scenic landscape of Sri Lanka - Best tours in Sri Lanka 2026"
            title="Visit Sri Lanka 2026"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-medium mb-4">
              <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/tours"
                className="group bg-emerald-500 text-emerald-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 active:scale-95"
              >
                {t("cta.book")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all active:scale-95"
              >
                {t("cta.contact")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Honeymoon Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://goceylontravel.com/uploads/romantic-honeymoon-tour-sri-lanka.jpeg" 
                alt="A romantic honeymoon couple enjoying a private sunset tour in Sri Lanka with Go Ceylon Travel." 
                title="Sri Lanka honeymoon packages, Romantic Sri Lanka tour, Luxury honeymoon Sri Lanka"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-emerald-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-pink-600 uppercase tracking-widest">{t("honeymoon.badge")}</p>
                  <p className="text-lg font-bold text-gray-900">{t("home.honeymoon_status")}</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Star className="w-5 h-5 fill-emerald-600" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("honeymoon.badge")}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {t("home.honeymoon_title_1")} <br />
                  <span className="text-emerald-600">{t("home.honeymoon_title_2")}</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {t("honeymoon.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t("home.honeymoon_feature1_title")}</h4>
                    <p className="text-sm text-gray-500">{t("honeymoon.feature1_desc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t("home.honeymoon_feature2_title")}</h4>
                    <p className="text-sm text-gray-500">{t("honeymoon.feature2_desc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t("home.honeymoon_feature3_title")}</h4>
                    <p className="text-sm text-gray-500">{t("honeymoon.feature3_desc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t("home.honeymoon_feature4_title")}</h4>
                    <p className="text-sm text-gray-500">{t("honeymoon.feature4_desc")}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/tours"
                className="inline-flex items-center gap-2 bg-emerald-900 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
              >
                {t("honeymoon.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("why.title")}</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("why.subtitle")}</p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
            <Link href="/about" className="inline-block text-emerald-600 text-sm font-bold hover:underline pt-4">
              {t("home.learn_more")} &rarr;
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
                title: t("why.feature1_title"),
                desc: t("why.feature1_desc")
              },
              {
                icon: <Star className="w-10 h-10 text-emerald-600" />,
                title: t("why.feature2_title"),
                desc: t("why.feature2_desc")
              },
              {
                icon: <Users className="w-10 h-10 text-emerald-600" />,
                title: t("why.feature3_title"),
                desc: t("why.feature3_desc")
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tour Highlights Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("highlights.title")}</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("highlights.subtitle")}</p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://goceylontravel.com/uploads/about/sigiriya-rock-fortress-guided-tour.jpeg",
                alt: t("about.gallery_sigiriya_alt"),
                title: t("about.gallery_sigiriya_title")
              },
              {
                url: "https://goceylontravel.com/uploads/about/sri-lanka-private-guided-tours-c.jpeg",
                alt: t("about.gallery_ella_nature_alt"),
                title: t("about.gallery_ella_nature_title")
              },
              {
                url: "https://goceylontravel.com/uploads/about/ella-railway-station-tour-sri-lanka.jpeg",
                alt: t("about.gallery_ella_station_alt"),
                title: t("about.gallery_ella_station_title")
              },
              {
                url: "https://goceylontravel.com/uploads/about/kandy-temple-heritage-group-tour.jpeg",
                alt: t("about.gallery_kandy_temple_alt"),
                title: t("about.gallery_kandy_temple_title")
              },
              {
                url: "https://goceylontravel.com/uploads/about/mirissa-beach-coastal-tour-sri-lanka.jpeg",
                alt: t("about.gallery_mirissa_beach_alt"),
                title: t("about.gallery_mirissa_beach_title")
              },
              {
                url: "https://goceylontravel.com/uploads/about/authentic-tea-plucking-experience.jpeg",
                alt: t("about.gallery_tea_experience_alt"),
                title: t("about.gallery_tea_experience_title")
              }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  title={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("destinations.title")}</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("destinations.subtitle")}</p>
            </div>
            <Link href="/tours" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              {t("destinations.view_all")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t("destinations.sigiriya.name"),
                image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
                desc: t("destinations.sigiriya.description")
              },
              {
                name: t("destinations.ella.name"),
                image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
                desc: t("destinations.ella.description")
              },
              {
                name: t("destinations.galle.name"),
                image: "https://lh3.googleusercontent.com/d/18pjjbA6y3xErTb_rd0Nj4x7UbzcGoJj1",
                desc: t("destinations.galle.description")
              }
            ].map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Sri Lanka</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{dest.name}</h3>
                  <p className="text-emerald-50/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dest.desc}
                  </p>
                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-emerald-900 transition-all"
                  >
                    {t("home.destinations_explore")}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("packages.title")}</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("packages.subtitle")}</p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t("tours.tour0.title"), desc: t("tours.tour0.description"), isSpecial: true },
              { title: t("tours.tour1.title"), desc: t("tours.tour1.description") },
              { title: t("tours.tour2.title"), desc: t("tours.tour2.description") },
              { title: t("tours.tour3.title"), desc: t("tours.tour3.description") },
              { title: t("tours.tour4.title"), desc: t("tours.tour4.description") },
              { title: t("tours.tour5.title"), desc: t("tours.tour5.description") }
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "bg-white p-8 rounded-3xl shadow-sm border transition-all relative",
                  pkg.isSpecial ? "border-emerald-500 shadow-emerald-500/10" : "border-emerald-100 hover:shadow-md"
                )}
              >
                {pkg.isSpecial && (
                  <span className="absolute -top-3 -right-3 bg-emerald-500 text-emerald-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-emerald-400">
                    {t("home.packages_special")}
                  </span>
                )}
                <h3 className="text-xl font-bold text-emerald-900 mb-3 line-clamp-1">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{pkg.desc}</p>
                <Link href="/tours" className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                  {t("home.packages_details")} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">{t("testimonials.title")}</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">{t("testimonials.subtitle")}</p>
            </div>
            <button 
              type="button"
              onClick={() => {
                console.log("Opening review modal");
                setIsReviewModalOpen(true);
              }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 relative z-10"
            >
              <MessageSquare className="w-5 h-5" />
              {t("testimonials.write")}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.length > 0 ? (
              reviews.slice(0, 3).map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-emerald-100 relative group hover:shadow-xl transition-all"
                >
                  <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-8 group-hover:text-emerald-200 transition-colors" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-4 h-4", 
                          i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                        )} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">&quot;{review.comment}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-emerald-600/60 font-medium">{review.location} • {review.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-3 text-center py-12">
                <p className="text-emerald-900/40 font-medium">{t("testimonials.no_reviews")}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-emerald-50 rounded-full transition-colors text-gray-400"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.review_modal_title")}</h3>
                <p className="text-gray-500 text-sm">{t("home.review_modal_subtitle")}</p>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("home.review_modal_name")}</label>
                  <input
                    required
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder={t("home.review_modal_name_placeholder")}
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("home.review_modal_location")}</label>
                  <input
                    required
                    type="text"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder={t("home.review_modal_location_placeholder")}
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("home.review_modal_rating")}</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={cn(
                            "w-8 h-8 transition-colors",
                            star <= newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("home.review_modal_comment")}</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder={t("home.review_modal_comment_placeholder")}
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 active:scale-[0.98] mt-4"
                >
                  {t("home.review_modal_submit")}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Compass className="w-[800px] h-[800px] -mr-40 -mt-40" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("home.cta_title_1")} <br />
              <span className="text-emerald-400">{t("home.cta_title_2")}</span>
            </h2>
            <p className="text-emerald-100/70 text-lg">
              {t("cta_section.desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tours"
                className="bg-emerald-400 text-emerald-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-400/20 active:scale-95"
              >
                {t("cta_section.browse")}
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-emerald-400/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-400/10 transition-all active:scale-95"
              >
                {t("cta_section.support")}
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-emerald-100/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">{t("cta_section.feature1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">{t("cta_section.feature2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">{t("cta_section.feature3")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
