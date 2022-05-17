import React from 'react';
import { TextInput } from "react-native";
import tw from "twrnc";

export default function SearchInput(){
    return <TextInput style={tw`w-[100%] text-[4] bg-transparent`} placeholder='Search...'/>;
}