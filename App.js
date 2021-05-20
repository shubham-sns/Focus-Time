import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RoundedButton } from "./src/components/rounded-button";
import { Focus } from "./src/features/focus/focus";

export default function App() {
  const [focusSubject, setFocuSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? <Text>"Heres my timer "</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252250",
  },
});
