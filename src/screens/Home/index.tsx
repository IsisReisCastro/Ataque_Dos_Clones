import React from "react";
import {  View, Text, ScrollView, Image, ImageBackground, ViewComponent } from "react-native";
import { styles } from "./styles";
import Logo from '../../assets/Disney.png';
import Logos from '../../assets/Logos.png';
import { Botao } from "../../components/Buttons";
import Fundo from "../../assets/Disney-Plus.jpg";



export const Home= () => {

    return (

        <View style={styles.container}>
            <ImageBackground source={Fundo}
                        style={styles.imageBackground}/>
            <View style={styles.content} >
                    
                    <Image 
                        source={Logo}
                        style={styles.image}/>

                    <Text style={styles.title}>
                        As melhores histórias
                         em um só lugar.
                    </Text>

                    <Image 
                        source={Logos}
                        style={styles.image2} />
                    <Botao title= "ASSINAR AGORA">
                        <Text style={styles.assinar}>ASSINAR AGORA</Text>
                    </Botao>

                    <View style={styles.descricaoSpace}>
                        <Text style={styles.descrition} >
                                Comece a assistir ao Disney+ por R$ 27,90/mês
                                ou R$ 279,90/ano. Os preços pode variar em
                                outras moedas ou platarformas.
                        </Text>
                    </View>  
                
            </View>
            
            <Botao style={styles.button} title= "ENTRAR">
                    <Text style={styles.textButton}>
                        ENTRAR
                    </Text>
            </Botao>
               
             
        </View>
    );
};
export default Home;