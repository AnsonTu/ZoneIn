import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./src/screens/DashBoard/Dashboard";

import Login from "./src/screens/Authentication/Login";
import StartScreen from "./src/screens/Authentication/StartScreen";
import Signup from "./src/screens/Authentication/Signup";

import PatientProfiles from "./src/screens/Profiles/PatientProfiles";
import ReportsPage from "./src/screens/Reports/ReportsPage";
import DocumentUploadPage from "./src/screens/Reports/UploadReport";
import CompletedAssesments from "./src/screens/Reports/CompletedAssesments";

import AssessmentsPage from "./src/screens/Assesments/AssessmentsPage";

import MainNavContainer from "./src/navigation/MainNavContainer";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitle: "",
          headerTintColor: "black",
        }}
      >
        <Stack.Screen
          name="i-Care ADHD"
          component={StartScreen}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainNavContainer" component={MainNavContainer} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
