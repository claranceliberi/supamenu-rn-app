import React from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';

export default function Separator({ label }: { label: string }) {
  return (
    <View style={tw`flex flex-row justify-center p-5 items-center`}>
      <View style={tw`h-[0.7px] w-32 bg-[#CAD0DA]`}></View>
      <Text style={tw`px-4 text-[#CAD0DA] font-bold`}>{label}</Text>
      <View style={tw`h-[0.7px] w-32 bg-[#CAD0DA]`}></View>
    </View>
  );
}
