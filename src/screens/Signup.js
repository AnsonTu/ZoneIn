import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { darkGreen } from "../components/Constants";
import Field from "../components/Field";
import { onUserSignUp } from "../helpers/auth";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFirstNameChange = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const onLastNameChange = (newLastName) => {
    setLastName(newLastName);
  };

  const onAgeChange = (newAge) => {
    setAge(newAge);
  };

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const onConfirmPasswordChange = (newConfirmPassword) => {
    setConfirmPassword(newConfirmPassword);
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width: "95%" }}>
        <Text
          style={{
            padding: 10,
            color: "white",
            fontSize: 45,
            fontWeight: "bold",
            marginTop: "10%",
          }}
        >
          Register
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: darkGreen,
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Create a new account
          </Text>
          <Field placeholder="First Name" onChangeText={onFirstNameChange} />
          <Field placeholder="Last Name" onChangeText={onLastNameChange} />
          <Field
            placeholder="Age"
            keyboardType={"number"}
            onChangeText={onAgeChange}
          />
          <Field
            placeholder="Email Address"
            keyboardType={"email-address"}
            onChangeText={onEmailChange}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onPasswordChange}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={onConfirmPasswordChange}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingTop: 20,
              paddingRight: 16,
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>
              {"   "} By signing in, you agree to our{" "}
            </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Terms &{" "}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Conditions
            </Text>
            <Text style={{ color: "grey", fontSize: 16 }}> and </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() =>
              onUserSignUp(
                firstName,
                lastName,
                age,
                email,
                password,
                confirmPassword,
                props.navigation.navigate
              )
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
              Already have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
