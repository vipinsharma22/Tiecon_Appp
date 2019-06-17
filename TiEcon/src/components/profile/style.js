/**
 * @author : Chahat chugh
 * @description : Stylesheet of Profile
 */
import {StyleSheet }from 'react-native';

export const styles = StyleSheet.create({
  NameText :{
    color:'white',
    fontWeight:'bold',
    fontSize : 25,
    marginLeft: 20
  },  
  profileimage:{
    width: 100,
    height: 100, 
    borderRadius: 50,
    borderColor:'white',
    borderWidth:2
  },
  profileText:{
    backgroundColor: '#202020',
    margin: 10,
    height:80
  },
  editpic:{
    width:25,
    height:30,
    marginRight:10,
    alignSelf:'flex-end'
  }
});