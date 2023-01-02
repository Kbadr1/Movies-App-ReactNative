import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Star from "../../assets/star.png";
import { useNavigation } from "@react-navigation/native";

const Movies = ({ headerTitle, movies }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{headerTitle}</Text>
        <Text
          style={styles.link}
          onPress={() =>
            navigation.navigate("MoviesList", {
              movies,
              title: headerTitle,
            })
          }
        >
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies.slice(0, 9).map((movie) => {
          return (
            <Pressable
              key={movie.id}
              onPress={() =>
                navigation.navigate("Movie", {
                  id: movie.id,
                })
              }
            >
              <View style={styles.movie}>
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
                  <View style={styles.ratingWrapper}>
                    <Image style={styles.ratingImage} source={Star} />
                    <Text style={styles.ratingNumber}>
                      {Math.floor(movie.vote_average * 10) / 10}
                    </Text>
                  </View>
                </View>
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
    backgroundColor: "#282838",
    paddingVertical: 20,
    marginBottom: 20,
    // paddingHorizontal: 10,
  },
  textWrapper: {
    backgroundColor: "#1C1C27",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    color: "#F27706",
    fontSize: 12,
    marginBottom: 20,
  },
  movie: {
    marginLeft: 10,
    width: 150,
  },
  image: {
    width: 150,
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  movieTitle: {
    color: "#8E8F96",
    fontWeight: "700",
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

export default Movies;
