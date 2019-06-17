
/**
 * @author : jitendra kumar sharma
 * @description : register page
 */


import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Icon,
  Button,
  Image,
} from 'react-native';

import styles from './Style_register';

export default class Login_with_email extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({ onread: this.onread.bind(this) });
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Register',
    headerStyle: {
      statusBarStyle: 'light-content',
      backgroundColor: 'transparent',
    },

    headerLeft: (
      <TouchableOpacity onPress={() => navigation.state.params.onread()}>
        <Image
          source={require('../../assets/ipad-10.png')}
          style={{ height: 15, width: 15 }}
        />
      </TouchableOpacity>
    ),

    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',

      alignSelf: 'center',
      textAlign: 'center',
      flex: 0.75,
    },
  });

  onread() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/BG-50.png')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '30%',
              backgroundColor: 'transparent',
              marginTop: 60,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              Login with the same e-mail id with which you have register with
              the TIEcon 2019 to get full access of the application
            </Text>
          </View>
          <View style={{ height: '30%', backgroundColor: 'transparrent' }}>
            <View style={{ flex: 1, height: 40 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>*</Text>
                <TextInput
                  style={[styles.textInputStyle]}
                  placeholder="First Name"
                  placeholderTextColor="black"
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'grey',
                  marginLeft: 16,
                  marginRight: 12,
                  flex: 1,
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'white',fontSize:18}}>*</Text>
                <TextInput
                  style={[styles.textInputStyle]}
                  placeholder="First Name"
                  placeholderTextColor="black"
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'grey',
                  marginLeft: 16,
                  marginRight: 12,
                  flex: 1,
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'white'}}>*</Text>
                <TextInput
                  style={[styles.textInputStyle]}
                  placeholder="First Name"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </View>
          <View style={{ height: '20%', backgroundColor: 'transparent' }}>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('tabBar')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  alignContent: 'center',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'yellow', alignItems: 'center' }}>
              TIEcon 2019 Powered By Kellton Tech
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
