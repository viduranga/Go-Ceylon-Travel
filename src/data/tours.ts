export interface TourDay {
  day: number;
  title: string;
  activities: string[];
  overnight?: string;
}

export interface TourPlan {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  route: string;
  description?: string;
  metaDescription?: string;
  itinerary: TourDay[];
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  isSpecial?: boolean;
}

export const toursData: TourPlan[] = [
  {
    id: "00",
    title: "Romantic Sri Lanka Getaway: Luxury Honeymoon & Intimate Ella Escape",
    subtitle: "Special Offer - 10% Off",
    duration: "7 Days / 6 Nights",
    route: "BIA/Colombo - Sigiriya - Kandy - Nuwaraeliya - Ella - Yala - Galle - BIA",
    description: "Celebrate your new beginning with a romantic Sri Lanka getaway designed for pure enchantment. From an intimate Ella and beach escape to luxury mountain retreats, we create memories that last a lifetime.\n\nWhy Choose Us: As your dedicated tour planners, we handle every detail so you can focus on each other. Our private, discreet service ensures your honeymoon is as intimate as it is unforgettable.",
    metaDescription: "Plan your romantic Sri Lanka getaway. Our luxury honeymoon tour features an intimate Ella escape, private beach dinners, and breathtaking mountain retreats.",
    image: "https://goceylontravel.com/uploads/romantic-honeymoon-tour-sri-lanka.jpeg",
    imageAlt: "A romantic honeymoon couple enjoying a private sunset tour in Sri Lanka with Go Ceylon Travel.",
    imageTitle: "Sri Lanka honeymoon packages, Romantic Sri Lanka tour, Luxury honeymoon Sri Lanka",
    isSpecial: true,
    itinerary: [
      {
        day: 1,
        title: "BIA - Colombo",
        activities: [
          "Warm Welcome at Airport",
          "Colombo City Visit"
        ],
        overnight: "Colombo Hotel"
      },
      {
        day: 2,
        title: "Colombo - Sigiriya",
        activities: [
          "Dambulla Cave temple Visit",
          "Sigiriya Village tour with traditional Lunch",
          "Climb Sigiriya"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya - Kandy",
        activities: [
          "Spice Garden Visit",
          "Hindu temple Visit",
          "Temple of the Tooth",
          "Gem Museum Visit"
        ],
        overnight: "Kandy"
      },
      {
        day: 4,
        title: "Kandy to Nuwaraeliya (Town of Romance)",
        activities: [
          "Tea plantations & factory visit",
          "Ramboda waterfall visit",
          "Royal Garden in Nuwaraeliya"
        ],
        overnight: "Nuwaraeliya (coldest city in sri lanka)"
      },
      {
        day: 5,
        title: "Nuwaraeliya - Ella - Yala",
        activities: [
          "Scenic train ride from Nanu Oya to Ella (World famous)",
          "Nine arch bridge"
        ],
        overnight: "Yala"
      },
      {
        day: 6,
        title: "Yala - Galle",
        activities: [
          "Morning Safari in Yala National Park (Elephants, Leopards)",
          "Relax in Mirissa Beach"
        ],
        overnight: "Galle"
      },
      {
        day: 7,
        title: "Galle - Colombo / BIA",
        activities: [
          "Koggala lake Boat Safari",
          "Galle Fort Visit",
          "Drop to Colombo / BIA With loving memories of your honeymoon tour"
        ]
      }
    ]
  },
  {
    id: "01",
    title: "Short Sri Lanka Tour: Kandy and Sigiriya 3-Day Trip",
    subtitle: "Quick Escape",
    duration: "3 Days / 2 Nights",
    route: "Airport/Colombo - Kandy - Sigiriya - Colombo",
    description: "Looking for a quick escape to the heart of the island? Our 3-day mini tour is the perfect introduction to Sri Lanka’s cultural triangle, blending ancient history with lush hill-country charm.\n\nWhy Choose Us: Experience the best of Sri Lanka without the stress. Our private transport and expert local tour planners ensure every minute of your short trip is maximized for comfort and discovery.",
    metaDescription: "Explore the cultural heart of Sri Lanka on this 3-day Kandy and Sigiriya trip. A quick escape featuring ancient rocks, sacred temples, and expert local guides.",
    image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Colombo - Kandy",
        activities: [
          "Visit Elephants In Pinnawala (Elephant Orphanage Or Elephant Foundation)",
          "Tea Factory Visit & Tea Plantation Visit",
          "Moonstones Mining & Gem Museum Visit",
          "Explore Kandy Temple Of the Tooth (sacred)",
          "Cultural Dance Show in Kandy"
        ],
        overnight: "Kandy"
      },
      {
        day: 2,
        title: "Kandy - Sigiriya",
        activities: [
          "Visit Matale Hindu Temple",
          "Visit Herbal & Spice Garden",
          "Village tour + Traditional Lunch",
          "Climb Sigiriya Or Pidurangala Rock (see the Sunset)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya - Colombo",
        activities: [
          "Climb Sigiriya or Pidurangala Rock (See the Sunrise)",
          "Explore Dambulla Golden Cave Temple",
          "Drop to Colombo / Airport"
        ]
      }
    ]
  },
  {
    id: "02",
    title: "Cultural Heart of Sri Lanka: 5-Day Itinerary Through Heritage & Tea",
    subtitle: "Classical",
    duration: "5 Days / 4 Nights",
    route: "Airport / Colombo - Kandy - Nuwaraeliya - Ella - Colombo /Airport Via Galle",
    description: "Immerse yourself in the cultural heart of Sri Lanka on this perfectly paced 5-day journey. From the misty Nuwara Eliya tea plantations to the ancient ruins of the North, experience the island’s timeless soul.\n\nWhy Choose Us: We go beyond the guidebook. With our deep local expertise and seamless private transfers, you’ll connect with the authentic heritage of our beautiful island.",
    metaDescription: "Discover the cultural heart of Sri Lanka with our 5-day itinerary. Visit Nuwara Eliya tea plantations, ancient temples, and the royal city of Kandy in comfort.",
    image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Colombo - Kandy",
        activities: [
          "Visit Elephants in Pinnawala",
          "Moonstones Mining & Gem Museum Visit",
          "Visit Temple Of the Tooth",
          "Shopping in Kandy",
          "Cultural Dance Show"
        ],
        overnight: "Kandy"
      },
      {
        day: 2,
        title: "Kandy - Nuwaraeliya",
        activities: [
          "Visit Tea Plantations",
          "Visit Ramboda Waterfall",
          "Tea Factory Visit & Tea tasting",
          "Visit Post Office in Nuwaraeliya",
          "Visit Lake Gregory"
        ],
        overnight: "Nuwaraeliya"
      },
      {
        day: 3,
        title: "Nuwaraeliya - Ella",
        activities: [
          "Scenic Train ride from Nanuoya to Ella (World most popular train ride)",
          "Visit Nine Arches Bridge",
          "Ayurvedic Garden Visit",
          "Little Adam's Peak"
        ],
        overnight: "Ella"
      },
      {
        day: 4,
        title: "Ella - Galle",
        activities: [
          "Visit Ravana Waterfall",
          "Safari in Udawalawa National Park (Popular for wild elephants)",
          "Visit Sea turtles farm & hatchery, Koggala",
          "Visit Stilt Fisherman (can be seen only down south coastal area)"
        ],
        overnight: "Galle"
      },
      {
        day: 5,
        title: "Galle - Colombo / Airport",
        activities: [
          "Boat Safari in Koggala Lake",
          "Visit Galle Fort",
          "Drop off to Colombo / Airport with unforgettable memories"
        ]
      }
    ]
  },
  {
    id: "03",
    title: "Best of Sri Lanka in 1 Week: Sigiriya to Galle Coastal Adventure",
    subtitle: "Most Popular",
    duration: "7 Days / 6 Nights",
    route: "Airport - Colombo - Sigiriya - Kandy - Nuwaraeliya - Ella - Yala - Galle - Airport/ Colombo",
    description: "Experience the ultimate island loop with our most popular 7-day tour. This journey takes you from the majestic heights of Sigiriya to the golden sands of the south, offering the best of Sri Lanka in 1 week.\n\nWhy Choose Us: Your comfort is our priority. Enjoy a stress-free travel experience with a dedicated private vehicle and a tour planner who knows every hidden viewpoint and local secret.",
    metaDescription: "See the best of Sri Lanka in 1 week! From Sigiriya to Galle, enjoy a Yala safari tour, scenic trains, and golden beaches with our private 7-day tour package.",
    image: "https://goceylontravel.com/uploads/temple-of-the-tooth-kandy.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Airport - Colombo",
        activities: [
          "Airport pickup With Warm Welcome",
          "Colombo City Tour",
          "Galleface Green Sunset Visit"
        ],
        overnight: "Colombo"
      },
      {
        day: 2,
        title: "Colombo - Sigiriya",
        activities: [
          "Drive to Sigiriya",
          "Visit Dambulla Golden Cave Temple (UNESCO)",
          "Village tour With Sri lankan traditional Lunch",
          "Climb Sigiriya or Pidurangala Rock (see the sunset)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya - Kandy",
        activities: [
          "Ayurvedic Herbal Garden Visit",
          "Moonstones Mining & Gem Museum Visit",
          "Visit of Hindu Temple, Matale",
          "Visit Temple of the Tooth",
          "Cultural Dance Show in the evening"
        ],
        overnight: "Kandy"
      },
      {
        day: 4,
        title: "Kandy - Nuwaraeliya",
        activities: [
          "Visit Ramboda Waterfall.",
          "Visit Tea plantations.",
          "Tea factory tour & tea tasting.",
          "Visit Post Office In Nuwaraeliya.",
          "Visit Lake Gregory"
        ],
        overnight: "Nuwaraeliya"
      },
      {
        day: 5,
        title: "Nuwaraeliya - Ella",
        activities: [
          "Scenic train ride from Nanuoya to Ella.(World famous train ride)",
          "Nine Arches Bridge.",
          "Little Adam's Peak."
        ],
        overnight: "Ella"
      },
      {
        day: 6,
        title: "Ella - Yala - Galle",
        activities: [
          "Morning Safari in Yala National Park (Leopards,Elephants etc.)",
          "Sea turtle farm & Hatchery Visit.",
          "Stilt Fishermen In Koggala.( can be seen only in downsouth)"
        ],
        overnight: "Galle"
      },
      {
        day: 7,
        title: "Galle - Colombo / Airport",
        activities: [
          "Koggala Lake Boat Safari",
          "Galle fort Visit",
          "Drop off to Colombo/ Airport with unforgettable memories."
        ]
      }
    ]
  },
  {
    id: "04",
    title: "10-Day Sri Lanka Private Tour: Ancient Cities & Mirissa Whale Watching",
    subtitle: "Grand Tour",
    duration: "10 Days / 9 Nights",
    route: "Airport - Colombo - Sigiriya - Polonnaruwa - Kandy - Nuwaraeliya - Ella - Yala - Mirissa - Galle - Colombo/ Airport",
    description: "Embark on a grand exploration of the island’s most iconic treasures and hidden gems. This 10-day Sri Lanka private tour balances deep ancient cities exploration with breathtaking coastal relaxation.\n\nWhy Choose Us: With over a decade of experience, we provide a personalized journey that matches your pace. Our private transport ensures you travel in safety and style across the entire island.",
    metaDescription: "Experience a 10-day Sri Lanka private tour. Explore ancient cities, hike Ella’s peaks, and enjoy Mirissa whale watching with our expert local tour planners.",
    image: "https://goceylontravel.com/uploads/sri-lanka-tourism-header.jpg",
    itinerary: [
      {
        day: 1,
        title: "Airport - Colombo",
        activities: [
          "Airport Pickup With Warm Welcome",
          "Colombo City Tour",
          "Sunset at Galleface Green"
        ],
        overnight: "Colombo"
      },
      {
        day: 2,
        title: "Colombo - Sigiriya",
        activities: [
          "Drive to Sigiriya",
          "Visit Dambulla Golden Cave Temple (UNESCO)",
          "Village tour With Srilankan Traditional Lunch"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya - Polonnaruwa - Sigiriya",
        activities: [
          "Climb Sigiriya or Pidurangala in the morning (see the sunrise)",
          "Visit Polonnaruwa Ancient City",
          "Elephant Safari in Minneriya National park (optional)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 4,
        title: "Sigiriya - Kandy",
        activities: [
          "Ayurvedic Herbal Garden Visit",
          "Moonstones Mining & Gem Museum Visit",
          "Matale Hindu temple Visit",
          "Visit Temple of the Tooth",
          "Cultural Dance Show in the evening"
        ],
        overnight: "Kandy"
      },
      {
        day: 5,
        title: "Kandy - Nuwaraeliya",
        activities: [
          "Ramboda Waterfall",
          "Tea Factory & tea tasting",
          "Tea plantations visit",
          "Post office & Lake Gregory Visit in Nuwaraeliya"
        ],
        overnight: "Nuwaraeliya"
      },
      {
        day: 6,
        title: "Nuwaraeliya - Ella",
        activities: [
          "Scenic train ride from Nanuoya to Ella (World famous train ride)",
          "Nine arches bridge Visit",
          "Little Adam's Peak"
        ],
        overnight: "Ella"
      },
      {
        day: 7,
        title: "Ella - Yala",
        activities: [
          "Ravana Waterfall",
          "Drive to Yala",
          "Relax at Hotel"
        ],
        overnight: "Yala"
      },
      {
        day: 8,
        title: "Yala - Mirissa",
        activities: [
          "Early morning Yala National Park Safari",
          "Transfer to Mirissa Beach",
          "Relax on the beach"
        ],
        overnight: "Mirissa"
      },
      {
        day: 9,
        title: "Mirissa - Galle - Colombo",
        activities: [
          "Morning Whale Watching",
          "Visit Coconut tree Hill",
          "Sea turtle farm & hatchery",
          "Stilt fisherman in Koggala (can be seen only in downsouth)",
          "Boat safari in Koggala lake",
          "Visit Galle fort evening (see sunset)",
          "Transfer to Colombo"
        ],
        overnight: "Colombo"
      },
      {
        day: 10,
        title: "Colombo - Airport",
        activities: [
          "Last minute Shopping",
          "Drop off to Airport with unforgettable memories"
        ]
      }
    ]
  },
  {
    id: "05",
    title: "Full Island Discovery: Comprehensive 14-Day Sri Lanka Tour",
    subtitle: "Complete Island Experience",
    duration: "14 Days / 13 Nights",
    route: "Airport / Colombo - Negombo - Sigiriya - Polonnaruwa - Trincomalee - Kandy - Nuwaraeliya - Ella - Udawalawa Or Yala - Mirissa - Galle - Bentota - Colombo",
    description: "For the traveler who wants to see it all, our full island discovery offers an unparalleled deep dive into Sri Lankan life. Uncover the hidden gems of the North and South on this comprehensive 14-day Sri Lanka tour.\n\nWhy Choose Us: We specialize in personalized journeys that go beyond the typical tourist paths. Our local expertise ensures a deep connection with our culture, heritage, and people.",
    metaDescription: "Embark on a full island discovery with our 14-day Sri Lanka tour. Uncover hidden gems from Jaffna to Galle on the most comprehensive island itinerary available.",
    image: "https://goceylontravel.com/uploads/Go%20Ceylon%20Travel.jpeg",
    imageAlt: "14-day ultimate Sri Lanka discovery tour covering major cultural and beach destinations",
    imageTitle: "Go Ceylon Travel 14-Day Plan",
    itinerary: [
      {
        day: 1,
        title: "Airport - Negombo",
        activities: [
          "Airport pickup with warm welcome",
          "Leisure at Negombo Beach"
        ],
        overnight: "Negombo"
      },
      {
        day: 2,
        title: "Negombo - Sigiriya",
        activities: [
          "Transfer to Sigiriya",
          "Visit Dambulla Golden Cave Temple (UNESCO)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya Tour",
        activities: [
          "Climb Sigiriya Early morning (See the sunrise)",
          "Village Tour with traditional Sri Lankan Lunch",
          "Evening Safari in Minneriya National Park (Elephants)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 4,
        title: "Sigiriya - Polonnaruwa - Sigiriya",
        activities: [
          "Explore Polonnaruwa Ancient City",
          "Ayurveda Spa (Optional)"
        ],
        overnight: "Sigiriya"
      },
      {
        day: 5,
        title: "Sigiriya - Trincomalee",
        activities: [
          "Transfer to Trincomalee",
          "Koneswaram Hindu Temple Visit",
          "Nilaveli Beach Visit"
        ],
        overnight: "Trincomalee"
      },
      {
        day: 6,
        title: "Full Day in Trincomalee",
        activities: [
          "Pigeon Island Snorkeling",
          "Leisure at Marble Beach"
        ],
        overnight: "Trincomalee"
      },
      {
        day: 7,
        title: "Trincomalee - Kandy",
        activities: [
          "Transfer to Kandy",
          "Visit Ayurvedic Herbal Garden",
          "Moonstones Mining & Gem Museum Visit",
          "Temple Of the Tooth in Kandy",
          "Cultural Dance Show in the evening"
        ],
        overnight: "Kandy"
      },
      {
        day: 8,
        title: "Kandy - Nuwaraeliya",
        activities: [
          "Visit tea plantations",
          "Tea factory visit & tea tasting",
          "Ramboda Waterfall visit",
          "Lake Gregory & Post office Visit"
        ],
        overnight: "Nuwaraeliya"
      },
      {
        day: 9,
        title: "Nuwaraeliya - Ella",
        activities: [
          "Scenic Train Ride from Nanuoya to Ella (World famous train ride)",
          "Nine Arches Bridge Visit",
          "Little Adam's Peak"
        ],
        overnight: "Ella"
      },
      {
        day: 10,
        title: "Ella - Udawalawa / Yala",
        activities: [
          "Yala Safari (if you interest to see leopards)",
          "Udawalawa Safari (interest to see elephants)"
        ],
        overnight: "Udawalawa Or Yala"
      },
      {
        day: 11,
        title: "Safari - Mirissa",
        activities: [
          "Early Morning safari according to your choice (Udawalawa Or Yala)",
          "Transfer to Mirissa",
          "Enjoy on the Beach"
        ],
        overnight: "Mirissa"
      },
      {
        day: 12,
        title: "Mirissa - Galle",
        activities: [
          "Morning Whale watching",
          "Coconut tree Hill / Secret Beach (choose one)",
          "Stilt fishermen (can be seen only in downsouth)",
          "Galle fort visit (see sunset)"
        ],
        overnight: "Galle"
      },
      {
        day: 13,
        title: "Galle - Bentota",
        activities: [
          "Sea turtle farm & Hatchery Visit",
          "Moonstone mining Visit",
          "Boat Safari in Madu River (Mangroves)"
        ],
        overnight: "Bentota"
      },
      {
        day: 14,
        title: "Bentota - Colombo - Airport",
        activities: [
          "Colombo City tour",
          "Last minute Shopping",
          "Drop off to Airport with unforgettable Memories"
        ]
      }
    ]
  }
];
