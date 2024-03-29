import React from "react";
import { View } from "react-native";
import HeaderBlock from "../../components/HeaderBlock";
import { darkGreen } from "../../components/Constants";

const ReportsPage = (props) => {
  return (
    <View
      style={{
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 30,
        paddingTop: 50,
      }}
    >
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Completed Assessments"
        Press={() =>
          props.navigation.navigate("CompletedAssesments", {
            selectedPatientId: "",
          })
        }
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="View Reports"
        Press={() =>
          props.navigation.navigate("ViewReport", {
            selectedPatientId: "",
          })
        }
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Create Report"
        Press={() =>
          props.navigation.navigate("CreateReport", {
            selectedPatientId: "",
          })
        }
      />
    </View>
  );
};

export default ReportsPage;
