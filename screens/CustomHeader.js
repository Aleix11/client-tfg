import React, { Component } from 'react';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';


export default class CustomHeader extends React.Component {
    constructor(props){
        super(props);
    }

    closeDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    };
    openDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    };

    render() {
        return(
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.openDrawer()
                        }>
                        <Icon ios='ios-menu' android="md-menu"/>
                    </Button>
                </Left>
                <Body>
                <Title>LOGO</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => {}}>
                        <Icon ios='ios-chatboxes' android="md-chatboxes"/>
                    </Button>
                </Right>
            </Header>

        )
    }
}