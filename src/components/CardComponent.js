import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from "native-base";

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../../assets/thumbnail.jpeg")} />
            <Body>
              <Text>Name</Text>
              <Text note>April 22, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody bordered={true} style={{ height: 135 }}>
          <Image
            souce={require("../../assets/feed_one.jpeg")}
            style={{
              height: 200,
              width: null,
              flex: 1
            }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
                name="heart-outline"
                ios="ios-heart-outline"
                android="md-heart-outline"
                style={{ fontSize: 25, color: "black", paddingLeft: 5 }}
              />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon
                name="retweet"
                type="EvilIcons"
                style={{ fontSize: 30, color: "black", paddingRight: 5 }}
              />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
