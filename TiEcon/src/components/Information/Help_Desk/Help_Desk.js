/**
 * author - Vipin Sharma
 * @description HelpDesk Page.
 */


import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import HelpDeskStyle from './HelpDeskStyle'

export default class Help_Desk extends Component {
    static navigationOptions = {
        headerTitle: 'HELP DESK',
        headerStyle: {
            backgroundColor: '#303030',
        },
        headerTitleStyle: { color: 'white', textAlign: 'center', flex: 1, },
        headerTintColor: 'white',

    };
    render() {
        return (
            <SafeAreaView style={HelpDeskStyle.container}>
                <View style={{ flex: 1 }}>
                    <Text style={HelpDeskStyle.text}>
                        Kellton Tech is listed on India’s largest stock exchange BSE and NSE and is ISO 9001:2015 and CMMI Level 5 certified. We’ve offices in Asia, North America and Europe, any of which you’re welcome to drop in to,
                        to discuss how we can help you.We’ve offices in Asia. Thanky you to enjoy BITSync!
                  </Text>
                </View>
                <TouchableOpacity>
                    <View style={HelpDeskStyle.innerview}>
                        <View style={HelpDeskStyle.imgview}>
                            <Image source={require('../../../assets/images/Changes-13.png')}
                                style={HelpDeskStyle.img} />
                        </View>
                        <View style={HelpDeskStyle.box}>
                            <Text style={HelpDeskStyle.boxText}> Message </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}