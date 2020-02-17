import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from './components/Welcome'
import Login from './components/Login'
import CharacterDetail from './components/CharacterDetail'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Welcome: {
    screen: Welcome,
  },
  CharacterDetail: {
    screen: CharacterDetail,
  },
});

export default createAppContainer(AppNavigator);