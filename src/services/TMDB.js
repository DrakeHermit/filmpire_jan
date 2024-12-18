import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;
const page = 1;
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // Get Movies by [Type]
    getMovies: builder.query({
      query: () => {
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}&language=en-US`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
