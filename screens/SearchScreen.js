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
    Right, Segment, Item, Input, ListItem, Thumbnail, List
} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

import {
    AsyncStorage, FlatList,
    StyleSheet,
} from 'react-native';

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.user = AsyncStorage.getItem('user');
        this._getUsers();

    }

    state = {
        activePage: 1,
        user: '',
        summoner: '',
        users: []
    };

     selectComponent = (activePage) => async () => {
        await this.setState({activePage: activePage});
        if(this.state.activePage === 1) {
            this._getUsers();
        } else if(this.state.activePage === 2) {
            this._getBets();
        }
    };

    _renderComponent = () => {
        console.log('state', this.state.activePage);
        if(this.state.activePage === 1) {
            return <Content style={{paddingLeft: 2, paddingRight: 2}} key={1}>
                <Header searchBar rounded
                        style={{
                            borderBottomWidth: 0,
                            marginTop: -10,
                            backgroundColor: 'transparent'
                        }}>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search User"/>
                    </Item>
                </Header>
                <FlatList data={this.state.users}
                          renderItem={(user) => {
                              console.log('user', user.item._id.toString());
                              return <ListItem thumbnail id={user.item._id.toString()}>
                                  <Left>
                                      <Thumbnail
                                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                  </Left>
                                  <Body>
                                  <Text>{user.username}</Text>
                                  <Text note>{user.friends} Friends</Text>
                                  </Body>
                                  <Right>
                                      {this._addOrRemove(user)}
                                      <Icon ios='ios-close' android="md-close" style={{fontSize: 40, color: 'red'}}/>
                                  </Right>
                              </ListItem>
                          }}
                          keyExtractor={(user, index) => user.toString()}>

                </FlatList>
            </Content>;
        } else {
            return <Content style={{paddingLeft: 2, paddingRight: 2}} key={2}>
                <Header searchBar rounded
                        style={{borderBottomWidth: 0,
                            marginTop: -10,
                            backgroundColor: 'transparent'}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search Summoner" />
                    </Item>
                </Header>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                        </Left>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                            <Icon ios='ios-close' android="md-close" style={{fontSize: 40, color: 'red'}}/>
                        </Right>
                    </ListItem>
                </List>
            </Content>;
        }
    };

    _renderRow = (user, index) => {
        console.log('user', user);
        return
    };

    _addOrRemove = (user) => {
        if(this.user.friends) {
            let friend = this.user.friends.find(friend => friend.username === user.username);

            console.log(friend);
            if(friend && friend !== null) {
                return <Icon ios='ios-close' android="md-close" style={{fontSize: 40, color: 'red'}}/>
            } else {
                return <Icon ios='ios-add' android="md-add" style={{fontSize: 40, color: 'red'}}/>
            }
        }

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
                                onPress= {this.selectComponent(1)}><Text>Users</Text></Button>
                        <Button last active={this.state.activePage === 2}
                                onPress={this.selectComponent(2)}><Text>Bets</Text></Button>
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

    _setUser(user) {
        this.setState({user: user})
    };

    _setSummoner(summoner) {
        this.setState({summoner: summoner})
    };

    _getBets() {
        fetch('http://192.168.1.17:3000/bets/search', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summoner: this.state.summoner
            }),
        })
        .then(async req => {
        })
        .catch(error => console.log(error));
    }

    _getUsers() {
        fetch('http://192.168.1.17:3000/users/search', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: this.state.user
            }),
        })
        .then(async req => {
            this.state.users = JSON.parse(req._bodyText);
        })
        .catch(error => console.log(error));
    }
}