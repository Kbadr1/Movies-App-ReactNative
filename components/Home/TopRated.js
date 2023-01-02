import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Movies from "./Movies";

const TopRated = () => {
  const { topRatedMovies } = useContext(MoviesContext);

  return <Movies headerTitle={"Top Rated"} movies={topRatedMovies} />;
};

export default TopRated;
