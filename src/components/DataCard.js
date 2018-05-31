import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

class DataCard extends Component {
  render() {
    const images = {
      "2": require("../../assets/feed_two.jpeg"),
      "3": require("../../assets/feed_three.jpeg"),
      "4": require("../../assets/feed_four.jpeg")
    };

    return (
      <Card
        style={{
          backgroundColor: "#0AC2C2"
        }}
      >
        <CardItem>
          <Left>
            <Thumbnail
              source={require("../../assets/thumbnail.jpeg")}
            />
            <Body>
              <Text>User / Data in Card </Text>
              <Text note>April 23, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem
          cardBody
          style={{
            height: 135
          }}
        >
          <Image
            souce={images[this.props.imageSource]}
            style={{
              height: null,
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
                style={{
                  fontSize: 25,
                  color: "black",
                  paddingLeft: 5
                }}
              />
              <Text
                style={{
                  height: 20
                }}
              >
                {this.props.likes}
              </Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon
                name="retweet"
                type="EvilIcons"
                style={{
                  fontSize: 30,
                  color: "black",
                  paddingRight: 5
                }}
              />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default DataCard;
