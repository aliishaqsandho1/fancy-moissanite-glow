
/**
 * API Utilities
 * 
 * Helper functions for working with API data and state management
 */

import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Generic hook for fetching data from API
export const useFetch = <T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
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
