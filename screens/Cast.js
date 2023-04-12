import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import UserIcon from "../assets/user.png";
import { useMovieDetails } from "../services";

const Cast = ({ route }) => {
  const { id } = route.params;
  const { data } = useMovieDetails(id);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.data.credits.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.actor}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                }}
                style={styles.image}
                defaultSource={UserIcon}
              />
              <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.actorName}>
                  {item.original_name}
                </Text>
                <Text numberOfLines={1} style={styles.charName}>
                  {item.character}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C27",
    flex: 1,
    paddingHorizontal: 10,
  },
  actor: {
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
  actorName: {
    color: "#8E8F96",
    fontWeight: "700",
    marginBottom: 5,
  },
  charName: {
    color: "#8E8F96",
    marginBottom: 5,
  },
});

export default Cast;
