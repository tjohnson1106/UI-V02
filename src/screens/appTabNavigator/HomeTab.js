import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content, Header, Left, Right } from "native-base";

import DataCard from "../../components/DataCard";

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
        <Header>
          <Left>
            <Icon
              name="search"
              ios="ios-search"
              android="md-search"
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Right>
            <Icon name="people" style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <DataCard imageSource="2" likes=" 377" />
          <DataCard imageSource="3" likes=" 90" />
          <DataCard imageSource="4" likes=" 544" />
          <DataCard imageSource="2" likes=" 377" />
          <DataCard imageSource="3" likes=" 90" />
          <DataCard imageSource="4" likes=" 544" />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
