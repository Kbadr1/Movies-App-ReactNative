import React, { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { MoviesContext } from "../context/MoviesContext";
import { useNavigation } from "@react-navigation/native";

const Genres = () => {
  const { categories } = useContext(MoviesContext);
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.container}
      data={categories}
      key={(category) => category.id}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("Category", {
                id: item.id,
                name: item.name,
              })
            }
            style={styles.genreContainer}
          >
            <Text style={styles.genreName}>{item.name}</Text>
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    flex: 1,
  },
  genreContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.25,
    borderColor: "#3c3c4a",
  },
  genreName: {
    color: "#8E8F96",
  },
});

export default Genres;
