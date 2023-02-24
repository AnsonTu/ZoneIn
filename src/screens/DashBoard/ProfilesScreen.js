import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { auth } from "../../../firebaseConfig";
import { getUserInfo, updateUserInfo } from "../../helpers/query";
import * as ImagePicker from "expo-image-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const ProfilesScreen = () => {
  const [documentId, setDocumentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(auth.currentUser.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState(new Date());
  const [profileImage, setProfileImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [document, setDocument] = useState(null);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);

  useEffect(() => {
    const getCurrentUserInfo = async () => {
      const userInfo = await getUserInfo(auth.currentUser.uid);
      console.log(userInfo);
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

  const handleUploadDocument = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setDocument(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image style={styles.profileImage} source={{ uri: profileImage }} />
          ) : (
            <Text>{`${firstName} ${lastName}`}</Text>
          )}
        </View>
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
          <>
            <TouchableOpacity onPress={() => setIsDateModalVisible(true)}>
              <Text
                style={{
                  backgroundColor: "rgb(220, 220, 220)",
                  fontSize: 16,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                  borderRadius: 25,
                }}
              >
                {DOB.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {isDateModalVisible && (
              <RNDateTimePicker value={DOB} onChange={onDateChange} />
            )}
          </>
        ) : (
          <Text style={styles.text}>{DOB.toISOString().split("T")[0]}</Text>
        )}

        <Text style={styles.label}>Upload Document </Text>
        <TouchableOpacity style={styles.button} onPress={handleUploadDocument}>
          <Text>Click here to upload</Text>
        </TouchableOpacity>
        {document && <Image source={{ uri: document }} style={styles.image} />}

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
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: "50%",
    backgroundColor: "gray",
    color: "white",
    paddingLeft: 20,
    padding: 10,
    textAlign: "center",
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default ProfilesScreen;
