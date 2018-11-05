import React,{Component} from "react"
import {Container,Text} from "native-base"
import {connect} from "react-redux";
class ScreenOrder extends Component{
    render(){
        return(
            <Container>
                <Text>Order</Text>
            </Container>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenOrder)