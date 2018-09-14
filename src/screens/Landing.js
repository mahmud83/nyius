import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { Button } from 'react-native-elements';

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("../../assets/img/logo.png")}
          style={styles.logo}
        />
        <Button
          raised
          iconRight={{name: 'play_arrow'}}
          title='Lets Explore News' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 40
  }
});