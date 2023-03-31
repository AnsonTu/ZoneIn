import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { darkGreen } from "../../components/Constants";

const ViewReport = () => {
  const [tab, setTab] = useState("completed");
  const [selectedValue, setSelectedValue] = useState(null);

  const assessments = [
    { name: "Report 1" },
    { name: "Report 2" },
    { name: "Report 3" },
    { name: "Report 4" },
    { name: "Report 5" },
  ];

  const patients = [
    { label: "Jane Doe", value: "Jane Doe" },
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
  ];

  const onValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              width: 150,
            }}
          >
            <RNPickerSelect
              style={{
                paddingHorizontal: 20,
                fontSize: 20,
                height: "45%",
                width: "78%",
                backgroundColor: "rgb(220,220, 220)",
                marginVertical: 20,
                marginBottom: 10,
              }}
              items={patients}
              placeholder={{
                label: "Select Patient",
                value: null,
              }}
              onValueChange={onValueChange}
              value={selectedValue}
            />
          </View>
          <View style={styles.assessmentsContainer}>
            {assessments.map((assessment, index) => (
              <View key={index} style={styles.assessment}>
                <Ionicons
                  name="ios-checkmark-circle"
                  size={40}
                  color="#83C5BE"
                />
                <Text style={styles.assessmentName}>{assessment.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingTop: 30,

    paddingBottom: 20,
  },

  assessmentsContainer: {
    paddingTop: 30,
    width: "100%",

    height: 200,
  },
  assessment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  assessmentName: {
    marginLeft: 20,
    fontSize: 18,
    color: "#333",
  },
});

export default ViewReport;
