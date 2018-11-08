import React, {Component} from "react"
import {Container, Text, Content, List, ListItem, Left, Body, Right, Button} from "native-base"
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Header} from "../../Component/Header"
import {StyleSheet, View, Dimensions, TouchableWithoutFeedback} from "react-native"
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from "react-native-modal";

let {width, height} = Dimensions.get('window')

class ScreenCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalDropOff: false
        }
    }

    _toggleModal = () => {

        return () => {

            this.setState({isModalVisible: !this.state.isModalVisible});
        }

    }
    toggleDropOff = () => {
        return () => {
            this.setState({
                isModalDropOff: !this.state.isModalDropOff
            })
        }
    }
    onKeyBack = () => {
        return () => {
            console.log("asdf")
            this.setState({
                isModalVisible: false,
                isModalDropOff: false
            })
        }
    }

    render() {
        return (
            <Container>
                <Header title={"Create Order"}/>
                <View>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: -7.797068,
                            longitude: 110.370529,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                    </MapView>
                </View>
                {/*MODAL PICK UP*/}
                <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.onKeyBack()}>
                    <View style={{flex: 1, backgroundColor: "#FFF"}}>
                        <Text>I am the modal Pick Up!</Text>
                    </View>
                </Modal>
                {/*END MODAL*/}
                {/*MODAL DROP OFF*/}
                <Modal isVisible={this.state.isModalDropOff} onBackButtonPress={this.onKeyBack()}>
                    <View style={{flex: 1, backgroundColor: "#FFF"}}>
                        <Text>I am the modal Drop Off!</Text>
                    </View>
                </Modal>
                {/*END MODAL*/}
                <Content style={{margin: 15}}>
                    <List>
                        <TouchableWithoutFeedback onPress={this._toggleModal()}>
                            <ListItem avatar>
                                <Left>
                                    <View style={styles.icn}>
                                        <Icon name={"street-view"} size={wp("5%")} color={"#D50000"}/>
                                    </View>
                                </Left>
                                <Body>
                                <Text style={styles.text_title}>Pick Up Location</Text>
                                <Text style={styles.text_note} note>Rp 500.000</Text>
                                </Body>
                                <Right>
                                    <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                                </Right>
                            </ListItem>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.toggleDropOff()}>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"map-marker"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Drop Off Location</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        </TouchableWithoutFeedback>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"picture-o"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Item Image</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"archive"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Item Description</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"car"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Select Vehicle</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"sticky-note-o"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Additional Services</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <View style={styles.icn}>
                                    <Icon name={"calendar"} size={wp("5%")} color={"#D50000"}/>
                                </View>
                            </Left>
                            <Body>
                            <Text style={styles.text_title}>Select Date</Text>
                            <Text style={styles.text_note} note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Icon name={"chevron-right"} size={wp("5%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                    </List>
                    <Button block style={{backgroundColor: "#D50000", marginTop: 10}}>
                        <Text>Create Order</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text_title: {
        fontSize: hp("2.8%")
    },
    text_note: {
        fontSize: hp("2.5%")
    },
    icn: {
        width: wp("7%"), justifyContent: 'center', alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map: {
        width: width,
        height: hp("20%"),
    }
});

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenCreate)