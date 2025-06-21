export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Chicken Items
  {
    id: 1,
    name: "Crunchy Fried Chicken",
    description: "Our signature crispy fried chicken with secret spices - the original taste!",
    price: 450,
    image: "https://images.pexels.com/photos/1106673/pexels-photo-1106673.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "chicken",
    popular: true
  },
  {
    id: 2,
    name: "Spicy Wings",
    description: "Hot and spicy chicken wings with special sauce",
    price: 380,
    image: "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "chicken"
  },
  {
    id: 3,
    name: "Chicken Drumsticks",
    description: "Juicy drumsticks marinated in herbs and spices",
    price: 320,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "chicken"
  },
  {
    id: 4,
    name: "Chicken Strips",
    description: "Tender chicken breast strips with crispy coating",
    price: 420,
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "chicken"
  },

  // Burgers
  {
    id: 5,
    name: "Chicken Deluxe Burger",
    description: "Premium chicken burger with fresh lettuce, tomato, and special sauce",
    price: 380,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers",
    popular: true
  },
  {
    id: 6,
    name: "Spicy Chicken Burger",
    description: "Fiery chicken burger with jalapeños and spicy mayo",
    price: 420,
    image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers"
  },
  {
    id: 7,
    name: "Classic Chicken Burger",
    description: "Traditional chicken burger with lettuce and mayo",
    price: 320,
    image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers"
  },
  {
    id: 8,
    name: "Double Chicken Burger",
    description: "Double chicken patty with cheese and special sauce",
    price: 520,
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers"
  },

  // Fries
  {
    id: 9,
    name: "Crispy French Fries",
    description: "Golden crispy fries with sea salt",
    price: 180,
    image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "fries"
  },
  {
    id: 10,
    name: "Loaded Cheese Fries",
    description: "Fries topped with melted cheese and herbs",
    price: 250,
    image: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "fries",
    popular: true
  },
  {
    id: 11,
    name: "Spicy Masala Fries",
    description: "Fries seasoned with Indian spices and chaat masala",
    price: 220,
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "fries"
  },

  // Drinks
  {
    id: 12,
    name: "Fresh Lime Soda",
    description: "Refreshing lime soda with mint",
    price: 120,
    image: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks"
  },
  {
    id: 13,
    name: "Mango Lassi",
    description: "Creamy mango yogurt drink",
    price: 150,
    image: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks"
  },
  {
    id: 14,
    name: "Cold Coffee",
    description: "Iced coffee with whipped cream",
    price: 180,
    image: "https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks"
  },
  {
    id: 15,
    name: "Soft Drinks",
    description: "Coca-Cola, Pepsi, Sprite, Fanta",
    price: 80,
    image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks"
  }
];

export const categories = [
  { id: 'chicken', name: 'Chicken', icon: '🍗' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'fries', name: 'Fries', icon: '🍟' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' }
];