import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Btn from "../../components/Btn";
import { darkGreen } from "../../components/Constants";
import Field from "../../components/Field";
import { onUserSignIn } from "../../helpers/auth";

const Login = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const { width, height } = Dimensions.get("screen");
    setScreenWidth(width);
    setScreenHeight(height);
  }, []);

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPasswordChange = (newPassword) => {
    setPassword(newPassword);
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
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType="email-address"
            onChangeText={onEmailChange}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onPasswordChange}
          />
          <View
            style={{
              alignItems: "flex-end",
              paddingTop: 12,
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              onPress={() => props.navigation.navigate("ResetPassword")}
            >
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() =>
              onUserSignIn(email, password, props.navigation.navigate)
            }
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
