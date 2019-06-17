/**
 * @author : Jitendra kumar sharma
 * @description : Login and navigation
 */

import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground, Dimensions,Button,TouchableOpacity } from 'react-native';

import styles from './Style_login';

export default class Login extends React.Component {
    onLogin=() =>
  {
       this.props.navigation.navigate('Login_with_email')
  }
  render() {
    return (
      /**
       * background image
       */
<View>
         <ImageBackground source={require('../../assets/BG-49.png')} style={{width: '100%',height: '100%'}}>

       <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center'}}>
        <View style={{height: '60%', backgroundColor: 'transparent',}} >
        </View>
         <View style={{height: '35%', backgroundColor: 'transparent'}} >
              <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <View style={{width: '25%', backgroundColor: 'transparent'}} />
        <View style={{ width: '50%',backgroundColor: 'transparent'}} >
        <View>
         <TouchableOpacity
         style={{     borderRadius: 1,
borderWidth: 1,
height:35,
   borderColor: 'grey',}}
          >
           <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center',alignContent:'center',alignItems:'center',textAlignVertical:'center'}}>LOGIN via Linkedin</Text>
        </TouchableOpacity>


    
           <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center',top:17}}>or</Text>
      
          <TouchableOpacity
        style={{    

height:35}}

   onPress={()=> {this.onLogin()}}
          >
           <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center',top:24}}>register via email</Text>
        </TouchableOpacity>
</View>

   
       
</View>
       


        <View style={{ width: '25%', backgroundColor: 'transparent'}} />
      </View>
        </View>
   <View style={{height: '5%', backgroundColor: 'transparent'}} >
        <View style={{alignItems:'center'}}>
            <Text style={{color:'yellow',alignItems: 'center'}}>TIEcon 2019 Powered By Kellton Tech</Text>
      </View>
        </View>
      </View>
      </ImageBackground>


</View> 
  
    );
  }
}
