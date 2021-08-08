import * as React from 'react';
import {BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';
import {useEffect} from 'react';

const PreLoginStack = createNativeStackNavigator();
const PostLoginStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function PreLogin() {
  return (
    <PreLoginStack.Navigator screenOptions={{gestureEnabled: false}}>
      <PreLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <PreLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </PreLoginStack.Navigator>
  );
}

function PostLogin() {
  return (
    <PostLoginStack.Navigator screenOptions={{gestureEnabled: false}}>
      <PostLoginStack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </PostLoginStack.Navigator>
  );
}

export default function Navigation() {
  const handleBackButton = () => {
    console.log('Back button is pressed');
    return true;
  };

  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => null;
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
        <AppStack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <AppStack.Screen
          options={{
            headerShown: false,
          }}
          name="PreLogin"
          component={PreLogin}
        />
        <AppStack.Screen
          options={{
            headerShown: false,
          }}
          name="PostLogin"
          component={PostLogin}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
