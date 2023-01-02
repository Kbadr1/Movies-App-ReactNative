import React, { useEffect } from "react";
import Movie from "../components/Trending/Movie";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MoviesList = ({ route }) => {
  const { movies, title } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [movies]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={movies}
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

export default MoviesList;
