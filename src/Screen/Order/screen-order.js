import React,{Component} from "react"
import {Container,Text,Content} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
class ScreenOrder extends Component{
    render(){
        return(
            <Container>
                <Header title={"Order"}/>
                <Content style={{margin:15}}>
                    <Text>Order</Text>

                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenOrder)