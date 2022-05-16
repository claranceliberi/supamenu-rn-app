import React from 'react';
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import tw from "twrnc";

type Restaurant = {
    title: string;
    image: string;
    description: string;
}

export const Restaurant = ({restaurant}: {restaurant: Restaurant})=> {
    return (
        <TouchableOpacity style={tw`w-full h-auto flex flex-row mb-4 px-3 py-3 bg-gray-100 rounded-lg`}>
            <Image source={require("../../assets/images/food.jpeg")} style={tw`w-16 h-16 rounded-lg`}/>
            <View style={tw`w-2 bg-transparent`}/>
            <View style={tw`w-8/12 bg-transparent`}>
                <Text style={tw`text-black text-md font-bold`}>{restaurant.title}</Text>
                <Text style={tw`mt-2 text-gray-500`}>{restaurant.description}</Text>
            </View>
        </TouchableOpacity>
    );
}