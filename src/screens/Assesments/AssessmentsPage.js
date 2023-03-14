import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBlock from "../../components/HeaderBlock";
import { darkGreen } from "../../components/Constants";
import Picker from "react-native-picker-select";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const AssessmentsPage = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const onValueChange = (value) => {
    setSelectedValue(value);
  };
  const patients = [
    { label: "Jane Doe", value: "Jane Doe" },
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 30,
        paddingTop: 50,
      }}
    >
      <View style={{ padding: 10, borderColor: "black", borderWidth: 1 }}>
        <Picker
          style={{
            borderRadius: 100,
            color: darkGreen,
            paddingHorizontal: 20,
            height: "35%",
            width: "78%",
            backgroundColor: "rgb(220,220, 220)",
            marginVertical: 10,
          }}
          items={patients}
          placeholder={{ label: "Select Patient", value: null, color: "red" }}
          onValueChange={onValueChange}
          value={selectedValue}
        />
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 20 }}>
        Forms{" "}
      </Text>

      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="SNAP-IV 26"
        Press={() => props.navigation.navigate("QuizScreen")}
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WSR-II"
        Press={() => props.navigation.navigate("ReportsPage")}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Parents only{" "}
      </Text>
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WFIRS-P"
        Press={() => props.navigation.navigate("WFIRSQuizScreen")}
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Teachers only{" "}
      </Text>
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="TAF"
        Press={() => props.navigation.navigate("TAFQuizScreen")}
      />
    </View>
  );
};

export default AssessmentsPage;
