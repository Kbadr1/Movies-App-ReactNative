import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Categories from "../components/Home/Categories";
import NowPlaying from "../components/Home/NowPlaying";
import Popular from "../components/Home/Popular";
import TopRated from "../components/Home/TopRated";
import Upcoming from "../components/Home/Upcoming";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.home}>
        <Upcoming />
        <Categories />
        <NowPlaying />
        <Popular />
        <TopRated />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#1C1C27",
    flex: 1,
  },
});

export default Home;
