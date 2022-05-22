/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  Checkout: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Notification: undefined;
  Restaurants: undefined;
  Orders: undefined;
  Cart: undefined;
  Logout: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Signup = {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
};

export type SignIn = {
  login: string;
  password: string;
};

export type Response<T = unknown> = {
  data: T;
  status: string;
  message: string;
  success: boolean;
};

type TokenResponse = {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  expiresInMsec: number;
};

export type LoginResponse = {
  token: TokenResponse;
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  mobile: string;
  email: string;
  status: AccountStatus;
  authorities: {
    authority: RoleEnum;
  }[];
};

enum AccountStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  SUSPENDED = 'SUSPENDED',
  EXPIRED = 'EXPIRED',
  RESET = 'RESET',
  CLOSED = 'CLOSED',
  PLAYED = 'PLAYED',
  FULL = 'FULL',
}

enum RoleEnum {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_CUSTOMER = 'ROLE_CUSTOMER',
  SERVICE_PROVIDER = 'SERVICE_PROVIDER',
}
