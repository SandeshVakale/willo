import * as React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/logo';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './styles';
import {useState} from 'react';
import {getLogin} from '../../services/login';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    if (user !== '' && password !== '') {
      const response = await getLogin({email: user, password});
      if (response?.error) {
        setLoading(false);
        Alert.alert(response.error);
      } else {
        setUser('');
        setPassword('');
        navigation.navigate('PostLogin');
        setLoading(false);
      }
    } else {
      Alert.alert('Email and Password both are mandatory');
      setLoading(false);
    }
  };

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
          keyType={'email-address'}
        />
        <Input
          placeHolderText={'Password'}
          onChangeText={pass => setPassword(pass)}
          icon={faLock}
          value={password}
          hidden
        />
        <Button text={'Login'} loading={loading} onPress={login} />
      </KeyboardAvoidingView>
      <View style={styles.textContainer}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text>
            Not having a account? <Text style={styles.text}>Sign Up</Text>
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default LoginScreen;
