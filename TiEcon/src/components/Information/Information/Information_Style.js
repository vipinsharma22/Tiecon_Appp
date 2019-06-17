


import {StyleSheet} from 'react-native'


 const Information_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262525',
    },
    inner: {
        marginTop:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#202020',
        height: 60,
        alignItems: 'center',
    },
    Detail:{
        color: 'white', 
        marginTop: 10, 
        marginLeft: 45, 
        fontSize: 16 
    },
    Image_Arrow:{
         
        height: 28, 
        marginRight: 10
    },
    Image_Info:{
        width: 50, 
        height: 40, 
        marginLeft: 15
    },
    innerView:{
        flexDirection: 'row',
    },
     BG:{
        width: '100%', 
        height: '100%' 
    }
})

export default Information_Style;