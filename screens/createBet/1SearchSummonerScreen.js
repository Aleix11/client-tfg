import React from 'react';
import {Container, Header, Content, Form, Item, Input, Button, Text, H1} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"

export default class SearchSummonerScreen extends React.Component {
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
            <Container>
                <Content padder
                         contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}
                         scrollEnabled={false}>
                <StepIndicator
                    stepCount={5}
                    customStyles={ThirdIndicatorStyles}
                    currentPosition={0}
                    labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}/>
                <H1 style={styles.text1}>
                    INTRODUCE
                </H1>
                <H1 style={styles.text2}>
                    SUMMONER NAME
                </H1>
                <Item rounded style={styles.input}>
                    <Input onChangeText={(text) => this.bet.summoner = text}/>
                </Item>
                </Content>
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                    <Button block info onPress={this._nextStep}>
                        <Text>NEXT</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    _nextStep = () => {
        this.props.navigation.navigate('SelectGame', { bet: this.bet });
    };
};


const styles = StyleSheet.create({
    text1:{
        marginBottom: 5,
        marginTop: 40,
        alignSelf: 'center'
    },
    text2:{
        marginBottom: 25,
        fontSize: 25,
        alignSelf: 'center'
    }
});