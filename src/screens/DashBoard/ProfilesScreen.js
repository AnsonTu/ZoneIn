import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { auth } from "../../../firebaseConfig";
import { getUserInfo, updateUserInfo } from "../../helpers/query";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { darkGreen } from "../../components/Constants";

const ProfilesScreen = () => {
  const [documentId, setDocumentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(auth.currentUser.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);

  useEffect(() => {
    const getCurrentUserInfo = async () => {
      const userInfo = await getUserInfo(auth.currentUser.uid);
      setDocumentId(userInfo.docId);
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setPhoneNumber(userInfo.phoneNumber);
      setDOB(new Date(userInfo.dateOfBirth.seconds * 1000));
    };
    getCurrentUserInfo();
  }, []);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const onFirstNameChange = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const onLastNameChange = (newLastName) => {
    setLastName(newLastName);
  };

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const onDateChange = (event, newDate) => {
    setIsDateModalVisible(false);
    setDOB(newDate);
  };

  const handleSave = async () => {
    setEditMode(false);
    await updateUserInfo(
      documentId,
      firstName,
      lastName,
      email,
      phoneNumber,
      DOB
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={styles.profileNameContainer}
        >{`${firstName} ${lastName}`}</Text>

        <Text style={styles.label}>First Name</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={onFirstNameChange}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{firstName}</Text>
        )}
        <Text style={styles.label}>Last Name</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={onLastNameChange}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{lastName}</Text>
        )}
        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{email}</Text>
        )}
        <Text style={styles.label}>Phone Number (Optional) </Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={onPhoneNumberChange}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{phoneNumber}</Text>
        )}

        <Text style={styles.label}>Date of Birth </Text>
        {editMode ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => setIsDateModalVisible(true)}>
              <Text
                style={{
                  backgroundColor: "rgb(220, 220, 220)",
                  fontSize: 16,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              >
                {DOB.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {isDateModalVisible && (
              <RNDateTimePicker value={DOB} onChange={onDateChange} />
            )}
          </View>
        ) : (
          <Text style={styles.text}>{DOB.toISOString().split("T")[0]}</Text>
        )}

        {editMode ? (
          <Button title="Save" onPress={handleSave} />
        ) : (
          <Button title="Edit" onPress={handleEdit} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  profileNameContainer: {
    alignItems: "center",
    marginBottom: 20,
    fontSize: 24,
    paddingHorizontal: "20%",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    fontSize: 18,
    borderRadius: 10,
    color: darkGreen,
    paddingHorizontal: 20,
    height: 40,
    width: "90%",
    backgroundColor: "rgb(220,220, 220)",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    paddingTop: 7,
    borderRadius: 20,
    color: darkGreen,
    paddingHorizontal: 20,
    height: 40,
    width: "90%",
    backgroundColor: "rgb(220,220, 220)",
    marginVertical: 10,
  },
});

export default ProfilesScreen;
