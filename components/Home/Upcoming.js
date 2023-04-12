import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCategory } from "../../services";

const Upcoming = () => {
  const navigation = useNavigation();

  const { data } = useCategory("upcoming");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coming soon</Text>
        <Text
          style={styles.link}
          onPress={() =>
            navigation.navigate("MoviesList", {
              movies: data?.data.results,
              title: "Coming soon",
            })
          }
        >
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.data.results.slice(0, 9).map((movie) => {
          return (
            <Pressable
              key={movie.id}
              onPress={() =>
                navigation.navigate("Movie", {
                  id: movie.id,
                })
              }
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  }}
                  style={styles.image}
                />
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
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
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#F27706",
  },
});

export default Upcoming;
