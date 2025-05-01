
import { Product } from '@/types/api';

export const earrings: Product[] = [
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-11-25T00:00:00Z",
    stock: 30
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
    warrantyInfo: "Lifetime warranty against manufacturing defects. 30-day return policy for unworn items.",
    createdAt: "2023-10-01T00:00:00Z",
    stock: 20
  },
  // Earrings from additionalProducts
  {
    id: "prod-12",
    title: "Cascade Drop Earrings",
    description: "Elegant drop earrings featuring pear-shaped moissanite stones that cascade down in graduating sizes, creating a waterfall effect. Set in platinum with secure French back closures.",
    price: 899,
    category: "Earrings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561172316-4a28950211c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-CAS-002",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Pear",
    metalType: "Platinum",
    colorVariations: [
      { name: "Platinum", color: "#E5E4E2" },
    ],
    sizeOptions: ["Standard"],
    createdAt: "2023-06-18T00:00:00Z",
    stock: 8,
    careInstructions: "Store separately to prevent scratching. Clean with a jewelry cloth and mild soap if needed.",
    warrantyInfo: "Two-year warranty covering manufacturing defects and stone replacement.",
    reviews: [],
    tags: ["cascade", "waterfall", "drop"]
  },
  {
    id: "prod-16",
    title: "Modern Hoop Earrings",
    description: "Contemporary hoop earrings featuring channel-set moissanite stones along the outer edge. Secure hinged closures ensure they stay in place.",
    price: 749,
    category: "Earrings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-HOP-006",
    moissaniteType: "Harro Gem",
    moissaniteCut: "Round",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Yellow Gold", color: "#FFD700" },
    ],
    sizeOptions: ["Small (25mm)", "Medium (30mm)", "Large (35mm)"],
    createdAt: "2023-07-03T00:00:00Z",
    stock: 9,
    careInstructions: "Clean with a soft cloth after wearing to maintain shine. Store in a jewelry box when not in use.",
    warrantyInfo: "One-year warranty covering manufacturing defects.",
    reviews: [],
    tags: ["hoop", "modern", "channel-set"]
  },
  {
    id: "prod-20",
    title: "Stud Earrings",
    description: "Classic 2 carat equivalent (total weight) moissanite stud earrings set in 4-prong settings with secure screw backs for added security.",
    price: 899,
    category: "Earrings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-STU-010",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Round Brilliant",
    metalType: "14k Yellow Gold",
    colorVariations: [
      { name: "Yellow Gold", color: "#FFD700" },
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["1 carat total", "2 carat total", "3 carat total"],
    createdAt: "2023-05-08T00:00:00Z",
    stock: 11,
    careInstructions: "Clean with a soft cloth or mild soap solution. Check settings periodically.",
    warrantyInfo: "Two-year warranty against manufacturing defects.",
    reviews: [
      {
        id: "rev-stu-1",
        productId: "prod-20",
        author: "Rachel T.",
        rating: 4,
        comment: "Beautiful earrings that catch the light amazingly. The screw backs are secure but take some getting used to.",
        date: "2023-06-17T00:00:00Z",
        verified: true
      }
    ],
    tags: ["stud", "classic", "secure"]
  },
  // Earrings from moreProducts
  {
    id: "prod-22",
    title: "Geometric Cluster Earrings",
    description: "Avant-garde earrings featuring geometric arrangements of princess-cut moissanite stones in a modern cluster design. The angular setting creates a bold statement piece that catches light from every angle.",
    price: 1250,
    category: "Earrings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-GEO-012",
    moissaniteType: "Charles & Colvard Forever One",
    moissaniteCut: "Princess",
    metalType: "Platinum",
    colorVariations: [
      { name: "Platinum", color: "#E5E4E2" },
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["Standard"],
    createdAt: "2023-10-21T00:00:00Z",
    stock: 6,
    careInstructions: "Store separately in a jewelry box to prevent scratching. Clean with a soft cloth.",
    warrantyInfo: "Three-year warranty on settings and stones.",
    reviews: [],
    tags: ["geometric", "cluster", "statement"]
  },
  {
    id: "prod-26",
    title: "Angular Ear Climbers",
    description: "Innovative ear climbers featuring a series of princess-cut moissanite stones that gradually increase in size as they ascend the ear. The angular design creates a bold geometric look that frames the face beautifully.",
    price: 980,
    category: "Earrings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1630165616446-856295f89ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-ANG-016",
    moissaniteType: "NEO Moissanite",
    moissaniteCut: "Princess",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
      { name: "Rose Gold", color: "#B76E79" },
    ],
    sizeOptions: ["Standard"],
    createdAt: "2024-03-04T00:00:00Z",
    stock: 12,
    careInstructions: "Clean with a soft cloth. Store separately to prevent scratching.",
    warrantyInfo: "One-year warranty on craftsmanship.",
    reviews: [],
    tags: ["climbers", "geometric", "angular"]
  },
  {
    id: "prod-30",
    title: "Nebula Drop Earrings",
    description: "Inspired by distant nebulae, these earrings feature clusters of mixed-cut moissanite stones in varying sizes that create a cosmic effect. The stones are arranged to mimic the gaseous clouds of stellar nurseries.",
    price: 1550,
    category: "Earrings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    sku: "ME-NEB-020",
    moissaniteType: "Harro Gem",
    moissaniteCut: "Mixed",
    metalType: "14k White Gold",
    colorVariations: [
      { name: "White Gold", color: "#E8E8E8" },
    ],
    sizeOptions: ["Standard"],
    createdAt: "2024-04-15T00:00:00Z",
    stock: 7,
    careInstructions: "Store separately to prevent tangling. Clean with a soft jewelry cloth.",
    warrantyInfo: "Two-year warranty on craftsmanship.",
    reviews: [],
    tags: ["nebula", "cosmic", "mixed-cut"]
  }
];
