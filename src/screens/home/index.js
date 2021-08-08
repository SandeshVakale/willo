/**
 * @author Sandesh VAKALE
 */
import React, {useState, useEffect} from 'react';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import { getCycles } from "../../services/cycles";
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

  useEffect(() => {
    const cyclesData = async () => {
      const response = await getCycles();
      console.log('response', response);
    }
    cyclesData();
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        padding: 4,
        justifyContent: 'center',
      }}>
      <Button loading={loading} text={'Log Out'} onPress={logOut} />
    </View>
  );
};

export default HomeScreen;
