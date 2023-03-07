import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { updateChildProfile } from "../../helpers/query";

const Patient_Info_Profile = (props) => {
  const { params } = props.route;
  const patientInfo = params.patient;
  const [patient, setPatient] = useState({
    docId: patientInfo.docId,
    id: patientInfo.id,
    firstName: patientInfo.firstName,
    lastName: patientInfo.lastName,
    sex: patientInfo.sex,
    dob: patientInfo.dob.seconds * 1000,
  });
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [editedPatientFirstName, setEditedPatientFirstName] = useState(
    patientInfo.firstName
  );
  const [editedPatientLastName, setEditedPatientLastName] = useState(
    patientInfo.lastName
  );
  const [editedPatientSex, setEditedPatientSex] = useState(patientInfo.sex);
  const [editedPatientDOB, setEditedPatientDOB] = useState(new Date());

  const genders = ["Male", "Female"];

  const onDateChange = (event, newDate) => {
    setIsDateModalVisible(false);
    setEditedPatientDOB(newDate);
  };

  const handleEdit = (patient) => {
    setEditedPatientFirstName(patient.firstName);
    setEditedPatientLastName(patient.lastName);
    setEditedPatientDOB(new Date(patient.dob));
    setEditModalVisible(true);
  };

  const handleSave = async () => {
    const editedPatient = {
      ...patient,
      firstName: editedPatientFirstName,
      lastName: editedPatientLastName,
      sex: editedPatientSex,
      dob: editedPatientDOB,
    };
    setPatient(editedPatient);
    await updateChildProfile(editedPatient);
    setEditModalVisible(false);
  };

  const handleCancel = () => {
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={patient.id}
        style={styles.patientTile}
        onPress={() => handleEdit(patient)}
      >
        <Ionicons name="ios-person" size={40} color="#fff" />
        <Text
          style={styles.buttonText}
        >{`${patient.firstName} ${patient.lastName}`}</Text>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress={() => handleEdit(patient)}>
            <Ionicons name="ios-create" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Patient</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={editedPatientFirstName}
            onChangeText={setEditedPatientFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={editedPatientLastName}
            onChangeText={setEditedPatientLastName}
          />
          <TouchableOpacity
            style={{
              width: "78%",
            }}
            onPress={() => setIsDateModalVisible(true)}
          >
            <Text
              style={{
                backgroundColor: "rgb(220, 220, 220)",
                fontSize: 15,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 12,
                borderRadius: 25,
              }}
            >
              {editedPatientDOB.toISOString().split("T")[0]}
            </Text>
          </TouchableOpacity>
          {isDateModalVisible && (
            <RNDateTimePicker
              value={editedPatientDOB}
              onChange={onDateChange}
            />
          )}
          <SelectDropdown
            data={genders}
            defaultValue={editedPatientSex}
            buttonStyle={{ borderWidth: 2 }}
            onSelect={(selectedItem) => {
              setEditedPatientSex(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return item;
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown4DropdownStyle}
            rowStyle={styles.dropdown4RowStyle}
            rowTextStyle={styles.dropdown4RowTxtStyle}
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
    marginTop: "2%",
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
    margin: 5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  EditPageButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Patient_Info_Profile;
