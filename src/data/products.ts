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
    id: "prod-tomatoes",
    name: "Vine-Ripe Heirloom Tomatoes",
    category: "Vegetables",
    price: 4.89,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop",
    description: "Earthy, sweet, and sun-ripened on family farm vines. Perfect for salads and artisanal sauces.",
    badge: "Best Seller",
    unit: "lb"
  },
  {
    id: "prod-almonds",
    name: "Organic Raw Sweet Almonds",
    category: "Pantry",
    price: 8.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d9b?q=80&w=600&auto=format&fit=crop",
    description: "Premium single-origin nonpareil almonds, steam-pasteurized. Rich in nutrients and vitamin E.",
    badge: "New Arrival",
    unit: "12 oz"
  },
  {
    id: "prod-bread",
    name: "Artisanal Rosemary Sourdough",
    category: "Bakery",
    price: 6.50,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop",
    description: "Slow-fermented for 36 hours. Open crumb, golden crispy crust, infused with wild garden rosemary.",
    unit: "loaf"
  },
  {
    id: "prod-blueberries",
    name: "Wild Mountain Blueberries",
    category: "Fruits",
    price: 5.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop",
    description: "Hand-picked high-altitude sweet blueberries packed with natural antioxidants and vibrant flavor.",
    badge: "100% Organic",
    unit: "pint"
  },
  {
    id: "prod-walnuts",
    name: "California Halved Walnuts",
    category: "Pantry",
    price: 7.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1585834925828-48b7b7522d0d?q=80&w=600&auto=format&fit=crop",
    description: "Light-halved walnuts harvested from organic California groves. Raw, unsalted, and brain-boosting.",
    unit: "8 oz"
  },
  {
    id: "prod-honey",
    name: "Raw Forest Wildflower Honey",
    category: "Pantry",
    price: 11.20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600&auto=format&fit=crop",
    description: "Cold-extracted, unfiltered honey straight from pristine woodland hives. Deep rich amber color.",
    badge: "Limited Stock",
    unit: "16 oz"
  }
];
