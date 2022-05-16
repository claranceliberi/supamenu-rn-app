import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { CartItem } from '../components/Cart/CartItem';
import tw from "twrnc";

export default function CheckoutScreen({ navigation }: RootTabScreenProps<'Checkout'>) {
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
            <View>
                <View>
                <TouchableOpacity onPress={()=> {}} style={tw`w-full flex justify-center items-center bg-green-200 rounded-lg p-3`}>
                    <Ionicons name="chevron-back" size={24} color="green" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});