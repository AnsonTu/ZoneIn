import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function HeaderBlock1({
  bgColor,
  btnLabel,
  textColor,
  duration,
  Press,
}) {
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
      <View style={{ flexDirection: "column" }}>
        <Text style={{ color: textColor, fontSize: 25, fontWeight: "bold" }}>
          {btnLabel}
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <FontAwesome name="clock-o" size={20} color={textColor} />
          <Text style={{ color: textColor, fontSize: 16, paddingLeft: 8 }}>
            {duration}
          </Text>
        </View>
      </View>
      <Image
        source={require("../../assets/arrow.png")}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
}
