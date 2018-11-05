import React,{Component} from "react"
import {Container,Text} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
class ScreenHome extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <Text>Home</Text>

            </Container>
        )
    }
}

function mapStateToProps() {
    return{

    }
}

export default connect(mapStateToProps)(ScreenHome)