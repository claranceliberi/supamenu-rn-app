import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

export default function LogoText() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.supaPart}>Supa</Text>
      <Text style={styles.menuPart}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  supaPart: {
    color: '#000000',
    fontSize: 48,
    fontWeight: 'bold',
  },
  menuPart: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
