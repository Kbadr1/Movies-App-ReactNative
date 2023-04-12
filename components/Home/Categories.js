import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGenres } from "../../services";

const Categories = () => {
  const navigation = useNavigation();

  const { data } = useGenres();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Genres</Text>
        <Text style={styles.link} onPress={() => navigation.navigate("Genres")}>
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.data.genres.slice(0, 9).map((category) => {
          return (
            <Pressable
              key={category.id}
              onPress={() =>
                navigation.navigate("Category", {
                  id: category.id,
                  name: category.name,
                })
              }
            >
              <View style={styles.category}>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    color: "#CAC8D2",
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    // color: "#F27706",
    color: "#8E8F96",
    fontSize: 12,
    marginBottom: 20,
  },
  category: {
    marginLeft: 10,
    backgroundColor: "#282838",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryName: {
    color: "#CAC8D2",
  },
});

export default Categories;
