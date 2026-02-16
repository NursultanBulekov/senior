import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TwinLab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#222" },
  text: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});
