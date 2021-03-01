import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ShopDetail from "./components/ShopDetail";
import ShopList from "./components/ShopList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Home /> */}
        {/* <ShopList /> */}
        {/* <ProductList /> */}
        <ShopDetail />
        <StatusBar style="auto" />
      </View>
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
