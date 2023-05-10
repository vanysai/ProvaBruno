import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/xbox.png')} />
    <Image style={styles.logo2} source={require('../assets/image2.png')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 30,
    color: 'white',
    fontWeight: '',
    textAlign: 'center',
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
  }
});
