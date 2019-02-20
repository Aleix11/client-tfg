import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
} from 'react-native';

import StepIndicator from 'react-native-step-indicator'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ThirdIndicatorStyles from "../../constants/Styles"


import { Container, Content, Form, Item, Input, Button, Text, Toast } from 'native-base';

export default class SignUpScreen extends React.Component {
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
            email: '',
            password: '',
            password2: ''
        };

        this.getData = {
            token: ''
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <StepIndicator
                        stepCount={3}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={0}
                        labels={['Sign Up', 'Ethereum', 'Tokens']}
                        />
                    <Form style={styles.form}>
                        <Item rounded style={styles.text}>
                            <Input onChangeText={(text) => this.setState({username: text})}
                                   placeholder="Username"/>
                        </Item>
                        <Item rounded style={styles.text}>
                            <Input onChangeText={(text) => this.setState({email: text})}
                                   keyboardType={'email-address'}
                                   placeholder="Email"/>
                        </Item>
                        <Item rounded style={styles.text}>
                            <Input onChangeText={(text) => this.setState({password: text})}
                                   secureTextEntry={true}
                                   placeholder="Password"/>
                        </Item>
                        <Item rounded style={styles.text}>
                            <Input onChangeText={(text) => this.setState({password2: text})}
                                   secureTextEntry={true}
                                   placeholder="Repeat Password"/>
                        </Item>
                        <Button block rounded
                                style={styles.button}
                                onPress={this._signUp}>
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    _validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            console.log("Email is Not Correct");
            this.setState({email:text});
            return false;
        }
        else {
            this.setState({email:text});
            console.log("Email is Correct");
        }
    };

    _signUp = async () => {
        if (this.state.password === this.state.password2) {
            fetch('http://192.168.0.160:3000/users/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
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
        } else {
            Toast.show({
                text: 'Passwords are not equal',
                buttonText: "Okay",
                duration: 5000
            });
        }
    }
}

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