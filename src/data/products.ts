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
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1508815122820-2215947cc21c?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1589314418659-197e4125860d?q=80&w=600&auto=format&fit=crop",
    description: "Light-halved walnuts harvested from organic California groves. Raw, unsalted, and brain-boosting.",
    unit: "8 oz"
  },
  {
    id: "prod-honey",
    name: "Raw Forest Wildflower Honey",
    category: "Pantry",
    price: 11.20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=600&auto=format&fit=crop",
    description: "Cold-extracted, unfiltered honey straight from pristine woodland hives. Deep rich amber color.",
    badge: "Limited Stock",
    unit: "16 oz"
  }
];
