import React, {Component} from "react"
import {Container, Text, Content, View, List, ListItem, Left, Body, Right} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
import {StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

class ScreenWallet extends Component {
    render() {
        return (
            <Container style={{backgroundColor: "#E0E0E0"}}>
                <Header title={"Wallet"}/>
                <View style={{height: 250, backgroundColor: "#fff", alignItems: "center"}}>
                    <View style={styles.wallet}>
                        <Text>Current Deposit</Text>
                    </View>
                    <Text style={{fontSize: 40, fontWeight: "bold"}}>Rp 550.000</Text>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Icon name={"plus-square"} size={40}/>
                        <Text>Add Deposit</Text>
                    </View>
                </View>
                <View style={{height: 50, justifyContent: 'center', paddingLeft: 15}}>
                    <Text>Transaction History</Text>
                </View>
                <Content style={{backgroundColor: "#fff"}}>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-up"} size={40} color={"#64DD17"}/>
                            </Left>
                            <Body>
                            <Text>Deposit</Text>
                            <Text note>Rp 500.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={40} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={40} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={40} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={40} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wallet: {
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        backgroundColor: "#E3F2FD",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 35
    }
});

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenWallet)