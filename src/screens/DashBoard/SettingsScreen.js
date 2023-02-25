import React, { useEffect, useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../../firebaseConfig";
import { onUserSignOut } from "../../helpers/auth";
import { getUserInfo } from "../../helpers/query";

const SettingsPage = (props) => {
  const [username, setUsername] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const getCurrentUserInfo = async () => {
      const userInfo = await getUserInfo(auth.currentUser.uid);
      setUsername(`${userInfo.firstName} ${userInfo.lastName}`);
    };
    getCurrentUserInfo();
  }, []);

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkContainer]}>
      <Text style={[styles.username, darkModeEnabled && styles.darkText]}>
        {username}
      </Text>
      <View style={styles.setting}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>
          Notifications
        </Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>
          Dark Mode
        </Text>
        <Switch value={darkModeEnabled} onValueChange={setDarkModeEnabled} />
      </View>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          /* Add code here */
        }}
      >
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          /* Add code here */
        }}
      >
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>
          Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => onUserSignOut(props.navigation.navigate)}
      >
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  username: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  darkText: {
    color: "#fff",
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsPage;
