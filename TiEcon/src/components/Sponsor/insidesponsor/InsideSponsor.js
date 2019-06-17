/**
 * @author shivani singh
 * @description inside sponsor component
 */

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Webview,
  TouchableOpacity,
} from 'react-native';
import data from '../../../utils/Data'
import insidestyle from './style';
export default class InsideSponsor extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
    headerBackTitle: null,
  });

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../../assets/images/BG-51.png')}
          style={{ height: '100%', width: '100%' }}>
          <View style={insidestyle.parent}>
            <View style={insidestyle.logo}>
              <Image source= { data[0].imagesrc } style={insidestyle.logoimg} />
            </View>

            <View style={insidestyle.hrcontainer}>
              <View style={insidestyle.linestyle} />
              <Text style={insidestyle.text}> Tiecon Platinum </Text>
              <View style={insidestyle.linestyle} />
            </View>

            <View style={insidestyle.sponsors_namecontainer}>
              <Text style={insidestyle.sponsors_name}>
                {data[0].sponsors_name}
              </Text>
            </View>

            <View style={insidestyle.sponsors_detailcontainer}>
              <Text style={insidestyle.sponsors_detail}>
                {data[0].sponsors_detail}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
