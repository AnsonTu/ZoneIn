import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CompletedAssesments = () => {
  const [searchText, setSearchText] = useState("");
  const [tab, setTab] = useState("all");

  const assessments = [
    { name: "Assessment 1", status: "completed" },
    { name: "Assessment 2", status: "in-progress" },
    { name: "Assessment 3", status: "completed" },
    { name: "Assessment 4", status: "all" },
    { name: "Assessment 5", status: "completed" },
  ];

  const filteredAssessments = assessments.filter(
    (assessment) =>
      tab === "all" ||
      assessment.status === tab ||
      (searchText !== "" && assessment.name.includes(searchText))
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="ios-search"
          size={20}
          color="#333"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search completed assessments"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.tabContainer}>
        <Text
          style={[styles.tab, tab === "completed" && styles.activeTab]}
          onPress={() => setTab("completed")}
        >
          Completed
        </Text>
        <Text
          style={[styles.tab, tab === "in-progress" && styles.activeTab]}
          onPress={() => setTab("in-progress")}
        >
          In Progress
        </Text>
        <Text
          style={[styles.tab, tab === "all" && styles.activeTab]}
          onPress={() => setTab("all")}
        >
          All
        </Text>
      </View>
      <ScrollView style={styles.assessmentsContainer}>
        {filteredAssessments.map((assessment, index) => (
          <View key={index} style={styles.assessment}>
            <Ionicons name="ios-checkmark-circle" size={50} color="#333" />
            <Text style={styles.assessmentName}>{assessment.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarInput: {
    flex: 1,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  assessmentContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  assessmentIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});

export default CompletedAssesments;
