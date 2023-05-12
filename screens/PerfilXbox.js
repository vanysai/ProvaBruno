import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'react-router-dom';

export default function PerfilXbox() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/draculaura.png')} />
    <Text style={styles.text}>Welcome back, vanysai</Text>
      <Link to="/console">
      <Text style={styles.text2}>
        jaifreiresantos@outlook.com
      </Text>
      <Text style={styles.paragraph3}>
        Sign in with a different account
      </Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>CONECTAR O CONSOLE</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    margin: 24,
    marginTop: 0,
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '',
    textAlign: 'center'
  },

  text2: {
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
  },

  paragraph3: {
    margin: 3,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#13541a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
    marginTop: 150,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },

  logo: {
    margin: 20,
    height: 200,
    width: 200,
  },
});

console.log()