import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import Splash from "./Splash";

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      timePassed: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setTimePassed();
    }, 3000);
  }
  setTimePassed() {
    this.setState({timePassed: true});
  }
  render() {
    if (!this.state.timePassed) {
      return <Splash />;
    } else {
      return (
        <ScrollView>
          <Text h2 style={styles.h2}>Dashboard</Text>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  h2: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20
  },
});

export default Dashboard;