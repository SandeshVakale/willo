/**
 * @author Sandesh VAKALE
 */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import colors from '../../themes/Colors';

/**
 * This component is for to accept text input.
 *
 * @param {string} placeHolderText is required for placeHolder in component.
 * @param {object} icon icon is used at start of component. and you need to pass icon from font awesome.
 * @param {boolean} hidden hidden is taking boolean input and it is default true. It is used for password input.
 * @param {function} onChangeText is must.
 * @param {string} keyType is a type of the keyboard.
 * @param {string} value is a string in input.
 */
const Input = ({
  placeHolderText,
  icon,
  hidden,
  onChangeText,
  keyType,
  value,
}) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    value === '' && setText('');
  }, [value]);
  return (
    <View style={{alignItems: 'center', padding: 4}}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesomeIcon size={28} icon={icon} color={colors.primary} />
        </View>
        <View style={styles.line} />
        <TextInput
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          secureTextEntry={hidden}
          placeholder={placeHolderText}
          autoCorrect={false}
          keyboardType={keyType}
          style={styles.input}
          onChangeText={str => {
            onChangeText(str);
            setText({str});
          }}
          value={text}
        />
      </View>
    </View>
  );
};

Input.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  hidden: PropTypes.bool,
  keyType: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
