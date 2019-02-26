import React from 'react';
import {Container, Header, Content, Form, Item, Input, Button, Text, H1, Thumbnail, H2} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import CustomHeader from "./CustomHeader";

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.bet = {
            summoner: '',
            game: '',
            team: '',
            tokens: 0,
            duration: 0
        }
    }



    render() {
        return (
            <Container style={styles.container}>
                <CustomHeader navigation={ this.props.navigation } />
                <Content padder
                         contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <Thumbnail large
                               style={styles.profileImage}
                               source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                    <H1 style={styles.text1}>
                        NAME
                    </H1>
                    <H2 style={styles.friendsNum}>
                        X
                    </H2>
                    <H2 style={styles.friends}>
                        FRIENDS
                    </H2>
                    <Button info
                            style={styles.friendBtn}
                            onPress={this._nextStep}>
                        <Text>BE A FRIEND</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text1:{
        marginBottom: 5,
        marginTop: 10,
        alignSelf: 'center'
    },
    text2:{
        marginBottom: 25,
        fontSize: 25,
        alignSelf: 'center'
    },
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