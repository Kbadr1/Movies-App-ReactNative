import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as SB } from "react-native";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={[styles.container, { paddingTop: SB.currentHeight }]}>
        <StatusBar style="light" />
        <BottomTabNavigator />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C27",
  },
});
