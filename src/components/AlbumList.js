import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

const url = "http://rallycoding.herokuapp.com/api/music_albums";
class AlbumList extends Component {
  state = {
    album: []
  };

  componentDidMount() {
    axios
      .get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(res => {
        const album = res.data;
        this.setState({ album });
      })
      .catch(err => {
        console.log("error");
      });
  }
  renderAlbums() {
    return this.state.album.map(album => (
      <AlbumDetail key={album.title} {...album}/>
    ));
  }
  render() {
    if (this.state.album.length === 0) {
      return <Text>Loading...</Text>;
    }
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
