import {WAxios} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getSignUp = async ({email, password}) => {
  let body = {
    email: email,
    password: password,
  };
  let response;
  let errorRes;
  try {
    response = await WAxios.post('register', body);
    if (response.status === 200 && response?.data?.token) {
      await AsyncStorage.setItem('@login_token', response.data.token);
    }
  } catch (error) {
    errorRes = error.response.data;
  }
  return response?.status === 200 ? true : errorRes;
};
