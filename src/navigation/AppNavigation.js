import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import Switches from '../components/Switches';
import MapScreen from '../screen/MapScreen';
import LoadingScreen from '../screen/LoadingScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
    Map: MapScreen,
    Loading: LoadingScreen,
  },
  {
    initialRouteName: 'Loading',
    defaultNavigationOptions: {
      header: props => <Switches {...props} />,
    },
  },
);

export const AppNavigation = createAppContainer(RootStack);
