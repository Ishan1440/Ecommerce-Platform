import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    tags: ["smartphone", "apple", "5g", "camera"],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1199,
    originalPrice: 1299,
    description: "Ultra-thin laptop with M2 chip, all-day battery life, and stunning Retina display",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    tags: ["laptop", "apple", "m2", "ultrabook"],
    relatedProducts: [1, 3, 5]
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349,
    description: "Industry-leading noise canceling wireless headphones with exceptional sound quality",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    tags: ["headphones", "wireless", "noise-canceling", "audio"],
    relatedProducts: [1, 2, 6]
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    price: 899,
    description: "Android flagship with AI features, stunning display, and powerful performance",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 743,
    inStock: true,
    tags: ["smartphone", "android", "samsung", "5g"],
    relatedProducts: [1, 2, 7]
  },
  {
    id: 5,
    name: "iPad Air",
    price: 599,
    description: "Versatile tablet with M1 chip, perfect for work, creativity, and entertainment",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 456,
    inStock: true,
    tags: ["tablet", "apple", "m1", "creative"],
    relatedProducts: [1, 2, 8]
  },

  // Fashion
  {
    id: 6,
    name: "Nike Air Max 270",
    price: 150,
    originalPrice: 180,
    description: "Comfortable running shoes with Air Max technology for maximum cushioning",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1234,
    inStock: true,
    tags: ["shoes", "nike", "running", "sports"],
    relatedProducts: [7, 8, 9]
  },
  {
    id: 7,
    name: "Levi's 501 Original Jeans",
    price: 89,
    description: "Classic straight-fit jeans with timeless style and durable construction",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 892,
    inStock: true,
    tags: ["jeans", "levis", "denim", "casual"],
    relatedProducts: [6, 8, 10]
  },
  {
    id: 8,
    name: "Adidas Ultraboost 22",
    price: 180,
    description: "Premium running shoes with responsive Boost midsole and Primeknit upper",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 678,
    inStock: true,
    tags: ["shoes", "adidas", "running", "boost"],
    relatedProducts: [6, 7, 11]
  },
  {
    id: 9,
    name: "Ray-Ban Aviator Classic",
    price: 154,
    description: "Iconic aviator sunglasses with gold frame and green lenses",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 445,
    inStock: true,
    tags: ["sunglasses", "ray-ban", "aviator", "classic"],
    relatedProducts: [6, 7, 12]
  },
  {
    id: 10,
    name: "Casio G-Shock",
    price: 99,
    description: "Durable digital watch with shock resistance and multiple functions",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 567,
    inStock: true,
    tags: ["watch", "casio", "g-shock", "digital"],
    relatedProducts: [6, 7, 13]
  },

  // Home & Garden
  {
    id: 11,
    name: "Dyson V15 Detect",
    price: 699,
    description: "Cordless vacuum with laser technology and powerful suction",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 789,
    inStock: true,
    tags: ["vacuum", "dyson", "cordless", "cleaning"],
    relatedProducts: [12, 13, 14]
  },
  {
    id: 12,
    name: "Philips Hue Starter Kit",
    price: 199,
    description: "Smart lighting system with color-changing bulbs and app control",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 456,
    inStock: true,
    tags: ["smart home", "lighting", "philips", "hue"],
    relatedProducts: [11, 13, 15]
  },
  {
    id: 13,
    name: "Instant Pot Duo",
    price: 89,
    originalPrice: 119,
    description: "7-in-1 electric pressure cooker for quick and healthy meals",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 1234,
    inStock: true,
    tags: ["kitchen", "pressure cooker", "instant pot", "cooking"],
    relatedProducts: [11, 12, 16]
  },
  {
    id: 14,
    name: "Nest Learning Thermostat",
    price: 249,
    description: "Smart thermostat that learns your schedule and saves energy",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 678,
    inStock: true,
    tags: ["smart home", "thermostat", "nest", "energy"],
    relatedProducts: [11, 12, 17]
  },
  {
    id: 15,
    name: "Roomba i7+",
    price: 799,
    description: "Robot vacuum with automatic dirt disposal and smart mapping",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 567,
    inStock: true,
    tags: ["robot vacuum", "roomba", "smart home", "cleaning"],
    relatedProducts: [11, 12, 18]
  },

  // Books
  {
    id: 16,
    name: "Atomic Habits",
    price: 19,
    description: "Transform your life with tiny changes that lead to remarkable results",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2345,
    inStock: true,
    tags: ["self-help", "productivity", "habits", "motivation"],
    relatedProducts: [17, 18, 19]
  },
  {
    id: 17,
    name: "The Psychology of Money",
    price: 16,
    description: "Timeless lessons on wealth, greed, and happiness",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 1892,
    inStock: true,
    tags: ["finance", "psychology", "money", "investing"],
    relatedProducts: [16, 18, 20]
  },
  {
    id: 18,
    name: "Deep Work",
    price: 18,
    description: "Rules for focused success in a distracted world",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1456,
    inStock: true,
    tags: ["productivity", "focus", "work", "success"],
    relatedProducts: [16, 17, 21]
  },
  {
    id: 19,
    name: "Sapiens",
    price: 22,
    description: "A brief history of humankind",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    tags: ["history", "anthropology", "science", "philosophy"],
    relatedProducts: [16, 17, 22]
  },
  {
    id: 20,
    name: "The Alchemist",
    price: 15,
    description: "A magical story about following your dreams",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 3456,
    inStock: true,
    tags: ["fiction", "inspiration", "adventure", "philosophy"],
    relatedProducts: [16, 17, 23]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Books"
]; 