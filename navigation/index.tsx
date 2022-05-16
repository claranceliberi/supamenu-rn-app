/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, AntDesign,Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import tw from 'twrnc';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const isRouteActive = (activeRoute: string,state:NavigationState) => {
    const indexOfActiveRoute = state.routeNames.indexOf(activeRoute);
    return indexOfActiveRoute !== -1 && state.index === indexOfActiveRoute;
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation ,route}: RootTabScreenProps<'Home'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name,navigation.getState());
            return <View style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${a ? 'bg-orange-100 ': ''}`}>
              {/* @ts-ignore */}
              <AntDesign name="home" size={24} color={a ? "orange" : "black"} />
            </View>
          },
        })}
      />
      <BottomTab.Screen
        name="Notification"
        component={TabTwoScreen}
        options={({ navigation ,route}: RootTabScreenProps<'Notification'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name,navigation.getState());
            return <View style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${a ? 'bg-orange-100 ': ''}`}>
              {/* @ts-ignore */}
              <Ionicons name="notifications-outline" size={24} color={a ? "orange" : "black"} />
            </View>
          },
        })}
      />
      
       <BottomTab.Screen
        name="Restaurants"
        component={TabTwoScreen}
        options={({ navigation ,route}: RootTabScreenProps<'Restaurants'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name,navigation.getState());
            return <View style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${a ? 'bg-orange-100 ': ''}`}>
              {/* @ts-ignore */}
              <AntDesign name="inbox"  size={24} color={a ? "orange" : "black"} />
            </View>
          },
        })}
      />
      
       <BottomTab.Screen
        name="Orders"
        component={TabTwoScreen}
        options={({ navigation ,route}: RootTabScreenProps<'Orders'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name,navigation.getState());
            return <View style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${a ? 'bg-orange-100 ': ''}`}>
              {/* @ts-ignore */}
              <Entypo name="back-in-time" size={24} color={a ? "orange" : "black"} />
            </View>
          },
        })}
      />
      
       <BottomTab.Screen
        name="Cart"
        component={TabTwoScreen}
        options={({ navigation ,route}: RootTabScreenProps<'Cart'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name,navigation.getState());
            return <View style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${a ? 'bg-orange-100 ': ''}`}>
              {/* @ts-ignore */}
              <AntDesign name="shoppingcart" size={24} color={a ? "orange" : "black"} />
            </View>
          },
        })}
      /> 
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
