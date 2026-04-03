import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Destinations", path: "/#destinations" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-900 p-2 rounded-lg group-hover:bg-emerald-800 transition-colors">
              <Compass className="w-6 h-6 text-emerald-50" />
            </div>
            <span className="text-xl font-bold text-emerald-900 tracking-tight">
              Go Ceylon<span className="text-emerald-600"> Travel</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600",
                  location.pathname === link.path ? "text-emerald-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/tours"
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link
                    to="/tours"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-emerald-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-900/20"
                  >
                    Book a Tour
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
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Compass className="w-6 h-6 text-emerald-900" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Go Ceylon<span className="text-emerald-400"> Travel</span>
                </span>
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
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4 text-sm text-emerald-200/70">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/tours" className="hover:text-emerald-400 transition-colors">Our Tours</Link></li>
                <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Destinations</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
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
                  <span>info@goceylontravel.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
              <p className="text-sm text-emerald-200/70 mb-4">Subscribe to get special offers and travel tips.</p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-emerald-900/50 border border-emerald-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button className="bg-emerald-400 text-emerald-950 font-bold py-2.5 rounded-lg hover:bg-emerald-300 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-10 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/50">
            <p>© 2026 Go Ceylon Travel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
