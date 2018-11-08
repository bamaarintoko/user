import React,{Component} from "react"
import {Container, Text, Content, Item,Input,Button} from "native-base"
import {Header} from "../../Component/Header"
import {connect} from "react-redux";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class ScreenHome extends Component{
    render(){
        return(
            <Container>
                <Header title={"Home"}/>
                <Content style={{margin:15}}>
                    <Item regular style={{height:hp("6%")}}>
                        <Input style={{fontSize:hp("2.2%")}} placeholder='Order Number' />
                    </Item>
                    <Button block style={{backgroundColor:"#D50000", marginTop:10,height:hp("6%")}}>
                        <Text style={{fontSize:hp("2.2%")}}>Track</Text>
                    </Button>
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