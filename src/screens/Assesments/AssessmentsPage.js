import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import HeaderBlock from "../../components/HeaderBlock";
import { darkGreen } from "../../components/Constants";
import Picker from "react-native-picker-select";
import { useIsFocused } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import { getUserInfo, getChildProfiles } from "../../helpers/query";

const AssessmentsPage = (props) => {
  const isFocused = useIsFocused();
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
      props.navigation.navigate(assessmentRoute, {
        patientInfo: selectedPatientInfo[0],
      });
    } else {
      console.error("No patient selected");
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
      {/* <View style={{ padding: 10, borderColor: "black", borderWidth: 10 }}> */}
      <Picker
        style={{
          borderRadius: 100,
          color: darkGreen,
          paddingHorizontal: 20,
          height: "35%",
          width: "78%",
          backgroundColor: "rgb(220,220, 220)",
          marginVertical: 10,
        }}
        items={patients}
        placeholder={{ label: "Select Patient", value: null, color: "red" }}
        onValueChange={onValueChange}
        value={selectedPatient}
      />
      {/* </View> */}

      <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 20 }}>
        Forms
      </Text>

      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="SNAP-IV 26"
        Press={() => isPatientSelected("QuizScreen")}
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WSR-II"
        Press={() => isPatientSelected("ReportsPage")}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Parents only
      </Text>
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="WFIRS-P"
        Press={() => isPatientSelected("WFIRSQuizScreen")}
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Forms for Teachers only
      </Text>
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="TAF"
        Press={() => isPatientSelected("TAFQuizScreen")}
      />
    </View>
  );
};

export default AssessmentsPage;
