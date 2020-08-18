import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

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

export default function NavBar({ navigate }) {

  const Option = ({ screenName, title }) => {
    const onPress = () => navigate(screenName);
    return (
      <TouchableOpacity onPress={onPress} style={styles.opt}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Option {...options.Home} />
      <Option {...options.About} />
    </View>
  );
}

const styles = {
  container: {
    width: "100%",
    padding: 15,
    top: 15,
    flexDirection: "row",
    backgroundColor: "#c6c6c6",
  },
  opt: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  optTitle: {
    color: "#000",
  },
};
