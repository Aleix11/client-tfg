import React from 'react';
import {Container, Header, Content, Form, Item, Input, Button, Text, H2} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"


export default class AcceptBetScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.bet = this.props.navigation.getParam('bet');

        console.log(this.bet);
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={4}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                    <H2 style={styles.minutes}>{this.bet.tokens} Tokens</H2>
                    <H2 style={styles.tokens}>{this.bet.duration} Minutes</H2>
                </Content>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Button block info onPress={this._nextStep}>
                        <Text>ACCEPT BET</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
};
const styles = StyleSheet.create({
    minutes: {
        marginBottom: 20,
        marginLeft: 10
    },
    tokens: {
        marginBottom: 20,
        marginLeft: 10
    }
});