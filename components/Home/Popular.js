import React from "react";
import Movies from "./Movies";
import { useCategory } from "../../services";

const Popular = () => {
  const { data } = useCategory("popular");

  return <Movies headerTitle={"Popular"} movies={data?.data.results} />;
};

export default Popular;
