import { ListItem, Text } from "native-base";
import React from "react";
import { Image } from "react-native";
import { ShopItemStyled } from "../styles";

const CartItem = ({ product, quantity }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{ uri: product.image }}
      />
      <ShopItemStyled>
        <Text>Price: {product.price} BD </Text>
        {"\n"}
        <Text>Quantity: {quantity}</Text>
        {"\n"}
        {"\n"}
        <Text>Total: {product.price * quantity} BD</Text>
      </ShopItemStyled>
    </ListItem>
  );
};

export default CartItem;
