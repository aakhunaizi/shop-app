import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      type="MaterialCommunityIcons"
      name="cart"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
