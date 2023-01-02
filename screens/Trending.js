import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import Movie from "../components/Trending/Movie";
import { MoviesContext } from "../context/MoviesContext";

const Trending = () => {
  const { trendingMovies } = useContext(MoviesContext);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={trendingMovies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Movie movie={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Trending;
