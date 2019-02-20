import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';


export default class StartScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Button block rounded
                            style={styles.button}
                            onPress={this._goToLogInScreen}>
                        <Text>LOG IN</Text>
                    </Button>
                    <Button small transparent
                            style={styles.submitButton}
                            onPress={this._goToSignUpScreen}>
                        <Text>SIGN IN</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    _goToLogInScreen = () => {
        this.props.navigation.navigate('LogInScreen');
    };

    _goToSignUpScreen = () => {
        this.props.navigation.navigate('SignUpScreen');
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3a3a3a'
    },
    button: {
        marginLeft: '10%',
        marginRight: '10%'
    },
    submitButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
});