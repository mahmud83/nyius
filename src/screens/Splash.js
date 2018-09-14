import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("../../assets/img/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>
          Easy and Simple Indensia News App
        </Text>
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
  },
  logo: {

  },
  subtitle: {
    color: '#f50289',
    fontSize: 16,
  }
});