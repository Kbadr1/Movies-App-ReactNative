import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState([]);
  const [mvoiesByKeyword, setMoviesByKeyword] = useState([]);

  const API_KEY = "84c2c8be7563e08e78d74cee1f769172";
  const url = "https://api.themoviedb.org/3";

  const getCategories = () => {
    axios
      .get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setCategories(res.data.genres);
      })
      .catch((err) => console.log(err));
  };

  const getUpcomingMovies = () => {
    axios
      .get(`${url}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setUpcomingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getNowPlayingMovies = () => {
    axios
      .get(`${url}/movie/now_playing?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setNowPlayingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getTopRatedMovies = () => {
    axios
      .get(`${url}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setTopRatedMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getTrendingMovies = () => {
    axios
      .get(`${url}/trending/movie/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setTrendingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  const getPopularMovies = () => {
    axios
      .get(`${url}/movie/popular?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getMovieDetails = (id) => {
    axios
      .get(`${url}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCredits = (id) => {
    axios
      .get(`${url}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setCast(res.data.cast);
      })
      .catch((err) => console.log(err));
  };

  const getRecommendedMovies = (id) => {
    axios
      .get(
        `${url}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setRecommendedMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getSimilarMovies = (id) => {
    axios
      .get(`${url}/movie/${id}/similar?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setSimilarMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getMoviesByCategory = (id) => {
    axios
      .get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${id}`
      )
      .then((res) => {
        setMoviesByCategory(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getMoviesByKeyword = (query) => {
    axios
      .get(
        `${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
      )
      .then((res) => {
        setMoviesByKeyword(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUpcomingMovies();
    getCategories();
    getNowPlayingMovies();
    getTopRatedMovies();
    getTrendingMovies();
    getPopularMovies();
    getMoviesByKeyword();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        upcomingMovies,
        categories,
        nowPlayingMovies,
        topRatedMovies,
        trendingMovies,
        popularMovies,
        getMovieDetails,
        movieDetails,
        getCredits,
        cast,
        getRecommendedMovies,
        recommendedMovies,
        getSimilarMovies,
        similarMovies,
        getMoviesByCategory,
        moviesByCategory,
        getMoviesByKeyword,
        mvoiesByKeyword,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
