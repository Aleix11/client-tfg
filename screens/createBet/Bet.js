import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import CustomHeader from "../CustomHeader";
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"

export default class SearchSummonerScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            currentPage:0
        };
    }



    _navigation = () => {
        switch (this.state.currentPage) {
            case 0: {
                return (<Container>
                    <Content padder contentContainerStyle={{flex:1,justifyContent: 'center'}}>

                    </Content>
                    <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                        <Button block info onPress={this._nextStep}>
                            <Text>NEXT</Text>
                        </Button>
                    </Content>
                </Container>)
            }
            case 1: {
                return(<Container>
                    <Content padder contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    </Content>
                    <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                        <Button block info onPress={this._nextStep}>
                            <Text>SELECT GAME</Text>
                        </Button>
                    </Content>
                </Container>)
            }
        }

    };

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={this.state.currentPage}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                </Content>
                {this._navigation()}
            </Container>
        );
    }

    _nextStep = () => {
        this.state.currentPage++;
        this._navigation();
    };
};