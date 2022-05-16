import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Logo from '../assets/images/logo.svg';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo width="200" height="200" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7941D',
  },
});
