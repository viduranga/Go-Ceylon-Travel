import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Star, Users, MapPin, Compass, Heart, Award, Camera } from "lucide-react";

const galleryImages = [
  {
    url: "https://goceylontravel.com/uploads/about/sigiriya-rock-fortress-guided-tour.jpeg",
    alt: "Professional guided tour of the Sigiriya Rock Fortress, a UNESCO World Heritage site.",
    title: "Sigiriya Rock Fortress"
  },
  {
    url: "https://goceylontravel.com/uploads/about/ella-mountain-river-nature-tour.jpeg",
    alt: "Tourists enjoying natural mountain streams and river views in Ella, Sri Lanka.",
    title: "Ella Nature"
  },
  {
    url: "https://goceylontravel.com/uploads/about/family-tea-plantation-tour-ella.jpeg",
    alt: "A family exploring the lush green tea estates of Ella and Nuwara Eliya with a private guide.",
    title: "Tea Plantation"
  },
  {
    url: "https://goceylontravel.com/uploads/about/kandy-temple-heritage-group-tour.jpeg",
    alt: "Cultural heritage group tour at a sacred Buddhist temple in Kandy, Sri Lanka.",
    title: "Kandy Temple"
  },
  {
    url: "https://goceylontravel.com/uploads/about/mirissa-beach-coastal-tour-sri-lanka.jpeg",
    alt: "Tourists enjoying the tropical South Coast beaches in Mirissa during a Go Ceylon Travel tour.",
    title: "Mirissa Beach"
  },
  {
    url: "https://goceylontravel.com/uploads/about/sri-lanka-lake-boat-safari-adventure.jpeg",
    alt: "Adventure travelers enjoying a traditional lake boat safari experience in Sri Lanka.",
    title: "Boat Safari"
  },
  {
    url: "https://goceylontravel.com/uploads/about/sri-lanka-spiritual-yoga-retreat.jpeg",
    alt: "Spiritual yoga and meditation retreat for a group of travelers at a Sri Lankan temple.",
    title: "Yoga Retreat"
  },
  {
    url: "https://goceylontravel.com/uploads/about/authentic-tea-plucking-experience.jpeg",
    alt: "Authentic tea plucking experience with local workers in the Sri Lankan highlands.",
    title: "Tea Experience"
  },
  {
    url: "https://goceylontravel.com/uploads/about/ella-railway-station-tour-sri-lanka.jpeg",
    alt: "Travelers at the historic Ella Railway Station during a scenic Sri Lanka hill country tour.",
    title: "Ella Station"
  },
  {
    url: "https://goceylontravel.com/uploads/about/independence-square-colombo-tour.jpeg",
    alt: "Guided city tour at Independence Square in Colombo for international travelers.",
    title: "Colombo City"
  }
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
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
              Our <span className="text-emerald-400">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light">
              Dedicated to providing authentic, safe, and unforgettable Sri Lankan adventures since our inception.
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
                alt="Ishan - Professional Tour Guide and Driver" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-emerald-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Certified Guide</p>
                <p className="text-lg font-bold text-gray-900">10+ Years Experience</p>
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
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Meet Your Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hi, I'm <span className="text-emerald-600">Ishan</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                As your dedicated tour guide and driver, my mission is to show you the true heart of Sri Lanka. With over a decade of experience navigating our beautiful island, I specialize in creating personalized journeys that go beyond the typical tourist paths.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Whether we're climbing the ancient heights of Sigiriya, exploring the misty tea plantations of Ella, or enjoying a peaceful boat safari, I ensure your safety, comfort, and a deep connection with our local culture and heritage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold">Personalized</span>
                </div>
                <p className="text-sm text-gray-500">Tailored itineraries to match your interests.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold">Safe Travel</span>
                </div>
                <p className="text-sm text-gray-500">Professional driving and secure routes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-900 font-bold tracking-wider uppercase text-sm">Our Journey Together</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">Memories from the Road</p>
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
                  alt={img.alt} 
                  title={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">{img.title}</p>
                    <p className="text-sm font-light leading-snug">{img.alt}</p>
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
              <h3 className="text-xl font-bold text-gray-900">Quality Service</h3>
              <p className="text-gray-500 font-light">We never compromise on the quality of your experience, from transport to accommodation.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Authentic Discovery</h3>
              <p className="text-gray-500 font-light">Discover the hidden gems and local secrets that only a native guide can show you.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Local Impact</h3>
              <p className="text-gray-500 font-light">We support local communities and promote sustainable tourism across the island.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to explore Sri Lanka with Ishan?</h2>
          <p className="text-emerald-100/70 text-lg font-light">
            Contact us today to start planning your custom itinerary and experience the magic of our island home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-emerald-950 px-10 py-4 rounded-full font-bold shadow-xl shadow-emerald-500/20"
            >
              Contact Ishan
            </motion.a>
            <motion.a
              href="/tours"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold"
            >
              View All Tours
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
