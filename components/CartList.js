import React from "react";

import { View, Spinner, List } from "native-base";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

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

  return (
    <View>
      <List>{cartList}</List>
    </View>
  );
};

export default CartList;
