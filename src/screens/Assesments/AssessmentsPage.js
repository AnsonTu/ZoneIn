import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

import HeaderBlock1 from "../../components/HeaderBlock1";

import { darkGreen } from "../../components/Constants";
import RNPickerSelect from "react-native-picker-select";
import { useIsFocused } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import { getUserInfo, getChildProfiles } from "../../helpers/query";

const AssessmentsPage = (props) => {
  const isFocused = useIsFocused();
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const getPatients = async () => {
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
          value: `${childProfiles[i].firstName} ${childProfiles[i].lastName}`,
        };
      }
      setUserId(userInfo.userId);
      setUserRole(userInfo.role);
      setPatients(formattedProfiles);
    };
    if (isFocused) {
      getPatients();
    }
  }, [isFocused]);

  const onValueChange = (value) => {
    setSelectedPatient(value);
  };
  const isPatientSelected = (assessmentRoute) => {
    if (selectedPatient) {
      const selectedPatientInfo = patients.filter(
        (p) => p.label === selectedPatient
      );
      if (assessmentRoute === "TAFQuizScreen" && userRole !== "Teacher") {
        Alert.alert(
          "Error",
          "Only teachers can complete this assessment",
          [{ text: "OK" }],
          {
            cancelable: false,
          }
        );
      } else if (
        assessmentRoute === "WFIRSQuizScreen" &&
        userRole !== "Parent"
      ) {
        Alert.alert(
          "Error",
          "Only parents can complete this assessment",
          [{ text: "OK" }],
          {
            cancelable: false,
          }
        );
      } else {
        props.navigation.navigate(assessmentRoute, {
          userId: userId,
          patientInfo: selectedPatientInfo[0],
        });
      }
    } else {
      Alert.alert("Error", "No patient selected", [{ text: "OK" }], {
        cancelable: false,
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 30,
        paddingTop: 50,
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
          style={{ color: "black" }}
          items={patients}
          placeholder={{ label: "Select Patient", value: null }}
          onValueChange={onValueChange}
          value={selectedPatient}
        />
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 20 }}>
        Forms
      </Text>

      <HeaderBlock1
        textColor="white"
        bgColor={darkGreen}
        btnLabel="SNAP-IV 26"
        Press={() => isPatientSelected("SNAPQuizScreen")}
        duration="05:00"
      />
      <HeaderBlock1
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WSR-II"
        Press={() => isPatientSelected("WSRQuizScreen")}
        duration="08:00"
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Parents only
      </Text>
      <HeaderBlock1
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WFIRS-P"
        Press={() => isPatientSelected("WFIRSQuizScreen")}
        duration="15:00"
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Teachers only
      </Text>
      <HeaderBlock1
        textColor="white"
        bgColor={darkGreen}
        btnLabel="TAF"
        Press={() => isPatientSelected("TAFQuizScreen")}
        duration="20:00"
      />
    </View>
  );
};

export default AssessmentsPage;
