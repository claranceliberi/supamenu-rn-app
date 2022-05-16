import React, { useState } from 'react';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import Logo from '../assets/images/colored-logo.svg';
import tw from 'twrnc';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Input from '../components/Input';
import Separator from '../components/Separator';
import SocialButton from '../components/SocialButton';
import { ScrollView } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={tw`h-[100%] bg-[#F7941D]  justify-end items-center`}>
      <ScrollView
        style={tw`h-[85%] mt-32 w-full bg-white rounded-t-[8]`}
        showsVerticalScrollIndicator={false}
      >
        <Logo width="200" height="100" style={tw`self-center`} />
        <View style={tw`justify-around items-center w-full`}>
          <Text style={tw`font-bold text-[#32416E] text-lg`}>Welcome ... </Text>
          <Text style={tw`mt-4 text-[#adacac]`}>Sign in to continue</Text>
        </View>
        <View style={tw`px-6 py-2`}>
          <Input
            value={email}
            onChangeText={(email) => setEmail(email)}
            Icon={<Feather name="mail" size={24} color="silver" />}
            placeholder="Your Email"
          />

          <Input
            value={password}
            onChangeText={(password) => setPassword(password)}
            Icon={<Feather name="lock" size={24} color="silver" />}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Button
            mode={'contained'}
            style={tw`bg-[#F7941D] w-full p-[10] mt-4 normal-case`}
          >
            Sign In
          </Button>
          <Separator label={'OR'} />
        </View>

        <SocialButton
          color="red"
          iconName={'google'}
          iconText={'Login with Google'}
        />
        <SocialButton
          color="blue"
          iconName={'facebook'}
          iconText={'Login with Facebook'}
        />

        <Text style={tw`text-[#F7941D] text-center text-sm font-bold p-5`}>
          Forgot Password?
        </Text>
        <View style={tw`flex flex-row items-center justify-center pt-3 pb-10`}>
          <Text style={tw`text-[#adacac] text-center text-sm font-bold`}>
            Don't have an account?
          </Text>
          <Text style={tw`text-[#F7941D] text-center text-sm font-bold px-2`}>
            Register
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
