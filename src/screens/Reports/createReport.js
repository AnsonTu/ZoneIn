import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import Picker from "react-native-picker-select";
import { darkGreen } from "../../components/Constants";

const CreateReport = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
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
  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

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

      <Text>Date:</Text>

      {
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      }
      <Text>Question 1:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={question1}
        onChangeText={onQuestion1Change}
        style={{
          width: "100%",
          height: "15%",
          borderColor: "gray",
          borderWidth: 2,
        }}
      />
      <Text>Question 2:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={question2}
        onChangeText={onQuestion2Change}
        style={{
          width: "100%",
          height: "15%",
          borderColor: "gray",
          borderWidth: 2,
        }}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40%",
    paddingBottom: "40%",
    paddingHorizontal: "2%",
    width: "100%",
    height: "50%",
  },
  scrollView: {
    backgroundColor: "gray",
    marginHorizontal: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
    padding: 10,
  },
  closeModalBtn: {
    position: "absolute",
    top: "10%",
    right: 10,
  },
});

export default CreateReport;
