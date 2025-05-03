
// Main site information
export const siteInfo = {
  name: "Fancy Moissanite",
  tagline: "Ethically Created, Eternally Beautiful",
  founded: 2020,
  description: "Luxury moissanite jewelry with unmatched brilliance at ethical prices",
  contact: {
    email: "info@fancymoissanite.com",
    phone: "+1 (800) 555-7890",
    address: {
      street: "123 Sparkle Lane",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States"
    },
    hours: "Monday-Friday: 9AM-6PM EST, Saturday: 10AM-4PM EST, Sunday: Closed"
  },
  social: {
    instagram: "https://instagram.com/fancymoissanite",
    facebook: "https://facebook.com/fancymoissanite",
    pinterest: "https://pinterest.com/fancymoissanite",
    twitter: "https://twitter.com/fancymoissanite",
    tiktok: "https://tiktok.com/@fancymoissanite"
  }
};

// Navigation structure
export const navigation = {
  main: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    {
      name: "Collections",
      path: "#",
      submenu: [
        { name: "Rings", path: "/category/rings" },
        { name: "Necklaces", path: "/category/necklaces" },
        { name: "Earrings", path: "/category/earrings" },
        { name: "Bracelets", path: "/category/bracelets" }
      ]
    },
    { name: "Custom", path: "/custom" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ],
  footer: [
    {
      title: "Shop",
      links: [
        { name: "All Collections", path: "/shop" },
        { name: "Rings", path: "/category/rings" },
        { name: "Necklaces", path: "/category/necklaces" },
        { name: "Earrings", path: "/category/earrings" },
        { name: "Bracelets", path: "/category/bracelets" },
        { name: "Gift Guide", path: "/gift-guide" },
        { name: "Custom Orders", path: "/custom" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQs", path: "/faq" },
        { name: "Shipping Information", path: "/shipping-info" },
        { name: "Returns & Exchanges", path: "/policies" },
        { name: "Sizing Guide", path: "/sizing-guide" },
        { name: "Care Instructions", path: "/care-instructions" },
        { name: "Warranty", path: "/warranty" }
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Blog", path: "/blog" },
        { name: "Press Room", path: "/press-room" },
        { name: "Careers", path: "/careers" },
        { name: "Store Locator", path: "/store-locator" }
      ]
    },
    {
      title: "Trade Program",
      links: [
        { name: "Trade Program", path: "/trade-program" },
        { name: "Industry Partners", path: "/industry-partners" },
        { name: "Financing Options", path: "/financing" },
        { name: "Jewelry Education", path: "/jewelry-education" },
        { name: "Testimonials", path: "/testimonials" }
      ]
    }
  ]
};

// Home page content
export const homeContent = {
  hero: {
    title: "Radiant Moissanite Jewelry For Life's Special Moments",
    subtitle: "Ethically created gems with more brilliance than diamonds at a fraction of the price",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Custom Design",
    secondaryCtaLink: "/custom",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  features: [
    {
      title: "Ethical Creation",
      description: "Lab-created moissanite means no mining impact and conflict-free sourcing.",
      icon: "Leaf"
    },
    {
      title: "Superior Brilliance",
      description: "Moissanite has 2.4 times the fire of diamonds for extraordinary sparkle.",
      icon: "Sparkles"
    },
    {
      title: "Lifetime Warranty",
      description: "Our jewelry comes with a comprehensive lifetime warranty.",
      icon: "Shield"
    },
    {
      title: "Free Shipping",
      description: "Enjoy free, insured shipping on all domestic orders.",
      icon: "Truck"
    }
  ],
  aboutSection: {
    title: "About Fancy Moissanite",
    subtitle: "The Future of Luxury Jewelry",
    description: "Fancy Moissanite was founded with a simple mission: to create stunning, ethical jewelry that doesn't compromise on quality or beauty. We believe that luxury shouldn't cost the earth - literally or figuratively.",
    image: "https://images.unsplash.com/photo-1616624595227-75a5b52490c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/about"
  },
  collections: {
    title: "Shop Our Collections",
    subtitle: "Find Your Perfect Piece",
    categories: [
      {
        name: "Engagement Rings",
        description: "Begin your forever with our stunning engagement collection",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        link: "/category/rings"
      },
      {
        name: "Necklaces",
        description: "Elegant pieces that make a statement",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        link: "/category/necklaces"
      },
      {
        name: "Earrings",
        description: "From subtle studs to dramatic drops",
        image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        link: "/category/earrings"
      },
      {
        name: "Bracelets",
        description: "Timeless elegance for your wrist",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwYnJhY2VsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        link: "/category/bracelets"
      }
    ]
  },
  testimonials: [
    {
      text: "My engagement ring is absolutely stunning. The brilliance of the moissanite is incredible, and no one can tell it's not a diamond!",
      author: "Jessica T.",
      location: "New York, NY",
      rating: 5
    },
    {
      text: "The quality and craftsmanship of my wedding band exceeded my expectations. Customer service was fantastic throughout the process.",
      author: "Michael R.",
      location: "Chicago, IL",
      rating: 5
    },
    {
      text: "I love that I could get such a beautiful piece that aligns with my values. Ethical and gorgeous!",
      author: "Emma L.",
      location: "San Francisco, CA",
      rating: 5
    }
  ],
  blog: {
    title: "Latest From Our Blog",
    subtitle: "Insights & Education",
    posts: [
      {
        title: "The Science Behind Moissanite's Brilliance",
        excerpt: "Discover why moissanite has more fire and sparkle than diamonds and how its unique properties create unmatched brilliance.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZCUyMHNwYXJrbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        date: "2023-12-10",
        author: "Dr. Emma Richardson",
        link: "/blog/1"
      },
      {
        title: "Ethical Gemstones: Why Lab-Created is the Future",
        excerpt: "Learn about the environmental and ethical advantages of choosing lab-created moissanite over mined diamonds.",
        image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        date: "2023-11-22",
        author: "Michael Chen",
        link: "/blog/2"
      },
      {
        title: "How to Care for Your Moissanite Jewelry",
        excerpt: "Simple tips and tricks to keep your moissanite jewelry sparkling for generations to come.",
        image: "https://images.unsplash.com/photo-1616624595227-75a5b52490c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        date: "2023-10-15",
        author: "Sophia Wang",
        link: "/blog/3"
      }
    ]
  },
  cta: {
    title: "Design Your Dream Jewelry",
    description: "Work with our expert designers to create a custom piece as unique as your story.",
    buttonText: "Start Custom Design",
    buttonLink: "/custom",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
};

// About page content
export const aboutContent = {
  hero: {
    title: "Our Story",
    subtitle: "Redefining Luxury with Ethical Brilliance",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  mission: {
    title: "Our Mission",
    description: "At Fancy Moissanite, we believe that luxury jewelry should be beautiful, ethical, and accessible. We're committed to creating stunning pieces using lab-grown moissanite and recycled precious metals, ensuring that our environmental footprint is minimal while delivering maximum brilliance.",
    values: [
      {
        title: "Sustainability",
        description: "We use ethically created moissanite and recycled metals in all our pieces."
      },
      {
        title: "Transparency",
        description: "We're committed to honest pricing and clear communication about our materials and processes."
      },
      {
        title: "Craftsmanship",
        description: "Each piece is meticulously designed and crafted by expert artisans with decades of experience."
      },
      {
        title: "Innovation",
        description: "We continually explore new techniques and designs to push the boundaries of what's possible."
      }
    ]
  },
  timeline: [
    {
      year: 2020,
      title: "The Beginning",
      description: "Fancy Moissanite was founded with a vision to create ethical, accessible luxury jewelry."
    },
    {
      year: 2021,
      title: "First Collection Launch",
      description: "We released our signature collection, featuring timeless designs with modern twists."
    },
    {
      year: 2022,
      title: "Custom Design Program",
      description: "We launched our bespoke design service to help customers create their dream pieces."
    },
    {
      year: 2023,
      title: "Flagship Store Opening",
      description: "We opened our first physical showroom in New York City."
    },
    {
      year: 2024,
      title: "Sustainability Certification",
      description: "We achieved industry-leading certifications for our ethical and sustainable practices."
    }
  ],
  team: [
    {
      name: "Alexandra Wright",
      title: "Founder & CEO",
      bio: "With a background in sustainable business and a passion for design, Alexandra founded Fancy Moissanite to revolutionize the jewelry industry.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3"
    },
    {
      name: "David Chen",
      title: "Head Designer",
      bio: "David brings over 15 years of experience designing for luxury jewelry brands, with a focus on blending timeless elegance with modern sensibilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    {
      name: "Sophia Rodriguez",
      title: "Master Jeweler",
      bio: "Trained in traditional and cutting-edge techniques, Sophia oversees our production process to ensure every piece meets our exacting standards.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
    },
    {
      name: "James Thompson",
      title: "Sustainability Director",
      bio: "James leads our initiatives to minimize environmental impact and maximize positive social contribution throughout our supply chain.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
    }
  ]
};

// FAQ content
export const faqContent = {
  categories: [
    {
      name: "About Moissanite",
      questions: [
        {
          question: "What is moissanite?",
          answer: "Moissanite is a lab-created gemstone made of silicon carbide. It was originally discovered in 1893 by Dr. Henri Moissan in a meteor crater. Today's moissanite is created in a laboratory, offering a sustainable and ethical alternative to mined diamonds."
        },
        {
          question: "How does moissanite compare to diamonds?",
          answer: "Moissanite is visually similar to diamonds but has more brilliance and fire. It ranks 9.25 on the Mohs hardness scale (diamonds are 10), making it suitable for everyday wear. Moissanite is also more affordable and ethically produced compared to most diamonds."
        },
        {
          question: "Will moissanite pass as a diamond?",
          answer: "To the untrained eye, moissanite looks very similar to a diamond. However, due to its higher refractive index, moissanite has more fire (colorful flashes) than a diamond. Many people choose moissanite not as a diamond alternative but for its own unique and superior optical properties."
        },
        {
          question: "Will moissanite lose its sparkle?",
          answer: "No, moissanite will not lose its sparkle over time. Its crystal structure is stable and will not cloud, change color, or lose brilliance over time with proper care."
        }
      ]
    },
    {
      name: "Orders & Shipping",
      questions: [
        {
          question: "How long will it take to receive my order?",
          answer: "Ready-to-ship items typically ship within 1-2 business days. Made-to-order items take 2-3 weeks to create before shipping. All orders include free insured shipping that takes 2-5 business days within the US."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship worldwide. International shipping typically takes 5-10 business days, and customers are responsible for any customs fees or import taxes."
        },
        {
          question: "Is my order insured?",
          answer: "Yes, all shipments are fully insured against loss or damage during transit at no additional cost to you."
        },
        {
          question: "Can I expedite my order?",
          answer: "Ready-to-ship items can be expedited with overnight or 2-day shipping options available at checkout. Made-to-order items cannot be expedited in production but can have expedited shipping once completed."
        }
      ]
    },
    {
      name: "Returns & Warranty",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy on unworn items. Custom pieces are non-returnable but are covered by our warranty. Returns must be in original packaging with all documentation."
        },
        {
          question: "What does your warranty cover?",
          answer: "Our lifetime warranty covers manufacturing defects and normal wear. It includes free prong tightening, re-polishing, rhodium plating (for white gold), and stone tightening."
        },
        {
          question: "How do I initiate a return?",
          answer: "To initiate a return, please contact our customer service team at returns@fancymoissanite.com with your order number and reason for return. We'll provide a prepaid return label and processing instructions."
        },
        {
          question: "Are exchanges available?",
          answer: "Yes, we offer free exchanges within 30 days of purchase. Contact our customer service team to arrange an exchange."
        }
      ]
    },
    {
      name: "Custom Orders",
      questions: [
        {
          question: "Can I create a custom design?",
          answer: "Yes, we specialize in custom designs. Our process begins with a complimentary consultation to discuss your vision, followed by design mock-ups, revisions, and creation."
        },
        {
          question: "How long does a custom order take?",
          answer: "Custom pieces typically take 4-6 weeks from design approval to completion, depending on complexity."
        },
        {
          question: "Can I use my own materials for a custom piece?",
          answer: "Yes, we can incorporate your existing gemstones or precious metals into a new design. Please contact us for details on this process."
        },
        {
          question: "What is the process for custom orders?",
          answer: "The process begins with a consultation, followed by design proposals, revisions, a deposit payment, production, and final delivery. Throughout the process, you'll receive updates and have opportunities for input."
        }
      ]
    },
    {
      name: "Care & Maintenance",
      questions: [
        {
          question: "How should I clean my moissanite jewelry?",
          answer: "Clean your moissanite jewelry with warm water, mild soap, and a soft brush. Rinse thoroughly and pat dry with a lint-free cloth. You can also use an ultrasonic cleaner for moissanite, but not for pieces with certain other gemstones."
        },
        {
          question: "How often should I have my jewelry professionally serviced?",
          answer: "We recommend having your jewelry professionally inspected and serviced every 12-18 months to ensure settings remain secure and to maintain its appearance."
        },
        {
          question: "Will moissanite scratch?",
          answer: "While moissanite is highly scratch-resistant (9.25 on the Mohs scale), it's not scratch-proof. For everyday wear, it's very durable, but we recommend removing your jewelry during rough activities."
        },
        {
          question: "How should I store my jewelry?",
          answer: "Store pieces separately to prevent scratching. Keep in a fabric-lined jewelry box or pouch away from extreme temperatures and humidity."
        }
      ]
    }
  ]
};

// Contact information
export const contactInfo = {
  locations: [
    {
      name: "New York Showroom",
      address: "123 Sparkle Lane, New York, NY 10001",
      phone: "+1 (212) 555-7890",
      email: "nyc@fancymoissanite.com",
      hours: "Mon-Sat: 10AM-7PM, Sun: 12PM-5PM",
      coordinates: [40.7128, -74.0060]
    },
    {
      name: "Los Angeles Design Studio",
      address: "456 Glimmer Blvd, Los Angeles, CA 90001",
      phone: "+1 (310) 555-1234",
      email: "la@fancymoissanite.com",
      hours: "Mon-Fri: 10AM-6PM, Sat: 11AM-5PM, Sun: Closed",
      coordinates: [34.0522, -118.2437]
    },
    {
      name: "Chicago Boutique",
      address: "789 Shimmer St, Chicago, IL 60601",
      phone: "+1 (312) 555-9876",
      email: "chicago@fancymoissanite.com",
      hours: "Mon-Sat: 10AM-6PM, Sun: Closed",
      coordinates: [41.8781, -87.6298]
    }
  ],
  supportOptions: [
    {
      title: "Customer Service",
      description: "Questions about your order or our products",
      email: "support@fancymoissanite.com",
      phone: "+1 (800) 555-7890",
      hours: "Monday-Friday: 9AM-6PM EST"
    },
    {
      title: "Custom Design Requests",
      description: "Inquiries about creating custom jewelry",
      email: "custom@fancymoissanite.com",
      phone: "+1 (800) 555-7891",
      hours: "Monday-Friday: 10AM-5PM EST"
    },
    {
      title: "Wholesale Inquiries",
      description: "Information for retail partners",
      email: "wholesale@fancymoissanite.com",
      phone: "+1 (800) 555-7892",
      hours: "Monday-Friday: 9AM-5PM EST"
    },
    {
      title: "Press & Media",
      description: "Media inquiries and press kit requests",
      email: "press@fancymoissanite.com",
      phone: "+1 (800) 555-7893",
      hours: "Monday-Friday: 9AM-5PM EST"
    }
  ],
  formSubmissionEmail: "contact@fancymoissanite.com"
};

// Blog content
export const blogPosts = [
  {
    id: "1",
    title: "The Science Behind Moissanite's Brilliance",
    content: [
      "Moissanite is one of the most brilliant gemstones available today, outshining even diamonds in terms of fire and sparkle. But what exactly gives moissanite its spectacular visual properties?",
      "The brilliance of a gemstone is determined by its refractive index (RI) - a measure of how light bends as it passes through the stone. Moissanite has an RI of 2.65-2.69, significantly higher than diamond's 2.42. This higher refractive index is the primary reason moissanite displays more brilliance and fire than a diamond of equivalent size and cut.",
      "When light enters a moissanite stone, it slows down more dramatically than it would in a diamond due to the higher density of the crystal structure. This slowing effect causes light to bend more sharply, creating the distinctive flashes of rainbow colors (dispersion) that moissanite is famous for. In fact, moissanite has 2.4 times the dispersion of diamond, resulting in those captivating flashes of color that dance across the stone as it moves.",
      "The crystal structure of moissanite (silicon carbide) is hexagonal, differing from diamond's cubic structure. This arrangement of atoms affects how light travels through and exits the stone. Expert cutting takes advantage of this unique structure to maximize the stone's natural optical properties, carefully positioning facets to create ideal light reflection and refraction patterns.",
      "Additionally, moissanite is pleochroic, meaning it can display different colors when viewed from different angles. This property adds another dimension of visual interest not present in diamonds.",
      "Modern moissanite is typically grown in controlled laboratory environments, allowing scientists to optimize growth conditions for clarity and color. The highest quality moissanite stones, like those used in our FANCY MOISSANITE collections, are virtually colorless and flawless, further enhancing their exceptional optical performance.",
      "The combination of higher refractive index, greater dispersion, and expert cutting is what gives moissanite its extraordinary brilliance - a fiery, dazzling display that maintains its sparkle even in low lighting conditions and continues to captivate jewelry enthusiasts around the world."
    ],
    excerpt: "Discover why moissanite has more fire and sparkle than diamonds and how its unique properties create unmatched brilliance.",
    date: "2023-12-10",
    author: "Dr. Emma Richardson",
    category: "Education",
    tags: ["Moissanite", "Gemstones", "Science", "Brilliance"],
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZCUyMHNwYXJrbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true,
    relatedPosts: ["2", "4", "7"]
  },
  {
    id: "2",
    title: "Ethical Gemstones: Why Lab-Created is the Future",
    content: [
      "The jewelry industry is undergoing a significant transformation as consumers become increasingly conscious of the ethical and environmental implications of their purchases. Lab-created gemstones, particularly moissanite, are at the forefront of this revolution.",
      "Traditional diamond mining has long been associated with serious ethical concerns. Despite efforts like the Kimberley Process, fully tracking a natural diamond's origins remains challenging. Issues like poor working conditions, child labor, and funding of conflicts continue to plague parts of the industry.",
      "The environmental impact of diamond mining is equally concerning. Large-scale operations often result in habitat destruction, soil erosion, deforestation, and water pollution. A single one-carat diamond typically requires the removal of 250 tons of earth, uses approximately 127 gallons of water, and generates 143 pounds of carbon dioxide emissions.",
      "Lab-created moissanite offers a compelling alternative. Created in controlled laboratory environments, these gemstones eliminate concerns about unethical mining practices. The controlled production process ensures that every stone can be traced to its source, providing complete transparency that's often impossible with mined stones.",
      "From an environmental perspective, lab-created moissanite has a significantly smaller footprint. The production process requires less water and energy, produces fewer emissions, and causes no habitat destruction. As manufacturing technologies continue to advance, these environmental benefits will likely increase even further.",
      "Beyond ethics and sustainability, lab-created moissanite is also more accessible. Costing approximately 80-90% less than comparable diamonds, these gemstones democratize luxury, allowing more people to enjoy exceptional brilliance without compromise.",
      "As consumer values evolve and technology advances, lab-created gemstones like moissanite represent not just an alternative to traditional mined stones, but the future of the jewelry industry - a future that aligns with our collective desire for beauty, quality, ethics, and sustainability."
    ],
    excerpt: "Learn about the environmental and ethical advantages of choosing lab-created moissanite over mined diamonds.",
    date: "2023-11-22",
    author: "Michael Chen",
    category: "Sustainability",
    tags: ["Ethics", "Sustainability", "Lab-Created", "Environment"],
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true,
    relatedPosts: ["1", "3", "7"]
  },
  {
    id: "3",
    title: "How to Care for Your Moissanite Jewelry",
    content: [
      "Proper care ensures your moissanite jewelry remains as brilliant as the day you received it. While moissanite is durable (9.25 on the Mohs scale), following these care guidelines will keep your pieces looking their best for generations.",
      "Regular cleaning is essential for maintaining moissanite's exceptional brilliance. The simplest method is to soak your jewelry in warm water with a few drops of mild dish soap for 10-15 minutes. Then, gently brush with a soft toothbrush, focusing on the underside of the stone where oils and dirt can accumulate. Rinse thoroughly and pat dry with a lint-free cloth.",
      "For a deeper clean, you can use an ultrasonic cleaner for your moissanite jewelry. However, be cautious with pieces that contain other gemstones or glued elements, as ultrasonic cleaning may damage these components.",
      "When you're not wearing your moissanite pieces, store them separately from other jewelry to prevent scratching. A fabric-lined jewelry box with individual compartments is ideal, or you can use small pouches for each piece.",
      "Despite moissanite's durability, it's wise to remove your jewelry during activities that might subject it to harsh impacts or chemicals. Take off your pieces before swimming, gardening, cleaning with harsh chemicals, or engaging in rough sports.",
      "While moissanite itself is highly resistant to scratching and chipping, the metal settings can still be damaged. Periodic professional inspections (we recommend every 12-18 months) can identify any potential issues with prongs or settings before stones become loose.",
      "White gold pieces will eventually need rhodium replating to maintain their bright white appearance. We offer complimentary replating as part of our warranty program when you bring your piece in for regular maintenance.",
      "By following these simple care guidelines, your moissanite jewelry will continue to dazzle with its remarkable brilliance for years to come, becoming treasured heirlooms to pass down through generations."
    ],
    excerpt: "Simple tips and tricks to keep your moissanite jewelry sparkling for generations to come.",
    date: "2023-10-15",
    author: "Sophia Wang",
    category: "Jewelry Care",
    tags: ["Jewelry Care", "Maintenance", "Cleaning", "Moissanite"],
    image: "https://images.unsplash.com/photo-1616624595227-75a5b52490c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    featured: false,
    relatedPosts: ["4", "5", "6"]
  },
  {
    id: "4",
    title: "Moissanite vs Diamond: A Comprehensive Comparison",
    content: [
      "When choosing a center stone for fine jewelry, many consumers find themselves deciding between moissanite and diamond. Both are beautiful options with distinct characteristics. This comparison will help you understand the key differences to make an informed choice.",
      "Visually, moissanite and diamond share many similarities. Both are colorless (when high quality) and have exceptional brilliance. However, moissanite has a higher refractive index (2.65-2.69) compared to diamond (2.42), giving it noticeably more fire (colored light dispersion). Some prefer this extra sparkle, while others prefer diamond's more subdued flashes.",
      "In terms of durability, diamonds rank 10 on the Mohs hardness scale, while moissanite ranks 9.25. Both are suitable for everyday wear, including in engagement rings. This slight difference in hardness is rarely noticeable in normal wear conditions.",
      "Perhaps the most significant difference is in price. Moissanite typically costs 80-90% less than a diamond of equivalent size and quality. This substantial price difference allows consumers to either save significantly or get a much larger stone for the same budget.",
      "Ethically, lab-created moissanite has a clear advantage. All moissanite is created in controlled laboratory environments, eliminating concerns about mining practices, conflict sourcing, or environmental damage. While ethical diamond options exist (lab-grown or certified conflict-free), ensuring ethical sourcing often requires additional research and verification.",
      "Color is another consideration. High-quality moissanite (such as our Premium and Ultra grades) appears colorless in most lighting conditions. However, some moissanite may display subtle color tints in certain lights, particularly in larger stones over 2 carats.",
      "Ultimately, the choice between moissanite and diamond is personal. Moissanite offers exceptional beauty, durability, and ethical sourcing at a fraction of the cost of diamonds. Diamonds carry traditional significance and subtle visual differences some prefer. Many of our customers choose moissanite not as a diamond substitute but as their preferred gemstone on its own merits."
    ],
    excerpt: "A detailed comparison of moissanite and diamonds across various factors including appearance, durability, price, and ethics.",
    date: "2023-09-08",
    author: "Dr. Emma Richardson",
    category: "Education",
    tags: ["Moissanite", "Diamonds", "Comparison", "Gemstones"],
    image: "https://images.unsplash.com/photo-1615655114865-4cc5c5f659d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlhbW9uZCUyMGFuZCUyMG1vaXNzYW5pdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false,
    relatedPosts: ["1", "2", "7"]
  },
  {
    id: "5",
    title: "The History of Moissanite: From Stars to Sustainability",
    content: [
      "The story of moissanite begins not in a laboratory, but among the stars. Natural moissanite is incredibly rare on Earth, primarily found in meteorites and formed in the extreme conditions of space. This celestial origin gives moissanite a romantic backstory that few gemstones can claim.",
      "In 1893, Nobel Prize-winning scientist Dr. Henri Moissan discovered minuscule particles of natural silicon carbide (later named moissanite in his honor) while examining samples from a meteorite crater in Arizona. Initially mistaking these particles for diamonds due to their brilliance, Dr. Moissan later identified them as a new mineral.",
      "For over a century after its discovery, moissanite remained primarily a scientific curiosity rather than a gemstone due to its extreme rarity in nature. The particles found were too small to be fashioned into jewelry, and no significant deposits of gem-quality natural moissanite have ever been found on Earth.",
      "The modern chapter of moissanite's story began in the 1990s when scientists at Charles & Colvard developed a process to create lab-grown moissanite of gem quality and size. This breakthrough transformed moissanite from a scientific curiosity into a viable gemstone for jewelry, first reaching the market in 1998.",
      "Over the past two decades, manufacturing techniques have dramatically improved, resulting in higher quality, more consistent moissanite with excellent clarity and color. Today's premium moissanite is virtually indistinguishable from colorless diamonds to the naked eye, yet offers superior optical properties.",
      "As environmental and ethical concerns about traditional diamond mining have grown, moissanite has emerged as a sustainable alternative. Its lab-created nature eliminates concerns about mining practices, habitat destruction, and conflict sourcing that plague parts of the diamond industry.",
      "The future of moissanite looks bright as consumers increasingly seek out ethical, sustainable luxury. What began as stardust has transformed into a symbol of conscious consumerism without compromise - beautiful gems that align with modern values of sustainability and responsibility."
    ],
    excerpt: "Trace moissanite's journey from its discovery in a meteorite crater to becoming a sustainable jewelry choice.",
    date: "2023-08-20",
    author: "James Thompson",
    category: "History",
    tags: ["History", "Moissanite", "Sustainability", "Science"],
    image: "https://images.unsplash.com/photo-1614548539924-5c1656e4d116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false,
    relatedPosts: ["2", "4", "7"]
  }
];

// Define product categories
export const categories = [
  {
    slug: "rings",
    name: "Rings",
    description: "Stunning moissanite rings for every occasion, from everyday elegance to special moments."
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    description: "Beautiful pendants and necklaces that showcase the brilliance of moissanite."
  },
  {
    slug: "earrings",
    name: "Earrings",
    description: "Dazzling moissanite earrings from subtle studs to statement drops."
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    description: "Elegant moissanite bracelets that add sparkle to your wrist."
  }
];

// Export supportOptions
export { supportOptions } from '@/data/products';

// Import and re-export all product-related functions
import allProducts from '@/data/products';
import { getProductById, getProductsByCategory, getFeaturedProducts, getRelatedProducts, getNewArrivals } from '@/data/products';

export { allProducts, getProductById, getProductsByCategory, getFeaturedProducts, getRelatedProducts, getNewArrivals };
