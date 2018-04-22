import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon } from "native-base";

class CollectionsTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="photos"
        ios="ios-photos-outline"
        android="md-photos"
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Collections Tab</Text>
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

export default CollectionsTab;
