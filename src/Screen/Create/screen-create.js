import React, {Component} from "react"
import {Container, Text, Content, List, ListItem, Left, Body, Right,Button} from "native-base"
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Header} from "../../Component/Header"
import {StyleSheet, View, Dimensions} from "react-native"
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
let {width, height} = Dimensions.get('window')

class ScreenCreate extends Component {
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
                <Content style={{margin: 15}}>
                    <List>
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
                    <Button block style={{backgroundColor:"#D50000", marginTop:10}}>
                        <Text>Create Order</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text_title:{
      fontSize: hp("2.8%")
    },
    text_note:{
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