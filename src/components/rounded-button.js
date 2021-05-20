import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

function RoundedButton({ style = {}, textStyle = {}, size = 125, ...props }) {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={styles().text}>{props.title}</Text>
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
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: size / 3,
    },
  });
};

export { RoundedButton };
