import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { Icon, Container, Content, Header, Left, Right, Body, Button } from "native-base";

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
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header>
          <Left>
            <Icon
              name="settings"
              ios="ios-settings-outline"
              android="md-settings"
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Right>
            <Icon
              name="star"
              ios="ios-star-outline"
              android="md-star-outline"
              type="Ionicons"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
        <Content>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../../../assets/profile_one.jpeg")}
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 37.5
                  }}
                />
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text>Description</Text>
                </View>
              </View>
              <View style={{ flex: 3 }}>
                <Text>username</Text>
                <Text>edit profile</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CollectionsTab;
