import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {Image} from 'react-native'
import { RootTabScreenProps } from '../types';
import image from '../assets/images/image.png'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: 250, height: 150, marginBottom : 50}} />
      <Text style={styles.title}>Payment success, Yayy! </Text>
      <Text style={styles.mainText} >we will send order details and invoice in your contact no. and registered email</Text>
      <Text style={{color: 'orange', marginTop: 30, fontSize: 14}} >Check details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mainText:{
    color: 'white',
    marginRight: 60,
    marginLeft:  60,
  },
});
