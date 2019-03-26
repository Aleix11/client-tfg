import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
} from 'react-native';

import { Container, Header, Content, Form, Item, Icon, Input, Button, Text, Toast } from 'native-base';

export default class LogInScreen extends React.Component {
    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#3a3a3a',
            borderBottomWidth: 0
        }
    };

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.getData = {
            token: ''
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form style={styles.form}>
                        <Item rounded style={styles.text}>
                            <Input  onChangeText={(text) => this.setState({username: text})}
                                    placeholder="Username"/>
                        </Item>
                        <Item rounded style={styles.text}>
                            <Input secureTextEntry={true}
                                   onChangeText={(text) => this.setState({password: text})}
                                   placeholder="Password"/>
                        </Item>
                        <Button block rounded
                                style={styles.button}
                                onPress={this._login}>
                            <Text>Log In</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    _login = async () => {
        fetch('http://192.168.1.17:3000/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
        .then(async req => {
            console.log(req, req.status);
            if (req.status === 200) {
                await AsyncStorage.clear();
                this.getData = JSON.parse(req._bodyText);
                const token = this.getData.token;
                await AsyncStorage.setItem('token', JSON.stringify(token));
                this.props.navigation.navigate('Main');
            } else {
                Toast.show({
                    text: "" + req.status,
                    buttonText: "Okay",
                    duration: 5000
                });
            }
        })
        .catch(error => console.log(error));
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a3a3a',
    },
    text: {
        color: 'white',
        backgroundColor: 'white',
        marginBottom: '2%'
    },
    form: {
        padding: '4%',
        marginTop: '1%'
    },
    button: {
        marginTop: '2%'
    }
});