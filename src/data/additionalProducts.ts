
import { Product } from './products';

const additionalProducts: Product[] = [
  {
    id: "prod-11",
    title: "Empress Halo Ring",
    description: "A stunning round moissanite center stone surrounded by a double halo of smaller stones, set in 14k white gold. The intricate detailing on the band adds an extra touch of elegance.",
    price: 1299,
    category: "rings",
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
    ]
  },
  {
    id: "prod-12",
    title: "Cascade Drop Earrings",
    description: "Elegant drop earrings featuring pear-shaped moissanite stones that cascade down in graduating sizes, creating a waterfall effect. Set in platinum with secure French back closures.",
    price: 899,
    category: "earrings",
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
    reviews: []
  },
  {
    id: "prod-13",
    title: "Infinity Bracelet",
    description: "A delicate bracelet featuring alternating infinity symbols and round moissanite stones. Adjustable length with a secure lobster clasp closure.",
    price: 549,
    category: "bracelets",
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
    ]
  },
  {
    id: "prod-14",
    title: "Celestial Pendant Necklace",
    description: "A stunning star-shaped pendant featuring a central round moissanite surrounded by smaller stones. Hangs on an adjustable 16-18 inch chain.",
    price: 699,
    category: "necklaces",
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
    reviews: []
  },
  {
    id: "prod-15",
    title: "Vintage Inspired Ring",
    description: "A milgrain-detailed band with intricate filigree work supporting an oval moissanite center stone. The vintage design is complemented by modern craftsmanship.",
    price: 1199,
    category: "rings",
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
    ]
  },
  {
    id: "prod-16",
    title: "Modern Hoop Earrings",
    description: "Contemporary hoop earrings featuring channel-set moissanite stones along the outer edge. Secure hinged closures ensure they stay in place.",
    price: 749,
    category: "earrings",
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
    reviews: []
  },
  {
    id: "prod-17",
    title: "Tennis Bracelet",
    description: "Classic tennis bracelet featuring 3mm round moissanite stones in a continuous line. Secure box clasp with safety catch ensures it stays on your wrist.",
    price: 1499,
    category: "bracelets",
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
    ]
  },
  {
    id: "prod-18",
    title: "Solitaire Pendant",
    description: "Minimalist pendant featuring a 1 carat equivalent round moissanite set in a 4-prong setting. Includes an 18-inch cable chain with secure spring ring clasp.",
    price: 599,
    category: "necklaces",
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
    reviews: []
  },
  {
    id: "prod-19",
    title: "Three-Stone Engagement Ring",
    description: "Classic three-stone setting featuring a 1.5 carat equivalent cushion cut moissanite center with two 0.5 carat equivalent round side stones.",
    price: 1899,
    category: "rings",
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
    ]
  },
  {
    id: "prod-20",
    title: "Stud Earrings",
    description: "Classic 2 carat equivalent (total weight) moissanite stud earrings set in 4-prong settings with secure screw backs for added security.",
    price: 899,
    category: "earrings",
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
    ]
  }
];

export default additionalProducts;
