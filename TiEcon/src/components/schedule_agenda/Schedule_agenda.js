/**
 * @author Ritika Garg
 * @description Agenda screen that shows all the events
 */

import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native';
import { styles } from './style';
import { inject, observer } from 'mobx-react';

@inject('store')

@observer export default class Schedule_agenda extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SCHEDULE',
    headerStyle: {
      statusBarStyle: 'light-content',
      backgroundColor: 'transparent',
    },

    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}
      style={{paddingStart: 10}}>
        <Image
          source={require('../../assets/images/back-1.png')}
          style={{ height: 25, width: 15 }}
        />
      </TouchableOpacity>
    ),

    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
      fontWeight:'normal',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 0.75,
    }
  });

  // functions to change flag's value to show data on click
  showDateView = () => {
    this.props.store.toShowDateView = true;
  }
  showEvents = () => {
    this.props.store.toShowDateView = false;
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/images/BG-52.png')}
          style={styles.bgimage}
        >
          
          {/* to hide and show filter button */}
          {this.props.store.toShowDateView ?
            <TouchableOpacity
              style={[styles.filter, { backgroundColor: this.props.store.toShowDateView ? 'grey' : 'rgba(52, 52, 52, 0.8)' }]}>
              <Text
                style={[styles.dateText,{fontWeight:'bold'}]}>Filter By Track</Text>
            </TouchableOpacity> :
            <View style={{ height: 57 }}></View>
          }
          
          {/* Date and events data */}
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={[styles.dateEvents, { backgroundColor: this.props.store.toShowDateView ? 'grey' : 'rgba(52, 52, 52, 0.8)' }]}
              onPress={() => this.showDateView()}>
              <Text
                style={styles.dateText}>May 10, 2019</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dateEvents, { backgroundColor: !this.props.store.toShowDateView ? 'grey' : 'rgba(52, 52, 52, 0.8)' }]}
              onPress={() => this.showEvents()}>
              <Text
                style={styles.dateText}>My Events</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>

            {/* List to show data */}
            <FlatList
              data={this.props.store.toShowDateView ? this.props.store.dataSchedule : this.props.store.eventsData}
              extraData={this.props.store}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) =>
                <TouchableOpacity
                  style={styles.listStyle}
                >
                  <View style={styles.description}>
                    <Text style={[{ fontWeight: 'bold', fontSize: 15 }, styles.textColor]}>
                      {item.name}
                    </Text>
                    <Text style={styles.textColor}>{item.time + ' | ' + item.venue}</Text>
                  </View>
                  <View style={styles.nextIcon}>
                    <Image
                      style={styles.nextIconImage}
                      source={require('../../assets/images/right_arrow.png')}
                    />
                  </View>
                </TouchableOpacity>
              }
            />

          </ScrollView>

        </ImageBackground>
      </View>
    )
  }
}