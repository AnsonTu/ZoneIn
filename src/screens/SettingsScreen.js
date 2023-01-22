import * as React from "react";
import { View, Text } from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { darkGreen, green } from "../components/Constants";

const SettingsScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Settings Screen
      </Text>
    </View>
  );
};

export default SettingsScreen;
