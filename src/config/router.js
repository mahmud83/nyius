import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Bookmark from '../screens/Bookmark';

export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  }
});

export const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      title: 'Explore',
    },
  }
});

export const BookmarkStack = createStackNavigator({
  Bookmark: {
    screen: Bookmark,
    navigationOptions: {
      title: 'Bookmark',
    },
  }
});

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />,
    },
  },
  Bookmark: {
    screen: BookmarkStack,
    navigationOptions: {
      tabBarLabel: 'Bookmark',
      tabBarIcon: ({ tintColor }) => <Icon name="bookmark" size={35} color={tintColor} />,
    },
  }
});

export const Root = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'screen',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});