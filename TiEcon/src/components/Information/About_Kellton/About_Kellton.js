/**
 * author - Vipin Sharma
 * @description AboutKellton Page.
 */


import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import About_Kellton_Style from './About_Kellton_Style';

export default class About_Kellton extends Component {
  static navigationOptions = {
    headerTitle: 'HELP DESK',
    headerStyle: {
        backgroundColor: '#303030',
    },
    headerTitleStyle: { color: 'white',textAlign:'center',
    flex:1, },
    headerTintColor: 'white',
    
};
  render() {
    return (
      <SafeAreaView style={About_Kellton_Style.container} > 
        <ImageBackground source={require('../../../assets/images/BG-51.png')} style={About_Kellton_Style.BG}>
          <ScrollView>
            <View style={About_Kellton_Style.inner}>
              <Text style={About_Kellton_Style.Info}>
                We collaborate with companies worldwide to craft unique IT solutions, provide cutting-edge technical consultation and integrate business-changing systems.
                We’re humbled that many of the largest companies outsource their business needs to us, including leaders in retail, travel, E-commerce, education, hospitality,
                   </Text>
            </View>
            <View style={About_Kellton_Style.Info}>
              <Text style={About_Kellton_Style.Info}>
                We collaborate with companies worldwide to craft unique IT solutions, provide cutting-edge technical consultation and integrate business-changing systems.
                We’re humbled that many of the largest companies outsource their business needs to us, including leaders in retail, travel, E-commerce, education, hospitality,
                        </Text>
            </View>
            <View style={About_Kellton_Style.Info}>
              <Text style={About_Kellton_Style.Info}>
                We collaborate with companies worldwide to craft unique IT solutions, provide cutting-edge technical consultation and integrate business-changing systems.
                We’re humbled that many of the largest companies outsource their business needs to us, including leaders in retail, travel, E-commerce, education, hospitality,
                        </Text>
            </View>
            <View style={About_Kellton_Style.Info}>
              <Text style={About_Kellton_Style.Info}>
                We collaborate with companies worldwide to craft unique IT solutions, provide cutting-edge technical consultation and integrate business-changing systems.
                We’re humbled that many of the largest companies outsource their business needs to us, including leaders in retail, travel, E-commerce, education, hospitality,
                        </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>

    );
  }
}

