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
    Right, Segment, Item, Input
} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    state = {
        activePage:1,
    };

    selectComponent = (activePage) => () => this.setState({activePage})

    _renderComponent = () => {
        if(this.state.activePage === 1)
            return <Content style={{paddingLeft: 2, paddingRight: 2}}>
                <Header searchBar rounded
                           style={{borderBottomWidth: 0,
                               marginTop: -10,
                               backgroundColor: 'transparent'}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
            </Header>
                </Content>;

        else
            return <Content style={{paddingLeft: 2, paddingRight: 2}}>
                <Header searchBar rounded
                        style={{borderBottomWidth: 0,
                            marginTop: -10,
                            backgroundColor: 'transparent'}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                </Header>
            </Content>;
    };

    closeDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    };
    openDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.openDrawer()
                            }>
                            <Icon ios='ios-menu' android="md-menu"/>
                        </Button>
                    </Left>
                    <Segment>
                        <Button first active={this.state.activePage === 1}
                                onPress={this.selectComponent(1)}><Text>Bets</Text></Button>
                        <Button last active={this.state.activePage === 2}
                                onPress= {this.selectComponent(2)}><Text>Users</Text></Button>
                    </Segment>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {}}>
                            <Icon ios='ios-chatboxes' android="md-chatboxes"/>
                        </Button>
                    </Right>
                </Header>
                    {this._renderComponent()}
            </Container>
        );
    }
}