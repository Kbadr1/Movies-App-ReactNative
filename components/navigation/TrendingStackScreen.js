import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trending from "../../screens/Trending";
import Movie from "../../screens/Movie";
import Cast from "../../screens/Cast";
import MoviesList from "../../screens/MoviesList";

const TrendingStack = createNativeStackNavigator();

const TrendingStackScreen = () => {
  return (
    <TrendingStack.Navigator>
      <TrendingStack.Screen
        name="TrendingScreen"
        component={Trending}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
          title: "Trending Movies",
        }}
      />
      <TrendingStack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
        }}
      />
      <TrendingStack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <TrendingStack.Screen
        name="Cast"
        component={Cast}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
    </TrendingStack.Navigator>
  );
};

export default TrendingStackScreen;
