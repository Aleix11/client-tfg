import React from 'react';
import {
    Container, Header, Content, Form, Item, Input, Button, Text, H1, Thumbnail, H2, Icon, Grid,
    Row, Col
} from 'native-base';
import {
    StyleSheet,
    Alert
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import CustomHeader from "./CustomHeader";

export default class OpenBetsDescriptionScreen extends React.Component {
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
                    <H2 style={styles.text1}>
                        NAME
                    </H2>
                    <H1 style={styles.text1}>
                        X TOKENS
                    </H1>
                    <H1 style={styles.friendsNum}>
                        X MINUTES
                    </H1>
                </Content>
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Grid>
                        <Row>
                            <Col>
                                <Icon ios='ios-close-circle'
                                      android="md-close-circle"
                                      onPress={this._returnToList}
                                      style={styles.iconNo}/>
                            </Col>
                            <Col>
                                <Icon ios='ios-checkmark-circle'
                                      android="md-checkmark-circle"
                                      onPress={this._alert}
                                      style={styles.iconYes}/>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
    _returnToList = () => {
        this.props.navigation.navigate('OpenBetsList');
    };

    _alert = () => {
        Alert.alert(
            "Do you want to accept the bet?", null,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "YES", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    };

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
    iconYes: {
        alignSelf: 'center',
        fontSize: 60,
        color: '#3cb400'
    },
    iconNo: {
        alignSelf: 'center',
        fontSize: 60,
        color: '#b40000'
    },
    friendsNum: {
        alignSelf: 'center',
        marginTop: 10,
    },
    friends: {
        alignSelf: 'center'
    }
});