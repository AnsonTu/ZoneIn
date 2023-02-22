import React, { useState } from "react";
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
import * as ImagePicker from "expo-image-picker";

const ProfilesScreen = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("6477046890");
  const [DOB, setDOB] = useState("16-11-2000");
  const [profileImage, setProfileImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [document, setDocument] = useState(null);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const onUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const onDOBChange = (newDOB) => {
    setDOB(newDOB);
  };

  const handleSave = () => {
    setEditMode(false);
    // save changes to the database or API here
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
            <Text>John Doe</Text>
          )}
        </View>
        <Text style={styles.label}>Username</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={onUsernameChange}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{username}</Text>
        )}
        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onEmailChange}
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
          <TextInput
            style={styles.input}
            value={DOB}
            onChangeText={onDOBChange}
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.text}>{DOB}</Text>
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
