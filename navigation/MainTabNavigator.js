import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomHeader from "../screens/CustomHeader";
import SearchScreen from "../screens/SearchScreen";
import CreateBetNavigator from "./CreateBetNavigator";
import SideBar from "../screens/SideBar";
import ProfileScreen from "../screens/ProfileScreen";
import FriendsListScreen from "../screens/FriendsListScreen";
import OpenBetsListScreen from "../screens/OpenBetsListScreen";
import OpenBetsDescriptionScreen from "../screens/OpenBetsDescriptionScreen";

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    CreateBet: { screen: CreateBetNavigator },
    Profile:{ screen: ProfileScreen },
    Friends:{ screen: FriendsListScreen },
    Settings:{ screen: SettingsScreen }
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
    OpenBetsList: OpenBetsListScreen,
    OpenBetsDescription: OpenBetsDescriptionScreen
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

const MainTabNavigator = createBottomTabNavigator({
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

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: MainTabNavigator
    }
}, {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
    }
);

export default StackNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},
{
    defaultNavigationOptions: {
        header: null
    }
});


