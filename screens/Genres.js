import React from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGenres } from "../services";

const Genres = () => {
  const navigation = useNavigation();

  const { data } = useGenres();

  return (
    <FlatList
      style={styles.container}
      data={data?.data.genres}
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
