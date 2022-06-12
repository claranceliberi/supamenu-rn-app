import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image } from 'react-native';
import tw from 'twrnc';
import { RootStackScreenProps } from '../types';

export default function SplashScreen({
  navigation,
}: RootStackScreenProps<'Root'>) {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <SafeAreaView
      style={tw`flex flex-col h-full justify-center items-center bg-[#F7941D]`}
    >
      {/* <Logo width="200" height="200" /> */}
      <Image source={require('../assets/images/logo.png')} />
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
