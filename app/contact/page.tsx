"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-emerald-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1580502304784-8985b779ed6c?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {t("contact.hero_title")}
            </h1>
            <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {t("contact.hero_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: t("contact.whatsapp_title"),
                value: t("contact.whatsapp_value"),
                sub: t("contact.whatsapp_sub"),
                link: "https://wa.me/message/TN4V2SLCNKHMI1",
                color: "bg-[#25D366] text-white"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: t("contact.call_title"),
                value: "+94 76 313 1069",
                sub: t("contact.call_sub"),
                link: "tel:+94763131069"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: t("contact.email_title"),
                value: "goceylontravel111@gmail.com",
                sub: t("contact.email_sub"),
                link: "mailto:goceylontravel111@gmail.com"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: t("contact.visit_title"),
                value: "Panagamuwa, Wanchawala, Galle, Sri lanka.",
                sub: t("contact.visit_sub"),
                link: "https://maps.google.com/?q=Panagamuwa,Wanchawala,Galle,Sri+lanka"
              }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="block bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group"
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                  item.color || "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                )}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{item.title}</h3>
                <p className="text-lg font-bold text-emerald-950 mb-1">{item.value}</p>
                <p className="text-sm text-emerald-900/50">{item.sub}</p>
              </motion.a>
            ))}

            {/* Business Hours */}
            <div className="bg-emerald-900 p-8 rounded-[2rem] text-white space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold">{t("contact.hours_title")}</h3>
              </div>
              <div className="space-y-3 text-emerald-100/70 text-sm">
                <div className="flex justify-between border-b border-emerald-800 pb-2">
                  <span>{t("contact.monday_friday")}</span>
                  <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-emerald-800 pb-2">
                  <span>{t("contact.saturday")}</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.sunday")}</span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <p className="text-xs text-emerald-400 font-medium italic">
                {t("contact.hours_emergency")}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] border border-emerald-100 shadow-sm h-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">{t("contact.form_title")}</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t("contact.full_name")}</label>
                    <input
                      required
                      type="text"
                      placeholder={t("contact.name_placeholder")}
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t("contact.email")}</label>
                    <input
                      required
                      type="email"
                      placeholder={t("contact.email_placeholder")}
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t("contact.phone")}</label>
                    <input
                      type="tel"
                      placeholder="+94 7X XXX XXXX"
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t("contact.subject")}</label>
                    <select className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none">
                      <option>{t("contact.subject_general")}</option>
                      <option>{t("contact.subject_booking")}</option>
                      <option>{t("contact.subject_custom")}</option>
                      <option>{t("contact.subject_feedback")}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("contact.message")}</label>
                  <textarea
                    required
                    rows={6}
                    placeholder={t("contact.message_placeholder")}
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formStatus !== "idle"}
                  type="submit"
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98]",
                    formStatus === "sent" 
                      ? "bg-green-500 text-white" 
                      : "bg-emerald-900 text-white hover:bg-emerald-800 shadow-emerald-900/20"
                  )}
                >
                  {formStatus === "idle" && (
                    <>
                      {t("contact.send")}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formStatus === "sent" && t("contact.sent")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-emerald-50 rounded-[3rem] overflow-hidden h-[400px] relative border border-emerald-100">
          <div className="absolute inset-0 flex items-center justify-center text-emerald-900/40 flex-col gap-4">
            <MapPin className="w-12 h-12" />
            <p className="font-bold text-lg">{t("contact.map_placeholder")}</p>
            <p className="text-sm">Panagamuwa, Wanchawala, Galle, Sri lanka.</p>
          </div>
          {/* In a real app, you'd embed a Google Map here */}
          <div className="w-full h-full bg-emerald-100/50 backdrop-blur-[2px]" />
        </div>
      </section>
    </div>
  );
}
