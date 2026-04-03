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
}

export const toursData: TourPlan[] = [
  {
    id: "01",
    title: "03 Day Mini Sri Lanka Tour",
    subtitle: "Quick Escape",
    duration: "3 Days / 2 Nights",
    route: "Airport/Colombo - Kandy - Sigiriya - Colombo",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&q=80&w=800",
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
      }
    ]
  },
  {
    id: "02",
    title: "05 Day Sri Lanka Tour",
    subtitle: "Classical",
    duration: "5 Days / 4 Nights",
    route: "Airport / Colombo - Kandy - Nuwaraeliya - Ella - Colombo /Airport Via Galle",
    image: "https://images.unsplash.com/photo-1552423814-f41e0f7f4232?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1627664819818-e147d6221422?auto=format&fit=crop&q=80&w=800",
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
          "Village tour With Sri Lankan traditional Lunch",
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
          "Visit Ramboda Waterfall",
          "Visit Tea plantations",
          "Tea factory tour & tea tasting",
          "Visit Post Office In Nuwaraeliya",
          "Visit Lake Gregory"
        ],
        overnight: "Nuwaraeliya"
      },
      {
        day: 5,
        title: "Nuwaraeliya - Ella",
        activities: [
          "Scenic train ride from Nanuoya to Ella (World famous train ride)",
          "Nine Arches Bridge",
          "Little Adam's Peak"
        ],
        overnight: "Ella"
      },
      {
        day: 6,
        title: "Ella - Yala - Galle",
        activities: [
          "Morning Safari in Yala National Park (Leopards, Elephants etc.)",
          "Sea turtle farm & Hatchery Visit",
          "Stilt Fishermen In Koggala (can be seen only in downsouth)"
        ],
        overnight: "Galle"
      },
      {
        day: 7,
        title: "Galle - Colombo / Airport",
        activities: [
          "Koggala Lake Boat Safari",
          "Galle fort Visit",
          "Drop off to Colombo / Airport with unforgettable memories"
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
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800",
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
  }
];
