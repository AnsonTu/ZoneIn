import React, { useEffect, useState } from "react";
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
import DocumentUploadPage from "./src/screens/Reports/UploadReport";
import CompletedAssesments from "./src/screens/Reports/CompletedAssesments";
import ResultsPage from "./src/screens/Assesments/ResultsPage";
import AssessmentsPage from "./src/screens/Assesments/AssessmentsPage";
import TermsScreen from "./src/screens/Assesments/TermsScreen";
import MainNavContainer from "./src/navigation/MainNavContainer";
import WSRQuizScreen from "./src/screens/Assesments/WSR-II";
import TAFQuizScreen from "./src/screens/Assesments/TAF";
import SNAPQuizScreen from "./src/screens/Assesments/SnapIV-Quiz";
import WFIRSQuizScreen from "./src/screens/Assesments/WFIRS";
import CreateReport from "./src/screens/Reports/createReport";
const Stack = createNativeStackNavigator();
const loadFonts = async () => {
  await Font.loadAsync({
    "Material Design Icons": require("./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
  });
};

function App() {
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainNavContainer"
              component={MainNavContainer}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="PatientProfilesList"
              component={PatientProfilesList}
            />
            <Stack.Screen
              name="Patient_Info_Profile"
              component={Patient_Info_Profile}
            />
            <Stack.Screen name="ReportsPage" component={ReportsPage} />
            <Stack.Screen
              name="DocumentUploadPage"
              component={DocumentUploadPage}
            />
            <Stack.Screen name="AssessmentsPage" component={AssessmentsPage} />
            <Stack.Screen
              name="CompletedAssesments"
              component={CompletedAssesments}
            />
            <Stack.Screen name="TermsScreen" component={TermsScreen} />
            <Stack.Screen name="SNAPQuizScreen" component={SNAPQuizScreen} />
            <Stack.Screen name="WFIRSQuizScreen" component={WFIRSQuizScreen} />
            <Stack.Screen name="WSRQuizScreen" component={WSRQuizScreen} />
            <Stack.Screen
              name="ResultsPage"
              component={ResultsPage}
              screenOptions={{ headerShown: false }}
            />
            <Stack.Screen name="TAFQuizScreen" component={TAFQuizScreen} />
            <Stack.Screen name="CreateReport" component={CreateReport} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
