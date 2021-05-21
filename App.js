import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Focus } from "./src/features/focus/focus";
import { colors } from "./src/utils/colors";

export default function App() {
  const [focusSubject, setFocuSubject] = useState(null);

  console.log({ focusSubject });

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>"Heres my timer "</Text>
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
  },
});
