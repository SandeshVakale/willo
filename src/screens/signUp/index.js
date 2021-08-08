import * as React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/logo';
import Input from '../../components/input';

import styles from './styles';
import {useState} from 'react';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Logo />
        <Input
          placeHolderText={'Name'}
          onChangeText={userName => setName(userName)}
          icon={faUser}
          value={name}
          hidden={false}
        />
        <Input
          placeHolderText={'Email'}
          onChangeText={username => setUser(username)}
          icon={faEnvelope}
          value={user}
          hidden={false}
        />
        <Input
          placeHolderText={'Password'}
          onChangeText={pass => setPassword(pass)}
          icon={faLock}
          value={password}
          hidden
        />
      </KeyboardAvoidingView>
      <View style={styles.textContainer}>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <Text>
            Already having a account <Text style={styles.text}>Login</Text>
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default SignUpScreen;
