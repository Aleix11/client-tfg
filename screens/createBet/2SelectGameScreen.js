import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Button, Text, ListItem, CheckBox, Body} from 'native-base';
import StepIndicator from "react-native-step-indicator";
import ThirdIndicatorStyles from "../../constants/Styles"
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class SelectGameScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.bet = this.props.navigation.getParam('bet');

        this.state = {
            teamA: false,
            teamB: false
        };

    }

    render() {
        return (
            <Container>
                <Content padder
                         contentContainerStyle={{justifyContent: 'flex-start'}}
                         scrollEnabled={false}>
                    <StepIndicator
                        stepCount={5}
                        customStyles={ThirdIndicatorStyles}
                        currentPosition={1}
                        labels={['Summoner', 'Game', 'Tokens', 'Duration', 'Accept Bet']}
                    />
                </Content>
                <Content padder
                         contentContainerStyle={{justifyContent: 'center'}}
                         scrollEnabled={false}>
                </Content>
                <Content padder
                         contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}
                         scrollEnabled={false}>
                    <Grid>
                        <Col >
                            <ListItem noBorder >
                                <CheckBox checked={this.state.checkbox1}
                                          onPress={() => this.toggleSwitch1()} />
                                <Body style={styles.body}>
                                    <Text>TEAM BLUE</Text>
                                </Body>
                            </ListItem>
                        </Col>
                        <Col>
                            <ListItem noBorder>
                                <CheckBox checked={this.state.checkbox2}
                                          onPress={() => this.toggleSwitch2()}/>
                                <Body style={styles.body}>
                                    <Text>TEAM RED</Text>
                                </Body>
                            </ListItem>
                        </Col>
                    </Grid>
                    <Button block info onPress={this._nextStep}>
                        <Text>SELECT GAME</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    _nextStep = () => {
        if(this.state.checkbox1 && !this.state.checkbox2) {
            this.bet.team = 'Blue';
        } else if(!this.state.checkbox1 && this.state.checkbox2) {
            this.bet.team = 'Red';
        }

        this.props.navigation.navigate('Tokens', { bet: this.bet });
    };
    toggleSwitch1() {
        this.setState({
            checkbox1: true,
            checkbox2: false
        });
    }
    toggleSwitch2() {
        this.setState({
            checkbox1: false,
            checkbox2: true
        });
    }
};
const styles = StyleSheet.create({
    body: {
        alignSelf: 'center'
    },
    list: {
        borderBottomWidth: 0
    }
});