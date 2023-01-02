import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Star from "../../assets/star.png";
import { useNavigation } from "@react-navigation/native";

const Movie = ({ movie }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      key={movie.id}
      onPress={() =>
        navigation.navigate("Movie", {
          id: movie.id,
        })
      }
      style={styles.movie}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {movie.title}
        </Text>
        <Text style={styles.releaseDate}>
          {movie.release_date && movie.release_date.slice(0, 4)}
        </Text>
        <View style={styles.ratingWrapper}>
          <Image style={styles.ratingImage} source={Star} />
          <Text style={styles.ratingNumber}>
            {Math.floor(movie.vote_average * 10) / 10}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 0.25,
    borderColor: "#3c3c4a",
    paddingVertical: 10,
  },
  image: {
    height: 180,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  movieTitle: {
    color: "#8E8F96",
    fontWeight: "700",
    marginBottom: 5,
  },
  releaseDate: {
    color: "#8E8F96",
    marginBottom: 5,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ratingImage: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  ratingNumber: {
    color: "#8E8F96",
    opacity: 0.7,
  },
});

export default Movie;
