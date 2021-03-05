import { Body, Left, ListItem, Right, Text } from "native-base";
import React from "react";
import { Image } from "react-native";
import { ShopItemStyled, DeleteButtonStyled } from "../styles";
import { useDispatch } from "react-redux";

import { removeItemFromCart } from "../store/actions/cartActions";

const CartItem = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: product.image }}
        />
      </Left>
      <Body>
        <ShopItemStyled>
          <Text>{product.name} </Text>

          <Text note>
            {product.price} BD x {quantity}
          </Text>
          {"\n"}
          {"\n"}
          <Text>{Math.round(product.price * quantity * 100) / 100} BD</Text>
        </ShopItemStyled>
      </Body>
      <Right>
        <DeleteButtonStyled
          type="MaterialCommunityIcons"
          name="delete-circle"
          onPress={() => dispatch(removeItemFromCart(product.id))}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
