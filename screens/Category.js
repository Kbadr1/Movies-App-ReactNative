import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Movie from "../components/Trending/Movie";
import { useNavigation } from "@react-navigation/native";
import { useCategoryMovies } from "../services";

const Category = ({ route }) => {
  const { id, name } = route.params;
  const navigation = useNavigation();

  const { data } = useCategoryMovies(id);

  useEffect(() => {
    navigation.setOptions({ title: `${name}` });
  }, [id]);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id}
      data={data?.data.results}
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
