import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "#007aff",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "400",
    paddingTop: 3,
    paddingBottom: 3
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",

    borderWidth: 1,
    borderColor: "#007aff",
    borderRadius: 5
  }
};
export default Button;
