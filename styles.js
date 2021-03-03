import { Button, Icon } from "native-base";
import styled from "styled-components/native";

export const ShopItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ShopDetailWrapper = styled.View`
  margin-top: 50px;
`;

export const ShopDetailImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin: 0 auto;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  margin: 0 auto;
`;

export const BottomStyling = styled.View`
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled(Button)`
  font-size: 30px;
  background-color: rgb(255, 182, 193);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(219, 112, 147, 0.2);
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const CartButtonStyled = styled(Icon)`
  color: white;
  margin-right: 10px;
`;
