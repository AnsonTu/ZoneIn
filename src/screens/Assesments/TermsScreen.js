import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import Btn from "../../components/Btn";
import { darkGreen } from "../../components/Constants";

const TermsScreen = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Checkbox.Item
        label="I agree to the terms and conditions"
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />

      <Btn
        mode="contained"
        disabled={!checked}
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Login"
        Press={() => props.navigation.navigate("QuizScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default TermsScreen;
