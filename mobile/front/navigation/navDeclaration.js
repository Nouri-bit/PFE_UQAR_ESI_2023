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
function NavDeclaration({route}) {
    const Stack = createNativeStackNavigator();
    var id=route.params.tous
  //console.log(route)
  
    return (
      <Stack.Navigator initialRouteName='all'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="all" component={Declarations} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Trend" component={TrendDec} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="commentaire" initialParams={{tous:id}} component={CommentDec} />
        <Stack.Screen name="Feeds" initialParams={{tous:id}} component={FeedDec} />
         </Stack.Navigator>
    );
    }
export default NavDeclaration;