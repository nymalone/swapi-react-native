import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from './Welcome';
import Login from './Login';
import CharacterDetail from './CharacterDetail';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Welcome: {
    screen: Welcome,
  },
  CharacterDetail: {
    screen: CharacterDetail,
  },
});

export default createAppContainer(AppNavigator);
