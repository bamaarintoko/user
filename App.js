/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Store/configureStore'
import AppWithNavigationState from './src/Navigator/AppNavigator';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Setting a timer','Remote debugger']);

// type Props = {};
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppWithNavigationState />
                </PersistGate>
            </Provider>
        );
    }
}

// import React, {Component} from 'react';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';
//
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//         'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                     style={styles.map}
//                     region={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.015,
//                         longitudeDelta: 0.0121,
//                     }}
//                 >
//                 </MapView>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         height: 400,
//         width: 400,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     }
// });
