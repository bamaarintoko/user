import React,{Component} from "react"
import {Container,Text} from "native-base"
import {connect} from "react-redux";

class ScreenAccount extends Component{
    render(){
        return (
            <Container>
                <Text>
                    account
                </Text>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{

    }
}

export default connect(mapStateToProps)(ScreenAccount)