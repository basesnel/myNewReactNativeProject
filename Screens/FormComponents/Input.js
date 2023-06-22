import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export function Input({
  keyName,
  placeholder,
  value,
  mode,
  secureTextEntry,
  setInputValue,
  showKeyboard,
  children,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.blockinput}>
      <TextInput
        style={
          !isActive
            ? styles.inputInActive
            : {
                ...styles.inputInActive,
                borderColor: "#ff6c00",
                backgroundColor: "#fff",
              }
        }
        name={keyName}
        placeholder={placeholder}
        placeholderTextColor={"#bdbdbd"}
        inputMode={mode}
        value={value}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          showKeyboard();
          setIsActive(true);
        }}
        onBlur={() => setIsActive(false)}
        onChangeText={(value) => setInputValue(keyName, value)}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputInActive: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginHorizontal: 16,
    padding: 16,
    paddingVertical: 11,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    color: "#212121",
  },
  blockinput: {
    marginBottom: 16,
  },
});
