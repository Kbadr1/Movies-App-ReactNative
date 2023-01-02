import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "../components/Trending/Movie";
import { useNavigation } from "@react-navigation/native";

const Category = ({ route }) => {
  const { getMoviesByCategory, moviesByCategory } = useContext(MoviesContext);
  const { id, name } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `${name}` });
    getMoviesByCategory(id);
  }, [id]);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id}
      data={moviesByCategory}
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

export default Category;
