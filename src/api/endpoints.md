
# API Endpoints Documentation

This document outlines all the API endpoints required for the Fancy Moissanite e-commerce platform. Implement these endpoints on your backend to make the application fully dynamic.

## Base URL

All URLs should be prefixed with your API base URL (e.g., `https://api.yourstore.com/v1`).

## Authentication

Most endpoints require authentication using bearer tokens:

```
Authorization: Bearer <token>
```

Public endpoints are marked with [Public].

---

## Products

### Get All Products [Public]
- **GET** `/products`
- Query parameters:
  - `category`: Filter by category slug
  - `featured`: Filter featured items (boolean)
  - `search`: Search term
  - `min_price`: Minimum price
  - `max_price`: Maximum price
  - `metal_type`: Filter by metal type
  - `sort`: Sort by field (price_asc, price_desc, newest, featured)
  - `page`: Page number
  - `limit`: Items per page
- Returns: Array of Product objects with pagination metadata

### Get Product by ID [Public]
- **GET** `/products/:id`
- Returns: Single Product object with full details

### Get Related Products [Public]
- **GET** `/products/:id/related`
- Returns: Array of related Product objects

### Create Product [Admin]
- **POST** `/products`
- Body: Product object without ID
- Returns: Created Product object

### Update Product [Admin]
- **PUT** `/products/:id`
- Body: Product object fields to update
- Returns: Updated Product object

### Delete Product [Admin]
- **DELETE** `/products/:id`
- Returns: Success message

---

## Categories

### Get All Categories [Public]
- **GET** `/categories`
- Returns: Array of Category objects

### Get Category by Slug [Public]
- **GET** `/categories/:slug`
- Returns: Single Category object with associated products

### Create Category [Admin]
- **POST** `/categories`
- Body: Category object without ID
- Returns: Created Category object

### Update Category [Admin]
- **PUT** `/categories/:id`
- Body: Category object fields to update
- Returns: Updated Category object

### Delete Category [Admin]
- **DELETE** `/categories/:id`
- Returns: Success message

---

## Authentication

### Register [Public]
- **POST** `/auth/register`
- Body: 
  ```json
  {
    "email": "user@example.com",
    "password": "password",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```
- Returns: User object and authentication token

### Login [Public]
- **POST** `/auth/login`
- Body: 
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- Returns: User object and authentication token

### Get Current User [Auth]
- **GET** `/auth/me`
- Returns: Current user information

### Logout [Auth]
- **POST** `/auth/logout`
- Returns: Success message

### Forgot Password [Public]
- **POST** `/auth/forgot-password`
- Body: 
  ```json
  {
    "email": "user@example.com"
  }
  ```
- Returns: Success message

### Reset Password [Public]
- **POST** `/auth/reset-password`
- Body: 
  ```json
  {
    "token": "reset-token",
    "password": "new-password"
  }
  ```
- Returns: Success message

---

## Users

### Get User Profile [Auth]
- **GET** `/users/profile`
- Returns: Current user's profile information

### Update User Profile [Auth]
- **PUT** `/users/profile`
- Body: User object fields to update
- Returns: Updated user profile

### Get User Addresses [Auth]
- **GET** `/users/addresses`
- Returns: Array of user's addresses

### Add User Address [Auth]
- **POST** `/users/addresses`
- Body: Address object without ID
- Returns: Created address

### Update User Address [Auth]
- **PUT** `/users/addresses/:id`
- Body: Address object fields to update
- Returns: Updated address

### Delete User Address [Auth]
- **DELETE** `/users/addresses/:id`
- Returns: Success message

### Set Default Address [Auth]
- **PUT** `/users/addresses/:id/default`
- Body: 
  ```json
  {
    "type": "billing" or "shipping"
  }
  ```
- Returns: Updated address

---

## Cart

### Get Cart [Auth]
- **GET** `/cart`
- Returns: Array of CartItem objects

### Add Item to Cart [Auth]
- **POST** `/cart`
- Body:
  ```json
  {
    "productId": "product-id",
    "quantity": 1,
    "colorVariation": "Gold",
    "size": "7"
  }
  ```
- Returns: Updated cart with added item

### Update Cart Item [Auth]
- **PUT** `/cart/:itemId`
- Body:
  ```json
  {
    "quantity": 2
  }
  ```
- Returns: Updated cart item

### Remove Cart Item [Auth]
- **DELETE** `/cart/:itemId`
- Returns: Updated cart without the removed item

### Clear Cart [Auth]
- **DELETE** `/cart`
- Returns: Empty cart confirmation

---

## Orders

### Get User Orders [Auth]
- **GET** `/orders`
- Query parameters:
  - `status`: Filter by order status
  - `page`: Page number
  - `limit`: Items per page
- Returns: Array of Order objects with pagination

### Get Order by ID [Auth]
- **GET** `/orders/:id`
- Returns: Single Order object with full details

### Create Order [Auth]
- **POST** `/orders`
- Body:
  ```json
  {
    "shippingAddressId": "address-id",
    "billingAddressId": "address-id",
    "paymentMethod": "credit-card",
    "notes": "Optional delivery notes"
  }
  ```
- Returns: Created Order object

### Update Order Status [Admin]
- **PUT** `/orders/:id/status`
- Body:
  ```json
  {
    "status": "shipped",
    "trackingNumber": "ABC123",
    "estimatedDelivery": "2023-12-01"
  }
  ```
- Returns: Updated Order object

---

## Reviews

### Get Product Reviews [Public]
- **GET** `/products/:id/reviews`
- Query parameters:
  - `sort`: Sort by field (newest, rating_high, rating_low)
  - `page`: Page number
  - `limit`: Items per page
- Returns: Array of Review objects with pagination

### Add Product Review [Auth]
- **POST** `/products/:id/reviews`
- Body:
  ```json
  {
    "rating": 5,
    "comment": "Great product, very satisfied!"
  }
  ```
- Returns: Created Review object

### Update Product Review [Auth]
- **PUT** `/reviews/:id`
- Body:
  ```json
  {
    "rating": 4,
    "comment": "Updated review comment"
  }
  ```
- Returns: Updated Review object

### Delete Product Review [Auth/Admin]
- **DELETE** `/reviews/:id`
- Returns: Success message

---

## Blog

### Get All Blog Posts [Public]
- **GET** `/blog`
- Query parameters:
  - `category`: Filter by category
  - `tag`: Filter by tag
  - `search`: Search term
  - `page`: Page number
  - `limit`: Items per page
- Returns: Array of BlogPost objects with pagination

### Get Blog Post by Slug [Public]
- **GET** `/blog/:slug`
- Returns: Single BlogPost object with full details

### Create Blog Post [Admin]
- **POST** `/blog`
- Body: BlogPost object without ID
- Returns: Created BlogPost object

### Update Blog Post [Admin]
- **PUT** `/blog/:id`
- Body: BlogPost object fields to update
- Returns: Updated BlogPost object

### Delete Blog Post [Admin]
- **DELETE** `/blog/:id`
- Returns: Success message

---

## Content

### Get FAQs [Public]
- **GET** `/faqs`
- Query parameters:
  - `category`: Filter by category
- Returns: Array of FaqItem objects

### Get Testimonials [Public]
- **GET** `/testimonials`
- Returns: Array of Testimonial objects

### Get Policy by Type [Public]
- **GET** `/policies/:type`
- Returns: Policy object for the specified type

---

## Custom Orders

### Submit Custom Order Request [Public]
- **POST** `/custom-orders`
- Body: CustomOrderRequest object without ID
- Returns: Created CustomOrderRequest object

### Upload Custom Order Attachments [Public]
- **POST** `/custom-orders/:id/attachments`
- Form data with files
- Returns: Array of attachment URLs

### Get User Custom Orders [Auth]
- **GET** `/custom-orders`
- Returns: Array of user's CustomOrderRequest objects

---

## Search

### Global Search [Public]
- **GET** `/search`
- Query parameters:
  - `q`: Search query
  - `type`: Optional filter by type (products, blog, etc.)
- Returns: Search results grouped by type

---

## File Upload

### Upload Image [Auth/Admin]
- **POST** `/upload/image`
- Form data with image file
- Returns: Image URL and metadata

---

## Implementation Notes

1. All list endpoints should support pagination
2. Implement proper error handling with appropriate HTTP status codes
3. Use JWT tokens for authentication
4. Implement rate limiting for public endpoints
5. Set up CORS to allow requests only from your frontend domain
6. Add proper validation for all input data
7. Add filtering and sorting options where appropriate
8. Add cache headers to improve performance
9. Implement webhook handling for payment processing callbacks
10. Add logging and monitoring

## Testing

You should provide a Postman collection or similar testing suite to verify all endpoints are working correctly.

## Development Workflow

1. Start with the public product browsing endpoints
2. Then implement authentication
3. Continue with cart and checkout functionality
4. Add order management
5. Implement the content endpoints (blog, FAQs, policies)
6. Add custom order functionality
7. Finally, implement admin endpoints

This approach allows you to build the frontend incrementally as you develop the API.
