import React, { useState } from 'react';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import Logo from '../assets/images/colored-logo.svg';
import tw from 'twrnc';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Input from '../components/Input';
import Separator from '../components/Separator';
import SocialButton from '../components/SocialButton';
import { ScrollView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../services/auth';

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  const submitForm = async () => {
    signup({
      firstName,
      lastName,
      mobile: phoneNumber,
      email,
      password,
    })
      .then(async (res) => {
        ToastAndroid.show(
          'Congratulations, you successful signed up',
          ToastAndroid.SHORT
        );
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');

        navigate('Login');
      })
      .catch((error) => console.log('yyyooo', error.response));
  };

  return (
    <View style={tw`h-[100%] bg-[#F7941D]  justify-end items-center`}>
      <ScrollView
        style={tw`h-[85%] mt-32 w-full bg-white rounded-t-[8]`}
        showsVerticalScrollIndicator={false}
      >
        <Logo width="200" height="100" style={tw`self-center`} />
        <View style={tw`justify-around items-center w-full`}>
          <Text style={tw`font-bold text-[#32416E] text-lg`}>Welcome ... </Text>
          <Text style={tw`mt-4 text-[#adacac]`}>
            Please fill in the information
          </Text>
        </View>
        <View style={tw`px-6 py-2`}>
          <Input
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder="First Name"
          />
          <Input
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder="Last Name"
          />
          <Input
            value={email}
            onChangeText={(email) => setEmail(email)}
            Icon={<Feather name="mail" size={24} color="silver" />}
            placeholder="Your Email"
          />

          <Input
            value={phoneNumber}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            Icon={<Feather name="phone" size={24} color="silver" />}
            placeholder="Phone Number"
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
            onPress={submitForm}
          >
            Proceed
          </Button>
          <Separator label={'OR'} />
        </View>

        <View style={tw`flex flex-row justify-center items-center mt-4`}>
          <Text style={tw`text-[#adacac] `}>If you have a PMG account</Text>
        </View>

        <View style={tw`p-5`}>
          <Button
            mode={'contained'}
            style={tw`bg-[#F7941D] w-full p-[10] mt-4 normal-case`}
          >
            Sign In
          </Button>
        </View>

        <View style={tw`flex flex-row items-center justify-center pt-3 pb-10`}>
          <Text style={tw`text-[#adacac] text-center text-sm font-bold`}>
            Already have an account?
          </Text>
          <Text
            style={tw`text-[#F7941D] text-center text-sm font-bold px-2`}
            onPress={() => {
              navigate('Login');
            }}
          >
            Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
