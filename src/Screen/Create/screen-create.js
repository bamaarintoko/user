import React,{Component} from "react"
import {Container,Text,Content} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
class ScreenCreate extends Component{
    render(){
        return(
            <Container>
                <Header title={"Create Order"}/>
                <Content style={{margin:15}}>
                    <Text>Create</Text>

                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenCreate)