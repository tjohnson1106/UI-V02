import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";
import { LinearGradient } from "expo";

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

  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    CameraTab: {
      screen: CameraTab
    },
    CollectionsTab: {
      screen: CollectionsTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

export default MainScreen;
