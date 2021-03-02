import React from "react";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";

const Home = () => {
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
          <ButtonStyled onPress={() => alert("No cookies for you :(")}>
            Fetch Cookies 🍪
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
