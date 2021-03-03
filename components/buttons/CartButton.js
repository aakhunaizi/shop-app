import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cart.items);
  let totalQuantity = 0;
  items.forEach((item) => (totalQuantity += item.quantity));

  return (
    <CartButtonStyled
      type="MaterialCommunityIcons"
      name="cart"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
