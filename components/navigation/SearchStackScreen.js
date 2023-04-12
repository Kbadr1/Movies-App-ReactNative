import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";
import Movie from "../../screens/Movie";
import Cast from "../../screens/Cast";

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
        }}
      />
      <SearchStack.Screen
        name="Cast"
        component={Cast}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
