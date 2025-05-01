import { Product as ProductType } from '@/types/api';
import additionalProducts from './additionalProducts';
import { normalizeProductReviews } from '@/utils/apiUtils';

export type Product = ProductType;

const originalProducts: Omit<Product, 'createdAt' | 'stock'>[] = [
  {
    id: "1",
    title: "Aurora Halo Engagement Ring",
    description: "The Aurora Halo Ring features a stunning round-cut moissanite center stone surrounded by a halo of smaller stones. Set in 14k white gold, this ring catches light from every angle, creating a mesmerizing display that mimics the dance of the aurora borealis.",
    price: 1499,
    sku: "FM-R001",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Round Brilliant",
    metalType: "14K White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" }
    ],
    sizeOptions: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Rings",
    tags: ["engagement", "halo", "round"],
    featured: true,
    reviews: [
      {
        id: "r1",
        author: "Alexandra M.",
        rating: 5,
        comment: "The sparkle on this ring is unbelievable! I get compliments everywhere I go.",
        date: "2023-11-15",
        productId: "1",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Avoid harsh chemicals and ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  },
  {
    id: "2",
    title: "Quantum Solitaire Necklace",
    description: "The Quantum Solitaire Necklace features a stunning 1.5 carat pear-shaped moissanite pendant suspended on an adjustable 18-inch chain. This futuristic piece symbolizes the quantum leap in jewelry technology, offering extraordinary brilliance in a minimalist design.",
    price: 899,
    sku: "FM-N001",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Pear",
    metalType: "18K White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" }
    ],
    sizeOptions: ["16\"", "18\"", "20\"", "24\""],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpYW1vbmQlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Necklaces",
    tags: ["pendant", "solitaire", "pear"],
    featured: true,
    reviews: [
      {
        id: "r2",
        author: "Jessica T.",
        rating: 5,
        comment: "Absolutely stunning! The stone catches light beautifully and the chain is delicate but sturdy.",
        date: "2023-10-22",
        productId: "2",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Store separately to prevent scratching.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  },
  {
    id: "3",
    title: "Nebula Tennis Bracelet",
    description: "The Nebula Tennis Bracelet features a continuous line of round moissanite stones set in a seamless channel. Inspired by distant star clusters, this piece wraps around your wrist with celestial elegance and modern sophistication.",
    price: 1299,
    sku: "FM-B001",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Round Brilliant",
    metalType: "Platinum",
    colorVariations: [
      { name: "Platinum", color: "#E5E4E2" },
      { name: "White Gold", color: "#E8E8E8" }
    ],
    sizeOptions: ["6.5\"", "7\"", "7.5\"", "8\""],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwYnJhY2VsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Bracelets",
    tags: ["tennis", "bracelet", "round"],
    featured: false,
    reviews: [
      {
        id: "r3",
        author: "Michael R.",
        rating: 4,
        comment: "Purchased for my wife's birthday. She loves it and wears it daily. Great quality.",
        date: "2023-09-18",
        productId: "3",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Avoid harsh chemicals and ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  },
  {
    id: "4",
    title: "Stellar Stud Earrings",
    description: "The Stellar Stud Earrings feature brilliant-cut moissanite stones set in a minimalist four-prong setting. These timeless yet futuristic earrings provide maximum sparkle with secure comfort for everyday wear.",
    price: 499,
    sku: "FM-E001",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Round Brilliant",
    metalType: "14K White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" }
    ],
    sizeOptions: ["0.5ct", "1ct", "1.5ct", "2ct"],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Earrings",
    tags: ["studs", "round", "classic"],
    featured: true,
    reviews: [
      {
        id: "r4",
        author: "Emma L.",
        rating: 5,
        comment: "These earrings are absolutely perfect! They catch the light beautifully and are so comfortable to wear.",
        date: "2023-12-05",
        productId: "4",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Store separately to prevent scratching.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  },
  {
    id: "5",
    title: "Infinity Eternity Band",
    description: "The Infinity Eternity Band features a continuous circle of perfectly matched moissanite stones that represent never-ending devotion. This sleek and modern design offers maximum brilliance with contemporary styling.",
    price: 1199,
    sku: "FM-R002",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Round Brilliant",
    metalType: "14K White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" }
    ],
    sizeOptions: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1615655114865-4cc5c5f659d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXRlcm5pdHklMjByaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1607703704520-82b9a6284562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpYW1vbmQlMjByaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Rings",
    tags: ["eternity", "band", "wedding"],
    featured: false,
    reviews: [
      {
        id: "r5",
        author: "Sophia K.",
        rating: 5,
        comment: "This is the perfect wedding band! It pairs beautifully with my engagement ring and the sparkle is unreal.",
        date: "2023-11-01",
        productId: "5",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Avoid harsh chemicals and ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  },
  {
    id: "6",
    title: "Celestial Drop Earrings",
    description: "The Celestial Drop Earrings feature pear-shaped moissanite stones suspended from a delicate chain. These elegant earrings create movement and catch the light with every turn, bringing celestial drama to any outfit.",
    price: 799,
    sku: "FM-E002",
    moissaniteType: "DEF Colorless",
    moissaniteCut: "Pear",
    metalType: "14K White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Rose Gold", color: "#B76E79" }
    ],
    sizeOptions: ["Standard"],
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvcCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb3AlMjBlYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    category: "Earrings",
    tags: ["drop", "pear", "elegant"],
    featured: true,
    reviews: [
      {
        id: "r6",
        author: "Olivia P.",
        rating: 5,
        comment: "These earrings are stunning and versatile. I love how they catch the light when I move.",
        date: "2023-10-10",
        productId: "6",
        verified: true
      }
    ],
    careInstructions: "Clean with mild soap and warm water. Store separately to prevent tangling and scratching.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items."
  }
];

// Add missing properties to make the products conform to the Product type
const enhancedOriginalProducts = originalProducts.map(product => ({
  ...product,
  createdAt: new Date().toISOString(),
  stock: Math.floor(Math.random() * 50) + 10
})) as Product[];

// Combine original and additional products
const products: Product[] = normalizeProductReviews([...enhancedOriginalProducts, ...additionalProducts]);

export default products;
