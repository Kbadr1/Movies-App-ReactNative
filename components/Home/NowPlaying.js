import React, { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Movies from "./Movies";

const NowPlaying = () => {
  const { nowPlayingMovies } = useContext(MoviesContext);
  return <Movies headerTitle={"In Theaters"} movies={nowPlayingMovies} />;
};

export default NowPlaying;
