import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SubmitButton({ processFormData, btnCaption }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.btn}
      onPress={processFormData}
    >
      <Text style={styles.btnTitle}>{btnCaption}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 25,
    marginTop: 43,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#ff6c00",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
});
