import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

export default function HeaderBlock({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: bgColor,
        borderRadius: 15,
        width: "100%",
        height: "12%",
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 25, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
      <Image
        source={require("../../assets/arrow.png")}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
}
