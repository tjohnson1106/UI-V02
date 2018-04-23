import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content } from "native-base";

import CardComponent from "../../components/CardComponent";

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

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default HomeTab;
