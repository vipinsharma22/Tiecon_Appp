/**
 * @author Ritika Garg
 * @description Agenda screen that shows all the events
 */

import React, {Component} from 'react';
import {
    Platform, Stylesheet, Text, View, TouchableOpacity, ImageBackground, Image
} from 'react-native';
import {styles} from './style';


export default class Schedule_bootcamp extends Component{

    // custom navigation header
    static navigationOptions = ({ navigation }) => ({
        title: 'SCHEDULE',
        headerStyle: {
          statusBarStyle: 'light-content',
          backgroundColor: 'transparent',
        },
    
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}
          style={{paddingStart: 10}}>
            <Image
              source={require('../../assets/images/back-1.png')}
              style={{ height: 25, width: 15 }}
            />
          </TouchableOpacity>
        ),
    
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleStyle: {
          color: 'white',
          fontWeight:'normal',
          alignSelf: 'center',
          textAlign: 'center',
          flex: 0.75,
        }
      });

    render(){
        return(
            <View>
                <ImageBackground
                source={require('../../assets/images/BG-52.png')}
                style={styles.bgimage}
                >
                
                </ImageBackground>
            </View>
        )
    }
}