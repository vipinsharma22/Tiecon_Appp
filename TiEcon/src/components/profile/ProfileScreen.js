/**
 * @author : Chahat chugh
 * @description : Profile page 
 */
import {View,Text , Button , Image, ImageBackground} from 'react-native';
import React, { Component } from 'react';
import { styles } from './style';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View >
        <ImageBackground
          source={require('../../assets/images/BG-36.png')}
          style={{ width: '100%', height: '100%' }}>
          <View style={{ flexDirection: 'row' , margin:20 }}>
            <View style={{flex:1}}>
              <Image style={styles.profileimage} source={require('../../assets/images/3x-20.png')}/>
            </View>
            <View style={{flex:3}}>
              <Text style={styles.NameText}>
              Saumyadeep
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' , margin: 10 }}>
            <View style={{flex:1 , marginLeft:10}}>
              <Button title="Edit Profile"></Button>
            </View>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:1}}>
              <Image style={styles.editpic} source={require('../../assets/images/changes-11.png')}></Image>
            </View></View>
          <View style={styles.profileText}>
            <Text style={{color:'yellow', fontWeight:'bold' }}> Interested in </Text>
            <Text style={{color:'white' }}> Developers </Text>
          </View>
          <View style={styles.profileText}>
            <Text style={{color:'yellow', fontWeight:'bold' }}> Who am I</Text>
            <Text style={{color:'white'}}> Developer </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
