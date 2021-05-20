import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "../../components/rounded-button";

function Focus() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 20 }} />

          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
});

export { Focus };
