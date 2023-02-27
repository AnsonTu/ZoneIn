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

import PatientProfiles from "./src/screens/Profiles/PatientProfiles";
import ReportsPage from "./src/screens/Reports/ReportsPage";
import DocumentUploadPage from "./src/screens/Reports/UploadReport";
import CompletedAssesments from "./src/screens/Reports/CompletedAssesments";

import AssessmentsPage from "./src/screens/Assesments/AssessmentsPage";

import MainNavContainer from "./src/navigation/MainNavContainer";

const Stack = createNativeStackNavigator();
import QuizScreen from "./src/screens/Assesments/SnapIV-Quiz";
import TermsScreen from "./src/screens/Assesments/TermsScreen";
import CreateReport from "./src/screens/Reports/createReport";

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
            <Stack.Screen name="PatientProfiles" component={PatientProfiles} />
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
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
            <Stack.Screen name="CreateReport" component={CreateReport} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
