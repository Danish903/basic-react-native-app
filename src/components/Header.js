import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    padding: 5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2},
    // shadowOpacity: 0.8,
    elevation: 2,
    position: "relative"
  },
  textStyles: {
    fontSize: 20,
    fontWeight: "500",
    color: "#007aff"
  }
};

export default Header;
