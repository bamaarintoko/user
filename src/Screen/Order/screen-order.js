import React, {Component} from "react"
import {Container, Text, Content, ListItem, List, Left, Body, Right, Form, Item, Picker} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
import {StyleSheet, View} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class ScreenOrder extends Component {
    constructor(props) {
        super(props);
        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
            ],
            favSport: undefined,
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         favColor: 'red',
        //     });
        // }, 1000);

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([{value: 'purple', label: 'Purple'}]),
            });
        }, 2000);
    }

    render() {
        return (
            <Container style={{backgroundColor: "#E0E0E0"}}>
                <Header title={"Order"}/>
                <View style={{flexDirection: 'row', padding: 15, backgroundColor: "#FFF"}}>
                    <View style={{flex: 1}}>
                        <Text style={style.text_date}>Date :</Text>
                        <View style={{borderWidth: 2, borderRadius: 5}}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Select date...',
                                    value: null,
                                }}
                                items={this.state.items}
                                onValueChange={(value) => {
                                    this.setState({
                                        favColor: value,
                                    });
                                }}
                                onUpArrow={() => {
                                    this.inputRefs.name.focus();
                                }}
                                onDownArrow={() => {
                                    this.inputRefs.picker2.togglePicker();
                                }}
                                style={{...pickerSelectStyles}}
                                value={this.state.favColor}
                                ref={(el) => {
                                    this.inputRefs.picker = el;
                                }}
                            />
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={style.text_status}>Status :</Text>
                        <View style={{borderWidth: 2, borderRadius: 5, marginLeft:5}}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Select status...',
                                    value: null,
                                }}
                                items={this.state.items2}
                                onValueChange={(value) => {
                                    this.setState({
                                        favColor: value,
                                    });
                                }}
                                onUpArrow={() => {
                                    this.inputRefs.name.focus();
                                }}
                                onDownArrow={() => {
                                    this.inputRefs.picker2.togglePicker();
                                }}
                                style={{...pickerSelectStyles}}
                                value={this.state.favColor}
                                ref={(el) => {
                                    this.inputRefs.picker = el;
                                }}
                            />
                        </View>
                    </View>
                </View>

                <Content style={{padding: 15, marginTop: 10, backgroundColor: "#FFF"}}>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"archive"} size={hp("4%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={style.text_order}>Order Number : ######</Text>
                            <Text style={style.text_order} note>Origin : </Text>
                            <Text style={style.text_order} note>Destination : </Text>
                            <Text style={style.text_order} note>Driver : </Text>
                            <Text style={style.text_order} note>Car Number : </Text>
                            </Body>
                            <Right>
                                <Icon name={"check-square-o"} size={hp("3%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"archive"} size={hp("4%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={style.text_order}>Order Number : ######</Text>
                            <Text style={style.text_order} note>Origin : </Text>
                            <Text style={style.text_order} note>Destination : </Text>
                            <Text style={style.text_order} note>Driver : </Text>
                            <Text style={style.text_order} note>Car Number : </Text>
                            </Body>
                            <Right>
                                <Icon name={"check-square-o"} size={hp("3%")} color={"#D50000"}/>
                            </Right>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    }

});
const style = StyleSheet.create({
    text_order:{
        fontSize: hp("2.4%")
    },
    text_date:{
        fontSize: hp("2.4%"),
        marginRight: 5
    },
    text_status:{
        fontSize: hp("2.4%"),
        marginLeft:5
    }
})

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenOrder)