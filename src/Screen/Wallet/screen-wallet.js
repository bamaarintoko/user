import React,{Component} from "react"
import {Container,Text,Content} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";

class ScreenWallet extends Component{
    render(){
        return(
            <Container>
                <Header title={"Wallet"}/>
                <Content style={{margin:15}}>
                    <Text>Wallet</Text>

                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenWallet)