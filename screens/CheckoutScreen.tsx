import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { CartItem } from '../components/Cart/CartItem';
import { EvilIcons, Fontisto, Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import tw from "twrnc";

export default function CheckoutScreen({ navigation }: RootTabScreenProps<'Checkout'>) {
    navigation.setOptions({
        headerShown:false,
    })

    const [active,setActive] = useState<'mobile' | 'card'>('mobile')
    const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'airtel' | 'cash'>()

    return (
        <View style={tw`flex-1 w-full h-full overflow-hidden `} >
            <View style={tw`px-2`}>
                <View style={tw`rounded-b-2xl shadow-gray-100 h-[12rem] shadow-green-900 shadow-2xl`}>
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
        
        <View style={tw`mt-20`}>
          <Pressable onPress={() => setPaymentMethod('mtn')}>
            <View style={tw`flex flex-row items-center mt-5 ${paymentMethod == 'mtn' ? 'bg-gray-200': ''} mx-5`} >
            <Image style={tw`h-20 w-30 bg-white`} source={require("../assets/images/mtn.png")} />
            <Text style={tw`text-lg text-gray-500 ml-8`}>MTN mobile money</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setPaymentMethod('airtel')}>
            <View style={tw`flex flex-row items-center mt-5 ${paymentMethod == 'airtel' ? 'bg-gray-200': ''} mx-5`} >
              <Image style={tw`h-20 w-30 bg-white`} source={require("../assets/images/airtel.jpg")} />
              <Text style={tw`text-lg text-gray-500 ml-8`}>Airtel Money</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setPaymentMethod('cash')}>
            <View style={tw`flex flex-row items-center mt-5 ${paymentMethod == 'cash' ? 'bg-gray-200': ''} mx-5`} >
              <Image style={tw`h-20 w-30 bg-white`} source={require("../assets/images/cash.jpg")} />
              <Text style={tw`text-lg text-gray-500 ml-8`}>Cash</Text>
            </View>
          </Pressable>
        </View>
        <View>

          <View style={tw`mx-5 mt-3`}>
                <Text style={tw`m-4 text-gray-300 text-center`}>
                    We will send you and order details to your email after the successful payment
                </Text>
            <Pressable>
              <View style={tw`bg-green-500 h-13 flex flex-row items-center justify-center rounded-2xl`}>
                {/* @ts-ignore */}
                <Fontisto name="locked" size={24} color="white" />
                <Text style={tw`text-xl font-semibold mx-5 text-white`}>Pay for the Order</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({});