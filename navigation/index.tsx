/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationState,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import tw from 'twrnc';
import BackButton from '../components/BackButton';
import SearchInput from '../components/Restaurants/SearchInput';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import PaymentScreen from '../screens/Payment';
import RatingsScreen from '../screens/Ratings';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
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
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name= "Rate"
        component= {RatingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name= "Cart"
        component = {CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
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
  const isRouteActive = (activeRoute: string, state: NavigationState) => {
    const indexOfActiveRoute = state.routeNames.indexOf(activeRoute);
    return indexOfActiveRoute !== -1 && state.index === indexOfActiveRoute;
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: -1,
          elevation: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          borderTopWidth: 0,
          marginHorizontal: 1,
          paddingHorizontal: 20,
          shadowColor: '#ccc',
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={LandingScreen}
        options={({ navigation, route }: RootTabScreenProps<'Home'>) => ({
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <AntDesign
                  name="home"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Notification"
        component={TabTwoScreen}
        options={({
          navigation,
          route,
        }: RootTabScreenProps<'Notification'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />

      <BottomTab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={({
          navigation,
          route,
        }: RootTabScreenProps<'Restaurants'>) => ({
          title: '',
          headerLeft: ({}) => (
            <BackButton navigation={navigation} color="orange" />
          ),
          headerRight: ({}) => <SearchInput />,
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <AntDesign
                  name="inbox"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />

      <BottomTab.Screen
        name="Orders"
        component={TabTwoScreen}
        options={({ navigation, route }: RootTabScreenProps<'Orders'>) => ({
          title: '',
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <Entypo
                  name="back-in-time"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />

      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation, route }: RootTabScreenProps<'Cart'>) => ({
          title: '',
          headerLeft: ({}) => (
            <BackButton navigation={navigation} color="orange" />
          ),
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation, route }: RootTabScreenProps<'Login'>) => ({
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <AntDesign
                  name="login"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Signup"
        component={SignUpScreen}
        options={({ navigation, route }: RootTabScreenProps<'Signup'>) => ({
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <View
                style={tw`w-9 h-9 flex justify-center items-center rounded-lg ${
                  a ? 'bg-orange-100 ' : ''
                }`}
              >
                {/* @ts-ignore */}
                <AntDesign
                  name="adduser"
                  size={24}
                  color={a ? 'orange' : 'black'}
                />
              </View>
            );
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
