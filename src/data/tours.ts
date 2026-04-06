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
  itinerary: TourDay[];
  image: string;
  imageAlt?: string;
  imageTitle?: string;
}

export const toursData: TourPlan[] = [
  {
    id: "01",
    title: "03 Day Mini Sri Lanka Tour",
    subtitle: "Quick Escape",
    duration: "3 Days / 2 Nights",
    route: "Airport/Colombo - Kandy - Sigiriya - Colombo",
    image: "https://goceylontravel.com/uploads/sigiriya-rock-fortress-tour.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Colombo - Kandy",
        activities: [
          "Visit Elephants In Pinnawala (Elephant Orphanage Or Elephant Foundation)",
          "Tea Factory Visit & Tea Plantation Visit",
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
    title: "05 Day Sri Lanka Tour",
    subtitle: "Classical",
    duration: "5 Days / 4 Nights",
    route: "Airport / Colombo - Kandy - Nuwaraeliya - Ella - Colombo /Airport Via Galle",
    image: "https://goceylontravel.com/uploads/ella-nine-arch-bridge.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Colombo - Kandy",
        activities: [
          "Visit Elephants in Pinnawala",
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
    title: "07 Day Sri Lanka Tour",
    subtitle: "Most Popular",
    duration: "7 Days / 6 Nights",
    route: "Airport - Colombo - Sigiriya - Kandy - Nuwaraeliya - Ella - Yala - Galle - Airport/ Colombo",
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
    title: "10 Day Sri Lanka Tour Plan",
    subtitle: "Grand Tour",
    duration: "10 Days / 9 Nights",
    route: "Airport - Colombo - Sigiriya - Polonnaruwa - Kandy - Nuwaraeliya - Ella - Yala - Mirissa - Galle - Colombo/ Airport",
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
    title: "14 Day Sri Lanka Tour Plan",
    subtitle: "Complete Island Experience",
    duration: "14 Days / 13 Nights",
    route: "Airport / Colombo - Negombo - Sigiriya - Polonnaruwa - Trincomalee - Kandy - Nuwaraeliya - Ella - Udawalawa Or Yala - Mirissa - Galle - Bentota - Colombo",
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
