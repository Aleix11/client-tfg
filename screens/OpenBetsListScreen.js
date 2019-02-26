import React from 'react';
import {
    Container, Header, Content, Form, Item, Input, Button, Text, H1, Thumbnail, H2, Right, Left,
    Body, ListItem, List, Icon, Grid, Row, Col
} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
import CustomHeader from "./CustomHeader";


export default class OpenBetsListScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Container>
                <CustomHeader navigation={ this.props.navigation } />
                <Content>
                    <Header searchBar rounded
                            style={{borderBottomWidth: 0,
                                marginTop: -10,
                                backgroundColor: 'transparent'}}>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Username" />
                        </Item>
                        <Button transparent>
                            <Text>Filters</Text>
                        </Button>
                    </Header>
                    <List>
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