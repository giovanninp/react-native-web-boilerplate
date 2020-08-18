import React from "react";
import { View as NativeView } from "react-native";

class Screen extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <NativeView style={styles.container}>{children}</NativeView>;
  }
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
};

export default Screen;
