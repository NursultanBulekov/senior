import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import AboutScreen from "../screens/AboutScreen";
import PcScreen from "../screens/PcScreen";
import SensorScreen from "../screens/SensorScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
            backgroundColor: "#111",
            height: 70
        },
        tabBarLabelStyle: {
            fontSize: 14
        },
        tabBarActiveTintColor: "#4CAF50",
      }}
    >
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Pcs" component={PcScreen} />
      <Tab.Screen name="Sensors" component={SensorScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
