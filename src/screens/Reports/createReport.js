import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import RNPickerSelect from "react-native-picker-select";
import { darkGreen, green } from "../../components/Constants";

const CreateReport = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const onValueChange = (value) => {
    setSelectedValue(value);
  };
  const patients = [
    { label: "Jane Doe", value: "Jane Doe" },
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
  ];
  const handleFormSubmit = () => {
    // TODO: Handle form submission
  };

  const onQuestion1Change = (question1) => {
    setQuestion1(question1);
  };

  const onQuestion2Change = (question2) => {
    setQuestion2(question2);
  };
  const onQuestion3Change = (question2) => {
    setQuestion3(question3);
  };
  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 30,
            paddingTop: 50,
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
              style={{ color: "black" }}
              items={patients}
              placeholder={{ label: "Select Patient", value: null }}
              onValueChange={onValueChange}
              value={selectedValue}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 8,
            }}
          >
            Date:
          </Text>

          {
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          }
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              Question 1: What was the setting/environment the child was in?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question1}
              onChangeText={onQuestion1Change}
              style={styles.textInput}
            />
            <Text style={styles.questionText}>
              Question 2: What did the child do?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question2}
              onChangeText={onQuestion2Change}
              style={styles.textInput}
            />
            <Text style={styles.questionText}>
              Question 3: What was the impact of the child’s actions?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question3}
              onChangeText={onQuestion3Change}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 0, // remove border to avoid overlapping with box
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // add width and height to create a box
    width: 330,
    height: 100,
    paddingBottom: 20,
  },

  questionText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 10,
  },

  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingBottom: 100,
  },

  questionContainer: {
    marginTop: 18,
  },
  navigationButtonText: {
    paddingBottom: 50,
  },
  navigationButton: {
    paddingBottom: 50,
  },
  rightButton: {
    marginRight: 8,
    marginLeft: "auto",
  },
  button: {
    marginHorizontal: "35%",
    display: "flex",
    width: "50%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    padding: 10,

    marginTop: 20,
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreateReport;
