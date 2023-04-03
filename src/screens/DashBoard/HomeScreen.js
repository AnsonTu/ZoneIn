import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import HeaderBlock from "../../components/HeaderBlock";
import { darkGreen } from "../../components/Constants";
import { auth } from "../../../firebaseConfig";
import { getUserInfo } from "../../helpers/query";

const HomeScreen = (props) => {
  const [name, setName] = useState("User");

  useEffect(() => {
    const getCurrentUserInfo = async () => {
      const userInfo = await getUserInfo(auth.currentUser.uid);
      setName(userInfo.firstName);
    };
    getCurrentUserInfo();
  }, []);

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
        Hello {name}, Welcome!{" "}
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
