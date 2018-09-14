import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

class Following extends Component {
  render() {
    return (
      <ScrollView>
        <Text h2 style={styles.h2}>Following</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  h2: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20
  },
});

export default Following;