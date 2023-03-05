import * as React from "react";
import { View, Text } from "react-native";
import HeaderBlock from "../../components/HeaderBlock";
import { darkGreen } from "../../components/Constants";

const HomeScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 30,
        paddingTop: 50,
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold", paddingBottom: 30 }}>
        Hello User, Welcome!{" "}
      </Text>
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Patient Profiles"
        Press={() => props.navigation.navigate("PatientProfilesList")}
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Assessments"
        Press={() => props.navigation.navigate("AssessmentsPage")}
      />
      <HeaderBlock
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Reports"
        Press={() => props.navigation.navigate("ReportsPage")}
      />
    </View>
  );
};

export default HomeScreen;
