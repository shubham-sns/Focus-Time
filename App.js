import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

import { Focus } from "./src/features/focus/focus";
import { Timer } from "./src/features/timer/timer";

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";

export default function App() {
  const [focusSubject, setFocuSubject] = useState(null);

  const onTimerEnd = () => {
    setFocuSubject(null);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} onTimerEnd={onTimerEnd} />
      ) : (
        <Focus addSubject={setFocuSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
  },
});
