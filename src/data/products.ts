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
    price: 12.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1508815122820-2215947cc21c?q=80&w=600&auto=format&fit=crop",
    description: "Premium California almonds, lightly roasted to perfection for a crunchy, nutrient-dense snack.",
    badge: "Best Seller",
    unit: "16 oz"
  },
  {
    id: "prod-walnuts",
    name: "California Halved Walnuts",
    category: "Nuts",
    price: 14.50,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589314418659-197e4125860d?q=80&w=600&auto=format&fit=crop",
    description: "Raw, unsalted walnut halves rich in Omega-3. Perfect for baking or as a healthy brain-boosting snack.",
    badge: "New Arrival",
    unit: "12 oz"
  },
  {
    id: "prod-cashews",
    name: "Jumbo Roasted Cashews",
    category: "Nuts",
    price: 15.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1509070016581-915335451d79?q=80&w=600&auto=format&fit=crop",
    description: "Creamy, large-sized cashews slow-roasted with a hint of sea salt. Decadently crunchy.",
    unit: "16 oz"
  },
  {
    id: "prod-chia",
    name: "Organic Black Chia Seeds",
    category: "Seeds",
    price: 8.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1596720426673-e483d74ed721?q=80&w=600&auto=format&fit=crop",
    description: "Superfood seeds packed with fiber and protein. Ideal for puddings, smoothies, and baking.",
    badge: "Superfood",
    unit: "1 lb"
  },
  {
    id: "prod-pumpkin",
    name: "Raw Pumpkin Seeds (Pepitas)",
    category: "Seeds",
    price: 9.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509312875800-8c973aee01f6?q=80&w=600&auto=format&fit=crop",
    description: "Shelled raw pumpkin seeds, rich in magnesium and zinc. Great for salads or snacking.",
    unit: "12 oz"
  },
  {
    id: "prod-apricots",
    name: "Sun-Dried Turkish Apricots",
    category: "Dry Fruits",
    price: 11.20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595122245592-4545305a4170?q=80&w=600&auto=format&fit=crop",
    description: "Naturally sweet and chewy apricots, sun-dried without added sulfur for pure flavor.",
    badge: "Organic",
    unit: "16 oz"
  },
  {
    id: "prod-figs",
    name: "Dried Mission Figs",
    category: "Dry Fruits",
    price: 13.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558235281-c6674467c699?q=80&w=600&auto=format&fit=crop",
    description: "Premium black mission figs, dried to concentrate their honey-like sweetness and fiber.",
    unit: "12 oz"
  },
  {
    id: "prod-pistachios",
    name: "Roasted Shell-On Pistachios",
    category: "Nuts",
    price: 16.50,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=600&auto=format&fit=crop",
    description: "California-grown pistachios, lightly salted and roasted. A satisfying and healthy snack.",
    badge: "Bestseller",
    unit: "1 lb"
  }
];
