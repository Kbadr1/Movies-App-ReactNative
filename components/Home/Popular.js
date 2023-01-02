import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Movies from "./Movies";

const Popular = () => {
  const { popularMovies } = useContext(MoviesContext);

  return <Movies headerTitle={"Popular"} movies={popularMovies} />;
};

export default Popular;
