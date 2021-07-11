import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const [millis, setMillis] = useState(null);
  const interval = React.useRef(null);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    const countDown = () => {
      setMillis((time) => {
        if (time === 0) {
          clearInterval(interval.current);
          onEnd();
          return time;
        }

        const timeLeft = time - 1000;
        // report the progress
        onProgress(timeLeft / minutesToMillis(minutes));
        return timeLeft;
      });
    };

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: fontSizes.xxxl,
    color: colors.white,
    fontWeight: "bold",
    backgroundColor: "rgba(94,132,226,0.3)",
    padding: spacing.lg,
  },
});
