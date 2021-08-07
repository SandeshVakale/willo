import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const PreLoginStack = createNativeStackNavigator();
const PostLoginStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function LoginScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sign Up Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate('PreLogin'), 3000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SplashScreen</Text>
    </View>
  );
}

function PreLogin() {
  return (
    <PreLoginStack.Navigator>
      <PreLoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <PreLoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </PreLoginStack.Navigator>
  );
}

function PostLogin() {
  return (
    <PostLoginStack.Navigator>
      <PostLoginStack.Screen name="HomeScreen" component={HomeScreen} />
    </PostLoginStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />
        <AppStack.Screen name="PreLogin" component={PreLogin} />
        <AppStack.Screen name="PostLogin" component={PostLogin} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
