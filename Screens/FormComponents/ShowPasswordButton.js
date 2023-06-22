import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ShowPasswordButton({ toggleShowPassword, btnCaption }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.btnShowPassword}
      onPress={toggleShowPassword}
    >
      <Text style={styles.refTitle}>{btnCaption}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnShowPassword: {
    position: "absolute",
    right: 32,
    top: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  refTitle: {
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
