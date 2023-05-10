
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
      <Text style={styles.text}>Manage your console and connect with friends all in one place </Text>
      <Link to="/perfil">
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>SING IN</Text>
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
  button: {
    backgroundColor: '#68946a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
