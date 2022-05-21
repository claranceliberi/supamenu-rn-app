import {AirbnbRating} from'react-native-elements'
import React from 'react'
import { View, Text } from '../components/Themed'
import tw from "twrnc"

 const Rating=()=>{
     return(
         <View>
             <Text style={tw`text-amber-500`} >
                 <Text>Yayy!</Text>
                 <Text>We value all feedback, please rate your experience below</Text>
             </Text>
            <AirbnbRating/>
            <Text style={tw`text-amber-500`} >Thank you for helping us improve our service</Text>
             <Text style={tw`mt-10 text-5xl font-bold`}>
        <Text style={tw`text-white `}>Supa</Text>
        <Text style={tw`text-amber-500`} >Menu</Text>
      </Text>
         </View>
     )
 }