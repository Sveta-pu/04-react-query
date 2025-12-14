import axios from 'axios';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import type { MoviesResponse } from '../../types/movie';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// 🔹 Чистий HTTP-сервіс
export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  if (!token) {
    throw new Error(
      'TMDB token is missing. Add VITE_TMDB_TOKEN to your .env file.'
    );
  }

  const response = await api.get<MoviesResponse>('/search/movie', {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

// 🔹 Кастомний хук для React-компонентів
export function useMovies(query: string, page: number) {
  return useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: query.trim() !== '',
    placeholderData: keepPreviousData,
  });
}
