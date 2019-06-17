/**
 * @author : Chahat chugh
 * @description : Stylesheet of Dashboard
 */
import {StyleSheet }from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    backgroundColor: 'cyan',
    justifyContent: 'center',
    textAlign: 'center',
    padding:  10,
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop:80,
    alignItems: 'center',
    height: 180,
  },
  GridViewInsideTextItemStyle: {
    color: 'yellow',
    marginTop: 30,
    fontSize: 12,
    alignSelf:'center',
  
  },
  GridImage : {
    alignSelf:'center',


  },
  tabpic:{
    width: 30 , 
    height: 30
  },
  flexblocks:{
    flex: 1,
    // justifyContent:'center'
    alignSelf:'center'
  },
  leftheadPic:{
    width: 50, 
    height:40,
    margin: 20, 
    // alignSelf: 'flex-start'
  },
  centerheadPic:{
    width: 70,
    height:50 ,
    margin: 50,
    // alignSelf: 'center'
  },
  rightheadPic:{
    width: 55,
    height:40,
    margin: 20,
    // alignSelf:'flex-end'
  }
    
});