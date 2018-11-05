import React,{Component} from "react"
import {Container,Text,Content} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";

class ScreenAccount extends Component{
    render(){
        return (
            <Container>
                <Header title={"Account"}/>
                <Content style={{margin:15}}>
                    <Text>Account</Text>

                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{

    }
}

export default connect(mapStateToProps)(ScreenAccount)