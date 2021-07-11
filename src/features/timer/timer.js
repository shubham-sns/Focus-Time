import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";

import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "../../components/countdown";
import { RoundedButton } from "../../components/rounded-button";

import { Timing } from "../timer/timing";

import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

const DEFAULT_TIME = 1;

export const Timer = ({ focusSubject, onTimerEnd }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => {
        Vibration.vibrate();
      }, 1000);

      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onChangeTime = (time) => {
    setMinutes(time);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.xl }}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View
        style={{
          paddingTop: spacing.sm,
        }}
      >
        <ProgressBar
          progress={progress}
          color="#5e84e2"
          style={{
            height: 10,
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={onChangeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
