import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import Btn from "../../components/Btn";
import { darkGreen } from "../../components/Constants";
import Field from "../../components/Field";
import { onUserResetPassword } from "../../helpers/auth";

const ResetPassword = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [email, setEmail] = useState();

  useEffect(() => {
    const { width, height } = Dimensions.get("screen");
    setScreenWidth(width);
    setScreenHeight(height);
  }, []);

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            width: screenWidth,
            height: screenHeight,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Enter your email to receive a password reset link
          </Text>
          <Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={onEmailChange}
          />
          <View
            style={{
              alignItems: "flex-end",
              paddingTop: 12,
              paddingRight: 16,
              marginBottom: 20,
            }}
          ></View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Reset your password"
            Press={() => onUserResetPassword(email)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
