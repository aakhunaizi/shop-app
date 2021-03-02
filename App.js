import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import store from "./store";
import RootNavigator from "./components/Navigation";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgba(255, 182, 193, 0.4)",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
