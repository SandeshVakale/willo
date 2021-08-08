/**
 * @author Sandesh VAKALE
 */
import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
/**
 * This component is for Button.
 *
 * @param {function} onPress is required for button function in component.
 * @param {string} text is required for label of the button.
 * @param {boolean} loading is required to show loading indicator.
 */

const Button = ({onPress, text, loading}) => {
  return (
    <View style={{alignItems: 'center', padding: 4}}>
      <TouchableNativeFeedback onPress={onPress} disabled={loading}>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator style={styles.indicator} />
          ) : (
            <Text style={styles.text}>{text}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Button;
