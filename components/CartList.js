import React from "react";

import { View, Spinner, List } from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Alert, Text } from "react-native";
import { TopStyling, CheckoutButton, CheckoutButtonText } from "../styles";
import { checkout } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();

  const handlePress = () => {
    if (user) dispatch(checkout());
    else {
      Alert.alert(
        "Sign In",
        "You must sign in to checkout ",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "Sign in", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  if (loading) return <Spinner />;

  const cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((product) => (
      <CartItem
        product={product}
        key={product.id}
        quantity={product.quantity}
      />
    ));

  if (cartList.length === 0)
    return (
      <TopStyling>
        <Text>Your cart is empty 😔</Text>
      </TopStyling>
    );
  return (
    <View>
      <List>{cartList}</List>
      <CheckoutButton onPress={handlePress}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </View>
  );
};

export default CartList;
