import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";

const panels = [8, 7, 9, 10, 14, 4, 3, 2, 1, 15, 16, 18, 19, 20];

const BASE_URL =
  "http://192.168.0.127/d-solo/adh5qj6/enviromental-data";

const DashboardScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.title}>Dashboards</Text>
      <Text style={styles.subtitle}>This is the dashboards page.</Text>

      {panels.map((p) => (
        <View key={p} style={styles.card}>
          <WebView
            source={{
              uri: `${BASE_URL}?panelId=panel-${p}&__feature.dashboardSceneSolo=true&kiosk`,
            }}
            style={styles.webview}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },

  card: {
    width: Dimensions.get("window").width - 32,
    height: 250,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },

  webview: {
    flex: 1,
  },
});
