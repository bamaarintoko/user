import React,{Component} from "react"
import {Container,Text} from "native-base"
import {connect} from "react-redux";
class ScreenCreate extends Component{
    render(){
        return(
            <Container>
                <Text>Create</Text>
            </Container>
        )
    }
}

function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenCreate)