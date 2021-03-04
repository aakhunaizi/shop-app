import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  AsyncStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      AsyncStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      navigation.replace("CartList");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (user, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      AsyncStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  AsyncStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("token");
      dispatch(signout());
    }
  }
};
