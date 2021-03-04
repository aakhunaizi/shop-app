import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ProductDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "pink",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          headerTitle: "Shops",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
          };
        }}
      />
      <Screen
        options={{ title: "Cart" }}
        name="CartList"
        component={CartList}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
