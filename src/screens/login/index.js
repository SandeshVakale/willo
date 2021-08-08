import * as React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/logo';
import Input from '../../components/input';

import styles from './styles';
import {useState} from 'react';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Logo />
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
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text>
            Not having a account <Text style={styles.text}>Sign Up</Text>
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default LoginScreen;
