import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, Image, Platform, StyleSheet,  TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Sondages from '../screens/profile/sondages';
import Forms from '../screens/profile/forms';
import Myprofile from '../screens/profile/myprofile';
import Newpost from '../screens/profile/newpost';
function NavProfile({navigation, route}) {
    //console.log(route)
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="post" screenOptions={{ headerShown:false}}>
        <Stack.Screen name="post" component={Newpost} options={{ gestureEnabled: false}}/>
        <Stack.Screen name="mine" component={Myprofile}  options={{gestureEnabled: false}}/>
         </Stack.Navigator>
    );
}

export default NavProfile;