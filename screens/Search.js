import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from "react-native";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "../components/Search/Movie";
import { useSearchMovies } from "../services";

const Search = () => {
  const [query, setQuery] = useState("");

  // const { getMoviesByKeyword, mvoiesByKeyword } = useContext(MoviesContext);
  const { data } = useSearchMovies(query);
  // useEffect(() => {
  //   query && getMoviesByKeyword(query);
  // }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#8E8F96"
        style={styles.searchInput}
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      {query && data?.data.results.length ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.data.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Movie movie={item} />}
        />
      ) : (
        query &&
        !data?.data.results.length && (
          <Text style={styles.message}>
            Sorry but no movies matched your terms.
          </Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchInput: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#CAC8D2",
    backgroundColor: "#282838",
    marginBottom: 10,
  },
  message: {
    color: "#CAC8D2",
    top: "40%",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Search;
