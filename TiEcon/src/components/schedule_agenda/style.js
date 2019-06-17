import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    bgimage:{
        height:'100%',
        width:'100%',
        // flexDirection: 'row'
    },
    filter:{
        justifyContent: 'center',
        marginTop: 57,
        height:40,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'white'
        
    },
    dateText:{
        color:'white',
        textAlign:'center',
        fontSize: 20
    },
    buttonStyle:{
        flexDirection: 'row',
        height:40
    },
    dateEvents:{
        flex:1,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor: 'white'
    },
    textColor:{
        padding: 5,
        color:'white'
    },
    listStyle: {
        flexDirection: 'row',
        height: 80,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor: 'white',
        fontFamily: 'Arial'
      },
      description:{
          flex:0.9
      },
      nextIcon:{
          flex:0.1,
          justifyContent:'center'
          
      },
      nextIconImage:{
          height: 35,
          width: 20
      }
})