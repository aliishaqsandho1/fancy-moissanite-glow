
/**
 * This file contains TypeScript interfaces that define the expected structure
 * of API responses for the Fancy Moissanite e-commerce platform.
 * 
 * These are the endpoints you would need to implement on your backend to make
 * the application fully dynamic.
 */

// Product related interfaces
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  featured: boolean;
  images: string[];
  sku: string;
  moissaniteType: string;
  moissaniteCut: string;
  metalType: string;
  colorVariations: Array<{
    name: string;
    color: string;
  }>;
  sizeOptions: string[];
  createdAt: string; // ISO date string
  stock: number;
  careInstructions: string;
  warrantyInfo: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// User related interfaces
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'admin';
  createdAt: string;
}

export interface Address {
  id: string;
  userId: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

// Order related interfaces
export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'refunded' | 'failed';
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  colorVariation: string;
  size: string;
  customizations?: Record<string, any>;
}

// Cart related interfaces
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  colorVariation: string;
  size: string;
  image: string;
}

// Category related interfaces
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
  parentId?: string;
}

// Blog related interfaces
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  featuredImage: string;
  tags: string[];
  category: string;
}

// Content related interfaces
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  comment: string;
  rating: number;
  date: string;
  image?: string;
}

export interface Policy {
  id: string;
  title: string;
  content: string;
  type: 'shipping' | 'returns' | 'privacy' | 'terms' | 'warranty';
  updatedAt: string;
}

// Custom orders related interfaces
export interface CustomOrderRequest {
  id: string;
  userId?: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  budget: number;
  timeline: string;
  attachments?: string[];
  status: 'pending' | 'reviewing' | 'quoted' | 'accepted' | 'rejected';
  createdAt: string;
  notes?: string;
}
