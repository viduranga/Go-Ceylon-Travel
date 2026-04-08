"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Compass, Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Compass className="w-24 h-24 text-emerald-600 opacity-20" />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-8xl font-black text-emerald-950 opacity-10">404</h1>
          <h2 className="text-3xl font-bold text-gray-900">{t("notfound.title")}</h2>
          <p className="text-gray-500 leading-relaxed">
            {t("notfound.subtitle")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-emerald-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
          >
            <Home className="w-5 h-5" />
            {t("notfound.home")}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white border-2 border-emerald-100 text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("notfound.back")}
          </button>
        </div>
      </div>
    </div>
  );
}
