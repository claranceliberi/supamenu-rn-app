/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Notification: {
            screens: {
              NotificationScreen: 'notification',
            },
          },
          Restaurants: {
            screens: {
              RestaurantsScreen: 'restaurants',
            },
          },
          Orders: {
            screens: {
              OrdersScreen: 'orders',
            },
          },
          Cart: {
            screens: {
              CartScreen: 'cart',
            },
          },
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          },
          SignUp: {
            screens: {
              SignUpScreen: 'signup',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
