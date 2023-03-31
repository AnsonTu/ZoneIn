import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "react-native-checkbox";
import { darkGreen, green } from "../../components/Constants";
export default function TermsAndConditions(props) {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!checked);
  }

  function handleAgree() {
    props.onAgree(checked);
  }

  return (
    <View style={styles.termsOuterContainer}>
      <View style={styles.termsContainer}>
        <Text style={styles.termsTextHeading}>Terms and Conditions</Text>
        <Text style={styles.termsText}>
          Welcome to ZoneIn! By using this app, you agree to the following terms
          and conditions:
        </Text>
        <Text style={styles.termsText}>
          1. ZoneIn is an ADHD assessment tool designed to be used by parents or
          healthcare providers for the purpose of evaluating the symptoms and
          behaviors of a child with ADHD.
        </Text>
        <Text style={styles.termsText}>
          2. The results of the assessment are not a diagnosis and should not be
          used as a substitute for professional medical advice, diagnosis, or
          treatment.
        </Text>
        <Text style={styles.termsText}>
          3. The information provided through ZoneIn is for educational and
          informational purposes only and should not be relied upon as a
          substitute for professional medical advice, diagnosis, or treatment.
        </Text>
        <Text style={styles.termsText}>
          4. ZoneIn is not responsible for any actions taken by users based on
          the information provided through the app.
        </Text>
        <Text style={styles.termsText}>
          5. The app is not intended for use by individuals under the age of 18.
        </Text>
        <CheckBox
          style={styles.CheckboxText}
          label="I agree to the terms and conditions"
          value={checked}
          onChange={handleCheck}
        />
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[styles.button, !checked && styles.disabledButton]}
            title="Agree"
            onPress={handleAgree}
            disabled={!checked}
          >
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  termsContainer: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    width: "80%",

    flex: 1,
  },
  termsText: {
    paddingBottom: 20,
    fontFamily: "Open Sans",
  },
  termsTextHeading: {
    paddingBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  termsOuterContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: "20%",
    height: "92%",
    paddingBottom: 20,
    fontFamily: "Open Sans",
  },
  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // change the background color for disabled button
    borderColor: "#D3D3D3", // change the border color for disabled button
  },
});
