import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        textAlign: 'center',
        paddingTop: 60,
        backgroundColor: '#0f172d',//#0f141d
        position:'relative', 
        
        
    },

    imageBackground: {
        
        backgroundPosition: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        boxSizing: 'border-box',
        position: 'absolute',
        alignitems: 'center',
        width: '100%',
        height: 350,
        

    },
    content: {

        position:'relative',
        paddingHorizontal: 20,
        width: '100%',
        minHeight: 100,
        boxsizing: 'border-box',
        display: 'flex',
        justifycontent: 'center',
        alignitems: 'center',
        flexdirection: 'column',
        paddingTop: 250,
        textAlign:'center',
        marginTop:-50
       
        
       
    },
    title: {

        marginTop: 10,
        alignItems:'center',
        textAlign:'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'

    },
    image: {

        marginLeft: 80,
        textAlign:'center',
        zIndex:99,
        padding:-100,
        marginBottom: 10, 
        display: 'flex',
        height: 120,
        width: 200,
        alingItens:'center',
        maxWidth:'100%',

    },
    image2: {
        marginTop:15,
        marginBottom: 5, 
        display: 'flex',
        height: 20,
        width: '100%',
        alingItens:'center'
    },

    espaco:{

        
        width: 100,
        display: 'flex',
        flexdirection: 'column',

    },
    espacoLogo:{

        marginbottom: 10,
        maxwidth: 600,
        minheight: 1,
        display: 'flex',
        width: '100%',
    },
    espacoLogo2:{

        maxWidth: '600px',
        marginbottom: '20px',
        display: 'flex',
        verticalalign: 'bottom',
        width: '100%',


    },
    assinar:{

        fontweight: 'bold',
        color:'#f9f9f9',
        backgroundcolor: '#0063e5',
        marginBottom: 15,
        letterspacing: 1,
        fontsize: 18,
        borderradius: 5,
      
    },
    descricaoSpace:{

        display:'flex',
        width:'100%'
    },
    descrition:{

       textAlign:'center',
        marginBottom:10,
        paddingTop:10,
        color: '#f9f9f9',
        fontSize: 12,
        margin:  10,
        lineHeight: 20,
        letterSpacing: 1,
    },
    button:{

        
        textAlign:'center',
        alignItems:'center',
        display: 'flex',
        color:'tranparent',
        marginBottom:20,
        marginTop:90
        
        
    },
    textButton:{

        margin:10,
        padding: 30,
        fontweight: 'bold',
        color: '#f9f9f9',
        fontSize: 20,
        
    }

})