import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, Image, Platform, StyleSheet,  TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { useRef } from 'react';
import Declarations from '../screens/profile/declarations';
import TrendDec from '../screens/profile/TrendDec';
import CommentDec from '../screens/profile/commentDec';
import FeedDec from '../screens/profile/FeedDec';
function NavDeclaration() {
    const Stack = createNativeStackNavigator();
    
  
  
    return (
      <Stack.Navigator initialRouteName='all'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="all" component={Declarations} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Trend" component={TrendDec} options={{gestureEnabled: false}}/>
        <Stack.Screen name="commentaire" component={CommentDec} />
        <Stack.Screen name="Feeds" component={FeedDec} />
         </Stack.Navigator>
    );
    }
export default NavDeclaration;