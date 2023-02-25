import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { green } from "../components/Constants";

const Patient_Info_Profile = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 30 },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedPatientName, setEditedPatientName] = useState("");
  const [editedPatientAge, setEditedPatientAge] = useState("");

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditedPatientName(patient.name);
    setEditedPatientAge(patient.age.toString());
    setEditModalVisible(true);
  };

  const handleSave = () => {
    const editedPatient = {
      ...selectedPatient,
      name: editedPatientName,
      age: parseInt(editedPatientAge),
    };
    const updatedPatients = patients.map((patient) =>
      patient.id === editedPatient.id ? editedPatient : patient
    );
    setPatients(updatedPatients);
    setEditModalVisible(false);
  };

  const handleCancel = () => {
    setEditedPatientName("");
    setEditedPatientAge("");
    setSelectedPatient(null);
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {patients.map((patient) => (
        <TouchableOpacity
          key={patient.id}
          style={styles.patientTile}
          onPress={() => handleEdit(patient)}
        >
          <Ionicons name="ios-person" size={40} color="#fff" />
          <Text style={styles.buttonText}>{patient.name}</Text>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity onPress={() => handleEdit(patient)}>
              <Ionicons name="ios-create" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Patient</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={editedPatientName}
            onChangeText={setEditedPatientName}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={editedPatientAge}
            onChangeText={setEditedPatientAge}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.EditPageButton}
              onPress={handleCancel}
            >
              <Text style={styles.EditPageButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.EditPageButton}
              onPress={handleSave}
            >
              <Text style={styles.EditPageButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  buttonContainer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  EditPageButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  EditPageButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Patient_Info_Profile;
