
/**
 * API Service
 * 
 * This file provides functions to interact with the backend API.
 * You'll need to replace the placeholder URL with your actual API endpoint.
 */

import { Product, Category, CartItem, Order, User, Address, BlogPost } from '../types/api';

// Base API URL - replace with your actual API endpoint
const API_BASE_URL = 'https://api.your-backend.com/v1';

// Helper for handling fetch responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }
  
  return response.json();
};

// Helper for authenticated requests
const authFetch = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('auth_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  
  return fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  }).then(handleResponse);
};

// Products API
export const productsApi = {
  getAll: async (params = {}): Promise<{data: Product[], total: number}> => {
    const queryString = new URLSearchParams(params as any).toString();
    return authFetch(`/products?${queryString}`);
  },
  
  getById: async (id: string): Promise<Product> => {
    return authFetch(`/products/${id}`);
  },
  
  getRelated: async (id: string): Promise<Product[]> => {
    return authFetch(`/products/${id}/related`);
  }
};

// Categories API
export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    return authFetch('/categories');
  },
  
  getBySlug: async (slug: string): Promise<Category & { products: Product[] }> => {
    return authFetch(`/categories/${slug}`);
  }
};

// Authentication API
export const authApi = {
  register: async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<{ user: User; token: string }> => {
    return authFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  login: async (credentials: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> => {
    return authFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  getCurrentUser: async (): Promise<User> => {
    return authFetch('/auth/me');
  },
  
  logout: async (): Promise<void> => {
    return authFetch('/auth/logout', { method: 'POST' });
  },
  
  forgotPassword: async (email: string): Promise<void> => {
    return authFetch('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
  
  resetPassword: async (token: string, password: string): Promise<void> => {
    return authFetch('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  }
};

// User API
export const userApi = {
  getProfile: async (): Promise<User> => {
    return authFetch('/users/profile');
  },
  
  updateProfile: async (profileData: Partial<User>): Promise<User> => {
    return authFetch('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },
  
  getAddresses: async (): Promise<Address[]> => {
    return authFetch('/users/addresses');
  },
  
  addAddress: async (address: Omit<Address, 'id'>): Promise<Address> => {
    return authFetch('/users/addresses', {
      method: 'POST',
      body: JSON.stringify(address),
    });
  },
  
  updateAddress: async (id: string, address: Partial<Address>): Promise<Address> => {
    return authFetch(`/users/addresses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(address),
    });
  },
  
  deleteAddress: async (id: string): Promise<void> => {
    return authFetch(`/users/addresses/${id}`, {
      method: 'DELETE',
    });
  },
  
  setDefaultAddress: async (id: string, type: 'shipping' | 'billing'): Promise<Address> => {
    return authFetch(`/users/addresses/${id}/default`, {
      method: 'PUT',
      body: JSON.stringify({ type }),
    });
  }
};

// Cart API
export const cartApi = {
  getCart: async (): Promise<CartItem[]> => {
    return authFetch('/cart');
  },
  
  addItem: async (item: {
    productId: string;
    quantity: number;
    colorVariation: string;
    size: string;
  }): Promise<CartItem[]> => {
    return authFetch('/cart', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  },
  
  updateItem: async (itemId: string, updates: Partial<CartItem>): Promise<CartItem> => {
    return authFetch(`/cart/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },
  
  removeItem: async (itemId: string): Promise<CartItem[]> => {
    return authFetch(`/cart/${itemId}`, {
      method: 'DELETE',
    });
  },
  
  clearCart: async (): Promise<void> => {
    return authFetch('/cart', {
      method: 'DELETE',
    });
  }
};

// Orders API
export const ordersApi = {
  getOrders: async (params = {}): Promise<{data: Order[], total: number}> => {
    const queryString = new URLSearchParams(params as any).toString();
    return authFetch(`/orders?${queryString}`);
  },
  
  getById: async (id: string): Promise<Order> => {
    return authFetch(`/orders/${id}`);
  },
  
  createOrder: async (orderData: {
    shippingAddressId: string;
    billingAddressId: string;
    paymentMethod: string;
    notes?: string;
  }): Promise<Order> => {
    return authFetch('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }
};

// Blog API
export const blogApi = {
  getAllPosts: async (params = {}): Promise<{data: BlogPost[], total: number}> => {
    const queryString = new URLSearchParams(params as any).toString();
    return authFetch(`/blog?${queryString}`);
  },
  
  getPostBySlug: async (slug: string): Promise<BlogPost> => {
    return authFetch(`/blog/${slug}`);
  }
};

// Content API
export const contentApi = {
  getFaqs: async (category?: string): Promise<any[]> => {
    const queryString = category ? `?category=${category}` : '';
    return authFetch(`/faqs${queryString}`);
  },
  
  getTestimonials: async (): Promise<any[]> => {
    return authFetch('/testimonials');
  },
  
  getPolicy: async (type: string): Promise<any> => {
    return authFetch(`/policies/${type}`);
  }
};

// Custom Orders API
export const customOrdersApi = {
  submit: async (orderRequest: any): Promise<any> => {
    return authFetch('/custom-orders', {
      method: 'POST',
      body: JSON.stringify(orderRequest),
    });
  },
  
  uploadAttachments: async (id: string, files: File[]): Promise<string[]> => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });
    
    return fetch(`${API_BASE_URL}/custom-orders/${id}/attachments`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      },
    }).then(handleResponse);
  },
  
  getUserOrders: async (): Promise<any[]> => {
    return authFetch('/custom-orders');
  }
};

// Search API
export const searchApi = {
  search: async (query: string, type?: string): Promise<any> => {
    const queryParams = new URLSearchParams({ q: query });
    if (type) queryParams.append('type', type);
    
    return authFetch(`/search?${queryParams.toString()}`);
  }
};
