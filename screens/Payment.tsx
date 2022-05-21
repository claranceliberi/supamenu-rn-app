import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {Image} from 'react-native'
import { RootTabScreenProps } from '../types';
import image from '../assets/images/image.png';
import { AntDesign } from '@expo/vector-icons'; 
import tw from "twrnc";

export default function Payment({ navigation }: RootTabScreenProps<'Payment'>) {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: 300, height: 300, marginBottom : 50, marginTop: -100}} />
      <Text style={styles.title}>Payment success, Yayy! </Text>
      <Text style={styles.mainText} >we will send order details and invoice in your contact no. and registered email</Text>
      <Text style={tw`text-orange-300 text-xl font-semibold`} >Check details  </Text>
      <Text style={tw`pl-40 -mt-6 mb-10`} ><AntDesign name="arrowright" size={30} style={tw`text-orange-300`} /></Text> 
      <Text style={tw`bg-amber-500 border border-amber-500 rounded-lg w-72 h-18 p-4`}>
        <Text style={tw`font-semibold text-2xl text-center text-white ml-6`}>Download Invoice</Text>
        </Text>
      <Text style={tw`mt-10 text-5xl font-bold`}>
        <Text style={tw`text-white `}>Supa</Text>
        <Text style={tw`text-amber-500`} >Menu</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mainText:{
    color: 'white',
    marginRight: 60,
    marginLeft:  60,
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center'
  },
});
