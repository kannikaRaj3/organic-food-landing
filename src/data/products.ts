export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  badge?: string;
  unit: string;
}

export const featuredProducts: Product[] = [
  {
    id: "prod-almonds",
    name: "Organic Roasted Almonds",
    category: "Nuts",
    price: 1099,
    rating: 4.9,
    image: "/images/almonds.png",
    description: "Premium California almonds, lightly roasted to perfection for a crunchy, nutrient-dense snack.",
    badge: "Best Seller",
    unit: "450g"
  },
  {
    id: "prod-walnuts",
    name: "California Halved Walnuts",
    category: "Nuts",
    price: 1199,
    rating: 4.8,
    image: "/images/walnuts.png",
    description: "Raw, unsalted walnut halves rich in Omega-3. Perfect for baking or as a healthy brain-boosting snack.",
    badge: "New Arrival",
    unit: "340g"
  },
  {
    id: "prod-cashews",
    name: "Jumbo Roasted Cashews",
    category: "Nuts",
    price: 1329,
    rating: 5.0,
    image: "/images/cashews.png",
    description: "Creamy, large-sized cashews slow-roasted with a hint of sea salt. Decadently crunchy.",
    unit: "450g"
  },
  {
    id: "prod-chia",
    name: "Organic Black Chia Seeds",
    category: "Seeds",
    price: 749,
    rating: 4.9,
    image: "/images/chia-seeds.png",
    description: "Superfood seeds packed with fiber and protein. Ideal for puddings, smoothies, and baking.",
    badge: "Superfood",
    unit: "500g"
  },
  {
    id: "prod-pumpkin",
    name: "Raw Pumpkin Seeds (Pepitas)",
    category: "Seeds",
    price: 799,
    rating: 4.7,
    image: "/images/pumpkin-seeds.png",
    description: "Shelled raw pumpkin seeds, rich in magnesium and zinc. Great for salads or snacking.",
    unit: "340g"
  },
  {
    id: "prod-apricots",
    name: "Sun-Dried Turkish Apricots",
    category: "Dry Fruits",
    price: 929,
    rating: 4.9,
    image: "/images/apricots.png",
    description: "Naturally sweet and chewy apricots, sun-dried without added sulfur for pure flavor.",
    badge: "Organic",
    unit: "450g"
  },
  {
    id: "prod-figs",
    name: "Dried Mission Figs",
    category: "Dry Fruits",
    price: 1149,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1536620948473-5ec585e7a9fd?q=80&w=600&auto=format&fit=crop",
    description: "Premium black mission figs, dried to concentrate their honey-like sweetness and fiber.",
    unit: "340g"
  },
  {
    id: "prod-pistachios",
    name: "Roasted Shell-On Pistachios",
    category: "Nuts",
    price: 1369,
    rating: 4.9,
    image: "/images/pistachios.png",
    description: "California-grown pistachios, lightly salted and roasted. A satisfying and healthy snack.",
    badge: "Bestseller",
    unit: "500g"
  }
];
