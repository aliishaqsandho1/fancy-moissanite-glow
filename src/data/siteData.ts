import { Product } from "@/types/api";
import products from "./products";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  bannerImage: string;
  featured: boolean;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  categoryId: string;
}

export interface SupportOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

// Categories with subcategories
export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Rings",
    slug: "rings",
    description: "Stunning moissanite rings for every occasion",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    bannerImage: "https://images.unsplash.com/photo-1563864078254-fdad0c9e507d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    featured: true,
    subcategories: [
      { id: "subcat-1-1", name: "Engagement", slug: "engagement-rings", description: "Start your forever with a perfect engagement ring", image: "https://images.unsplash.com/photo-1601591219083-3c674c554851?ixlib=rb-4.0.3", categoryId: "cat-1" },
      { id: "subcat-1-2", name: "Wedding Bands", slug: "wedding-bands", description: "Classic and modern wedding bands", image: "https://images.unsplash.com/photo-1586878341532-7e8c7b78ca63?ixlib=rb-4.0.3", categoryId: "cat-1" },
      { id: "subcat-1-3", name: "Eternity Rings", slug: "eternity-rings", description: "Celebrate your continuing love story", image: "https://images.unsplash.com/photo-1615655114865-4cc5c5f659d6?ixlib=rb-4.0.3", categoryId: "cat-1" },
      { id: "subcat-1-4", name: "Promise Rings", slug: "promise-rings", description: "Symbolize your commitment", image: "https://images.unsplash.com/photo-1609839162846-0e74034c49b5?ixlib=rb-4.0.3", categoryId: "cat-1" },
    ]
  },
  {
    id: "cat-2",
    name: "Necklaces",
    slug: "necklaces",
    description: "Elegant moissanite necklaces and pendants",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bannerImage: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    subcategories: [
      { id: "subcat-2-1", name: "Pendants", slug: "pendants", description: "Beautiful pendant necklaces", image: "https://images.unsplash.com/photo-1576022162028-32196e59a53b?ixlib=rb-4.0.3", categoryId: "cat-2" },
      { id: "subcat-2-2", name: "Chokers", slug: "chokers", description: "Stylish and elegant chokers", image: "https://images.unsplash.com/photo-1599459182681-c938b7f65344?ixlib=rb-4.0.3", categoryId: "cat-2" },
      { id: "subcat-2-3", name: "Chains", slug: "chains", description: "Delicate and strong chains", image: "https://images.unsplash.com/photo-1588444650733-d0434f4c33fd?ixlib=rb-4.0.3", categoryId: "cat-2" },
    ]
  },
  {
    id: "cat-3",
    name: "Bracelets",
    slug: "bracelets",
    description: "Stunning moissanite bracelets and bangles",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwYnJhY2VsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    bannerImage: "https://images.unsplash.com/photo-1573408301835-d9903adad321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1649&q=80",
    featured: true,
    subcategories: [
      { id: "subcat-3-1", name: "Tennis Bracelets", slug: "tennis-bracelets", description: "Classic and elegant tennis bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3", categoryId: "cat-3" },
      { id: "subcat-3-2", name: "Bangles", slug: "bangles", description: "Statement bangles for any occasion", image: "https://images.unsplash.com/photo-1634583488171-5d6be2f6b15e?ixlib=rb-4.0.3", categoryId: "cat-3" },
      { id: "subcat-3-3", name: "Charm Bracelets", slug: "charm-bracelets", description: "Personalized charm bracelets", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3", categoryId: "cat-3" },
    ]
  },
  {
    id: "cat-4",
    name: "Earrings",
    slug: "earrings",
    description: "Brilliant moissanite earrings in various styles",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bannerImage: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    featured: true,
    subcategories: [
      { id: "subcat-4-1", name: "Studs", slug: "stud-earrings", description: "Classic stud earrings", image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3", categoryId: "cat-4" },
      { id: "subcat-4-2", name: "Drops", slug: "drop-earrings", description: "Elegant drop earrings", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3", categoryId: "cat-4" },
      { id: "subcat-4-3", name: "Hoops", slug: "hoop-earrings", description: "Stylish hoop earrings", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3", categoryId: "cat-4" },
    ]
  },
  {
    id: "cat-5",
    name: "Collections",
    slug: "collections",
    description: "Explore our exclusive jewelry collections",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bannerImage: "https://images.unsplash.com/photo-1560025207-3f11264334c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    subcategories: [
      { id: "subcat-5-1", name: "Celestial", slug: "celestial-collection", description: "Inspired by the night sky", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3", categoryId: "cat-5" },
      { id: "subcat-5-2", name: "Botanical", slug: "botanical-collection", description: "Nature-inspired jewelry", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3", categoryId: "cat-5" },
      { id: "subcat-5-3", name: "Modern", slug: "modern-collection", description: "Contemporary designs", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3", categoryId: "cat-5" },
    ]
  }
];

// Support options
export const supportOptions: SupportOption[] = [
  {
    id: "support-1",
    name: "Customer Service",
    description: "Get help with your order or product questions",
    icon: "headphones",
    link: "/contact"
  },
  {
    id: "support-2",
    name: "Sizing Guide",
    description: "Find your perfect jewelry size",
    icon: "ruler",
    link: "/sizing-guide"
  },
  {
    id: "support-3",
    name: "Care Instructions",
    description: "Learn how to care for your jewelry",
    icon: "sparkles",
    link: "/care-instructions"
  },
  {
    id: "support-4",
    name: "Returns & Exchanges",
    description: "Information about our return policy",
    icon: "repeat",
    link: "/returns"
  },
  {
    id: "support-5",
    name: "Shipping Information",
    description: "Delivery times and shipping methods",
    icon: "package",
    link: "/shipping"
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === categorySlug.toLowerCase() || 
    (product.tags && product.tags.includes(categorySlug.toLowerCase()))
  );
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
