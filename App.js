import React, { Component } from "react";
import ReactNative, { Platform, StyleSheet, Text, View } from "react-native";

//==========
//components
//=============
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums!"} />
        <AlbumList />
      </View>
    );
  }
}
