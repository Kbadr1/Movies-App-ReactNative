import React from "react";
import Movies from "./Movies";
import { useCategory } from "../../services";

const TopRated = () => {
  const { data } = useCategory("top_rated");

  return <Movies headerTitle={"Top Rated"} movies={data?.data.results} />;
};

export default TopRated;
