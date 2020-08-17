import React, { Component } from "react";
import {Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text>HelloWorld</Text>
      </View>
    );
  }
}

const styles = {
  app: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default App;
