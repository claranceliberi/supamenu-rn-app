import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { CartItem } from '../components/Cart/CartItem';
import tw from "twrnc";

export default function CartScreen({ navigation }: RootTabScreenProps<'Restaurants'>) {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Tommy Yummy - 12.5",
            image: "../../assets/images/food.jpeg",
            quantity: 2,
            amount: 5000,
            description: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus"
        },
        {
            id: 2,
            title: "Singapore Sling - 12.5",
            image: "../../assets/images/food.jpeg",
            quantity: 2,
            amount: 5000,
            description: "Gin, Grenadine, Citrus, Cucumber"
        },
        {
            id: 3,
            title: "White Russian - 12.5",
            image: "../../assets/images/food.jpeg",
            quantity: 2,
            amount: 6000,
            description: "Vanilla, Coffee and Chocolate with hints of orange"
        }
    ]);

    return (
        <View style={tw`flex-1 w-full h-full overflow-hidden`}>
            <ScrollView style={tw`w-full pt-2 pb-3 px-6`} alwaysBounceHorizontal={true} alwaysBounceVertical={true}>
                <Text style={tw`text-right text-[5] font-bold`}>Choose Kigali</Text>
                <Text style={tw`text-right text-[5] text-yellow-500 mt-2`}>Drinks</Text>
                <View style={tw`mb-3 mt-3`}>
                    {products.map((product, index)=> (
                        <CartItem key={`item#${index}`} product={product}></CartItem>
                    ))}
                </View>
                <TouchableOpacity onPress={()=> {}} style={tw`flex flex-row justify-center pb-4`}>
                    <Text style={tw`text-orange-500 text-[4]`}>More drinks</Text>
                    <AntDesign name="arrowright" size={24} style={tw`text-orange-500 ml-5`}/>
                </TouchableOpacity>
                <View style={tw`flex flex-row justify-between pb-4`}>
                    <Text style={tw`text-black text-[4] font-bold`}>Total</Text>
                    <Text style={tw`text-orange-500 text-[4] font-bold`}>Frw 16,000</Text>
                </View>
                <TouchableOpacity onPress={()=> {}} style={tw`w-full flex justify-center items-center bg-orange-500 rounded-lg py-4 px-3`}>
                    <Text style={tw`text-white font-bold text-[3]`}>Proceed to checkout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});