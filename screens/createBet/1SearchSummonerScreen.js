import React from 'react';
import {Container, Toast, Header, Content, Form, Item, Input, Button, Text, H1} from 'native-base';
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
            game: {},
            teamA: [],
            teamB: [],
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
                    <Button block info onPress={this._searchSummoner}>
                        <Text>NEXT</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    _searchSummoner = () => {
        fetch('http://192.168.1.35:3000/summoners/searchSummoner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summonerName: this.bet.summoner
            }),
        })
        .then(async req => {
            if (req.status === 200) {
                this.bet.game = JSON.parse(req._bodyText);
                this.bet.game.participants.forEach(participant => {
                    if(participant.team === 100) {
                        this.bet.teamA.push(participant);
                    } else if(participant.team === 200) {
                        this.bet.teamB.push(participant);
                    }
                });

                console.log(this.bet.game);
                this.props.navigation.navigate('SelectGame', { bet: this.bet });
            } else {
                alert(JSON.parse(req._bodyText).err);
            }
        })
        .catch(error => console.log(error));
    }
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