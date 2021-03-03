import { Body, Button, Left, ListItem, Right } from "native-base";
import React, { useState } from "react";
import { Image, Text } from "react-native";
import { ProductItemStyled } from "../styles";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/actions/cartActions";

const ProductItem = ({ navigation, product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    dispatch(addItemToCart(newItem));
  };

  return (
    <ListItem onPress={() => navigation.navigate("ProductDetail", { product })}>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: product.image }}
        />
      </Left>
      <Body>
        <ProductItemStyled>{product.name}</ProductItemStyled>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          initValue={1}
          totalHeight={40}
          totalWidth={100}
          minValue={1}
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#74c69d"
          leftButtonBackgroundColor="#E56B70"
        />
      </Body>

      <Right>
        <Button
          full
          rounded
          style={{ backgroundColor: "#74c69d" }}
          onPress={handleAdd}
        >
          <Text style={{ color: "white" }}>+</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
