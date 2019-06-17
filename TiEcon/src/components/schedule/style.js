import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    mainStyle: {
        
    },
    bgimage: {
        height: '100%',
        width: '100%',   
    },
    innerStyle:{
        flexDirection: 'row',
        marginTop: 120
    },
    agendaStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center'
    },
    agendaImage: {
        // padding:10,

        height:60,
        width:50,
        
    },
    agendaText: {
        // flex:0.25,
        // margin:10,
        fontSize: 15,
        color: '#FFFF33',
        textAlign: 'center',
        paddingTop: 40
    }

})