import { StyleSheet, Platform } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex:1,
        marginbottom: 10,
        backgroundColor: '#0f172d',
        paddingTop: 60,
        paddingHorizontal: 30,
        justifyContent:'center'
    },
    image: {
        marginLeft: 70,
        marginbottom: 10,
        display: 'flex',
        height: 100,
        width: 200,
        alignItems:'center',
       
    },
    title: {

        paddingTop:15,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    input: {

        backgroundColor:'#474a51',
        color: '#fff',
        fontSize: 18,
        height:70,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 10,
        borderRadius: 7
    },
    texto:{
        
        paddingTop:50,
        paddingBottom:20,
        color:'#998',
        fontSize:15,
        alignItems:'baseline',
    },
    button:{
        color:'tranparent',
    },
    textButton:{

        margin:10,
        padding: 30,
        fontweight: 'bold',
        color: '#f9f9f9',
        fontSize: 20,
        
    }
    
})