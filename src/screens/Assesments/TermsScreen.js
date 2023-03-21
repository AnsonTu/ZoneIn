import React, { useState } from "react";
import { View, Text, Button } from "react-native";
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
      <Text>Terms and Conditions:</Text>
      <CheckBox
        label="I agree to the terms and conditions"
        value={checked}
        onChange={handleCheck}
      />
      <Button title="Proceed" onPress={handleAgree} disabled={!checked} />
    </View>
  );
}
