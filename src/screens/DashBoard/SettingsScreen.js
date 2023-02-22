import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const username = "John Doe";

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
        onPress={() => {
          /* Add code here */
        }}
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
