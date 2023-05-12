
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';

import PerfilXbox from './screens/PerfilXbox.js';
import Console from './screens/Console.js';

export default function AssetExample() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaA />} />
        <Route path="/perfil" element={<PerfilXbox />} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </Router>
  );
}

function PaginaA() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={require('./assets/xbox-logo.png')} />
       <Image style={styles.logo2} source={require('./assets/initial.png')} />
      <Text style={styles.text}>Manage your console and connect with friends all in one place </Text>
      <Link to="/perfil">
        <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Pressable style={styles.botaoverde} onPress={() => botao2()}>
        <Text style={styles.buttonText1}>SING IN</Text>
      </Pressable>
       <Pressable style={styles.botaocinza} onPress={() => botao()}>
      <Link to="/console">
        <Text style={styles.buttonText2}>SET UP CONSOLE</Text>
        </Link>
      </Pressable>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    margin: 80,
    fontSize: 13,
    fontWeight: '',
    textAlign: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    alignItems: 'center', 
    justifyContent: 'flex-start',
    margin: 30,    
    height: 50,
    width: 50,
    },
    logo2: {
      alignItems: 'center', 
      justifyContent: 'flex-start',
      margin: 10,    
      height: 210,
      width: 210,
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
        borderRadius: 5,
        backgroundColor: '#717571',
        borderRadius: 30,
        textAlign:'center',
      },
    
      buttonText2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonText3:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      }
});
