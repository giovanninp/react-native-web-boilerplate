import React from "react";
import { View, Text } from "react-native";
import Screen from "../../components/Screen";

class HomePage extends React.Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text>Hello Home</Text>
        </View>
      </Screen>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default HomePage;
