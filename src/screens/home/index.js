/**
 * @author Sandesh VAKALE
 */
import React, {useState} from 'react';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * This component is for showing logo.
 **/

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const logOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('@login_token');
    navigation.goBack();
  };

  return <Button loading={loading} text={'Log Out'} onPress={logOut} />;
};

export default HomeScreen;
