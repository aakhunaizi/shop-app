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

export const ProductItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
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

export const SignoutButtonStyled = styled(Button)`
  font-size: 30px;
  margin: 0 auto;
  margin-top: 5%;
  background-color: rgb(255, 182, 193);
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

export const DeleteButtonStyled = styled(Icon)`
  color: red;
  margin-right: 10px;
  font-size: 30px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: rgb(255, 182, 193);
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: rgb(255, 182, 193);
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: rgb(255, 182, 193);
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: rgb(255, 182, 193);
  border-bottom-color: rgb(255, 182, 193);
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: rgb(255, 182, 193);
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: rgb(255, 182, 193);
  margin-top: 15px;
`;
