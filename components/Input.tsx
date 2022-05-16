import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';

interface InputProps {
  Icon: JSX.Element;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (_value: string) => void;
}

const Input = ({
  Icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <View
      style={tw`w-full mt-2 flex-row border p-4 rounded-[2] border-gray-200`}
    >
      {Icon}
      <TextInput
        placeholder={placeholder}
        style={tw`ml-2`}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default Input;
