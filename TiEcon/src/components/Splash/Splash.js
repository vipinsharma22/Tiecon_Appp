/**
 * @author : Jitendra kumar sharma
 * @description : Splash screen with timeout
 */

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './Style_splash';



export default class Splash extends React.Component {
  static navigationOptions = {
    title: 'SIGNIN',

    headerStyle: {
      header: 'transparent',
    },
  };
  componentDidMount = () => {
    console.log('Here');
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/iphone_xs_max.png')}
        style={styles.splash_Image}
      />
    );
  }
}
