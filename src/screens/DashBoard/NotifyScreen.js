import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  {
    id: 1,
    title: "Notification 1",
    description: "This is the description for notification 1",
  },
  {
    id: 2,
    title: "Notification 2",
    description: "This is the description for notification 2",
  },
  {
    id: 3,
    title: "Notification 3",
    description: "This is the description for notification 3",
  },
  // Add more notifications here
];

const NotifyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notification}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-notifications" size={32} color="grey" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  notification: {
    marginBottom: 20,
    flexDirection: "row",
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
});

export default NotifyScreen;
