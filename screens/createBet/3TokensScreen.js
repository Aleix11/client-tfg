import React from 'react';
import {Container, Header, Content, Form, Item, Input, Button, Text, H1} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"
import Slider from "react-native-slider";


export default class TokenScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
        this.bet = this.props.navigation.getParam('bet');
    }

    render() {
        return (
            <Container>
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={2}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                    <Slider
                        value={this.state.value}
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        style={styles.slider}
                        onValueChange={value => this.setState({ value })} />
                    <H1 style={styles.tokens}>{this.state.value} Tokens</H1>
                    <Text style={styles.commission}>* The 2% of the bet tokens are going to the management of the bets</Text>
                </Content>
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Button block info onPress={this._nextStep}>
                        <Text>BET {this.state.value - this.state.value * 0.02} TOKENS</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    _nextStep = () => {
        this.bet.tokens = this.state.value;
        this.props.navigation.navigate('Duration', { bet: this.bet });
    };

    _commission() {
        return this.state.value * 0.02
    };
};
const styles = StyleSheet.create({
    slider: {
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 30
    },
    tokens: {
        alignSelf: 'center',
        marginBottom: 20
    },
    commission: {
        textAlign: 'center',
        marginLeft: 25,
        marginRight: 25
    }
});