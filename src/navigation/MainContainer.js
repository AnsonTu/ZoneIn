import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { green } from "../components/Constants";
// Screens
import HomeScreen from "../screens/HomeScreen";
import ProfilesScreen from "../screens/ProfilesScreen";
import SettingsScreen from "../screens/SettingsScreen";

//Screen names
const homeName = "Home";
const profileName = "Profile";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={30} color={green} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "grey",
        inactiveTintColor: "grey",
        labelStyle: { paddingBotton: 5, fontSize: 10 },
        style: { height: 60 },
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={profileName} component={ProfilesScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
