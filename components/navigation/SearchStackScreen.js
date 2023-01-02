import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";
import Movie from "../../screens/Movie";

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
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
