import { ListItem } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import { ShopItemStyled } from "../styles";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <ShopItemStyled>
        {product.name}
        {"\n"}
        {"\n"}
        <Text style={{ color: "red" }}> {product.price} BD</Text>
      </ShopItemStyled>
    </ListItem>
  );
};

export default ProductItem;
