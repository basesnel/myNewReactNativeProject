import { StyleSheet, Text } from "react-native";

export function FormTitle({ title }) {
  return <Text style={styles.formTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  formTitle: {
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
});
