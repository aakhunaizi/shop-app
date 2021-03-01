import { List, Spinner } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const loading = useSelector((state) => state.products.loading);
  if (loading) return <Spinner color="pink" />;
  //   const products = useSelector((state) => state.products.products);
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <List>{productList}</List>;
};

export default ProductList;
