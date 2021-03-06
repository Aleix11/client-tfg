import React from 'react';
import {createStackNavigator } from 'react-navigation';
import SearchSummonerScreen from "../screens/createBet/1SearchSummonerScreen";
import SelectGameScreen from "../screens/createBet/2SelectGameScreen";
import TokenScreen from "../screens/createBet/3TokensScreen";
import DurationScreen from "../screens/createBet/4DurationScreen";
import AcceptBetScreen from "../screens/createBet/5AcceptBetScreen";
import Bet from "../screens/createBet/Bet";

const CreateBetStack = createStackNavigator(
    {
        SearchSummoner: SearchSummonerScreen,
        SelectGame: SelectGameScreen,
        Tokens: TokenScreen,
        Duration: DurationScreen,
        AcceptBet: AcceptBetScreen
        //Bet: Bet
    },
    {
        initialRouteName: 'SearchSummoner'
    }
);

export default CreateBetStack;