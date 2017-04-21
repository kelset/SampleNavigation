"use strict";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default class TabOneScreenTwoTabThree extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: "Cat"
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Tab One Screen Two Tab Three"}</Text>
      </View>
    );
  }
}
