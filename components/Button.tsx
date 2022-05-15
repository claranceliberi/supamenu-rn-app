import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Themed';

export default function Button({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    borderRadius: 5,
    height: 50,
    margin: '40px auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#F7941D',
  },
});
