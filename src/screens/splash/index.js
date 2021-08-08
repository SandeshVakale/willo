import * as React from 'react';
import {View} from 'react-native';
import Logo from '../../components/logo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const isLogin = async () => {
      const res = await AsyncStorage.getItem('@login_token');
      console.log('res', res);
      if (res) {
        navigation.navigate('PostLogin');
      } else {
        navigation.navigate('PreLogin');
      }
    };
    isLogin();
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default SplashScreen;
