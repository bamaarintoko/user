import React,{Component} from "react"
import {Container,Text,Content,View, Thumbnail} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";

class ScreenAccount extends Component{
    render(){
        return (
            <Container style={{backgroundColor:'#E0E0E0'}}>
                <Header title={"Account"}/>
                <Content>
                    <View style={{backgroundColor:"#FFF",height:100, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Thumbnail large source={{uri: "http://d3q5x9z5q0y6mi.inscname.net/images/ee9df2b19886b355dceab9c832e7ba2f/7772fVKY9fOv.jpg"}} />
                        </View>
                        <View style={{flex: 3, padding: 5, justifyContent: 'center'}}>
                            <Text>Marina Callista Lark</Text>
                            <Text>marinacallista.lark@gmail.com</Text>
                            <Text>+6289566778899</Text>
                        </View>
                    </View>

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