import React from "react";
import Movies from "./Movies";
import { useCategory } from "../../services";

const NowPlaying = () => {
  const { data } = useCategory("now_playing");

  return <Movies headerTitle={"In Theaters"} movies={data?.data.results} />;
};

export default NowPlaying;
