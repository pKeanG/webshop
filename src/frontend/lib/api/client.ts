import axios, { type AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api/v1';

/**
 * Axios client pointed at the NestJS backend. JWT injection is a TODO — once
 * AuthService is wired up, swap the interceptor to read token from in-memory store
 * (Zustand) or React Query cache. Do NOT use localStorage (per project rule §6).
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Surface a normalized error shape — UI consumes `error.response?.data?.message`.
    return Promise.reject(error);
  },
);
