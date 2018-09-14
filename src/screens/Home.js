import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { newsApi } from '../config/newsApi';

class Home extends Component {
  state = {
    headlines: []
  }
  componentWillMount () {
    this.getHeadlines();
  }
  getHeadlines = async () => {
    const uri = newsApi.headline_url + '?apiKey=' + newsApi.api_key + '&country=id';
    const response = await fetch(uri);
    const headlines = await response.json();
    this.setState({ headlines: headlines.results.articles});
  }
  render() {
    const { headlines } = this.state;
    console.log('haedline', headlines)
    return (
      <ScrollView>
        <Text h2 style={styles.h2}>News Headline</Text>
        <Card title="News Headlines">
        {
          headlines.map((news, idx) => {
            return (
              <View key={i}>
                <Image
                  resizeMode="cover"
                  source={{ uri: news.urlToImage }}
                />
                <Text>{news.content}</Text>
              </View>
            );
          })
        }
      </Card>
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

export default Home;