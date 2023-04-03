import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebaseConfig";

import Dashboard from "./src/screens/DashBoard/Dashboard";

import Login from "./src/screens/Authentication/Login";
import StartScreen from "./src/screens/Authentication/StartScreen";
import Signup from "./src/screens/Authentication/Signup";
import ResetPassword from "./src/screens/Authentication/ResetPassword";

import Patient_Info_Profile from "./src/screens/Profiles/Patient-Info-Profile";
import PatientProfilesList from "./src/screens/Profiles/PatientProfilesList";

import ReportsPage from "./src/screens/Reports/ReportsPage";

import CompletedAssesments from "./src/screens/Reports/CompletedAssesments";
import CreateReport from "./src/screens/Reports/createReport";
import ViewReport from "./src/screens/Reports/ViewReport";

import WSRQuizScreen from "./src/screens/Assesments/WSR-II";
import TAFQuizScreen from "./src/screens/Assesments/TAF";
import AssessmentsPage from "./src/screens/Assesments/AssessmentsPage";
import SNAPQuizScreen from "./src/screens/Assesments/SnapIV-Quiz";
import WFIRSQuizScreen from "./src/screens/Assesments/WFIRS";
import TermsScreen from "./src/screens/Assesments/TermsScreen";
import ResultsPage from "./src/screens/Assesments/ResultsPage";

import MainNavContainer from "./src/navigation/MainNavContainer";

const Stack = createNativeStackNavigator();
const loadFonts = async () => {
  await Font.loadAsync({
    "Material Design Icons": require("./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
  });
};

function App() {
  LogBox.ignoreAllLogs();
  const [isAuth, setIsAuth] = useState(false);
  onAuthStateChanged(auth, async (user) => {
    user ? setIsAuth(true) : setIsAuth(false);
  });

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitle: "",
          headerTintColor: "black",
        }}
      >
        {!isAuth ? (
          <>
            <Stack.Screen
              name="ZoneIn"
              component={StartScreen}
              screenOptions={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login Page" }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: "Signup Page" }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ title: "Reset Password" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainNavContainer"
              component={MainNavContainer}
              options={{ title: "Dashboard" }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="PatientProfilesList"
              component={PatientProfilesList}
              options={{ title: "Patients List" }}
            />
            <Stack.Screen
              name="Patient_Info_Profile"
              component={Patient_Info_Profile}
              options={{ title: "Patient Profile" }}
            />
            <Stack.Screen
              name="ReportsPage"
              component={ReportsPage}
              options={{ title: "Reports List" }}
            />

            <Stack.Screen
              name="AssessmentsPage"
              component={AssessmentsPage}
              options={{ title: "Assesments List" }}
            />
            <Stack.Screen
              name="CompletedAssesments"
              component={CompletedAssesments}
              options={{ title: "Completed Assesments" }}
            />
            <Stack.Screen name="TermsScreen" component={TermsScreen} />
            <Stack.Screen
              name="SNAPQuizScreen"
              component={SNAPQuizScreen}
              options={{ title: "SNAP-IV 26 Assessment" }}
            />
            <Stack.Screen
              name="WFIRSQuizScreen"
              component={WFIRSQuizScreen}
              options={{ title: "WFIRS-P Assessment" }}
            />
            <Stack.Screen
              name="TAFQuizScreen"
              component={TAFQuizScreen}
              options={{ title: "TAF Assessment" }}
            />
            <Stack.Screen
              name="WSRQuizScreen"
              component={WSRQuizScreen}
              options={{ title: "WSR-II Assessment" }}
            />
            <Stack.Screen
              name="ResultsPage"
              component={ResultsPage}
              screenOptions={{ headerShown: false }}
              options={{ title: "Results" }}
            />
            <Stack.Screen
              name="CreateReport"
              component={CreateReport}
              options={{ title: "Create a Report" }}
            />
            <Stack.Screen
              name="ViewReport"
              component={ViewReport}
              options={{ title: "View Reports" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
