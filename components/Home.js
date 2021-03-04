import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  SignoutButtonStyled,
  Title,
  TopStyling,
} from "../styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);

  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri:
          "https://i.pinimg.com/736x/2e/86/93/2e869393eb92b8d2f368d827de7652be.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Cookies & Beyond</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            title="Enter"
            onPress={() => navigation.navigate("ShopList")}
          >
            <Text style={{ color: "white" }}>Enter</Text>
          </ButtonStyled>
          {user && (
            <SignoutButtonStyled onPress={() => dispatch(signout())}>
              <Text style={{ color: "white" }}>Sign Out</Text>
            </SignoutButtonStyled>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
