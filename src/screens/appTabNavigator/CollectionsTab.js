import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Icon, Container, Content, Header, Left, Right, Body, Button } from "native-base";
import DataCard from "../../components/DataCard";

let image = [
  require("../../../assets/collections_one.jpeg"),
  require("../../../assets/collections_two.jpeg"),
  require("../../../assets/collections_three.jpeg"),
  require("../../../assets/collections_four.jpeg"),
  require("../../../assets/collections_five.jpeg"),
  require("../../../assets/collections_six.jpeg"),
  require("../../../assets/collections_seven.jpeg"),
  require("../../../assets/collections_eight.jpeg"),
  require("../../../assets/collections_nine.jpeg")
];

let { width, height } = Dimensions.get("window");

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

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };
  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image style={{ flex: 1, width: 720 }} source={image} />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return;
      <View>
        <DataCard imageSource="1" likes="100" />
        <DataCard imageSource="2" likes="150" />
        <DataCard imageSource="3" likes="140" />
      </View>;
    }
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
              <View style={{ flex: 1, paddingTop: 10, left: 5 }}>
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
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1
              }}
            >
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="reorder-vertical"
                  type="MaterialCommunityIcons"
                  style={[
                    this.state.activeIndex == 0
                      ? { color: "#3a4e85" }
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="reorder-horizontal"
                  type="MaterialCommunityIcons"
                  style={[
                    this.state.activeIndex == 1
                      ? { color: "#3a4e85" }
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="panorama-vertical"
                  type="MaterialCommunityIcons"
                  style={[
                    this.state.activeIndex == 2
                      ? { color: "#3a4e85" }
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="panorama-horizontal"
                  type="MaterialCommunityIcons"
                  style={[
                    this.state.activeIndex == 3
                      ? { color: "#3a4e85" }
                      : {
                          color: "grey"
                        }
                  ]}
                />
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CollectionsTab;
