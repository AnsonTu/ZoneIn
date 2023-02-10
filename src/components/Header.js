import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "10%",
        paddingBottom: "5%",
        padding: "5%",
        color: "black",
        backgroundColor: "grey",
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={28} color="green" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 40,
          alignItems: "center",
          color: "black",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
