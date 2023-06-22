import { StyleSheet, View } from "react-native";

export function FormContainer({ isKeyboardShown, children }) {
  return (
    <View
      style={{
        ...styles.form,
        paddingBottom: isKeyboardShown ? 16 : 45,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
});
