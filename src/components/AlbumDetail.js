import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
const AlbumDetail = ({ title, artist, url, image, thumbnail_image }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailConainerStyle}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text style={{ color: "white" }}>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.imageStyle} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerTextStyle: {
    fontSize: 18,
    color: "#fff"
  },
  thumbnailConainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
