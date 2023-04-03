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
import { darkGreen, green } from "../../components/Constants";

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
          <Text
            style={{
              fontSize: 15,
            }}
          ></Text>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(220, 220, 220)",
              width: "78%",
              borderRadius: 10,
            }}
            onPress={() => setIsDateModalVisible(true)}
          >
            <Text
              style={{
                fontSize: 18,
                color: darkGreen,
                paddingHorizontal: 20,
                marginBottom: 11,
                marginTop: 11,
              }}
            >
              {editedPatientDOB.toISOString().split("T")[0]}
            </Text>
          </TouchableOpacity>
          {isDateModalVisible && (
            <RNDateTimePicker
              style={{
                fontSize: 18,
                paddingVertical: 10,
                color: darkGreen,
                marginBottom: 12,
              }}
              value={editedPatientDOB}
              onChange={onDateChange}
            />
          )}
          <Text
            style={{
              paddingTop: 10,

              fontSize: 16,
              textAlign: "right",
            }}
          ></Text>
          <SelectDropdown
            data={genders}
            defaultValue={editedPatientSex}
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
            buttonStyle={styles.dropdown4RowButtonStyle}
            defaultButtonText={"Pick a Gender"}
            buttonTextStyle={{
              ...styles.dropdownButtonTextStyle,
              textAlign: "left",
              color: darkGreen, // add this line
            }}
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
      <TouchableOpacity
        style={styles.assessTile}
        onPress={() =>
          props.navigation.navigate("CompletedAssesments", {
            selectedPatientId: patient.docId,
          })
        }
      >
        <Text style={styles.assessTileText}>Assessments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.assessTile}
        onPress={() =>
          props.navigation.navigate("ViewReport", {
            selectedPatientId: patient.docId,
          })
        }
      >
        <Text style={styles.assessTileText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "95%",
  },
  assessTile: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    width: "95%",
    height: "8%",

    marginVertical: 10,
    backgroundColor: green,
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  assessTileText: {
    fontWeight: "400",
    padding: 20,
    fontSize: 20,
  },
  patientTile: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    width: "98%",
    height: "15%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: darkGreen,
    marginLeft: 15,
    marginTop: 35,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    paddingLeft: 20,
    color: "white",
  },
  buttonContainer1: {
    flex: 1,
    alignItems: "flex-end",
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
    borderRadius: 10,
    color: darkGreen,
    paddingHorizontal: 20,
    height: "5%",
    width: "78%",
    backgroundColor: "rgb(220,220, 220)",
    marginVertical: 10,
    fontSize: 18,
    fontSize: 18,
  },
  dropdown4RowButtonStyle: {
    borderRadius: 10,
    color: darkGreen,
    height: "5%",
    width: "78%",
    justifyContent: "flex-start",
    backgroundColor: "rgb(220,220, 220)",
  },
  EditPageButton: {
    backgroundColor: green,
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
