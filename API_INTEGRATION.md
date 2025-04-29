
# API Integration Guide for Fancy Moissanite

This guide explains how to connect your Fancy Moissanite frontend to a backend API.

## Overview

To make the website fully dynamic, you'll need to implement a backend API with endpoints for:

1. Products, categories, and inventory management
2. User authentication and profile management
3. Shopping cart and order processing
4. Content management (blog, FAQs, policies)
5. Custom order requests

## Setup Instructions

### 1. Configure API Base URL

Update the `API_BASE_URL` in `src/api/apiService.ts` to point to your backend:

```typescript
const API_BASE_URL = 'https://your-backend-api.com/v1';
```

### 2. API Documentation

The full API specification is available in:
- `src/api/endpoints.md` - Detailed REST API endpoints documentation
- `src/types/api.ts` - TypeScript interfaces for API data structures

### 3. Replace Mock Data

The current application uses mock data from `src/data/products.ts`. To make it fully dynamic:

1. Update components to use the API service hooks instead of importing mock data
2. Implement loading states and error handling
3. Set up proper authentication flow

### 4. Authentication Integration

The auth flow requires:

1. Login/registration pages
2. Token storage (currently using localStorage)
3. Protected route handling
4. User profile management

### 5. Testing

Once you've implemented the API endpoints:

1. Test all endpoints with Postman or a similar tool
2. Update the frontend components to use live data
3. Test the complete user journey from browsing to checkout

## API Service Usage

The `apiService.ts` file provides functions for all required API calls. Here's how to use them:

```typescript
import { productsApi } from '@/api/apiService';
import { useFetch } from '@/utils/apiUtils';

// In your component:
const { data: products, loading, error } = useFetch(
  () => productsApi.getAll({ category: 'rings', featured: true }),
  []
);

// Or using direct calls:
const handleAddToCart = async () => {
  try {
    await cartApi.addItem({
      productId: product.id,
      quantity: 1,
      colorVariation: selectedColor,
      size: selectedSize
    });
    
    toast({ title: "Added to cart successfully" });
  } catch (error) {
    toast({ 
      title: "Failed to add item", 
      description: error.message,
      variant: "destructive"
    });
  }
};
```

## Authentication Flow

1. User logs in with email/password
2. API returns JWT token
3. Store token in localStorage
4. Include token in API requests
5. Refresh token as needed

## Development Steps

1. Start with public endpoints (products, categories)
2. Implement authentication
3. Add protected features (cart, checkout)
4. Add admin functionality if needed

## Need Help?

For any questions about API integration, contact your backend development team.
