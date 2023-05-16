import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Dimensions, Image, Platform, StyleSheet,  TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Sondages from '../screens/profile/sondages';
import Forms from '../screens/profile/forms';
function NavSondage() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='alls'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="alls" component={Sondages} options={{gestureEnabled: false}}/>
        <Stack.Screen name="forms" component={Forms} options={{gestureEnabled: false}}/>
         </Stack.Navigator>
    );
}

export default NavSondage;