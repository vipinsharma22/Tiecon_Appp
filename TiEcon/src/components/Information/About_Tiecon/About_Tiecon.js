/**
 * author - Vipin Sharma
 * @description AboutTiecon  Page.
 */

import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import AboutTieconStyle from './AboutTieconStyle';

export default class About_Tiecon extends Component{
    static navigationOptions = {
        headerTitle: 'About Tiecon',
        headerStyle: {
            backgroundColor: '#303030',
        },
        headerTitleStyle: { color: 'white',textAlign:'center',
        flex:1, },
        headerTintColor: 'white',
        
    };
    render(){
        return(
            <SafeAreaView style={AboutTieconStyle.container}>
                <ImageBackground source={require('../../../assets/images/BG-51.png')} style={AboutTieconStyle.BG}>
                <ScrollView>
                <View style={AboutTieconStyle.inner}>
                    <Text style={{color:'#E9E917', fontSize:16,fontWeight: 'bold', padding:10, textAlign: "justify"}}>
                    Kellton Tech is listed on India’s largest stock exchange BSE and NSE and is ISO 9001:2015 and CMMI Level 5 certified. We’ve offices in Asia, North America and Europe, any of which you’re welcome to drop in to,
                     to discuss how we can help you.
                    </Text>
                </View>
                <View style={{flex:0.1}}>
                    <Text style={{color:'#E9E917', fontSize:20,fontWeight: 'bold',padding:10}}>Event Description :</Text>
                </View>
                <View style={AboutTieconStyle.inner}>
                    <Text style={AboutTieconStyle.innerText}>
                     Kellton Tech is listed on India’s largest stock exchange BSE and NSE and is ISO 9001:2015 and CMMI Level 5 certified. We’ve offices in Asia, North America and Europe, any of which you’re welcome to drop in to,
                     to discuss how we can help you.We’ve offices in Asia,
                    </Text>
                </View>
                <View style={AboutTieconStyle.inner}>
                    <Text style={AboutTieconStyle.innerText}>
                     Kellton Tech is listed on India’s largest stock exchange BSE and NSE and is ISO 9001:2015 and CMMI Level 5 certified. We’ve offices in Asia, North America and Europe, any of which you’re welcome to drop in to,
                     to discuss how we can help you.We’ve offices in Asia,ny of which you’re welcome to drop in to,to discuss how we can help you.We’ve offices in Asia,
                    
                    </Text>
                </View>
                </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
    
