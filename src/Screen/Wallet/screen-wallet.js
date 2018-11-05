import React,{Component} from "react"
import {Container,Text} from "native-base"
import {connect} from "react-redux";

class ScreenWallet extends Component{
    render(){
        return(
            <Container>
                <Text>Wallet</Text>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenWallet)