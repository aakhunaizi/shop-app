import { Button } from "native-base";
import React from "react";

// Styling
import { ImageBackground, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Cookies & Beyond</Text>
      <Button onPress={() => alert("No cookies for you :(")}>
        <Text style={{ color: "white" }}> Fetch Cookies 🍪 </Text>
      </Button>
    </View>
  );
};

export default Home;
