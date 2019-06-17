import {StyleSheet} from 'react-native'


 const HelpDeskStyle = StyleSheet.create({
     container:{
         flex: 1,
          backgroundColor: '#3C78D2'
     },
     text:{
        color: 'white', 
        padding: 10,
         textAlign: "justify"
     },
     innerview:{
        height: 22, 
        width: 110 , 
        borderRadius:5, 
        overflow:'hidden', 
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        right: 10, 
        marginBottom:10
     },
     imgview:{
        flex: 0.3,
        backgroundColor:'#353232',
        justifyContent:'center',
        alignContent:'center'
     },
     img:{
        width: 12, 
        height: 12,
        alignSelf:'center'
     },
     box:{
        flex: 0.7, 
        backgroundColor: '#555353', 
        justifyContent:'center'
     },
     boxText:{
        color: 'white', 
        textAlign:'center'
     }

 })
 export default HelpDeskStyle;