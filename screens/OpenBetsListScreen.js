import React from 'react';
import {
    Container, Header, Content, Form, Item, Input, Button, Text, H1, Thumbnail, H2, Right, Left,
    Body, ListItem, List, Icon, Grid, Row, Col, View, Picker, Badge
} from 'native-base';
import {
    Modal,
    StyleSheet
} from 'react-native';
import CustomHeader from "./CustomHeader";
import RangeSlider from "react-native-range-slider";


export default class OpenBetsListScreen extends React.Component {
    static navigationOptions = {
        header: null
    };



    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    onValueChange(value) {
        this.setState({
            newFilter: {
                region: value
            }
        });
    }
    _removeRegion() {
        this.setState({
            filter: {
                region: '',
                tokens: this.state.filter.tokens,
                minutes: this.state.filter.minutes
            }
        });
    }
    _removeTokens() {
        this.setState({
            filter: {
                region: this.state.filter.region,
                tokens: [],
                minutes: this.state.filter.minutes
            }
        });
    }
    _removeMinutes() {
        this.setState({
            filter: {
                region: this.state.filter.region,
                tokens: this.state.filter.tokens,
                minutes: []
            }
        });
    }
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            filter: {
                region: 'EUW1',
                tokens: [0, 100],
                minutes: [0, 60]
            },
            newFilter: {
                region: 'EUW1',
                tokens: [],
                minutes: []
            }
        };
    }

    render() {
        return (
            <Container>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    scrollEnabled={false}>
                    <Container>
                        <Content padder
                                 scrollEnabled={false}>
                            <Header style={{borderBottomWidth: 0,
                                backgroundColor: '#fff',
                                elevation:0}}>
                                <Right>
                                    <Button
                                        transparent
                                        onPress={() => {
                                            this.state.newFilter = this.state.filter;
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Icon ios='ios-close' android="md-close" style={{fontSize: 40}}/>
                                    </Button>
                                </Right>
                            </Header>
                            <Text style={{alignSelf: 'center', marginTop: 15, fontSize: 24}}>
                                Region:
                            </Text>
                            <Form style={{alignSelf: 'center', marginTop: 10, fontSize: 20}}>
                                <Picker
                                    mode="dropdown"
                                    scrollEnabled={false}
                                    iosIcon={<Icon name="ios-arrow-down" />}
                                    placeholder="Select Region"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.newFilter.region}
                                    onValueChange={this.onValueChange.bind(this)}>
                                    <Picker.Item label="EUW - EUROPE WEST" value="EUW1" />
                                    <Picker.Item label="EUNE - EUROPE NORDIC & EST" value="EUN1" />
                                    <Picker.Item label="NA - NORTH AMERICA" value="NA1" />
                                    <Picker.Item label="LAN - LATIN AMERICA NORTH" value="LA1" />
                                    <Picker.Item label="LAS - LATIN AMERICA SOUTH" value="LA2" />
                                    <Picker.Item label="KR - KOREA" value="KR" />
                                    <Picker.Item label="JP - JAPAN" value="JP1" />
                                    <Picker.Item label="RU - RUSSIA" value="RU" />
                                    <Picker.Item label="TR - TURKEY" value="TR1" />
                                    <Picker.Item label="BR - BRAZIL" value="BR1" />
                                    <Picker.Item label="OC - OCEANIA" value="OC1" />
                                </Picker>
                            </Form>

                            <Text style={{alignSelf: 'center', marginTop: 15, fontSize: 24}}>
                                Tokens:
                            </Text>

                            {/*Range Numbers*/}

                        {/*RangeSlider*/}

                            <Text style={{alignSelf: 'center', marginTop: 15, fontSize: 24}}>
                                Minutes:
                            </Text>

                            {/*Range Numbers*/}

                        {/*RangeSlider*/}

                        </Content>
                        <Content padder contentContainerStyle={{flex:1,justifyContent: 'flex-end'}}>
                            <Button block info onPress={() => {
                                this.state.filter = this.state.newFilter;
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                                <Text>SAVE FILTERS</Text>
                            </Button>
                        </Content>
                    </Container>
                </Modal>
                <CustomHeader navigation={ this.props.navigation } />
                <Content scrollEnabled={false}>
                    <Header searchBar rounded
                            style={{borderBottomWidth: 0,
                                marginTop: -15,
                                backgroundColor: 'transparent'}}>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Username" />
                        </Item>
                        <Button transparent onPress={() => {
                            this.setModalVisible(true);
                        }}>
                            <Text>Filters</Text>
                        </Button>
                    </Header>
                    {this._tags()}
                    <List style={{marginTop: -15}}>
                        <ListItem onPress={this._openBet}>
                            <Body>
                                <Grid>
                                    <Row>
                                        <Col size={4}>
                                            <Text style={styles.num}>
                                                X
                                            </Text>
                                            <Text style={styles.numDesc}>TOKENS</Text>
                                        </Col>
                                        <Col size={4}>
                                            <Text style={styles.num}>
                                                X
                                            </Text>
                                            <Text style={styles.numDesc}>MINUTES</Text>
                                        </Col>
                                        <Col size={6} >
                                            <Text style={styles.desc1}>NAME</Text>
                                            <Text style={styles.desc2}>EU</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Body>
                            <Right>
                                <Icon ios='ios-arrow-forward'
                                      android="md-arrow-forward"
                                      style={{fontSize: 40, marginTop: 5}}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Grid>
                                <Row>
                                    <Col size={4}>
                                        <Text style={styles.num}>
                                            X
                                        </Text>
                                        <Text style={styles.numDesc}>TOKENS</Text>
                                    </Col>
                                    <Col size={4}>
                                        <Text style={styles.num}>
                                            X
                                        </Text>
                                        <Text style={styles.numDesc}>MINUTES</Text>
                                    </Col>
                                    <Col size={6} >
                                        <Text style={styles.desc1}>NAME</Text>
                                        <Text style={styles.desc2}>EU</Text>
                                    </Col>
                                </Row>
                            </Grid>
                            </Body>
                            <Right>
                                <Icon ios='ios-arrow-forward'
                                      android="md-arrow-forward"
                                      style={{fontSize: 40, marginTop: 5}}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

    _tags = () => {
        if(this.state.filter.region || this.state.filter.tokens.length !== 0 || this.state.filter.minutes.length !== 0) {
           return(
               <Header style={{borderBottomWidth: 0,
                   marginTop: -15,
                   backgroundColor: 'transparent'}}>
                   <Grid style={{marginLeft: '2.5%'}}>
                       <Row>
                           {this._regionBadge()}
                           {this._tokensBadge()}
                           {this._minutesBadge()}
                       </Row>
                   </Grid>
               </Header>
           )
        }
    };

    _regionBadge = () => {
        if(this.state.filter.region) {
            return (
            <Col size={4}>
                <Badge style={{ backgroundColor: '#d2d2d2', width: 110 }}>
                    <Grid>
                        <Row>
                            <Col size={1} style={{marginLeft: 1}}>
                                <Icon ios='ios-close'
                                      android="md-close"
                                      onPress={() => {
                                          this._removeRegion()
                                      }}
                                      style={{fontSize: 20, color: '#5a5a5a'}}/>
                            </Col>
                            <Col size={11}>
                                <Text style={{ fontSize: 12, color: '#5a5a5a' }}>
                                    Region: {this.state.filter.region}
                                    </Text>
                            </Col>
                        </Row>
                    </Grid>
                </Badge>
            </Col>
            )
        }
    };

    _tokensBadge = () => {
        if(this.state.filter.tokens[0] && this.state.filter.tokens[1] || this.state.filter.tokens[0] === 0) {
            return (
                <Col size={4}>
                    <Badge style={{ backgroundColor: '#d2d2d2', width: 110 }}>
                        <Grid>
                            <Row>
                                <Col size={1} style={{marginLeft: 1}}>
                                    <Icon ios='ios-close'
                                          android="md-close"
                                          onPress={() => {
                                              this._removeTokens()
                                          }}
                                          style={{fontSize: 20, color: '#5a5a5a'}}/>
                                </Col>
                                <Col size={11}>
                                    <Text style={{ fontSize: 12, color: '#5a5a5a' }}>
                                        Tokens: {this.state.filter.tokens[0]}-{this.state.filter.tokens[1]}
                                    </Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Badge>
                </Col>
            )
        }
    };


    _minutesBadge = () => {
        if(this.state.filter.minutes[0] && this.state.filter.minutes[1] || this.state.filter.minutes[0] === 0) {
            return (
                <Col size={4}>
                    <Badge style={{ backgroundColor: '#d2d2d2', width: 110 }}>
                        <Grid>
                            <Row>
                                <Col size={1} style={{marginLeft: 1}}>
                                    <Icon ios='ios-close'
                                          android="md-close"
                                          onPress={() => {
                                              this._removeMinutes();
                                          }}
                                          style={{fontSize: 20, color: '#5a5a5a'}}/>
                                </Col>
                                <Col size={11}>
                                    <Text style={{ fontSize: 12, color: '#5a5a5a' }}>
                                        Minutes: {this.state.filter.minutes[0]}-{this.state.filter.minutes[1]}
                                    </Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Badge>
                </Col>
            )
        }
    };

    _openBet = () => {
        this.props.navigation.navigate('OpenBetsDescription');
    };

}

const styles = StyleSheet.create({
    num: {
        alignSelf: 'center',
        fontSize: 28
    },
    numDesc: {
        alignSelf: 'center',
        fontSize: 12
    },
    desc1: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 6
    },
    desc2: {
        alignSelf: 'center',
        fontSize: 16
    }
});

/*<RangeSlider
    minValue={0}
    maxValue={100}
    tintColor={'#da0f22'}
    handleBorderWidth={1}
    handleBorderColor="#454d55"
    selectedMinimum={20}
    selectedMaximum={40}
    style={{ marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 30,
        backgroundColor: '#ddd' }}
    onChange={ (data)=>{ console.log(data);} }
/>*/