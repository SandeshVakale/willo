import * as React from 'react';
import {View} from 'react-native';
import Logo from '../../components/logo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate('PreLogin'), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default SplashScreen;
