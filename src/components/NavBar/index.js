import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";

const options = {
  Home: {
    title: "Home",
    screenName: "Home",
  },
  About: {
    title: "Sobre",
    screenName: "About",
  },
};

const animationSettings = {
  INITIAL: {
    toValue: 60,
    duration: 500,
  },
  ENDING: {
    toValue: 0,
    duration: 500,
  },
};

export default function NavBar({ navigate, actualScreen }) {
  const transition = useRef(new Animated.Value(0)).current;

  const ShowIn = () => {
    Animated.timing(transition, animationSettings.INITIAL).start();
  };

  const Option = ({ screenName, title }) => {
    const onPress = () => navigate(screenName);
    const selected = screenName === actualScreen;
    return (
      <TouchableOpacity onPress={onPress} style={{...styles.opt, backgroundColor: selected ? '#000': '#fff'}}>
        <Text style={{...styles.optTitle, color: selected ? '#fff' : '#000'}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    ShowIn();
  }, []);

  return (
    <Animated.View style={[styles.container, {height: transition}]}>
      <Option {...options.Home} />
      <Option {...options.About} />
    </Animated.View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    backgroundColor: "#c6c6c6",
    overflow: "hidden",
    padding: 15,
  },
  opt: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    overflow: 'hidden',
  },
  optTitle: {
    color: "#000",
  },
};
