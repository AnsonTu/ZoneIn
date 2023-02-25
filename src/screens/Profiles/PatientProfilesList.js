import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../components/Btn";
import { darkGreen } from "../../components/Constants";
import Field from "../../components/Field";

const PatientProfileList = (props) => {
  const [patients, setPatients] = useState([{ id: 1, name: "John Doe" }]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPatientFirstName, setNewPatientFirstName] = useState("");
  const [newPatientLastName, setNewPatientLastName] = useState("");
  const [newPatientAge, setNewPatientAge] = useState("");
  const [newPatientDOB, setNewPatientDOB] = useState("");
  const [newPatientSex, setNewPatientSex] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const deleteTimeoutRef = useRef(null);

  const addNewPatient = () => {
    const newPatient = {
      id: patients.length + 1,
      name: `${newPatientFirstName} ${newPatientLastName}`,
      age: newPatientAge,
      dob: newPatientDOB,
      sex: newPatientSex,
    };
    setPatients([...patients, newPatient]);
    setNewPatientFirstName("");
    setNewPatientLastName("");
    setNewPatientAge("");
    setNewPatientDOB("");
    setNewPatientSex("");
    setIsModalVisible(false);
  };

  const deletePatient = () => {
    const updatedPatients = patients.filter((p) => p.id !== selectedPatientId);
    setPatients(updatedPatients);
    setSelectedPatientId(null);
    setShowDeleteButton(false);
  };

  const handlePressOutsidePatientTiles = () => {
    setSelectedPatientId(null);
    setShowDeleteButton(false);
    if (deleteTimeoutRef.current) {
      clearTimeout(deleteTimeoutRef.current);
    }
  };

  const handlePatientTilePress = (patient) => {
    setSelectedPatientId(patient.id);
    setShowDeleteButton(false);
    if (deleteTimeoutRef.current) {
      clearTimeout(deleteTimeoutRef.current);
    }
    deleteTimeoutRef.current = setTimeout(() => {
      setShowDeleteButton(true);
    }, 1000);
  };

  const navigateToAnotherFile = () => {
    // Do something when navigating to another file
    console.log("Navigating to another file...");
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOutsidePatientTiles}>
      <View style={styles.container}>
        {patients.map((patient) => (
          <TouchableOpacity
            key={patient.id}
            style={styles.patientTile}
            onPress={() => props.navigation.navigate("Patient_Info_Profile")}
            onLongPress={() => handlePatientTilePress(patient)}
          >
            <Ionicons name="ios-person" size={40} color="#fff" />
            <Text style={styles.buttonText}>{patient.name}</Text>
            {selectedPatientId === patient.id && showDeleteButton && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={deletePatient}
              >
                <Ionicons name="ios-trash" size={25} color="#fff" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Child</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Patient</Text>
            <Field
              style={styles.inputField}
              placeholder="First Name"
              value={newPatientFirstName}
              onChangeText={setNewPatientFirstName}
            />
            <Field
              style={styles.inputField}
              placeholder="Last Name"
              value={newPatientLastName}
              onChangeText={setNewPatientLastName}
            />
            <Field
              style={styles.inputField}
              placeholder="Age"
              value={newPatientAge}
              onChangeText={setNewPatientAge}
            />
            <Field
              style={styles.inputField}
              placeholder="Date of Birth"
              value={newPatientDOB}
              onChangeText={setNewPatientDOB}
            />
            <Field
              style={styles.inputField}
              placeholder="Sex"
              value={newPatientSex}
              onChangeText={setNewPatientSex}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={addNewPatient}
              >
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: "#83C5BE",
    borderRadius: 15,
    width: "100%",
    height: "15%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  addButton: {
    backgroundColor: "#006D77",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: "100%",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    maxWidth: 400,
    maxHeight: "80%",
    padding: 20,
    width: "90%",
  },
  modalButtons: {
    padding: 20,
    flexDirection: "row",
  },
  modalButton: {
    padding: 20,
    justifyContent: "center",
    width: 150,
  },
  modalButtonText: { borderWidth: 2, padding: 15 },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  inputField: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 3,
    color: "black",
    padding: 10,
    width: "100%",
  },
  input: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 3,
    fontSize: 16,
    padding: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  saveButton: {
    backgroundColor: "#83C5BE",
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default PatientProfileList;
