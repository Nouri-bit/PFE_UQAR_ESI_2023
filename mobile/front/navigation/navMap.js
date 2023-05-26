import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Myprofile from '../screens/profile/myprofile';
import Signup from '../screens/auth/signup/signup';
import Login from '../screens/auth/login/login';
import Posts from '../screens/profile/posts';
import { Dimensions, Image, Platform, StyleSheet,  TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { useRef } from 'react';
import Animated from 'react-native-reanimated';
import Comment from '../screens/profile/comment';
import Feed from '../screens/profile/Feed';
import Newpost from '../screens/profile/newpost';
import Maps from '../screens/profile/maps';
import MapsProbleme from '../screens/profile/mapsProbleme';
import MapsSuggestion from '../screens/profile/mapsSuggestion';
import MapsCompliment from '../screens/profile/mapsCompliment';
import MapsExperience from '../screens/profile/mapsExperience';
import Calendar from '../screens/profile/calendar';
import Cal from '../screens/profile/cal';
function NavMap({route}) {
    const Stack = createNativeStackNavigator();
    var id=route.params.tous
  
    return (
      <Stack.Navigator initialRouteName='cal'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Calendar" component={Calendar} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="allmap" component={Maps} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="mapProblèmes" component={MapsProbleme} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="mapSuggestions" component={MapsSuggestion} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="mapCompliments" component={MapsCompliment} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="mapExpériences" component={MapsExperience} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="cal" component={Cal} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        
         </Stack.Navigator>
    );
    }
export default NavMap;