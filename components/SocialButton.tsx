//@ts-nocheck
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from './Themed';
import tw from 'twrnc';

export default function SocialButton({
  iconName,
  iconText,
  color,
}: {
  iconName: string;
  iconText: string;
  color: string;
}) {
  return (
    <View
      style={tw`flex flex-row border border-gray-200 p-4 w-[89%] pl-6 rounded-md ml-6 mb-4]`}
    >
      {
        <FontAwesome
          name={iconName}
          size={26}
          color={color}
          style={tw`text-blue-500`}
        />
      }
      <Text style={tw`text-base font-bold text-gray-400 pl-15`}>
        {iconText}
      </Text>
    </View>
  );
}
