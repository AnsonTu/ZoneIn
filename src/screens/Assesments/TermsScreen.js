import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "react-native-checkbox";

export default function TermsAndConditions(props) {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!checked);
  }

  function handleAgree() {
    props.onAgree(checked);
  }

  return (
    <View>
      <Text>*Terms and Conditions Box*</Text>
      <CheckBox
        label="Terms and Conditions"
        value={checked}
        onChange={handleCheck}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.button, styles.disabledButton]}
          title="Agree"
          onPress={handleAgree}
          disabled={!checked}
        >
          <Text style={styles.buttonText}>Agree</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    padding: 30,
  },

  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#BFDCE5",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // change the background color for disabled button
    borderColor: "#D3D3D3", // change the border color for disabled button
  },
});
