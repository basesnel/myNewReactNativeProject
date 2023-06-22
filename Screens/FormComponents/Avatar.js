import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export function Avatar({ isKeyboardShown }) {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatarWrapper}>
        {isKeyboardShown && (
          <Image
            source={require("../../images/Natalia.jpg")}
            alt="Natalia photo"
            width={120}
            height={120}
            style={styles.image}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.add,
            isKeyboardShown && {
              transform: [{ rotate: "45deg" }],
            },
          ]}
        >
          <View style={{ width: 25, height: 25 }}>
            <Svg width="25" height="25" viewBox="0 0 25 25">
              <Circle
                cx="12.5"
                cy="12.5"
                r="12"
                fill="white"
                stroke={isKeyboardShown ? "#e8e8e8" : "#ff6c00"}
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                fill={isKeyboardShown ? "#e8e8e8" : "#ff6c00"}
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: "100%",
    height: 60,
  },
  avatarWrapper: {
    position: "absolute",
    top: -90,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  image: {
    borderRadius: 16,
  },
  add: {
    position: "absolute",
    left: 107,
    top: 81,
    width: 25,
    height: 25,
  },
});
