
/**
 * API Utilities
 * 
 * Helper functions for working with API data and state management
 */

import { useEffect, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Product, Review } from '@/types/api';

// Throttle function to prevent multiple API calls
export const throttle = (func: Function, delay: number) => {
  let lastCall = 0;
  return function (...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

// Generic hook for fetching data from API
export const useFetch = <T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();
  
  // Use a ref to track if the component is mounted
  const isMounted = useRef(true);

  useEffect(() => {
    // Set isMounted to true when the component mounts
    isMounted.current = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFn();
        
        // Only update state if component is still mounted
        if (isMounted.current) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        // Only update state if component is still mounted
        if (isMounted.current) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
          toast({
            title: 'Error',
            description: err instanceof Error ? err.message : 'Failed to fetch data',
            variant: 'destructive',
          });
        }
      } finally {
        // Only update state if component is still mounted
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchData();
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted.current = false;
    };
  }, dependencies);

  return { data, loading, error, refetch: async () => {
    if (isMounted.current) {
      setLoading(true);
      try {
        const result = await fetchFn();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        toast({
          title: 'Error',
          description: err instanceof Error ? err.message : 'Failed to fetch data',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }
  }};
};

// Format currency for display
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// Create URL with query params
export const createUrlWithParams = (baseUrl: string, params: Record<string, any>): string => {
  const url = new URL(baseUrl);
  Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  return url.toString();
};

// Clean API data to match frontend model
export const cleanApiData = <T>(data: any): T => {
  // Add any transformations needed to convert API data to your frontend model
  return data as T;
};

// Ensure product reviews match the required Review type
export const normalizeProductReviews = (products: Product[]): Product[] => {
  return products.map(product => {
    const normalizedReviews = product.reviews.map((review: any) => ({
      ...review,
      productId: product.id,
      verified: review.verified ?? true
    })) as Review[];
    
    return {
      ...product,
      reviews: normalizedReviews
    };
  });
};

// Debounce function for input fields (like search)
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
