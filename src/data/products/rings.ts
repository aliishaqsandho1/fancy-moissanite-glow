
import { Product } from '@/types/api';

export const rings: Product[] = [
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-11-01T00:00:00Z",
    stock: 25
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-10-20T00:00:00Z",
    stock: 18
  },
  // Rings from additionalProducts
  {
    id: "prod-11",
    title: "Empress Halo Ring",
    description: "A stunning round moissanite center stone surrounded by a double halo of smaller stones, set in 14k white gold. The intricate detailing on the band adds an extra touch of elegance.",
    price: 1299,
    category: "Rings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-EMP-001",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Round Brilliant",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["5", "6", "7", "8", "9"],
    createdAt: "2023-07-12T00:00:00Z",
    stock: 12,
    careInstructions: "Clean with warm soapy water and a soft brush. Avoid harsh chemicals and ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects. One-year warranty on plating and stones.",
    reviews: [
      {
        id: "rev-emp-1",
        productId: "prod-11",
        author: "Isabella K.",
        rating: 5,
        comment: "This ring is absolutely stunning! The double halo makes it look even more luxurious than I expected.",
        date: "2023-08-15T00:00:00Z",
        verified: true
      }
    ],
    tags: ["halo", "double halo", "intricate"]
  },
  {
    id: "prod-15",
    title: "Vintage Inspired Ring",
    description: "A milgrain-detailed band with intricate filigree work supporting an oval moissanite center stone. The vintage design is complemented by modern craftsmanship.",
    price: 1199,
    category: "Rings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-VIN-005",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Oval",
    metalType: "14k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["4", "5", "6", "7", "8", "9"],
    createdAt: "2023-04-15T00:00:00Z",
    stock: 7,
    careInstructions: "Due to intricate details, clean with extra care using a soft brush. Avoid ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects.",
    reviews: [
      {
        id: "rev-vin-1",
        productId: "prod-15",
        author: "Charlotte B.",
        rating: 5,
        comment: "This vintage-inspired ring is exactly what I was looking for! The details are incredible.",
        date: "2023-05-20T00:00:00Z",
        verified: true
      }
    ],
    tags: ["vintage", "filigree", "oval"]
  },
  {
    id: "prod-19",
    title: "Three-Stone Engagement Ring",
    description: "Classic three-stone setting featuring a 1.5 carat equivalent cushion cut moissanite center with two 0.5 carat equivalent round side stones.",
    price: 1899,
    category: "Rings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-TRI-009",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Cushion & Round",
    metalType: "18k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["4", "5", "6", "7", "8", "9", "10"],
    createdAt: "2023-02-14T00:00:00Z",
    stock: 6,
    careInstructions: "Clean regularly with a soft brush and mild soap. Have prongs checked annually.",
    warrantyInfo: "Lifetime warranty on craftsmanship. Free sizing within one year of purchase.",
    reviews: [
      {
        id: "rev-tri-1",
        productId: "prod-19",
        author: "Michael S.",
        rating: 5,
        comment: "My fiancée absolutely loves this ring. The three-stone setting is classic but with modern brilliance.",
        date: "2023-03-22T00:00:00Z",
        verified: true
      }
    ],
    tags: ["three-stone", "cushion", "engagement"]
  },
  // Rings from moreProducts
  {
    id: "prod-21",
    title: "Astral Orbit Ring",
    description: "A stunning moissanite ring featuring a center stone that appears to float between two orbital bands of smaller stones. The innovative setting creates the illusion that the center stone is suspended in space.",
    price: 1699,
    category: "Rings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-ORB-011",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Round Brilliant",
    metalType: "18k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["5", "6", "7", "8", "9"],
    createdAt: "2023-09-15T00:00:00Z",
    stock: 8,
    careInstructions: "Clean with warm soapy water and a soft brush. Avoid harsh chemicals and ultrasonic cleaners.",
    warrantyInfo: "Lifetime warranty against manufacturing defects.",
    reviews: [],
    tags: ["futuristic", "orbit", "floating"]
  },
  {
    id: "prod-25",
    title: "Stardust Eternity Band",
    description: "An innovative twist on the classic eternity band, featuring scattered moissanite stones of varying sizes, reminiscent of stardust scattered across the night sky. The asymmetric design offers a modern, artistic take on a timeless style.",
    price: 1450,
    category: "Rings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-STD-015",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Round Brilliant",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["4", "5", "6", "7", "8", "9", "10"],
    createdAt: "2024-02-18T00:00:00Z",
    stock: 9,
    careInstructions: "Clean with warm soapy water and a soft brush. Avoid harsh chemicals.",
    warrantyInfo: "Lifetime warranty against manufacturing defects.",
    reviews: [],
    tags: ["stardust", "asymmetric", "eternity"]
  },
  {
    id: "prod-29",
    title: "Tectonic Plate Ring",
    description: "Inspired by geological formations, this ring features overlapping plates of gold set with channel-set moissanite stones. The dimensional design creates an architectural statement piece that sits boldly on the finger.",
    price: 1870,
    category: "Rings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MR-TEC-019",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Baguette",
    metalType: "18k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["5", "6", "7", "8", "9"],
    createdAt: "2024-03-20T00:00:00Z",
    stock: 6,
    careInstructions: "Clean with warm soapy water and a soft brush. Have settings checked annually.",
    warrantyInfo: "Lifetime warranty against manufacturing defects.",
    reviews: [],
    tags: ["architectural", "dimensional", "statement"]
  }
];
