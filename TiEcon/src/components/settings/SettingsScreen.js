/**
 * @author : Chahat chugh
 * @description : Settings page where toggle is performed 
 */

import { View, Text, Switch, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { styles } from './style';

@inject('store')
@observer

export default class SettingsScreen extends Component {
  toggleSwitch = (value) => {
    this.props.store.switchValue=value
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={require('../../assets/images/BG-36.png')}
          style={{ width: '100%', height: '100%' }}>
          <Text style={styles.SettingHead}>Setting</Text>
          <View style={{backgroundColor:'#202020', marginTop:250}}>
          <Text style={styles.TextSetting}> Allow others to see my participation</Text>
          <Switch style={{ alignSelf: 'center' }}
            onValueChange={this.toggleSwitch}
            value={this.props.store.switchValue} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
