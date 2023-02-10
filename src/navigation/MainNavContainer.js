import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { green } from "../components/Constants";
// Screens
import HomeScreen from "../screens/DashBoard/HomeScreen";
import ProfilesScreen from "../screens/DashBoard/ProfilesScreen";
import SettingsScreen from "../screens/DashBoard/SettingsScreen";
import NotifyScreen from "../screens/DashBoard/NotifyScreen";
//Screen names
const homeName = "Home";
const profileName = "Profile";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainNavContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      activeColor="#006D77"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={green} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notificaitons"
        component={NotifyScreen}
        options={{
          headerShown: false,

          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications-sharp" color={green} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,

          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={green} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilesScreen}
        options={{
          headerShown: false,

          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={green} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavContainer;
