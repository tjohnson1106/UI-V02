import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";

import CameraTab from "../screens/appTabNavigator/CameraTab";
import CollectionsTab from "../screens/appTabNavigator/CollectionsTab";
import HomeTab from "../screens/appTabNavigator/HomeTab";

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name="search"
        ios="ios-search"
        android="md-search"
        style={{ paddingLeft: 10 }}
      />
    ),
    title: "Vision",
    headerRight: <Icon name="people" style={{ paddingRight: 10 }} />
  };

  state = {};
  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  CameraTab: {
    screen: CameraTab
  },
  CollectionsTab: {
    screen: CollectionsTab
  }
});

export default MainScreen;
