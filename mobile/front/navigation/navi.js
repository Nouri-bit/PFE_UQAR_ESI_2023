import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/auth/signup/signup';
import Login from '../screens/auth/login/login';
import Posts from '../screens/profile/posts';
import NavBar from '../screens/NavBar';
import Animated from 'react-native-reanimated';
import 'react-native-gesture-handler';
import Restesignup from '../screens/auth/signup/restesignup';
function Navi() {
    const Stack = createNativeStackNavigator();
    
 
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} options={{gestureEnabled: false}}/>
        <Stack.Screen name="NavBar" component={NavBar} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Details" component={Signup} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Reste" component={Restesignup} options={{gestureEnabled: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
    }
export default Navi;