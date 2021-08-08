/**
 * @author Sandesh VAKALE
 */
import React, {useState, useEffect} from 'react';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, SafeAreaView} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {getCycles} from '../../services/cycles';
import colors from '../../themes/Colors';
import styles from './styles';
/**
 * This screen is for showing List of cycles.
 **/

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const logOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('@login_token');
    navigation.navigate('PreLogin');
  };

  useEffect(() => {
    const cyclesData = async () => {
      const response = await getCycles();
      setData(response);
    };
    cyclesData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Timeline
        listViewContainerStyle={{paddingBottom: 100}}
        data={data}
        circleSize={20}
        circleColor={colors.primary}
        timeContainerStyle={{minWidth: 52}}
        timeStyle={styles.timeStyle}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
      />
      <View style={styles.buttonContainer}>
        <Button loading={loading} text={'Log Out'} onPress={logOut} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
