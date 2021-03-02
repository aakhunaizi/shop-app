import { Content, List, Spinner } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shops.shops);
  const loading = useSelector((state) => state.shops.loading);
  if (loading) return <Spinner color="pink" />;
  const shopList = shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return <List>{shopList}</List>;
};

export default ShopList;
