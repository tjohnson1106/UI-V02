import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import MainScreen from "./src/components/MainScreen";

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});
