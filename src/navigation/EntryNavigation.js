import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import Switches from '../components/Switches';
import LoadingScreen from '../screen/LoadingScreen';

const EntryStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
    Loading: LoadingScreen,
  },
  {
    initialRouteName: 'Loading',
    defaultNavigationOptions: {
      header: props => <Switches {...props} />,
    },
  },
);

export const EntryNavigation = createAppContainer(EntryStack);
