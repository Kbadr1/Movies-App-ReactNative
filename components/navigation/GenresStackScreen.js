import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genres from "../../screens/Genres";
import Category from "../../screens/Category";
import MoviesList from "../../screens/MoviesList";
import Cast from "../../screens/Cast";
import Movie from "../../screens/Movie";

const GenresStack = createNativeStackNavigator();

const GenresStackScreen = () => {
  return (
    <GenresStack.Navigator>
      <GenresStack.Screen
        name="GenresScreen"
        component={Genres}
        options={{
          // headerShown: false,
          title: "Genres",
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <GenresStack.Screen
        name="Category"
        component={Category}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <GenresStack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
        }}
      />
      <GenresStack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <GenresStack.Screen
        name="Cast"
        component={Cast}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
    </GenresStack.Navigator>
  );
};

export default GenresStackScreen;
