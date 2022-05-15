import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LogoText from '../components/LogoText';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LogoText />
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
