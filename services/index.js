import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "84c2c8be7563e08e78d74cee1f769172";

//Get the list of official genres for movies.
export const useGenres = () =>
  useQuery(["genres"], () => {
    return axios.get(`${URL}/genre/movie/list?api_key=${API_KEY}`);
  });
// Get Movies by category
export const useCategoryMovies = (id) =>
  useQuery(["categoryMovies", id], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
      `${URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${id}`
    );
  });
// Get upcoming ,in theaters, popular and top rated movies
export const useCategory = (category) =>
  useQuery(["category", category], ({ queryKey }) => {
    const category = queryKey[1];
    return axios.get(`${URL}/movie/${category}?api_key=${API_KEY}&page=1`);
  });
// Get the primary information about a movie.
export const useMovieDetails = (id) =>
  useQuery(["movieDetails", id], ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
      `${URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images,keywords,external_ids,reviews,similar,recommendations`
    );
  });
// Get weekly trending movies
export const useTrending = () =>
  useQuery(["trending"], () => {
    return axios.get(`${URL}/trending/movie/week?api_key=${API_KEY}&page=1`);
  });
// Search for movies.
export const useSearchMovies = (query) =>
  useQuery(["searchMovies", query], ({ queryKey }) => {
    const query = queryKey[1];
    return axios.get(
      `${URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
  });
