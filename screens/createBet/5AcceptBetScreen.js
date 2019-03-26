import React from 'react';
import {
    Container, Header, Content, Form, Item, Input, Button, Text, H2, Grid, Row, Col, List,
    ListItem, Left, Thumbnail, Body, CheckBox
} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"
import {champions} from "./2SelectGameScreen";


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
                <Content padder
                         scrollEnabled={false}
                         contentContainerStyle={{flex:1,justifyContent: 'flex-start'}}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={4}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />

                    <Grid style={{ marginTop: 30, marginLeft: -10 }}
                          contentContainerStyle={{flex: 1}}>
                        <Row>
                            <Col>
                                <H2 style={styles.minutes}>{this.bet.tokens} Tokens</H2>
                                <List dataArray={this.bet.teamA}
                                      removeClippedSubviews={true}
                                      renderRow={(data) =>
                                          <ListItem thumbnail
                                                    style={ { height: 50 } }>
                                              <Left>
                                                  <Thumbnail small
                                                             source={{uri: `https://ddragon.leagueoflegends.com/cdn/9.5.1/img/champion/${champions(data.championId)}.png`}} />
                                              </Left>
                                              <Body>
                                              <Text>{data.summonerName}</Text>
                                              </Body>
                                          </ListItem>}>
                                </List>
                            </Col>
                            <Col>
                                <H2 style={styles.tokens}>{this.bet.duration} Minutes</H2>
                                <List dataArray={this.bet.teamB}
                                      renderRow={(data) =>
                                          <ListItem thumbnail
                                                    style={ { height: 50 } }>
                                              <Left>
                                                  <Thumbnail small source={{uri: `https://ddragon.leagueoflegends.com/cdn/9.5.1/img/champion/${champions(data.championId)}.png`}} />
                                              </Left>
                                              <Body>
                                              <Text>{data.summonerName}</Text>
                                              </Body>
                                          </ListItem>}>
                                </List>
                            </Col>
                        </Row>
                    </Grid>
                    <Button block info
                            contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}
                            onPress={this._acceptBet}>
                        <Text>ACCEPT BET</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    _acceptBet = () => {
        fetch('http://192.168.1.35:3000/bets/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bet: this.bet
            }),
        })
            .then(async req => {
                console.log(req, req.status);
                if (req.status === 200) {

                } else {
                    alert(JSON.parse(req._bodyText).err);
                }
            })
            .catch(error => console.log(error));
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
    },
    list: {
        borderBottomWidth: 0
    }
});