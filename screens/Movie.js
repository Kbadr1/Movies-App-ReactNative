import React, { useContext, useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MoviesContext } from "../context/MoviesContext";
import { LinearGradient } from "expo-linear-gradient";
import DotIcon from "../assets/dot.png";
import Star from "../assets/star.png";
import Movies from "../components/Home/Movies";
import Cast from "../components/Movie/Cast";

const Movie = ({ route, navigation }) => {
  const {
    getMovieDetails,
    movieDetails,
    getCredits,
    getRecommendedMovies,
    recommendedMovies,
    getSimilarMovies,
    similarMovies,
  } = useContext(MoviesContext);
  const { id } = route.params;

  useEffect(() => {
    getMovieDetails(id);
    getCredits(id);
    getRecommendedMovies(id);
    getSimilarMovies(id);
    navigation.setOptions({ title: "" });
  }, [id]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
          }}
          blurRadius={20}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <LinearGradient colors={["transparent", "#1C1C27"]}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
                }}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.movieTitle}>{movieDetails.title}</Text>
        <View style={styles.movieInfo}>
          <Text style={styles.infoText}>
            {movieDetails.release_date && movieDetails.release_date.slice(0, 4)}
          </Text>
          <Image source={DotIcon} style={{ width: 8, height: 8 }} />
          <Text style={styles.infoText}>
            {movieDetails.genres && movieDetails.genres[0].name}
          </Text>
          <Image source={DotIcon} style={{ width: 8, height: 8 }} />
          <Text style={styles.infoText}>
            {Math.floor(movieDetails.runtime / 60)}h {movieDetails.runtime % 60}
            m
          </Text>
        </View>
        <View style={styles.ratingWrapper}>
          <Image
            source={Star}
            style={{ width: 15, height: 15, marginRight: 5 }}
          />
          <Text style={styles.rateNumber}>
            {Math.floor(movieDetails.vote_average * 10) / 10} (
            {movieDetails.vote_count} reviews)
          </Text>
        </View>
        <Text style={styles.overview}>{movieDetails.overview}</Text>

        <Cast navigation={navigation} />

        <Movies
          headerTitle={"Recommendations"}
          movies={recommendedMovies}
          navigation={navigation}
        />
        <Movies
          headerTitle={"Similar Movies"}
          movies={similarMovies}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    flex: 1,
  },
  imageWrapper: {
    width: "100%",
    padding: 40,
    height: 500,
    marginTop: 20,
  },
  image: {
    borderRadius: 30,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  movieTitle: {
    color: "#CAC8D2",
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  movieInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  infoText: {
    color: "#8E8F96",
  },
  ratingWrapper: {
    flexDirection: "row",
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  rateNumber: {
    color: "#8E8F96",
  },
  overview: {
    color: "#8E8F96",
    paddingHorizontal: 40,
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "light",
    lineHeight: 24,
    marginBottom: 40,
  },
  actorContainer: {
    backgroundColor: "#282838",
    paddingVertical: 20,
    marginBottom: 20,
  },
  actor: {
    marginLeft: 10,
    width: 150,
  },
  actorImage: {
    width: 150,
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  actorInfoWrapper: {
    backgroundColor: "#1C1C27",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  actorName: {
    color: "#8E8F96",
    fontWeight: "700",
    marginBottom: 10,
  },
  charName: {
    color: "#8E8F96",
    opacity: 0.7,
  },
  castHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  castTitle: {
    color: "#CAC8D2",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
  },
  castLink: {
    color: "#F27706",
    fontSize: 12,
  },
});

export default Movie;
