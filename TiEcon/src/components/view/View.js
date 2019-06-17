/**
 * @author : Chahat chugh 
 * @description : Webview (On click at kellton tech logo directs to kellton page .) 
 */

import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class view extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.kelltontech.com/'}}/>
    )
  }
}
