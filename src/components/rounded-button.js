import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

function RoundedButton({
  style = {},
  textStyle = {},
  size = 125,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) => {
  return StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      flex: 1,
      textAlignVertical: "center",
      color: colors.white,
      fontSize: size / 3,
    },
  });
};

export { RoundedButton };
