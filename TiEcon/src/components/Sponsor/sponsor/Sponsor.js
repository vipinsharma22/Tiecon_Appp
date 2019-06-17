/**
 * @author shivani singh
 * @description sponsor component
 */

import  React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './style';
import { createStackNavigator } from 'react-navigation';
import data from '../../../utils/Data';

export default class Sponsor extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sponsors',
    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
      textAlign: 'center',
      flex: 1,
    },
    headerBackTitle: null,
  });

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../../assets/images/BG-51.png')}
          style={{ height: '100%', width: '100%' }}>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('InsideSponsor')}
                style={styles.container}>
                <Image style={styles.logo} source={item.imagesrc} />
                <Text style={styles.name}>{item.sponsors_name}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </ImageBackground>
      </View>
    );
  }
}
