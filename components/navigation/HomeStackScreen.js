import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cast from "../../screens/Cast";
import Category from "../../screens/Category";
import Home from "../../screens/Home";
import Movie from "../../screens/Movie";
import MoviesList from "../../screens/MoviesList";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
        }}
      />
      <HomeStack.Screen
        name="Category"
        component={Category}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <HomeStack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
      <HomeStack.Screen
        name="Cast"
        component={Cast}
        options={{
          headerStyle: {
            backgroundColor: "#282838",
          },
          headerTintColor: "#CAC8D2",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
