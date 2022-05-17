import axios, { AxiosResponse } from 'axios';
import { LoginResponse, Response, SignIn, Signup } from '../types';

const url = 'http://196.223.240.154:8099/supapp/api';

export async function signup(signUpInfo: Signup): Promise<Response<void>> {
  return await axios.post(`${url}/auth/client/signup`, signUpInfo);
}

export async function signin(
  signInInfo: SignIn
): Promise<Response<LoginResponse>> {
  return await axios.post(`${url}/auth/signin`, signInInfo);
}
