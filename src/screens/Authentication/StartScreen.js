import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "../../components/Background";
import Btn from "../../components/Btn";
import { darkGreen, green } from "../../components/Constants";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const StartScreen = (props) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      props.navigation.navigate("Dashboard");
    }
  });

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>i-Care</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 60 }}>
          ZoneIn
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default StartScreen;
