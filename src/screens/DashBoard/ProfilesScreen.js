import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";

const ProfilesScreen = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [profileImage, setProfileImage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setEditMode(false);
    // save changes to the database or API here
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        {profileImage ? (
          <Image style={styles.profileImage} source={{ uri: profileImage }} />
        ) : (
          <Text>Add Profile Image</Text>
        )}
      </View>
      <Text style={styles.label}>Username</Text>
      {editMode ? (
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
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
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      ) : (
        <Text style={styles.text}>{email}</Text>
      )}

      {editMode ? (
        <Button title="Save" onPress={handleSave} />
      ) : (
        <Button title="Edit" onPress={handleEdit} />
      )}
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
  },
});

export default ProfilesScreen;
