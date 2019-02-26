import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import StartScreen from '../screens/StartScreen';
import LogInScreen from '../screens/authentication/LogInScreen'
import SignUpScreen from '../screens/authentication/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from "./MainTabNavigator";

const AuthStack = createStackNavigator(
    {
        StartScreen: StartScreen,
        SignUpScreen: SignUpScreen,
        LogInScreen: LogInScreen
    }
);

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator,
      Auth: AuthStack,
    },
    {
    initialRouteName: 'AuthLoading'
  }
));