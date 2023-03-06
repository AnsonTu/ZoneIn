import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { darkGreen } from "../../components/Constants";
import Field from "../../components/Field";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import { auth } from "../../../firebaseConfig";
import {
  getUserInfo,
  addChildProfile,
  getChildProfiles,
  deleteChildProfile,
} from "../../helpers/query";

const PatientProfileList = (props) => {
  const isFocused = useIsFocused();
  const [patients, setPatients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [patientDOB, setPatientDOB] = useState(new Date());
  const [patientSex, setPatientSex] = useState("Male");
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const deleteTimeoutRef = useRef(null);

  const genders = ["Male", "Female"];

  useEffect(() => {
    const getCurrentAccountInfo = async () => {
      let formattedProfiles = [];
      const userInfo = await getUserInfo(auth.currentUser.uid);
      setUserId(userInfo.userId);
      const childProfiles = await getChildProfiles(userInfo.userId);
      for (let i = 0; i < childProfiles.length; i++) {
        formattedProfiles[i] = {
          docId: childProfiles[i].docId,
          id: childProfiles[i].firstName + childProfiles[i].lastName + i,
          firstName: childProfiles[i].firstName,
          lastName: childProfiles[i].lastName,
          sex: childProfiles[i].sex,
          dob: childProfiles[i].dateOfBirth,
        };
      }
      setPatients(formattedProfiles);
    };
    if (isFocused) {
      getCurrentAccountInfo();
    }
  }, [isFocused]);

  const onModalOpen = () => {
    setPatientFirstName("");
    setPatientLastName("");
    setPatientSex("Male");
    setPatientDOB(new Date());
    setIsModalVisible(true);
  };

  const addNewPatient = async () => {
    const newPatient = {
      id: `${patientFirstName}${patientLastName}${patients.length + 1}`,
      name: `${patientFirstName} ${patientLastName}`,
      sex: patientSex,
      dob: patientDOB,
    };
    if (patientFirstName === "" || patientLastName === "") {
      console.error("Missing fields");
    } else if (patientDOB > new Date()) {
      console.error("Invalid date of birth");
    } else {
      await addChildProfile(
        userId,
        patientFirstName,
        patientLastName,
        patientSex,
        patientDOB
      );
      setPatients([...patients, newPatient]);
      setIsModalVisible(false);
    }
  };

  const onDateChange = (event, newDate) => {
    setIsDateModalVisible(false);
    setPatientDOB(newDate);
  };

  const deletePatient = (patientToDelete) => {
    deleteChildProfile(patientToDelete.docId);
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
            onPress={() =>
              props.navigation.navigate("Patient_Info_Profile", {
                patient,
              })
            }
            onLongPress={() => handlePatientTilePress(patient)}
          >
            <Ionicons name="ios-person" size={40} color="#fff" />
            <Text
              style={styles.buttonText}
            >{`${patient.firstName} ${patient.lastName}`}</Text>
            {selectedPatientId === patient.id && showDeleteButton && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deletePatient(patient)}
              >
                <Ionicons name="ios-trash" size={25} color="#fff" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={onModalOpen}>
          <Text style={styles.addButtonText}>Add Child</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Patient</Text>
            <Field
              style={styles.inputField}
              placeholder="First Name"
              value={patientFirstName}
              onChangeText={setPatientFirstName}
            />
            <Field
              style={styles.inputField}
              placeholder="Last Name"
              value={patientLastName}
              onChangeText={setPatientLastName}
            />
            <Text
              style={{
                color: darkGreen,
                fontSize: 15,
              }}
            >
              Date of Birth
            </Text>
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
                {patientDOB.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {isDateModalVisible && (
              <RNDateTimePicker value={patientDOB} onChange={onDateChange} />
            )}
            <Text
              style={{
                color: darkGreen,
                fontSize: 16,
              }}
            >
              Gender
            </Text>
            <SelectDropdown
              data={genders}
              defaultValue={patientSex}
              buttonStyle={{ borderWidth: 2 }}
              onSelect={(selectedItem) => {
                setPatientSex(selectedItem);
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
