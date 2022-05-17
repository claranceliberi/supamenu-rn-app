import React from 'react';
import { Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from "../Themed";
import tw from "twrnc";

type ItemType = {
    title: string;
    image: string;
    quantity: number;
    amount: number;
    description: string;
}

export const CartItem = ({ product }: {product: ItemType})=> {
    return (
        <View style={tw`w-full h-auto flex flex-row items-center mb-2 px-3 py-1 bg-gray-100 rounded-lg`}>
            <Image source={require("../../assets/images/food.jpeg")} style={tw`w-12 h-12 rounded-lg`}/>
            <View style={tw`w-2 bg-transparent`}/>
            <View style={tw`w-10/12 bg-transparent pr-1 pb-1`}>
                <Text style={tw`m-1 text-gray-500 text-[3]`}>{product.description}</Text>
                <Text style={tw`text-black text[3] font-bold`}>{product.title}</Text>
                <View style={tw`w-full flex flex-row justify-between items-center bg-transparent mt-2`}>
                    <Text style={tw`text-orange-500 font-bold`}>Frw {product.amount}</Text>
                    <View  style={tw`w-auto flex flex-row items-center bg-white rounded`}>
                        <TouchableOpacity onPress={()=> {}} style={tw`inline`}>
                            <AntDesign name="minus" size={16} style={tw`inline text-orange-500 p-1`}/>
                        </TouchableOpacity>
                        <Text  style={tw`inline text-black bg-transparent px-2`}>{product.quantity}</Text>
                        <TouchableOpacity onPress={()=> {}} style={tw`inline`}>
                            <AntDesign name="plus" size={16} style={tw`text-orange-500 p-1`}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}