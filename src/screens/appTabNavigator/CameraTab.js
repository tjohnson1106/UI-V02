import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon } from "native-base";

class CameraTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="camera"
        ios="ios-camera-outline"
        android="md-camera"
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Camera Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CameraTab;
