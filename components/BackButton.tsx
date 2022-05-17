import React from 'react';
import { TouchableOpacity } from "react-native";
import { AntDesign} from '@expo/vector-icons';
import tw from "twrnc";
import { CompositeNavigationProp } from '@react-navigation/native';

type PropType = {
    color: string;
    navigation: CompositeNavigationProp<any, any>;
}

export default function BackButton({color, navigation}: PropType){
    return (
        <TouchableOpacity onPress={()=> navigation.goBack()} style={tw`flex justify-center bg-gray-100 rounded-md ml-3 p-2`}>
            <AntDesign name="left" size={16} style={tw`text-${color}-600`}/>
        </TouchableOpacity>
    );
}