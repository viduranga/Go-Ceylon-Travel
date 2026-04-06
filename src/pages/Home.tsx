import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star, Users, MapPin, Compass, CheckCircle2, Quote, MessageSquare, X } from "lucide-react";
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
            alt="Visit Sri Lanka 2026 - Best tours in Sri Lanka"
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
              <span>The #1 Rated Travel Agency in Sri Lanka</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              Discover the Magic of <br />
              <span className="text-emerald-400 italic font-serif">Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light leading-relaxed">
              Experience breathtaking landscapes, ancient heritage, and warm hospitality with Go Ceylon Travel. Your journey to paradise starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/tours"
                className="group bg-emerald-500 text-emerald-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 active:scale-95"
              >
                Explore Tour Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#destinations"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all active:scale-95"
              >
                View Destinations
              </a>
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

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">Why Choose Us</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">Exceptional Travel Experiences</p>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
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
                title: "Safe & Secure",
                desc: "Your safety is our priority. We use certified guides and secure transportation for all our tours."
              },
              {
                icon: <Star className="w-10 h-10 text-emerald-600" />,
                title: "Premium Service",
                desc: "From luxury hotels to personalized itineraries, we ensure every detail of your trip is perfect."
              },
              {
                icon: <Users className="w-10 h-10 text-emerald-600" />,
                title: "Expert Guides",
                desc: "Our local guides are passionate experts who bring Sri Lanka's history and culture to life."
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

      {/* Featured Destinations */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">Featured Destinations</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">Explore the Pearl of the Indian Ocean</p>
            </div>
            <Link to="/tours" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Tours <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sigiriya",
                image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
                desc: "The ancient rock fortress and UNESCO World Heritage site."
              },
              {
                name: "Ella",
                image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
                desc: "A small town in the highlands, famous for the Nine Arches Bridge."
              },
              {
                name: "Galle",
                image: "https://lh3.googleusercontent.com/d/18pjjbA6y3xErTb_rd0Nj4x7UbzcGoJj1",
                desc: "A historic coastal city known for its Dutch Fort and colonial architecture."
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
                    to="/tours"
                    className="inline-flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-emerald-900 transition-all"
                  >
                    Explore Tours
                  </Link>
                </div>
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
              <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">Testimonials</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">What Our Travelers Say</p>
            </div>
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Write a Review
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
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.comment}"</p>
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
                <p className="text-emerald-900/40 font-medium">No reviews yet. Be the first to share your experience!</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Write a Review</h3>
                <p className="text-gray-500 text-sm">Share your experience with Go Ceylon Travel.</p>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Location</label>
                  <input
                    required
                    type="text"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. London, UK"
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Rating</label>
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
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="How was your trip?"
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 active:scale-[0.98] mt-4"
                >
                  Submit Review
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
              Ready to Start Your <br />
              <span className="text-emerald-400">Sri Lankan Adventure?</span>
            </h2>
            <p className="text-emerald-100/70 text-lg">
              Book your tour today and get a 10% discount on your first booking. Our team is ready to help you plan the perfect escape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tours"
                className="bg-emerald-400 text-emerald-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-400/20 active:scale-95"
              >
                Browse All Packages
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-emerald-400/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-400/10 transition-all active:scale-95"
              >
                Contact Support
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-emerald-100/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Flexible Booking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
