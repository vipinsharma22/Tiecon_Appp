/**
 * author - Vipin Sharma
 * @description Information Page
 */



import React, { Component } from 'react';
import { View, Image, Text,TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Information_Style from './Information_Style';


  export default class Information extends Component {
    static navigationOptions = {
      headerTitle: 'Information',
      
      headerStyle: {
        backgroundColor: '#303030',},
      headerTitleStyle: { color: 'white',
       textAlign:'center',
      flex:1, },
      headerBackTitle: null,
      
    };


  onMap = () => {
    this.props.navigation.navigate('Venue');
  };

  onTiecon = () => {
    this.props.navigation.navigate('Tiecon');
  };

  onKellton = () => {
    this.props.navigation.navigate('Kellton');
  };

  onHelp = () => {
    this.props.navigation.navigate('Help');
  };



  render() {
    return (
      <SafeAreaView style={Information_Style.container}>
        <ImageBackground source={require('../../../assets/images/BG-51.png')} style={{ width: '100%', height: '100%' }}>
          <TouchableOpacity onPress={() => this.onHelp()} >
            <View style={Information_Style.inner}>
              <View style={Information_Style.innerView}>
                <Image
                  style={{ width: 40, height: 40, marginLeft: 15 }}
                  source={require('../../../assets/images/help_desk-2.png')}
                />
                <Text style={Information_Style.Detail}>Help Desk</Text>
              </View>
              <View>
                <Image
                  style={Information_Style.Image_Arrow}
                  source={require('../../../assets/images/right_arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onMap()} >
              <View style={Information_Style.inner}>
                <View style={Information_Style.innerView}>
                  <Image
                    style={Information_Style.Image_Info}
                    source={require('../../../assets/images/map-1.png')}
                  />
                  <Text style={Information_Style.Detail}>Venue Map </Text>
                </View>
                <View>
                  <Image
                    style={Information_Style.Image_Arrow}
                    source={require('../../../assets/images/right_arrow.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTiecon()} >
            <View style={Information_Style.inner}>
              <View style={Information_Style.innerView}>
                <Image
                  style={Information_Style.Image_Info}
                  source={require('../../../assets/images/tiecon.png')}
                />
                <Text style={Information_Style.Detail}>About TiEcon 2019 App</Text>
              </View>
              <View styles={{}}>
                <Image
                  style={Information_Style.Image_Arrow}
                  source={require('../../../assets/images/right_arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onKellton()} >
            <View style={Information_Style.inner}>
              <View style={Information_Style.innerView}>
                <Image
                  style={Information_Style.Image_Info}
                  source={require('../../../assets/images/kellton.png')}
                />
                <Text style={Information_Style.Detail}> About Kellton Tech </Text>
              </View>
              <View>
                <Image
                  style={Information_Style.Image_Arrow}
                  source={require('../../../assets/images/right_arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}



