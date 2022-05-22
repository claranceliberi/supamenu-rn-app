import {Rating, AirbnbRating} from 'react-native-ratings'
import React from 'react'
import { View, Text } from '../components/Themed'
import tw from "twrnc"
import { FontAwesome } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { RootTabScreenProps } from '../types';
import {TouchableOpacity} from 'react-native'

 const Ratings=({ navigation }: RootTabScreenProps<'Rate'>)=>{
      navigation.setOptions({
        headerShown:false,
    })

     return(
         <View style={tw`bg-black flex-01`}>
             <TouchableOpacity onPress={() => navigation.navigate('Root',{screen:'Cart'})} style={tw`p-4`}>
             <FontAwesome name="close" size={24} color="white" />
             </TouchableOpacity>
            <Text style={tw`font-semibold text-base text-amber-500 ml-40 mr-20 mt-20`}>Yayy! </Text>
            <Text style={tw`font-semibold text-base text-amber-500 ml-24`}>We value all feedback,</Text>
            <Text style={tw`font-semibold text-base text-amber-500 ml-20`}>please rate your experience</Text>
            <Text style={tw`font-semibold text-base text-center text-amber-500 mb-20`}>below:</Text>
            <Text style={tw`pl-20 pb-20 text-amber-500 `}><AirbnbRating reviews={[""]} size={34} /></Text>
            <Text style={tw`text-amber-500 text-base ml-16 mr-12 font-semibold text-center`} >Thank you for helping us improve our service!</Text>
        <Text style={tw`mt-30 text-4xl font-bold ml-22`}>
            <Text style={tw`text-white `}>Supa</Text>
            <Text style={tw`text-amber-500`}>Menu</Text>
      </Text>
         </View>
     )
 }

 export default Ratings;