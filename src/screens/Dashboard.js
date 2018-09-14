import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount () {
    
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ScrollView>
          <Text h2 style={styles.h2}>Dashboard</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 0,
  },
  h2: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20
  },
});

export default Dashboard;