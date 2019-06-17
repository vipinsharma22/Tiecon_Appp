/**
 * @author shivani singh
 * @description inside sponsor stylesheet
 */

import { StyleSheet } from 'react-native';

const insidestyle = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 80,
    width: 80,
    flex: 0.4,
  },
  logoimg: {
    height: 80,
    width: 80,
  },
  hrcontainer: {
    flex: 0.05,
    marginTop:-50
  },
  text: {
    textAlign: 'right',
    color: 'white',
    marginRight: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  linestyle: {
    borderWidth: 0.8,
    borderColor: 'white',
    marginLeft: 15,
    marginRight: 15,
  
  },
  sponsors_namecontainer: {
    flex: 0.08,
    marginTop:-10,
  },
  sponsors_name: {
    color: 'white',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sponsors_detailcontainer: {
    flex: 1
 
  },
  sponsors_detail: {
    color: 'white',
    padding: 15,
    textAlign:'justify'
  },
});

export default insidestyle;
