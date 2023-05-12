import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigate } from 'react-router-dom';

export default function TelaC() {
  const navigate = useNavigate();

  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter the code on your TV</Text>
      <Image style={styles.logo} source={require('../assets/console.png')} />
      <Pressable style={styles.botaoverde} onPress={() => botao2()}>
        <Text style={styles.buttonText}>CONNECT TO CONSOLE</Text>
    </Pressable>
    <Pressable style={styles.botaocinza} onPress={() => botao()}>
        <Text style={styles.buttonText}>I ONLY SEE 6 CHARACTERS</Text>
    </Pressable>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/')}>
        <Text style={styles.buttonTex}>SING IN AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: '',
    textAlign: 'left',
  },
  button: {
    margin:10,
    padding: 10,
    backgroundColor: '#717571',
    borderRadius: 30,
    textAlign:'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  },
  botaoverde: {
    
    backgroundColor: '#68946a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
  },
  botaocinza:{
    margin:10,
    padding: 10,
    backgroundColor: '#717571',
    borderRadius: 30,
    textAlign:'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
