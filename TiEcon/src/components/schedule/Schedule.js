/**
 * @author Ritika Garg
 * @description schedule screen showing 2 subfields agenda and bootcamp 
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { styles } from './style';

export default class Schedule extends Component {
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
      alignSelf: 'center',
      fontWeight:'normal',
      textAlign: 'center',
      flex: 0.75,
    }
  });

  onAgenda = () => {
    this.props.navigation.navigate('schedule_agenda');
  }

  onBootcamp = () => {
    this.props.navigation.navigate('schedule_bootcamp');
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <ImageBackground
          source={require('../../assets/images/BG-52.png')}
          style={styles.bgimage}
        >
          <View style={styles.innerStyle}>
          <TouchableOpacity
            onPress={() => this.onAgenda()}
            style={styles.agendaStyle}
          >
            <Image
              source={require('../../assets/images/agenda1@3x-1.png')}
              style={styles.agendaImage}
            />
            <Text
              style={styles.agendaText}>
              AGENDA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onBootcamp()}
            style={styles.agendaStyle}
          >
            <Image
              source={require('../../assets/images/startup_bootcamp1@3x-1.png')}
              style={styles.agendaImage}
            />
            <Text
              style={styles.agendaText}>
              BOOTCAMP
            </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}