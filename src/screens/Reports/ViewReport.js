import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { useIsFocused } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import {
  getUserInfo,
  getChildProfiles,
  getPatientReports,
} from "../../helpers/query";

const ViewReport = (props) => {
  const patientId = props.route.params.selectedPatientId;

  const isFocused = useIsFocused();
  const [patients, setPatients] = useState([]);
  const [selectedValue, setSelectedValue] = useState(patientId);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getCurrentAccountInfo = async () => {
      let formattedProfiles = [];
      const userInfo = await getUserInfo(auth.currentUser.uid);
      const childProfiles = await getChildProfiles(userInfo.userId);
      for (let i = 0; i < childProfiles.length; i++) {
        formattedProfiles[i] = {
          docId: childProfiles[i].docId,
          id: childProfiles[i].firstName + childProfiles[i].lastName + i,
          firstName: childProfiles[i].firstName,
          lastName: childProfiles[i].lastName,
          sex: childProfiles[i].sex,
          dob: childProfiles[i].dateOfBirth,
          label: `${childProfiles[i].firstName} ${childProfiles[i].lastName}`,
          value: childProfiles[i].docId,
        };
      }
      setPatients(formattedProfiles);
    };
    if (isFocused) {
      getCurrentAccountInfo();
    }
  }, [isFocused]);

  const onValueChange = async (value) => {
    setSelectedValue(value);
    if (!!selectedValue) {
      const patientReports = await getPatientReports(selectedValue);
      setReports(patientReports);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              width: 150,
            }}
          >
            <RNPickerSelect
              style={{
                paddingHorizontal: 20,
                fontSize: 20,
                height: "45%",
                width: "78%",
                backgroundColor: "rgb(220,220, 220)",
                marginVertical: 20,
                marginBottom: 10,
              }}
              items={patients}
              placeholder={{
                label: "Select Patient",
                value: null,
              }}
              onValueChange={onValueChange}
              value={selectedValue}
            />
          </View>
          <View style={styles.assessmentsContainer}>
            {reports.map((report, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate("TAFQuizScreen", {
                    score: {
                      inattentive: report.assessmentType[0].inattentive,
                      hyperactive: report.assessmentType[0].hyperactive,
                    },
                    pageNum: 4,
                  })
                }
              >
                <View key={index} style={styles.assessment}>
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={40}
                    color="#83C5BE"
                  />
                  <Text style={styles.assessmentName}>Report {index + 1}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingTop: 30,

    paddingBottom: 20,
  },

  assessmentsContainer: {
    paddingTop: 30,
    width: "100%",

    height: 200,
  },
  assessment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  assessmentName: {
    marginLeft: 20,
    fontSize: 18,
    color: "#333",
  },
});

export default ViewReport;
