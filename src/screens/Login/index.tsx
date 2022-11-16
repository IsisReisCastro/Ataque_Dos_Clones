import React from "react";
import {  View, Text, ScrollView, TextInput, Image  } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import Logo from '../../assets/Disney.png';
import { Botao } from "../../components/Buttons";


export const Login = () => {

  return (

    <View style={styles.container}>
      <ScrollView>
        <MaterialIcons 
          image="leftcircleo"
          backgroudColor={"#fff"}
          color={"#000"}
        />

        <Image 
          source={Logo}
          style={styles.image} />
        <Text style={styles.title}>Use o seu e-mail para entrar</Text>
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor='#555'
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="senha"
            keyboardType="numeric" secureTextEntry
            placeholderTextColor='#555'
        />
        <Botao title="Continuar">
          <Text>
            CONTINUAR
          </Text>
        </Botao>
        <Text style={styles.texto}> Não tem Disney+?</Text>
        <Botao style={styles.button} title="ASSINAR" >
          <Text style={styles.textButton}>
            ASSINAR
          </Text>
        </Botao>
      </ScrollView>
    </View>
  );
};
export default Login;