import React from 'react';
import {Container, Header, Content, Form, Item, Input, Button, Text, H1} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"
import {Slider} from "react-native";


export default class DurationScreen extends React.Component {
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
                        currentPosition={3}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                    <Slider
                        value={this.state.value}
                        maximumValue={60}
                        minimumValue={0}
                        step={1}
                        style={styles.slider}
                        onValueChange={value => this.setState({ value })} />
                    <H1 style={styles.tokens}>{this.state.value} Minutes</H1>
                    <Text style={styles.commission}>* The bet will end when the selected time passes or when the game is over </Text>
                </Content>
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Button block info onPress={this._nextStep}>
                        <Text>SELECT {this.state.value} MINUTES</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    _nextStep = () => {
        this.bet.duration = this.state.value;
        this.props.navigation.navigate('AcceptBet', { bet: this.bet });
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
