import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import UserIcon from "../../assets/user.png";

const Cast = ({ credits, navigation }) => {
  return (
    <Pressable
      style={styles.actorContainer}
      // onPress={() => navigation.navigate("Cast", { id })}
    >
      <View style={styles.castHeader}>
        <Text style={styles.castTitle}>Cast</Text>
        <Text
          style={styles.castLink}
          onPress={() => navigation.navigate("Cast", { id })}
        >
          View all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {credits?.slice(0, 12).map((actor) => {
          return (
            <View key={actor.id} style={styles.actor}>
              <Image
                style={styles.actorImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                }}
                defaultSource={UserIcon}
              />
              <View style={styles.actorInfoWrapper}>
                <Text numberOfLines={1} style={styles.actorName}>
                  {actor.original_name}
                </Text>
                <Text numberOfLines={1} style={styles.charName}>
                  {actor.character}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 10,
  },
  castTitle: {
    color: "#CAC8D2",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 20,
  },
  castLink: {
    // color: "#F27706",
    color: "#8E8F96",
    fontSize: 12,
    marginBottom: 20,
  },
});

export default Cast;
