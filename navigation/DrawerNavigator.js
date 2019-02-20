import React, { Component } from "react";
import SideBar from "../screens/SideBar.js";
import { createDrawerNavigator } from "react-navigation";
import CreateBetNavigator from "./CreateBetNavigator";
import MainTabNavigator from "./MainTabNavigator";

const HomeScreenRouter = createDrawerNavigator(
    {
        MainTab: { screen: MainTabNavigator }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;