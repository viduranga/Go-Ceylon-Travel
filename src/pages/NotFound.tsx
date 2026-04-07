import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Map } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <Helmet>
        <title>404 - Page Not Found | Go Ceylon Travel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-8xl font-black text-emerald-900/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
          404
        </h1>
        
        <div className="relative">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Oops! Destination Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            It seems you've wandered off the beaten path. This page doesn't exist, but there's plenty more of Sri Lanka to discover!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-emerald-900 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/tours"
            className="flex items-center gap-2 bg-white text-emerald-900 border-2 border-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all"
          >
            <Map className="w-5 h-5" />
            View Tour Packages
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
