import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Restaurant } from '../components/Restaurants/Restaurant';
import tw from "twrnc";

export default function RestaurantsScreen({ navigation }: RootTabScreenProps<'Restaurants'>) {
  const restaurant = {
    title: "Choose Kigali",
    image: "../assets/images/food.jpeg",
    description: "World, African, Pizzeria, Coffee"
  }

  return (
    <View style={tw`flex-1 w-full h-full overflow-hidden`}>
      <ScrollView style={tw`w-full py-3 px-6`} alwaysBounceHorizontal={true} alwaysBounceVertical={true}>
        <Text style={tw`text-[16px] text-yellow-500 mb-4`}>Nearby Restaurants</Text>
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((elm, index)=> (
            <Restaurant key={`restaurant#${index}`} restaurant={restaurant}/>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});