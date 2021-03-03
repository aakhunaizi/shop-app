import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cart.items);
  let totalQuantity = 0;
  items.forEach((item) => (totalQuantity += item.quantity));

  return (
    <Button transparent light onPress={() => navigation.navigate("CartList")}>
      <Text style={{ color: "white" }}>{totalQuantity}</Text>
      <CartButtonStyled
        type="MaterialCommunityIcons"
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </Button>
  );
};

export default CartButton;
