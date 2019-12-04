import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from '../screen/LoadingScreen';
import MapScreen from '../screen/MapScreen';

const AppStack = createStackNavigator(
  {
    Loading: LoadingScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);

export const AppNavigation = createAppContainer(AppStack);
