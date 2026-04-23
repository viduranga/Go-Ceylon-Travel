"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Compass, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.tours"), path: "/tours/" },
    { name: t("nav.destinations"), path: "/destinations/" },
    { name: t("nav.about"), path: "/about/" },
    { name: t("nav.contact"), path: "/contact/" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="https://lh3.googleusercontent.com/d/1Y1eVyMBKPd2qGRXvAWbPK-_Jh7gnIvIu" 
              alt="Go Ceylon Travel Logo" 
              width={150}
              height={56}
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600",
                  pathname === link.path ? "text-emerald-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/tours/"
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              {t("cta.book")}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link
                    href="/tours/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-emerald-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-900/20"
                  >
                    {t("cta.book")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center">
                <Image 
                  src="https://lh3.googleusercontent.com/d/1Y1eVyMBKPd2qGRXvAWbPK-_Jh7gnIvIu" 
                  alt="Go Ceylon Travel Logo" 
                  width={150}
                  height={56}
                  className="h-14 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-emerald-200/70 text-sm leading-relaxed">
                Discover the magic of Sri Lanka with Go Ceylon Travel. We provide curated, high-quality tour packages that showcase the best of our island paradise.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.quick_links")}</h3>
              <ul className="space-y-4 text-sm text-emerald-200/70">
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("nav.home")}</Link></li>
                <li><Link href="/tours/" className="hover:text-emerald-400 transition-colors">{t("nav.tours")}</Link></li>
                <li><Link href="/destinations/" className="hover:text-emerald-400 transition-colors">{t("nav.destinations")}</Link></li>
                <li><Link href="/about/" className="hover:text-emerald-400 transition-colors">{t("nav.about")}</Link></li>
                <li><Link href="/contact/" className="hover:text-emerald-400 transition-colors">{t("nav.contact")}</Link></li>
                <li><Link href="/admin/" className="hover:text-emerald-400 transition-colors">{t("nav.admin")}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.contact_us")}</h3>
              <ul className="space-y-4 text-sm text-emerald-200/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Panagamuwa, Wanchawala, Galle, Sri lanka.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>+94 76 313 1069</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>goceylontravel111@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
              <p className="text-sm text-emerald-200/70 mb-4">Subscribe to get special offers and travel tips.</p>
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  
                  try {
                    const response = await fetch("https://formsubmit.co/ajax/goceylontravel111@gmail.com", {
                      method: "POST",
                      body: JSON.stringify({ 
                        email, 
                        type: "Newsletter Subscription",
                        _subject: `Newsletter Subscription: ${email}`,
                        _replyto: email
                      }),
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      }
                    });
                    if (response.ok) {
                      alert("Thank you for subscribing!");
                      form.reset();
                    }
                  } catch (error) {
                    console.error("Newsletter error:", error);
                  }
                }}
                className="flex flex-col gap-2"
              >
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="bg-emerald-900/50 border border-emerald-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button type="submit" className="bg-emerald-400 text-emerald-950 font-bold py-2.5 rounded-lg hover:bg-emerald-300 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-10 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/50">
            <p>© 2026 Go Ceylon Travel. {t("footer.rights")}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/message/TN4V2SLCNKHMI1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all hover:shadow-[#25D366]/40"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}
