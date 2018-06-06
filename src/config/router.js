import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Dashboard from '../screens/Dashboard';
import Explore from '../screens/Explore';
import Following from '../screens/Following';
import Me from '../screens/Me';
import Splash from '../screens/Splash';

export const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
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

export const FollowingStack = createStackNavigator({
  Following: {
    screen: Following,
    navigationOptions: {
      title: 'Following',
    },
  }
});

export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  }
});

export const Tabs = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
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
  Following: {
    screen: FollowingStack,
    navigationOptions: {
      tabBarLabel: 'Following',
      tabBarIcon: ({ tintColor }) => <Icon name="bookmark" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  }
});

export const Root = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Splash: {
    screen: Splash
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});