/**
 * author - Vipin Sharma
 * @description Venue Page.
 */


'use strict';
import React, { Component } from 'react';
import Pdf from 'react-native-pdf';
import { SafeAreaView } from 'react-navigation';


export default class Venue extends Component {
  static navigationOptions = {
    headerTitle: 'Venue Map',
    headerStyle: {
      backgroundColor: '#303030',
    },
    headerTitleStyle: { color: 'white',textAlign:'center',
    flex:1, },
    headerTintColor: 'white',
    
};
  render() {
    return (
      <SafeAreaView style={{ flex:1, backgroundColor:'white'}}> 
        <Pdf style={{flex:1,}} source={require('../../../assets/images/VenueMap.pdf')}/>
      </SafeAreaView>
    );
  }
}





