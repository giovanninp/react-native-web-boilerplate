import React from "react";
import { View, Text } from "react-native";

class AboutPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello About</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default AboutPage;
