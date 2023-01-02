import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchStackScreen from "./SearchStackScreen";
import TrendingStackScreen from "./TrendingStackScreen";
import GenresStackScreen from "./GenresStackScreen";
import HomeStackScreen from "./HomeStackScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Trending") {
              iconName = focused ? "trending-up-sharp" : "trending-up-outline";
            } else if (route.name === "Genres") {
              iconName = focused ? "list-sharp" : "list-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#F27706",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#292933",
            borderTopWidth: 0,
            height: 55,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 12,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Genres"
          component={GenresStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
