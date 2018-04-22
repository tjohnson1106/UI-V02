import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        ios="ios-home-outline"
        android="md-home"
        style={{ color: tintColor }}
      />
    )
  };

  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Tab</Text>
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

export default HomeTab;
