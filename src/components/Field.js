import React from "react";
import { TextInput } from "react-native";
import { darkGreen } from "./Constants";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: darkGreen,
        paddingHorizontal: 20,
        height: "5%",
        width: "78%",
        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 10,
        fontSize: 18,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
