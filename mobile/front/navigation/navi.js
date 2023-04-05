import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Myprofile from '../screens/profile/myprofile';
import Signup from '../screens/auth/signup/signup';
import Login from '../screens/auth/login/login';


function Navi() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Posts} />
        <Stack.Screen name="Details" component={Signup} />
        <Stack.Screen name="Profile" component={Myprofile} />
      </Stack.Navigator>
    </NavigationContainer>
    );
    }
export default Navi;