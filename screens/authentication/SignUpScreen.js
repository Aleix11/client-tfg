import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
} from 'react-native';

import StepIndicator from 'react-native-step-indicator'
import ThirdIndicatorStyles from "../../constants/Styles"

// import { AccessToken, LoginManager } from 'react-native-fbsdk';
// import firebase from 'react-native-firebase'

import {Container, Content, Form, Item, Input, Button, Text, Toast, Grid, Row, Col} from 'native-base';

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
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <StepIndicator
                        stepCount={3}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={0}
                        labels={['Sign Up', 'Ethereum', 'Tokens']}
                        />
                    <Grid>
                        <Row>
                            <Col>
                                <Button block rounded
                                        style={styles.button}
                                        onPress={this._singUpEmail}>
                                    <Text>Sing Up Email</Text>
                                </Button>
                            </Col>
                            <Col>
                                {/*<GoogleSigninButton*/}
                                    {/*style={{ width: 192, height: 48 }}*/}
                                    {/*size={GoogleSigninButton.Size.Wide}*/}
                                    {/*color={GoogleSigninButton.Color.Dark}*/}
                                    {/*onPress={this._signIn}*/}
                                    {/*disabled={this.state.isSigninInProgress} />*/}
                            </Col>
                        </Row>
                    </Grid>

                </Content>
            </Container>
        );
    };

    _singUpEmail = () => {
        this.props.navigation.navigate('SingUpEmailScreen');
    };

    // _signIn = async () => {
    //     GoogleSignin.configure({
    //         scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //         webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //         offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //         hostedDomain: '', // specifies a hosted domain restriction
    //         loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //         forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    //         accountName: '', // [Android] specifies an account name on the device that should be used
    //         iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //     });
    //
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         this.setState({ userInfo });
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (f.e. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //         } else {
    //             // some other error happened
    //         }
    //     }
    // }

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
    button: {
        marginTop: '2%'
    }
});