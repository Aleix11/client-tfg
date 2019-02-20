import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import CustomHeader from "../CustomHeader";
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"


export default class DurationScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={0}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                </Content>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                </Content>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Button block info onPress={this._nextStep}>
                        <Text>SELECT X MINUTES</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    _nextStep = () => {
        this.props.navigation.navigate('AcceptBet');
    };
};