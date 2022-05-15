import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import Logo from '../assets/images/colored-logo.svg';

export default function LoginScreen() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Logo width="200" height="200" style={styles.logo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={fullName}
          placeholder="Full Name"
          placeholderTextColor="#929BB2"
          onChangeText={(fullName) => setFullName(fullName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={phoneNumber}
          placeholder="Phone Number"
          placeholderTextColor="#929BB2"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email"
          placeholderTextColor="#929BB2"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="Password"
          placeholderTextColor="#929BB2"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* <Button onPress={() => {}} label={'Proceed'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  inputView: {
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,
    // alignItems: 'flex-start',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
