/**
 * @format
 */

import 'react-native';
import React from 'react';
import Logo from '../src/components/logo';
import Button from '../src/components/button';
import Input from '../src/components/input';

import {faLock} from '@fortawesome/free-solid-svg-icons';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
it('Logo renders correctly', () => {
  renderer.create(<Logo />);
});
it('Button renders correctly', () => {
  renderer.create(
    <Button
      loading={false}
      text={'Hi there'}
      onPress={() => console.log('hi')}
    />,
  );
});
it('Input renders correctly', () => {
  renderer.create(
    <Input
      placeHolderText={'placeholder'}
      onChangeText={() => console.log('change text')}
      icon={faLock}
    />,
  );
});
