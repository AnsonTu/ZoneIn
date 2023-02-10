import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const DocumentUploadPage = () => {
  const [image, setImage] = useState(null);

  const handleCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionAsync();
    if (cameraPermission) {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const handleFile = async () => {
    const filePermission = await ImagePicker.requestCameraRollPermissionAsync();
    if (filePermission) {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upload Report</Text>
      </View>
      {image && (
        <View style={styles.selectedImageContainer}>
          <Image source={{ uri: image }} style={styles.selectedImage} />
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCamera}>
          <Ionicons name="md-camera" size={32} color="#000" />
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFile}>
          <Ionicons name="md-image" size={32} color="#000" />
          <Text style={styles.buttonText}>Choose a File</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectedImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  selectedImage: {
    width: "80%",
    height: 200,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    marginTop: 10,
  },
  selectedImage: {
    width: "100%",
    height: 300,
  },
});

export default DocumentUploadPage;
