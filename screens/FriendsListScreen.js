import React from 'react';
import {
    Container, Header, Content, Form, Item, Input, Button, Text, H1, Thumbnail, H2, Right, Left,
    Body, ListItem, List, Icon
} from 'native-base';
import {
    StyleSheet,

} from 'react-native';
import CustomHeader from "./CustomHeader";


export default class FriendsListScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Container style={styles.container}>
                <CustomHeader navigation={ this.props.navigation } />
                <Content>
                    <Header searchBar rounded
                            style={{borderBottomWidth: 0,
                                marginTop: -10,
                                backgroundColor: 'transparent'}}>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Username" />
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
                </Content>
            </Container>
        );
    }

    _openBetDescription = () => {
        this.props.navigation.navigate('OpenBetDescription');
    };
}

const styles = StyleSheet.create({
    profileImage: {
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    friendBtn: {
        alignSelf: 'center',
        paddingTop: 0,
        paddingBottom: 0
    },
    friendsNum: {
        alignSelf: 'center',
        marginTop: 10,
    },
    friends: {
        alignSelf: 'center'
    }
});