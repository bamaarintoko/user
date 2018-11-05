import React from 'react';
import {Button, Text, View} from "native-base";
export const Header = ()=>{
    return(
        <View style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor: '#FFF',
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1
        }}>
            <View style={{flex: 1,}}>

            </View>
            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Event
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button full transparent light>
                    <Icon color={'#000000'} size={20}
                          name="filter"/>
                </Button>
            </View>
        </View>
    )
}
