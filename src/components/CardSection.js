import React from "react";
import { View, Text } from "react-native";

const CardSection = props => (
  <View style={style.containerStyle}>{props.children}</View>
);

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "black",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#333",
    position: "relative"
  }
};
export default CardSection;
