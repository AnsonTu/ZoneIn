import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { green } from "../components/Constants";

const PatientProfile = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jim Smith" },
  ]);

  return (
    <View style={styles.container}>
      {patients.map((patient) => (
        <TouchableOpacity
          key={patient.id}
          style={styles.patientTile}
          onPress={() => {}}
        >
          <Ionicons name="ios-person" size={40} color="#fff" />
          <Text style={styles.buttonText}>{patient.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => {}}>
        <Text style={styles.addButtonText}>Add Child</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  patientTile: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
    height: "15%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#83C5BE",

    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  addButton: {
    backgroundColor: "#006D77",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: "100%",
  },
  addButtonText: {
    fontSize: 20,
    color: "white",
  },
});

export default PatientProfile;
