import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function RefLink({ text, link, toggleForm }) {
  return (
    <View style={styles.ref}>
      <Text style={styles.refText}>{text}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={toggleForm}>
        <Text style={{ ...styles.refText, textDecorationLine: "underline" }}>
          {link}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ref: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  refText: {
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
