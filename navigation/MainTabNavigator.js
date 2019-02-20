import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomHeader from "../screens/CustomHeader";
import SearchScreen from "../screens/SearchScreen";
import CreateBetNavigator from "./CreateBetNavigator";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    CreateBet: { screen: CreateBetNavigator }
},
{
    defaultNavigationOptions: {
        header: props => <CustomHeader {...props} />
    }
});

HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const WalletStack = createStackNavigator({
    Settings: SettingsScreen,
});

WalletStack.navigationOptions = {
    tabBarLabel: 'Wallet',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
        />
    ),
};


const SearcherStack = createStackNavigator({
    Search: SearchScreen,
});

SearcherStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
        />
    ),
};


const OpenBetStack = createStackNavigator({
    Home: HomeScreen,
});

OpenBetStack.navigationOptions = {
    tabBarLabel: 'Open Bets',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-checkmark-circle${focused ? '' : '-outline'}` : 'md-checkmark-circle'}
        />
    ),
};

export default MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  WalletStack,
  SearcherStack,
  OpenBetStack
},
{
    defaultNavigationOptions: {
        header: props => <CustomHeader {...props} />
    }
});
