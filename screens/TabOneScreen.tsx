import { EvilIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import tw from "twrnc";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  navigation.setOptions({
    headerShown:false,
  })

  const [active,setActive] = useState<'mobile' | 'card'>('mobile')

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
    <View style={tw`flex-1 w-full h-full overflow-hidden`}>
            <View style={tw`rounded-b-2xl shadow-gray-100 h-[12rem] absolute left-2 right-2 shadow-green-900 shadow-2xl`}>
                <View >
                <TouchableOpacity onPress={()=> {}} style={tw`w-full flex items-start pl-2 pt-4`}>
                    <Ionicons name="chevron-back" size={24} style={tw`bg-green-50 rounded-xl p-3`} color="#22c55e" />
                </TouchableOpacity>
                </View>
                <View style={tw`w-full flex flex-row px-2 justify-between items-center`}>
                  <View style={tw`flex flex-row `}>
                    <Text style={tw`font-bold text-xl`}>Checkout</Text>
                    <EvilIcons name="credit-card" size={24} color="black" />
                  </View>
                  <View style={tw` `}>
                    <Text style={tw`text-green-400 font-bold text-2xl`}>Frw 16,000</Text>
                    <Text style={tw`text-gray-400 text-base`}>Including VAT(18%)</Text>
                  </View>
                </View>
                <View style={tw`mt-10 mx-5 bg-transparent`}>
                  <View style={tw`w-full flex flex-row bg-green-400 rounded-2xl justify-evenly items-center`}>
                    <Pressable style={tw`flex-1`} onPress={() => setActive('card')}>
                      <View style={tw`h-14 flex flex-row items-center rounded-2xl px-2 ${active == 'card' ? '' : 'bg-transparent'}`}>
                        <Text style={tw`text-base font-semibold text-center ${active == 'card' ? '' : 'text-white'}`}>Credit Card</Text>
                      </View>
                    </Pressable>
                    <Pressable style={tw`flex-1`} onPress={() => setActive('mobile')}>
                    <View style={tw`h-14 flex flex-row items-center px-2 rounded-2xl ${active == 'mobile' ? '' : 'bg-transparent'}`}>
                        <Text style={tw`text-base font-semibold text-center ${active == 'mobile' ? '' : 'text-white'}`}>Mobile Money</Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
