import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Movie = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      key={movie.id}
      style={styles.movie}
      onPress={() =>
        navigation.navigate("Movie", {
          id: movie.id,
        })
      }
    >
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.movieDetails}>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {movie.title}
        </Text>
        <Text style={styles.releaseDate}>
          {movie.release_date && movie.release_date.slice(0, 4)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 0.25,
    borderColor: "#3c3c4a",
    paddingVertical: 10,
  },
  image: {
    height: 80,
    width: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  movieDetails: {},
  movieTitle: {
    color: "#8E8F96",
    fontWeight: "700",
  },
  releaseDate: {
    color: "#8E8F96",
  },
});

export default Movie;
