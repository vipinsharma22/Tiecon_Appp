/**
 * @author : Ritika Garg, Chahat Chugh
 * @description : Dashboard with tab navigation
 */
import React, { Component } from 'react';
import { View , Text,TouchableOpacity,Image ,ImageBackground  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { styles } from './style';

import { inject, observer } from 'mobx-react';

@inject('store')

@observer export default class Dashboard extends Component {
  // customizing navigation header
  static navigationOptions = ({ navigation }) => ({
  
    headerStyle: {
      height: 80,
      statusBarStyle: 'light-content',
      backgroundColor: 'transparent',
    }, headerBackTitle: null,
    headerTintColor: 'white',

    headerLeft:(
      <View style={{flexDirection:'row'}} >
      <View style={styles.flexblocks}>
        <Image source={require('../../assets/images/3x-5.png')} style={styles.leftheadPic}/>
      </View>
      <View style={styles.flexblocks}>
        <Image source={require('../../assets/images/3x_icon.png')} style={styles.centerheadPic }/>
      </View>
      <View style={styles.flexblocks}>
        <TouchableOpacity onPress={() => navigation.navigate('webview')}>
          <Image source= {require('../../assets/images/2x_icn-19.png')} style={styles.rightheadPic} />
        </TouchableOpacity>
      </View>
    </View>
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

  // function to navigate on click on grid icons
  info = (item) => {
    this.props.navigation.navigate(item.path, {Path:item.path});
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/images/BG-36.png')}
          style={{ width: '100%', height: '100%' }}>
          <FlatList data={ this.props.store.GridViewItems } 
            renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
              <TouchableOpacity onPress={()=> this.info(item)}>
                <Image source={item.pic} style={styles.GridImage}/>
                <Text style={styles.GridViewInsideTextItemStyle}> {item.key} </Text>
              </TouchableOpacity>
            </View>}numColumns={2}/>
        </ImageBackground>
      </View>
    );
  }
}

  


  
  
  
  
  


