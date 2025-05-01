
import { Product } from '@/types/api';

export const necklaces: Product[] = [
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-10-01T00:00:00Z",
    stock: 20
  },
  // Necklaces from additionalProducts
  {
    id: "prod-14",
    title: "Celestial Pendant Necklace",
    description: "A stunning star-shaped pendant featuring a central round moissanite surrounded by smaller stones. Hangs on an adjustable 16-18 inch chain.",
    price: 699,
    category: "Necklaces",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MN-CEL-004",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Round Brilliant",
    metalType: "14k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["16\"", "18\"", "20\""],
    createdAt: "2023-08-05T00:00:00Z",
    stock: 10,
    careInstructions: "Clean with warm soapy water and a soft brush. Pat dry with a lint-free cloth.",
    warrantyInfo: "Lifetime warranty on craftsmanship. 30-day satisfaction guarantee.",
    reviews: [],
    tags: ["celestial", "star", "pendant"]
  },
  {
    id: "prod-18",
    title: "Solitaire Pendant",
    description: "Minimalist pendant featuring a 1 carat equivalent round moissanite set in a 4-prong setting. Includes an 18-inch cable chain with secure spring ring clasp.",
    price: 599,
    category: "Necklaces",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MN-SOL-008",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Round Brilliant",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["18\"", "20\"", "22\""],
    createdAt: "2023-06-10T00:00:00Z",
    stock: 14,
    careInstructions: "Clean with warm soapy water and a soft cloth. Store in a jewelry box when not wearing.",
    warrantyInfo: "Two-year warranty on craftsmanship.",
    reviews: [],
    tags: ["minimalist", "solitaire", "pendant"]
  },
  // Necklaces from moreProducts
  {
    id: "prod-24",
    title: "Quantum Pendant",
    description: "A modern pendant featuring a large emerald-cut moissanite suspended in a minimalist gold frame. The innovative setting creates the illusion that the stone is floating within the geometric frame.",
    price: 1395,
    category: "Necklaces",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MN-QTM-014",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Emerald",
    metalType: "18k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["16\"", "18\"", "20\"", "24\""],
    createdAt: "2024-01-10T00:00:00Z",
    stock: 7,
    careInstructions: "Clean with mild soap and warm water. Dry thoroughly with a soft, lint-free cloth.",
    warrantyInfo: "Lifetime warranty on craftsmanship.",
    reviews: [],
    tags: ["geometric", "minimalist", "floating"]
  },
  {
    id: "prod-28",
    title: "Gravity Defying Pendant",
    description: "An engineering marvel, this pendant features a pear-shaped moissanite stone that appears to defy gravity, suspended within an architectural yellow gold frame. The asymmetric design creates a conversation-starting piece.",
    price: 1290,
    category: "Necklaces",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MN-GRV-018",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Pear",
    metalType: "18k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
    ],
    sizeOptions: ["18\"", "20\"", "22\""],
    createdAt: "2024-02-12T00:00:00Z",
    stock: 8,
    careInstructions: "Clean with mild soap and warm water. Pat dry with a lint-free cloth.",
    warrantyInfo: "Lifetime warranty on craftsmanship.",
    reviews: [],
    tags: ["architectural", "asymmetric", "suspended"]
  }
];
