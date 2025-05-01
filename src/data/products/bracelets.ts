
import { Product } from '@/types/api';

export const bracelets: Product[] = [
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-09-01T00:00:00Z",
    stock: 15
  },
  // Bracelets from additionalProducts
  {
    id: "prod-13",
    title: "Infinity Bracelet",
    description: "A delicate bracelet featuring alternating infinity symbols and round moissanite stones. Adjustable length with a secure lobster clasp closure.",
    price: 549,
    category: "Bracelets",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MB-INF-003",
    moissaniteType: "Harro Gem",
    moissaniteCut: "Round",
    metalType: "18k Rose Gold",
    colorVariations: [
      { name: "Rose Gold", color: "#B76E79" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["6.5\"", "7\"", "7.5\""],
    createdAt: "2023-05-22T00:00:00Z",
    stock: 15,
    careInstructions: "Avoid contact with lotions, perfumes, and harsh chemicals. Clean with a soft jewelry cloth.",
    warrantyInfo: "One-year warranty against manufacturing defects.",
    reviews: [
      {
        id: "rev-inf-1",
        productId: "prod-13",
        author: "Olivia M.",
        rating: 5,
        comment: "This bracelet is perfect for everyday wear. The moissanite catches light beautifully!",
        date: "2023-07-30T00:00:00Z",
        verified: true
      }
    ],
    tags: ["infinity", "delicate", "adjustable"]
  },
  {
    id: "prod-17",
    title: "Tennis Bracelet",
    description: "Classic tennis bracelet featuring 3mm round moissanite stones in a continuous line. Secure box clasp with safety catch ensures it stays on your wrist.",
    price: 1499,
    category: "Bracelets",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MB-TEN-007",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Round Brilliant",
    metalType: "Platinum",
    colorVariations: [
      { name: "Platinum", color: "#E5E4E2" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["7\"", "7.5\"", "8\""],
    createdAt: "2023-03-28T00:00:00Z",
    stock: 5,
    careInstructions: "Have the setting checked annually by a professional jeweler. Clean with mild soap and water.",
    warrantyInfo: "Five-year warranty on craftsmanship and stones.",
    reviews: [
      {
        id: "rev-ten-1",
        productId: "prod-17",
        author: "Elizabeth R.",
        rating: 5,
        comment: "This bracelet sparkles like crazy! Well worth the investment for a piece I'll wear forever.",
        date: "2023-04-12T00:00:00Z",
        verified: true
      }
    ],
    tags: ["tennis", "classic", "elegant"]
  },
  // Bracelets from moreProducts
  {
    id: "prod-23",
    title: "Celestial Cuff Bracelet",
    description: "An open cuff bracelet featuring a gradient of moissanite stones arranged to mimic the night sky. The stones increase in size from the ends toward the center, creating a celestial-inspired statement piece.",
    price: 1850,
    category: "Bracelets",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MB-CEL-013",
    moissaniteType: "Harro Gem",
    moissaniteCut: "Round Brilliant",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["Small", "Medium", "Large"],
    createdAt: "2023-11-05T00:00:00Z",
    stock: 4,
    careInstructions: "Avoid contact with lotions, perfumes, and chemicals. Clean with a soft jewelry cloth.",
    warrantyInfo: "Two-year warranty against manufacturing defects.",
    reviews: [],
    tags: ["celestial", "cuff", "statement"]
  },
  {
    id: "prod-27",
    title: "Holographic Link Bracelet",
    description: "A modern link bracelet featuring oval moissanite stones that display a unique holographic effect when they catch the light. Each link is precisely engineered for maximum comfort and flexibility.",
    price: 2100,
    category: "Bracelets",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "MB-HOL-017",
    moissaniteType: "Harro Gem",
    moissaniteCut: "Oval",
    metalType: "Platinum",
    colorVariations: [
      { name: "Platinum", color: "#E5E4E2" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["6.5\"", "7\"", "7.5\"", "8\""],
    createdAt: "2024-01-28T00:00:00Z",
    stock: 5,
    careInstructions: "Have links checked annually by a professional jeweler. Clean with mild soap and water.",
    warrantyInfo: "Five-year warranty on craftsmanship and stones.",
    reviews: [],
    tags: ["holographic", "links", "flexible"]
  }
];
