import React,{Component} from "react"
import {Container,Text,Content} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
class ScreenHome extends Component{
    render(){
        return(
            <Container>
                <Header title={"Home"}/>
                <Content style={{margin:15}}>
                <Text>Home</Text>

                </Content>

            </Container>
        )
    }
}

function mapStateToProps() {
    return{

    }
}

export default connect(mapStateToProps)(ScreenHome)