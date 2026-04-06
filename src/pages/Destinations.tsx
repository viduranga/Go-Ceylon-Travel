import React from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Compass, Camera, Info } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
    description: "The 'Lion Rock' is an ancient rock fortress located in the northern Matale District. It is a UNESCO World Heritage site and one of the most visited historic sites in Sri Lanka.",
    highlights: ["Ancient Rock Fortress", "Mirror Wall", "Frescoes", "Water Gardens"]
  },
  {
    id: "ella",
    name: "Ella",
    image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
    description: "A small town in the Badulla District of Uva Province, Ella is surrounded by hills covered with cloud forests and tea plantations. It's a paradise for hikers and nature lovers.",
    highlights: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls"]
  },
  {
    id: "galle",
    name: "Galle",
    image: "https://lh3.googleusercontent.com/d/18pjjbA6y3xErTb_rd0Nj4x7UbzcGoJj1",
    description: "A major city in Sri Lanka, situated on the southwestern tip. Galle is famous for its fort, a historical, archaeological and architectural heritage monument which was built by the Portuguese.",
    highlights: ["Galle Fort", "Lighthouse", "Dutch Reformed Church", "Unawatuna Beach"]
  },
  {
    id: "kandy",
    name: "Kandy",
    image: "https://goceylontravel.com/uploads/temple-of-the-tooth-kandy.jpeg",
    description: "The cultural capital of Sri Lanka, Kandy is home to the Temple of the Sacred Tooth Relic. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
    highlights: ["Temple of the Tooth", "Kandy Lake", "Royal Botanical Gardens", "Bahirawakanda Buddha"]
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: "https://lh3.googleusercontent.com/d/11PCRlKAnLFHb23vEByMMfDCem9T76uyG",
    description: "Often referred to as 'Little England', Nuwara Eliya is known for its temperate, cool climate and colonial-era architecture. It's the heart of Sri Lanka's tea production.",
    highlights: ["Tea Plantations", "Lake Gregory", "Victoria Park", "Horton Plains"]
  },
  {
    id: "yala",
    name: "Yala National Park",
    image: "https://goceylontravel.com/uploads/Udawalawe-national-park-safari.jpg",
    description: "The most visited and second largest national park in Sri Lanka. It's famous for its variety of wild animals, especially the Sri Lankan leopard, elephant, and aquatic birds.",
    highlights: ["Leopard Safaris", "Elephant Sightings", "Bird Watching", "Coastal Scenery"]
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: "https://lh3.googleusercontent.com/d/1gg1YeL731Fu95Id1eNZVh02EAe4K4iD5",
    description: "A small town on the south coast, Mirissa is famous for its beautiful beach and as a prime spot for whale and dolphin watching.",
    highlights: ["Whale Watching", "Coconut Tree Hill", "Parrot Rock", "Surfing"]
  },
  {
    id: "colombo",
    name: "Colombo",
    image: "https://lh3.googleusercontent.com/d/1zXgqE8fp2ldnx11m7ndjViPSdvWk7TNH",
    description: "The commercial capital and largest city of Sri Lanka. It's a vibrant city with a mix of modern life, colonial buildings, and ruins.",
    highlights: ["Galle Face Green", "Gangaramaya Temple", "Pettah Market", "Lotus Tower"]
  }
];

export default function Destinations() {
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
              Explore <span className="text-emerald-400">Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 max-w-2xl mx-auto font-light">
              From misty mountains to golden beaches, discover the diverse beauty of the pearl of the Indian Ocean.
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
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Camera className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Gallery</span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">Destination</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{dest.name}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {dest.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {dest.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    to="/tours"
                    className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-3 active:scale-95"
                  >
                    View Tours to {dest.name}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-white border-2 border-emerald-100 text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all flex items-center gap-3 active:scale-95">
                    <Info className="w-5 h-5" />
                    Travel Guide
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
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Can't decide where to go?</h2>
          <p className="text-emerald-900/60 text-lg">
            Our travel experts can help you create a custom itinerary that includes all your must-see destinations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
          >
            Plan My Custom Trip
          </Link>
        </div>
      </section>
    </div>
  );
}
