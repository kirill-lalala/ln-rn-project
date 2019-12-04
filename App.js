import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './src/screen/LoadingScreen';
import MapScreen from './src/screen/MapScreen';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegistrationScreen from './src/screen/RegistrationScreen';
import Switches from './src/components/Switches';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: props => <Switches {...props} />,
    },
  },
);

export const AuthNavigation = createAppContainer(AuthStack);

export default createAppContainer(
  createStackNavigator(
    {
      Loading: LoadingScreen,
      Map: MapScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Loading',
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);
