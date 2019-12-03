import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import Registration from '../components/Registration';
import React from 'react';
import Switches from '../components/Switches';

const RootStack = createStackNavigator(
  {
    LoginScreen: Login,
    RegistrationScreen: Registration,
  },
  {
    // initialRouteName: 'RegistrationScreen',
    defaultNavigationOptions: {
      header: () => <Switches />,
    },
  },
);

export const AppNavigation = createAppContainer(RootStack);
