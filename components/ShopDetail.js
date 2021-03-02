import { Content, Spinner } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const loading = useSelector((state) => state.shops.loading);
  const shop = useSelector((state) => state.shops.shops[1]);

  const products = useSelector((state) => state.products.products);

  if (loading) return <Spinner color="pink" />;

  const shopProducts = shop.products.map((product) =>
    products.find((_product) => product.id === _product.id)
  );

  return (
    <Content>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
        <ProductList products={shopProducts} />
      </ShopDetailWrapper>
    </Content>
  );
};

export default ShopDetail;
