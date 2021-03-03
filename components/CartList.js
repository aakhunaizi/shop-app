import React from "react";

import { View, Spinner, List } from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Text } from "react-native";
import { TopStyling, CheckoutButton, CheckoutButtonText } from "../styles";
import { checkout } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

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
      <CheckoutButton onPress={() => dispatch(checkout())}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </View>
  );
};

export default CartList;
