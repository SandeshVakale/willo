/**
 * @author Sandesh VAKALE
 */
import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {Images} from '../../themes';
/**
 * This component is for showing logo.
 **/

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} />
    </View>
  );
};

export default Logo;
