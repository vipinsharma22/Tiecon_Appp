/**
 * @author Ritika Garg
 * @description switch navigation, tab navigation, stack navigation
 */

import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Schedule from '../components/schedule/Schedule';
import Schedule_agenda from '../components/schedule_agenda/Schedule_agenda';
import Schedule_bootcamp from '../components/schedule_bootcamp/Schedule_bootcamp'
import Dashboard from '../components/dashboard/Dashboard';
import ProfileScreen from '../components/profile/ProfileScreen';
import SettingsScreen from '../components/settings/SettingsScreen';
import React, { Component } from 'react';
import { Image ,ImageBackground  } from 'react-native';
import { styles } from '../components/dashboard/style';
import view from '../components/view/View';
import Splash from '../components/Splash/Splash';
import Login from '../components/Login_page/Login';
import Login_with_email from '../components/Loging_email/Login_with_email';
import Information from '../components/Information/Information/Information';
import Help_Desk from '../components/Information/Help_Desk/Help_Desk';
import Venue from '../components/Information/Venue_Map/Venue';
import About_Tiecon from '../components/Information/About_Tiecon/About_Tiecon';
import About_Kellton from '../components/Information/About_Kellton/About_Kellton';
import InsideSponsor from '../components/Sponsor/insidesponsor/InsideSponsor';
import Sponsors from '../components/Sponsor/sponsor/Sponsor';

export const AppNavigator = createStackNavigator({
  dashboard:{
    screen: Dashboard
  },
  schedule: {
    screen: Schedule
  },
  schedule_agenda:{
    screen : Schedule_agenda
  },
  schedule_bootcamp:{
    screen: Schedule_bootcamp
  },
  webview :{
    screen : view
  },
  Information: { 
    screen: Information 
  },
  Help: { 
    screen: Help_Desk 
  },
  Venue: { 
    screen: Venue 
  },
  Tiecon: { 
    screen: About_Tiecon 
  },
  Kellton: { 
    screen: About_Kellton 
  },
  Sponsors: {
    screen: Sponsors,
  },
  InsideSponsor: {
    screen: InsideSponsor,
  },

});

const TabNavigator = createBottomTabNavigator({
  Home: { screen: AppNavigator ,
    navigationOptions :{
      tabBarIcon: () => ( 
        <Image style={styles.tabpic} 
          source={require('../assets/images/homeoutline-1.png')} />
      )
    }
  },
  Settings: { screen: SettingsScreen,
    navigationOptions :{
      tabBarIcon: () => (
        <Image style={styles.tabpic} 
          source={require('../assets/images/UI_960-34.png')} />
      )
    } 
  },
  Profile: { screen: ProfileScreen,
    navigationOptions :{
      tabBarIcon: () => (
        <Image style={styles.tabpic} 
          source={require('../assets/images/profile-1.png')} />
      )
    }
  }
},
{
  tabBarOptions: {
    showLabel: false,
    
    style: {
      backgroundColor: 'black' ,
      height:60,
    }
  }
});

const loginScreens = createStackNavigator({
  Splash: {
    screen: Splash,
       navigationOptions: {
                    header: null,
                }
  },
  Login: {
    screen: Login,
      navigationOptions: {
                    header: null,
                }
  },
    Login_with_email: {
    screen: Login_with_email,
     
  },
});

const MyApp = createSwitchNavigator({
  login: {
    screen: loginScreens
  },
  tabBar:{
    screen: TabNavigator
  },
  // Application:{
  //   screen : AppNavigator
  // },
});


export default MyApp;
