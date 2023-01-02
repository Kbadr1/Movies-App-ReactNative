import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as SB } from "react-native";
import MoviesContextProvider from "./context/MoviesContext";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator";

export default function App() {
  return (
    <MoviesContextProvider>
      <View style={[styles.container, { paddingTop: SB.currentHeight }]}>
        <StatusBar style="light" />
        <BottomTabNavigator />
      </View>
    </MoviesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C27",
  },
});
