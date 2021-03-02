import { Card, CardItem, Content, Spinner } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: product.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text style={{ color: "black" }}>{product.description}</Text>
        </CardItem>
        <CardItem>
          <Text
            style={{
              color: "#f23f75",
            }}
          >
            {product.price} BD
          </Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default ProductDetail;
