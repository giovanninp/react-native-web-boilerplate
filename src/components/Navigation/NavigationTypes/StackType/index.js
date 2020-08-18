import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const animationSettings = {
  INITIAL: {
    toValue: 1,
    duration: 500,
  },
  ENDING: {
    toValue: 0,
    duration: 500,
  },
};

export default function StackType({ onNavigate = null, Screen, navChange }) {
  const transition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const ShowIn = () => {
      Animated.timing(transition, animationSettings.INITIAL).start();
    };

    const ShowOut = () => {
      Animated.timing(transition, animationSettings.ENDING).start();
    };
    if (navChange) {
      ShowOut();
    } else {
      ShowIn();
    }
  }, [navChange, transition]);

  return (
    <Animated.View
      style={[styles.container, { flex: transition, opacity: transition }]}
    >
      <Screen navigate={onNavigate} />
    </Animated.View>
  );
}

const styles = {
  container: {},
};
